// Run via: pnpm exec tsx --env-file=.env scripts/test-apis.ts

import { db } from "../src/server/db"; // Connects to Neon to verify tests and seed data

const BASE_URL = "https://project-560xk.vercel.app";
const CAMERA_SECRET = process.env.CAMERA_SECRET_KEY ?? "super-secret-axis-key-123";
const TRANSPONDER_SECRET = process.env.TRANSPONDER_SECRET_KEY ?? "super-secret-axis-key-123";

const colors = { green: "\x1b[32m", red: "\x1b[31m", blue: "\x1b[34m", reset: "\x1b[0m" };

function getMockFile(): Blob {
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
  console.log("-".repeat(70));

  // --- SETUP: Create a temporary model in Neon for the inference test ---
  const tempModel = await db.modelRegistry.create({
    data: {
      name: "Integration-Test-Model",
      architecture: "MOBILENET_V2",
      status: "EXPERIMENTAL",
    }
  });

  const tests = [
    // 1. UPLOAD API TESTS
    {
      name: "Upload API - Reject Missing File",
      fn: async (): Promise<[boolean, string]> => {
        const formData = new FormData();
        formData.append("cameraId", "Test-Cam"); // Sending valid form data, but no file
        const res = await fetch(`${BASE_URL}/api/camera/upload`, {
          method: "POST", headers: { Authorization: `Bearer ${CAMERA_SECRET}` }, body: formData
        });
        return res.status === 400 ? [true, "Correctly rejected missing file"] : [false, `Got ${res.status}`];
      }
    },
    
    // 2. INFERENCE API TESTS
    {
      name: "Inference API - Successful Inference Logging",
      fn: async (): Promise<[boolean, string]> => {
        const formData = new FormData();
        formData.append("file", getMockFile(), "test.jpg");
        formData.append("cameraId", "Test-Inference-Cam");
        formData.append("modelId", tempModel.id); // Using the valid Neon ID
        formData.append("label", "DIRTY");
        formData.append("confidence", "88");

        const res = await fetch(`${BASE_URL}/api/camera/inference`, {
          method: "POST", headers: { Authorization: `Bearer ${CAMERA_SECRET}` }, body: formData
        });
        const rawJson = await res.json() as unknown;
        const json = typeof rawJson === "object" && rawJson !== null ? rawJson as { inferenceId?: string } : {};
        return res.status === 200 ? [true, `Inference logged successfully. ID: ${json.inferenceId ?? "unknown"}`] : [false, `Failed: ${JSON.stringify(json)}`];
      }
    },

    // 3. TRANSPONDER API TESTS
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

    // 4. COMPLEX RACE CONDITIONS
    {
      name: "Race Condition A - Transponder arrives 1 sec BEFORE Camera",
      fn: async (): Promise<[boolean, string]> => {
        const timestamp = new Date().toISOString();
        
        // Ping transponder
        await fetch(`${BASE_URL}/api/transponder`, {
          method: "POST",
          headers: { Authorization: `Bearer ${TRANSPONDER_SECRET}`, "Content-Type": "application/json" },
          body: JSON.stringify({ fleetNumber: "RACE-BUS-A", timestamp, gateId: "Test-Gate" })
        });

        await new Promise(r => setTimeout(r, 1000)); // Wait 1 sec

        // Camera uploads image
        const fd = new FormData();
        fd.append("file", getMockFile(), "test.jpg");
        fd.append("cameraId", "Test-Cam-A");
        const camRes = await fetch(`${BASE_URL}/api/camera/upload`, {
          method: "POST", headers: { Authorization: `Bearer ${CAMERA_SECRET}` }, body: fd
        });
        const camRaw = await camRes.json() as unknown;
        const camJson = typeof camRaw === "object" && camRaw !== null ? camRaw as { imageId?: string } : {};

        // Check Neon DB to ensure they linked
        const img = await db.busImage.findUnique({ where: { id: camJson.imageId }});
        return img?.fleetNumber === "RACE-BUS-A" ? [true, "Successfully linked asynchronously"] : [false, "Failed to link"];
      }
    },
    {
      name: "Race Condition B - Camera arrives 1 sec BEFORE Transponder",
      fn: async (): Promise<[boolean, string]> => {
        const timestamp = new Date().toISOString();
        
        // Camera uploads image first
        const fd = new FormData();
        fd.append("file", getMockFile(), "test.jpg");
        fd.append("cameraId", "Test-Cam-B");
        void fetch(`${BASE_URL}/api/camera/upload`, {
          method: "POST", headers: { Authorization: `Bearer ${CAMERA_SECRET}` }, body: fd
        }); // Not awaiting, letting it run

        await new Promise(r => setTimeout(r, 1000)); // Wait 1 sec

        // Transponder pings
        const transRes = await fetch(`${BASE_URL}/api/transponder`, {
          method: "POST",
          headers: { Authorization: `Bearer ${TRANSPONDER_SECRET}`, "Content-Type": "application/json" },
          body: JSON.stringify({ fleetNumber: "RACE-BUS-B", timestamp, gateId: "Test-Gate" })
        });
        const transJson = await transRes.json() as { matchedImageId?: string };

        // Check DB
        const img = await db.busImage.findUnique({ where: { id: transJson.matchedImageId }});
        return img?.fleetNumber === "RACE-BUS-B" ? [true, "Reverse match successful"] : [false, "Failed to reverse link"];
      }
    },
    {
      name: "Race Condition C - Simultaneous Impact (The 10-Second Test)",
      fn: async (): Promise<[boolean, string]> => {
        const timestamp = new Date().toISOString();
        
        const fd = new FormData();
        fd.append("file", getMockFile(), "test.jpg");
        fd.append("cameraId", "Test-Cam-C");

        // Fire both at the exact same millisecond
        const p1 = fetch(`${BASE_URL}/api/transponder`, {
          method: "POST",
          headers: { Authorization: `Bearer ${TRANSPONDER_SECRET}`, "Content-Type": "application/json" },
          body: JSON.stringify({ fleetNumber: "RACE-BUS-C", timestamp, gateId: "Test-Gate" })
        });
        const p2 = fetch(`${BASE_URL}/api/camera/upload`, {
          method: "POST", headers: { Authorization: `Bearer ${CAMERA_SECRET}` }, body: fd
        });

        await Promise.all([p1, p2]);

        // Verify in DB
        const img = await db.busImage.findFirst({ where: { fleetNumber: "RACE-BUS-C" }});
        return img ? [true, "Simultaneous match successful via delay buffer"] : [false, "Collision resulted in failure"];
      }
    }
  ];

  let passedCount = 0;
  for (const test of tests) {
    if (await runTest(test.name, test.fn)) passedCount++;
  }

  console.log("-".repeat(70));
  console.log(`TEST SUMMARY: ${passedCount}/${tests.length} Tests Passed`);

  // --- TEARDOWN ---
  console.log(`\n${colors.blue}Cleaning up test data from Neon DB...${colors.reset}`);
  await db.modelRegistry.delete({ where: { id: tempModel.id } });
  await db.busImage.deleteMany({ where: { cameraId: { in: ["Test-Cam", "Test-Inference-Cam", "Test-Cam-A", "Test-Cam-B", "Test-Cam-C"] } } });
  await db.transponderLog.deleteMany({ where: { gateId: "Test-Gate" } });
  console.log("Cleanup complete.");

  process.exit(passedCount === tests.length ? 0 : 1);
}

