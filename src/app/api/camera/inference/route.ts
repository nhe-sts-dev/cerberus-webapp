import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "~/server/s3";
import { db } from "~/server/db";
import { v4 as uuidv4 } from "uuid";
// import { LabelStatus } from "~/generated/prisma/client";

type LabelStatus = "DIRTY" | "CLEAN" | "UNCERTAIN" | "UNLABELED";

const CAMERA_SECRET_KEY = process.env.CAMERA_SECRET_KEY ?? "super-secret-axis-key-123";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(req: NextRequest) {
  try {
    // 1. Authenticate
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${CAMERA_SECRET_KEY}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Parse the multipart form data
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    
    // Extract inference metadata sent by the camera
    const cameraId = (formData.get("cameraId") as string) ?? "Unknown-Camera";
    const fleetNumber = (formData.get("fleetNumber") as string) ?? null;
    const modelId = (formData.get("modelId") as string); 
    const predictedLabel = (formData.get("label") as LabelStatus); 
    const confidenceStr = formData.get("confidence") as string;
    const confidence = confidenceStr ? parseInt(confidenceStr, 10) : 0;

    if (!file || !modelId || !predictedLabel) {
      return NextResponse.json({ error: "Missing required file, modelId, or label" }, { status: 400 });
    }

    // 3. Upload Image to Cloudflare R2
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileExtension = file.name.split('.').pop() ?? "jpg";
    const uniqueFileName = `inference-uploads/${uuidv4()}.${fileExtension}`;

    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: uniqueFileName,
        Body: buffer,
        ContentType: file.type,
      })
    );

    const publicUrl = `https://${process.env.R2_PUBLIC_DOMAIN}/${uniqueFileName}`;

    // 4. Save to Neon Database transactionally
    const newImageRecord = await db.busImage.create({
      data: {
        imageUrl: publicUrl,
        cameraId: cameraId,
        fleetNumber: fleetNumber,
        timeTaken: new Date(),
        label: "UNLABELED", // Awaiting human verification in the dashboard
        inferences: {
          create: {
            predictedLabel: predictedLabel,
            confidence: confidence,
            modelId: modelId,
          }
        }
      },
      include: {
        inferences: true, 
      }
    });

    // --- REVERSE MATCHING ALGORITHM ---
    // Look for an orphaned TransponderLog that arrived recently
    const timeWindowSeconds = 60;
    const minTime = new Date(newImageRecord.timeTaken!.getTime() - timeWindowSeconds * 1000);
    const maxTime = new Date(newImageRecord.timeTaken!.getTime() + timeWindowSeconds * 1000);

    let matchingTransponder = await db.transponderLog.findFirst({
      where: {
        matchedImageId: null, // Look for logs that haven't been claimed yet
        timestamp: { gte: minTime, lte: maxTime }
      },
      orderBy: { timestamp: 'desc' }
    });

    // 2. If no match is found, maybe the camera is 1 second behind! Let's wait.
    if (!matchingTransponder) {
    console.log("No immediate match found. Sleeping for 2 seconds to wait for camera...");
    await delay(2000); // Pause execution for 2 seconds
    
    // 3. Try one last time
    matchingTransponder = await db.transponderLog.findFirst({
      where: {
        matchedImageId: null, // Look for logs that haven't been claimed yet
        timestamp: { gte: minTime, lte: maxTime }
      },
      orderBy: { timestamp: 'desc' }
      });
    }

    if (matchingTransponder) {
      // Tie them together!
      await db.$transaction([
        db.busImage.update({
          where: { id: newImageRecord.id },
          data: { fleetNumber: matchingTransponder.fleetNumber }
        }),
        db.transponderLog.update({
          where: { id: matchingTransponder.id },
          data: { matchedImageId: newImageRecord.id }
        })
      ]);
      console.log(`Matched Image ${newImageRecord.id} with Fleet ${matchingTransponder.fleetNumber}`);
    }
    // ----------------------------------

    return NextResponse.json({ 
      success: true, 
      imageId: newImageRecord.id,
      inferenceId: newImageRecord.inferences[0]?.id 
    }, { status: 200 });

  } catch (error) {
    console.error("Inference upload error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}















// import { NextRequest, NextResponse } from "next/server";
// import { PutObjectCommand } from "@aws-sdk/client-s3";
// import { s3Client } from "~/server/s3";
// import { db } from "~/server/db";
// import { v4 as uuidv4 } from "uuid";
// import { LabelStatus } from "@prisma/client"; // Adjust import path if needed

// const CAMERA_SECRET_KEY = process.env.CAMERA_SECRET_KEY ?? "super-secret-axis-key-123";

// export async function POST(req: NextRequest) {
//   try {
//     // 1. Authenticate
//     const authHeader = req.headers.get("authorization");
//     if (authHeader !== `Bearer ${CAMERA_SECRET_KEY}`) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     // 2. Parse the multipart form data
//     const formData = await req.formData();
//     const file = formData.get("file") as File | null;
    
//     // Extract inference metadata sent by the camera
//     const cameraId = (formData.get("cameraId") as string) ?? "Unknown-Camera";
//     const fleetNumber = (formData.get("fleetNumber") as string) ?? null;
//     const modelId = (formData.get("modelId") as string); // e.g., "clkj123456789"
//     const predictedLabel = (formData.get("label") as LabelStatus); // "DIRTY" or "CLEAN"
//     const confidence = parseInt((formData.get("confidence") as string) ?? "0");

//     if (!file || !modelId || !predictedLabel) {
//       return NextResponse.json({ error: "Missing required file, modelId, or label" }, { status: 400 });
//     }

//     // 3. Upload Image to Cloudflare R2
//     const buffer = Buffer.from(await file.arrayBuffer());
//     const fileExtension = file.name.split('.').pop() ?? "jpg";
//     const uniqueFileName = `inference-uploads/${uuidv4()}.${fileExtension}`;

//     await s3Client.send(
//       new PutObjectCommand({
//         Bucket: process.env.R2_BUCKET_NAME,
//         Key: uniqueFileName,
//         Body: buffer,
//         ContentType: file.type,
//       })
//     );

//     const publicUrl = `https://${process.env.R2_PUBLIC_DOMAIN}/${uniqueFileName}`;

//     // 4. Save to Neon Database transactionally
//     // We create the BusImage and the InferenceLog in one go
//     const newImageRecord = await db.busImage.create({
//       data: {
//         imageUrl: publicUrl,
//         cameraId: cameraId,
//         fleetNumber: fleetNumber,
//         timeTaken: new Date(),
//         Label: "UNLABELED", // Awaiting human verification in the dashboard
//         inferences: {
//           create: {
//             predictedLabel: predictedLabel,
//             confidence: confidence,
//             modelId: modelId,
//           }
//         }
//       },
//       include: {
//         inferences: true, // Return the joined data
//       }
//     });

//     // 5. Trigger Physical Action / Email if necessary
//     if (predictedLabel === "DIRTY") {
//        // Logic to trigger email or ping another API
//        console.log(`Alert: Dirty bus detected by model ${modelId} with ${confidence}% confidence.`);
//     }

//     return NextResponse.json({ 
//       success: true, 
//       imageId: newImageRecord.id,
//       inferenceId: newImageRecord.inferences[0].id 
//     }, { status: 200 });

//   } catch (error) {
//     console.error("Inference upload error:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }