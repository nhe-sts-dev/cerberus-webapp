import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";

const CAMERA_SECRET_KEY = process.env.CAMERA_SECRET_KEY ?? "super-secret-axis-key-123";

export async function GET(req: NextRequest) {
  // 1. Authenticate the camera's request
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${CAMERA_SECRET_KEY}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // 2. Find the latest model marked as PRODUCTION
    const latestModel = await db.modelRegistry.findFirst({
      where: { status: "PRODUCTION" },
      orderBy: { createdAt: "desc" },
    });

    if (!latestModel?.weightsUrl) {
      return NextResponse.json({ error: "No production model found" }, { status: 404 });
    }

    // 3. Return the model version and the download URL
    return NextResponse.json({
      latestVersion: latestModel.version,
      modelId: latestModel.id,
      downloadUrl: latestModel.weightsUrl, // e.g., https://pub-r2-domain.com/models/v2.eap
    }, { status: 200 });

  } catch (error) {
    console.error("Sync route error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}