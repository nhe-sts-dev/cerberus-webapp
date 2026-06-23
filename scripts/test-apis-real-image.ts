// Run via: pnpm exec tsx --env-file=.env scripts/test-apis-real-image.ts

import { db } from "../src/server/db";
import * as fs from 'fs';
import * as path from 'path';

// --- STRICT TYPES FOR API RESPONSES ---
type CameraUploadResponse = { success?: boolean; imageId?: string; error?: string };
type InferenceResponse = { success?: boolean; imageId?: string; inferenceId?: string; error?: string };
type TransponderResponse = { success?: boolean; matchedImageId?: string; message?: string; error?: string };

const BASE_URL = "https://project-560xk.vercel.app";
const CAMERA_SECRET = process.env.CAMERA_SECRET_KEY ?? "super-secret-axis-key-123";
const TRANSPONDER_SECRET = process.env.TRANSPONDER_SECRET_KEY ?? "super-secret-axis-key-123";

const colors = { green: "\x1b[32m", red: "\x1b[31m", blue: "\x1b[34m", reset: "\x1b[0m" };

function getMockFile(type: "clean" | "dirty" | "dummy" = "dirty"): Blob {
  if (type === "clean" || type === "dirty") {
    const filePath = path.join(process.cwd(), `public/test-images/${type}_bus.jpg`);
    if (fs.existsSync(filePath)) {
      const fileBuffer = fs.readFileSync(filePath);
      return new Blob([fileBuffer], { type: "image/jpeg" });
    } else {
      console.warn(`\n⚠️  WARNING: Could not find ${filePath}. Falling back to dummy buffer.`);
    }
  }
  return new Blob(["fake_image_data_buffer"], { type: "image/jpeg" });
}

async function runTest(testName: string, testFunc: () => Promise<[boolean, string]>) {
  process.stdout.write(`Running: ${testName}... `);
  const startTime = Date.now();
  try {
    const [passed, message] = await testFunc();
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    if (passed) {
      console.log(`${colors.green}[PASS]${colors.reset} (${duration}s) - ${message}`);
      return true;
    } else {
      console.log(`${colors.red}[FAIL]${colors.reset} (${duration}s) - ${message}`);
      return false;
    }
  } catch (error: unknown) {
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    const message = error instanceof Error ? error.message : String(error);
    console.log(`${colors.red}[ERROR]${colors.reset} (${duration}s) - Exception: ${message}`);
    return false;
  }
}