main().catch(console.error);





























// // Run via: pnpm exec tsx --env-file=.env scripts/test-apis.ts

// const BASE_URL = "https://project-560xk.vercel.app";
// // Fallback to default if not found in .env
// const SECRET_KEY = process.env.CAMERA_SECRET_KEY ?? "super-secret-axis-key-123";

// const HEADERS = {
//   Authorization: `Bearer ${SECRET_KEY}`,
// };

// // --- TERMINAL COLORS ---
// const colors = {
//   green: "\x1b[32m",
//   red: "\x1b[31m",
//   reset: "\x1b[0m",
// };

// // --- HELPER FUNCTIONS ---
// function getMockFile(): Blob {
//   // Generates a tiny dummy image buffer in memory
//   return new Blob(["fake_image_data_buffer"], { type: "image/jpeg" });
// }

// async function runTest(
//   testName: string,
//   testFunc: () => Promise<[boolean, string]>
// ): Promise<boolean> {
//   process.stdout.write(`Running: ${testName}... `);
//   const startTime = Date.now();

//   try {
//     const [passed, message] = await testFunc();
//     const duration = ((Date.now() - startTime) / 1000).toFixed(2);

//     if (passed) {
//       console.log(`${colors.green}[PASS]${colors.reset} (${duration}s) - ${message}`);
//       return true;
//     } else {
//       console.log(`${colors.red}[FAIL]${colors.reset} (${duration}s) - ${message}`);
//       return false;
//     }
//   } catch (error: unknown) {
//     const duration = ((Date.now() - startTime) / 1000).toFixed(2);
//     console.log(`${colors.red}[ERROR]${colors.reset} (${duration}s) - Exception: ${(error as Error).message}`);
//     return false;
//   }
// }

// // --- TEST CASES: /api/camera/upload ---

// async function testUploadUnauthorized(): Promise<[boolean, string]> {
//   const res = await fetch(`${BASE_URL}/api/camera/upload`, {
//     method: "POST",
//     headers: { Authorization: "Bearer wrong-key" },
//   });

//   if (res.status === 401) {
//     return [true, "Correctly rejected unauthorized request."];
//   }
//   const text = await res.text();
//   return [false, `Expected 401, got ${res.status}. Response: ${text}`];
// }

// async function testUploadMissingFile(): Promise<[boolean, string]> {
//   const res = await fetch(`${BASE_URL}/api/camera/upload`, {
//     method: "POST",
//     headers: HEADERS,
//     // Sending empty body
//   });

//   if (res.status === 400) {
//     return [true, "Correctly rejected missing file."];
//   }
//   const text = await res.text();
//   return [false, `Expected 400, got ${res.status}. Response: ${text}`];
// }

// async function testUploadSuccess(): Promise<[boolean, string]> {
//   const formData = new FormData();
//   formData.append("file", getMockFile(), "test_image.jpg");
//   formData.append("cameraId", "Test-Upload-Cam");

//   const res = await fetch(`${BASE_URL}/api/camera/upload`, {
//     method: "POST",
//     headers: HEADERS,
//     body: formData,
//   });

//   if (res.status === 200) {
//     const jsonBody = (await res.json()) as unknown;
//     if (
//       typeof jsonBody === "object" &&
//       jsonBody !== null &&
//       "success" in jsonBody &&
//       "imageId" in jsonBody &&
//       typeof (jsonBody as { success: unknown }).success === "boolean" &&
//       typeof (jsonBody as { imageId: unknown }).imageId === "string"
//     ) {
//       return [
//         true,
//         `Upload successful. Created Image ID: ${(jsonBody as { imageId: string }).imageId}`,
//       ];
//     }
//   }
//   const text = await res.text();
//   return [false, `Expected 200 OK, got ${res.status}. Response: ${text}`];
// }

// // --- TEST CASES: /api/camera/inference ---

// async function testInferenceUnauthorized(): Promise<[boolean, string]> {
//   const res = await fetch(`${BASE_URL}/api/camera/inference`, {
//     method: "POST",
//     headers: { Authorization: "Bearer wrong-key" },
//   });

//   if (res.status === 401) {
//     return [true, "Correctly rejected unauthorized request."];
//   }
//   const text = await res.text();
//   return [false, `Expected 401, got ${res.status}. Response: ${text}`];
// }

// async function testInferenceMissingFields(): Promise<[boolean, string]> {
//   const formData = new FormData();
//   formData.append("file", getMockFile(), "test_image.jpg");
//   formData.append("cameraId", "Test-Inference-Cam");
//   // Intentionally missing modelId and label

//   const res = await fetch(`${BASE_URL}/api/camera/inference`, {
//     method: "POST",
//     headers: HEADERS,
//     body: formData,
//   });

//   if (res.status === 400) {
//     return [true, "Correctly rejected request missing modelId/label."];
//   }
//   const text = await res.text();
//   return [false, `Expected 400, got ${res.status}. Response: ${text}`];
// }

// async function testInferenceSuccess(): Promise<[boolean, string]> {
//   const formData = new FormData();
//   formData.append("file", getMockFile(), "test_image.jpg");
//   formData.append("cameraId", "Test-Inference-Cam");
//   formData.append("fleetNumber", "BUS-999");
//   formData.append("modelId", "test-model-v1");
//   formData.append("label", "DIRTY");
//   formData.append("confidence", "88");

//   const res = await fetch(`${BASE_URL}/api/camera/inference`, {
//     method: "POST",
//     headers: HEADERS,
//     body: formData,
//   });

//   if (res.status === 200) {
//     const jsonBody = (await res.json()) as unknown;
//     if (
//       typeof jsonBody === "object" &&
//       jsonBody !== null &&
//       "success" in jsonBody &&
//       "inferenceId" in jsonBody &&
//       "imageId" in jsonBody &&
//       (jsonBody as { success: unknown }).success === true &&
//       typeof (jsonBody as { inferenceId: unknown }).inferenceId === "string" &&
//       typeof (jsonBody as { imageId: unknown }).imageId === "string"
//     ) {
//       return [
//         true,
//         `Inference logged. Image ID: ${(jsonBody as { imageId: string }).imageId}, Inference ID: ${(jsonBody as { inferenceId: string }).inferenceId}`,
//       ];
//     }
//   }
//   const text = await res.text();
//   return [false, `Expected 200 OK, got ${res.status}. Response: ${text}`];
// }

// // --- MAIN EXECUTION ---
// async function main() {
//   console.log(`Starting Integration Tests for: ${BASE_URL}`);
//   console.log("-".repeat(60));

//   const tests = [
//     { name: "Upload API - Reject Unauthorized", fn: testUploadUnauthorized },
//     { name: "Upload API - Reject Missing File", fn: testUploadMissingFile },
//     { name: "Upload API - Successful Upload", fn: testUploadSuccess },
//     { name: "Inference API - Reject Unauthorized", fn: testInferenceUnauthorized },
//     { name: "Inference API - Reject Missing Fields", fn: testInferenceMissingFields },
//     { name: "Inference API - Successful Inference Logging", fn: testInferenceSuccess },
//   ];

//   let passedCount = 0;

//   for (const test of tests) {
//     const passed = await runTest(test.name, test.fn);
//     if (passed) passedCount++;
//   }

//   console.log("-".repeat(60));
//   console.log(`TEST SUMMARY: ${passedCount}/${tests.length} Tests Passed`);

//   if (passedCount !== tests.length) {
//     process.exit(1); // Exit with failure code for CI/CD pipelines
//   } else {
//     process.exit(0);
//   }
// }

// main().catch(console.error);