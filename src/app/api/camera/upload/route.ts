import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "~/server/s3"; // Assuming this is where we put the s3 client earlier
import { db } from "~/server/db";
import { v4 as uuidv4 } from "uuid"; // You might need to run: npm install uuid @types/uuid

// This is a simple security measure. You will put this exact string into the Axis camera settings.
const CAMERA_SECRET_KEY = process.env.CAMERA_SECRET_KEY ?? "super-secret-axis-key-123";

export async function POST(req: NextRequest) {
  try {
    // 1. Authenticate the request
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${CAMERA_SECRET_KEY}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Parse the multipart form data sent by the camera
    const formData = await req.formData();
    const file = formData.get("file") as File | null; // Axis usually sends it under "file" or "image"
    
    // Optional: Capture metadata if the camera sends it in the form
    const cameraId = (formData.get("cameraId") as string) ?? "Unknown-Axis-Camera";

    if (!file) {
      return NextResponse.json({ error: "No image file provided" }, { status: 400 });
    }

    // 3. Prepare the file for R2
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileExtension = file.name.split('.').pop() ?? "jpg";
    const uniqueFileName = `camera-uploads/${uuidv4()}.${fileExtension}`;

    // 4. Upload to Cloudflare R2
    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: uniqueFileName,
        Body: buffer,
        ContentType: file.type,
      })
    );

    // The public URL assuming you set up a custom domain for your R2 bucket, 
    // or you can use your R2 dev URL for now.
    const publicUrl = `https://${process.env.R2_PUBLIC_DOMAIN}/${uniqueFileName}`;

    // 5. Create the database record
    const newBusImage = await db.busImage.create({
      data: {
        imageUrl: publicUrl,
        label: "UNLABELED",
        cameraId: cameraId,
        timeTaken: new Date(), // Storing the exact time we received it
      },
    });

    return NextResponse.json({ success: true, imageId: newBusImage.id }, { status: 200 });

  } catch (error) {
    console.error("Camera upload error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}