async function main() {
  console.log(`Starting Stress Tests for: ${BASE_URL}`);
  console.log("-".repeat(80));

  // --- SETUP: Find your actual trained model in the database ---
  const targetModel = await db.modelRegistry.findFirst({
    where: { 
      status: "EXPERIMENTAL", // NOTE: Change this to PRODUCTION later when you update the API
      weightsUrl: { not: null } // Ensure it actually has a TFLite file to run!
    },
    orderBy: { createdAt: "desc" }
  });

  if (!targetModel) {
    console.error(`${colors.red}CRITICAL ERROR: No EXPERIMENTAL model with a weightsUrl found in Neon DB!${colors.reset}`);
    console.error("Please run your ML training pipeline first to push a model to the registry.");
    process.exit(1);
  }

  console.log(`✅ Using Real Model for Tests: ${colors.blue}${targetModel.name} (v${targetModel.version})${colors.reset}\n`);

  const tests = [
    // --- 1. BASIC VALIDATION TESTS ---
    {
      name: "Upload API - Reject Missing File",
      fn: async (): Promise<[boolean, string]> => {
        const formData = new FormData();
        formData.append("cameraId", "Test-Cam"); 
        formData.append("timestamp", new Date().toISOString());
        const res = await fetch(`${BASE_URL}/api/camera/upload`, {
          method: "POST", headers: { Authorization: `Bearer ${CAMERA_SECRET}` }, body: formData
        });
        return res.status === 400 ? [true, "Correctly rejected missing file"] : [false, `Got ${res.status}`];
      }
    },
    {
      name: "Inference API - Successful Inference Logging",
      fn: async (): Promise<[boolean, string]> => {
        const formData = new FormData();
        formData.append("file", getMockFile("dirty"), "test.jpg");
        formData.append("cameraId", "Test-Inference-Cam");
        formData.append("timestamp", new Date().toISOString());
        formData.append("modelId", targetModel.id); 
        formData.append("label", "DIRTY");
        formData.append("confidence", "88");

        const res = await fetch(`${BASE_URL}/api/camera/inference`, {
          method: "POST", headers: { Authorization: `Bearer ${CAMERA_SECRET}` }, body: formData
        });
        const json = await res.json() as InferenceResponse;
        return res.status === 200 && json.inferenceId 
          ? [true, `Inference logged successfully. ID: ${json.inferenceId}`] 
          : [false, `Failed: ${JSON.stringify(json)}`];
      }
    },
    {
      name: "Transponder API - Reject Invalid Time",
      fn: async (): Promise<[boolean, string]> => {
        const res = await fetch(`${BASE_URL}/api/transponder`, {
          method: "POST",
          headers: { Authorization: `Bearer ${TRANSPONDER_SECRET}`, "Content-Type": "application/json" },
          body: JSON.stringify({ fleetNumber: "BUS-101", timestamp: "not-a-real-date" })
        });
        return res.status === 400 ? [true, "Caught bad timestamp"] : [false, `Got ${res.status}`];
      }
    },

    // --- 2. RACE CONDITIONS & DELAYS ---
    {
      name: "Race Condition A - Transponder arrives 1 sec BEFORE Camera",
      fn: async (): Promise<[boolean, string]> => {
        await db.busImage.deleteMany({ where: { cameraId: { in: ["Test-Upload-Cam", "Test-Inference-Cam"] } } });

        const transponderTime = new Date().toISOString();
        await fetch(`${BASE_URL}/api/transponder`, {
          method: "POST", headers: { Authorization: `Bearer ${TRANSPONDER_SECRET}`, "Content-Type": "application/json" },
          body: JSON.stringify({ fleetNumber: "RACE-BUS-A", timestamp: transponderTime, gateId: "Test-Gate" })
        });

        await new Promise(r => setTimeout(r, 1000));

        const cameraTime = new Date().toISOString(); 
        const fd = new FormData();
        fd.append("file", getMockFile("dirty"), "test.jpg");
        fd.append("cameraId", "Test-Cam-A");
        fd.append("timestamp", cameraTime);

        const camRes = await fetch(`${BASE_URL}/api/camera/upload`, {
          method: "POST", headers: { Authorization: `Bearer ${CAMERA_SECRET}` }, body: fd
        });
        const camJson = await camRes.json() as CameraUploadResponse;

        if (!camJson.imageId) return [false, "Camera failed to return imageId"];
        const img = await db.busImage.findUnique({ where: { id: camJson.imageId }});
        return img?.fleetNumber === "RACE-BUS-A" ? [true, "Successfully linked asynchronously"] : [false, "Failed to link"];
      }
    },
    {
      name: "Race Condition B - Camera arrives 1 sec BEFORE Transponder",
      fn: async (): Promise<[boolean, string]> => {
        const cameraTime = new Date().toISOString();
        
        const fd = new FormData();
        fd.append("file", getMockFile("dirty"), "test.jpg");
        fd.append("cameraId", "Test-Cam-B");
        fd.append("timestamp", cameraTime);
        await fetch(`${BASE_URL}/api/camera/upload`, {
          method: "POST", headers: { Authorization: `Bearer ${CAMERA_SECRET}` }, body: fd
        });

        await new Promise(r => setTimeout(r, 1000));

        const transponderTime = new Date().toISOString();
        const transRes = await fetch(`${BASE_URL}/api/transponder`, {
          method: "POST", headers: { Authorization: `Bearer ${TRANSPONDER_SECRET}`, "Content-Type": "application/json" },
          body: JSON.stringify({ fleetNumber: "RACE-BUS-B", timestamp: transponderTime, gateId: "Test-Gate" })
        });
        const transJson = await transRes.json() as TransponderResponse;

        if (!transJson.matchedImageId) return [false, "Transponder failed to return matchedImageId"];
        const img = await db.busImage.findUnique({ where: { id: transJson.matchedImageId }});
        return img?.fleetNumber === "RACE-BUS-B" ? [true, "Reverse match successful"] : [false, "Failed to reverse link"];
      }
    },
    {
      name: "Race Condition C - Simultaneous Impact (The 10-Second Test)",
      fn: async (): Promise<[boolean, string]> => {
        const timestamp = new Date().toISOString(); 
        const fd = new FormData();
        fd.append("file", getMockFile("clean"), "test.jpg");
        fd.append("cameraId", "Test-Cam-C");
        fd.append("timestamp", timestamp);

        const p1 = fetch(`${BASE_URL}/api/transponder`, {
          method: "POST", headers: { Authorization: `Bearer ${TRANSPONDER_SECRET}`, "Content-Type": "application/json" },
          body: JSON.stringify({ fleetNumber: "RACE-BUS-C", timestamp, gateId: "Test-Gate" })
        });
        const p2 = fetch(`${BASE_URL}/api/camera/upload`, {
          method: "POST", headers: { Authorization: `Bearer ${CAMERA_SECRET}` }, body: fd
        });

        await Promise.all([p1, p2]);

        const img = await db.busImage.findFirst({ where: { fleetNumber: "RACE-BUS-C" }});
        return img ? [true, "Simultaneous match successful via delay buffer"] : [false, "Collision resulted in failure"];
      }
    },
    {
      name: "Race Condition D - Inference API & Transponder Simultaneous",
      fn: async (): Promise<[boolean, string]> => {
        const timestamp = new Date().toISOString();
        const fd = new FormData();
        fd.append("file", getMockFile("dirty"), "test.jpg");
        fd.append("cameraId", "Test-Cam-Inf-Race");
        fd.append("timestamp", timestamp);
        fd.append("modelId", targetModel.id);
        fd.append("label", "DIRTY");
        fd.append("confidence", "92");

        const p1 = fetch(`${BASE_URL}/api/transponder`, {
          method: "POST", headers: { Authorization: `Bearer ${TRANSPONDER_SECRET}`, "Content-Type": "application/json" },
          body: JSON.stringify({ fleetNumber: "RACE-BUS-INF", timestamp, gateId: "Test-Gate" })
        });
        const p2 = fetch(`${BASE_URL}/api/camera/inference`, {
          method: "POST", headers: { Authorization: `Bearer ${CAMERA_SECRET}` }, body: fd
        });

        await Promise.all([p1, p2]);

        const img = await db.busImage.findFirst({ where: { fleetNumber: "RACE-BUS-INF" }});
        return img ? [true, "Matched during Inference payload successfully"] : [false, "Failed Inference simultaneous match"];
      }
    },

    // --- 3. REAL-WORLD PERMUTATIONS ---
    {
      name: "Permutation: Tailgating Buses (Closest Match Wins)",
      fn: async (): Promise<[boolean, string]> => {
        const now = Date.now();
        const timeLeader = new Date(now - 45000).toISOString(); 
        const timeFollower = new Date(now).toISOString(); 

        await fetch(`${BASE_URL}/api/transponder`, {
          method: "POST", headers: { Authorization: `Bearer ${TRANSPONDER_SECRET}`, "Content-Type": "application/json" },
          body: JSON.stringify({ fleetNumber: "TAILGATE-LEADER", timestamp: timeLeader, gateId: "Test-Gate" })
        });

        await fetch(`${BASE_URL}/api/transponder`, {
          method: "POST", headers: { Authorization: `Bearer ${TRANSPONDER_SECRET}`, "Content-Type": "application/json" },
          body: JSON.stringify({ fleetNumber: "TAILGATE-FOLLOWER", timestamp: timeFollower, gateId: "Test-Gate" })
        });

        const fd = new FormData();
        fd.append("file", getMockFile("dirty"), "test.jpg");
        fd.append("cameraId", "Test-Cam-Tailgate");
        fd.append("timestamp", timeFollower); 

        const camRes = await fetch(`${BASE_URL}/api/camera/upload`, {
          method: "POST", headers: { Authorization: `Bearer ${CAMERA_SECRET}` }, body: fd
        });
        const camJson = await camRes.json() as CameraUploadResponse;

        const img = await db.busImage.findUnique({ where: { id: camJson.imageId }});
        if (img?.fleetNumber === "TAILGATE-FOLLOWER") {
          return [true, "Successfully grabbed the most recent ping (Follower)"];
        }
        return [false, `Grabbed wrong bus: ${img?.fleetNumber}`];
      }
    },
    {
      name: "Permutation: Out of Bounds (>60s delay should NOT match)",
      fn: async (): Promise<[boolean, string]> => {

        await db.transponderLog.deleteMany({ where: { gateId: "Test-Gate" } });
        const timeTooOld = new Date(Date.now() - 65000).toISOString(); 

        await fetch(`${BASE_URL}/api/transponder`, {
          method: "POST", headers: { Authorization: `Bearer ${TRANSPONDER_SECRET}`, "Content-Type": "application/json" },
          body: JSON.stringify({ fleetNumber: "GHOST-BUS", timestamp: timeTooOld, gateId: "Test-Gate" })
        });

        const fd = new FormData();
        fd.append("file", getMockFile("clean"), "test.jpg");
        fd.append("cameraId", "Test-Cam-Ghost");
        fd.append("timestamp", new Date().toISOString());

        const camRes = await fetch(`${BASE_URL}/api/camera/upload`, {
          method: "POST", headers: { Authorization: `Bearer ${CAMERA_SECRET}` }, body: fd
        });
        const camJson = await camRes.json() as CameraUploadResponse;

        const img = await db.busImage.findUnique({ where: { id: camJson.imageId }});
        return img?.fleetNumber === null ? [true, "Correctly ignored the expired transponder ping"] : [false, `Matched illegally to ${img?.fleetNumber}`];
      }
    }
  ];

  let passedCount = 0;
  for (const test of tests) {
    if (await runTest(test.name, test.fn)) passedCount++;
  }

  console.log("-".repeat(80));
  console.log(`TEST SUMMARY: ${passedCount}/${tests.length} Tests Passed`);

  // --- TEARDOWN ---
  console.log(`\n${colors.blue}Cleaning up test data from Neon DB...${colors.reset}`);
  
  // NOTE: We no longer delete `targetModel` here because it's your real production/experimental data!
  
  // Find all the dummy images we just created
  const testImages = await db.busImage.findMany({
    where: { cameraId: { startsWith: "Test-" } },
    select: { id: true }
  });
  const testImageIds = testImages.map(img => img.id);

  // Delete inferences attached strictly to those test images
  await db.inferenceLog.deleteMany({
    where: { imageId: { in: testImageIds } }
  });

  // Now safely delete the test images
  await db.busImage.deleteMany({ where: { cameraId: { startsWith: "Test-" } } });
  
  // Delete the test transponder pings
  await db.transponderLog.deleteMany({ 
    where: { 
      OR: [
        { gateId: "Test-Gate" },
        { fleetNumber: { in: ["BUS-101", "TAILGATE-LEADER", "TAILGATE-FOLLOWER", "GHOST-BUS"] } }
      ]
    } 
  });
  
  console.log("Cleanup complete.");
  process.exit(passedCount === tests.length ? 0 : 1);
}

main().catch(console.error);