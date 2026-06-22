import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";

const GITHUB_WEBHOOK_SECRET = process.env.CERBERUS_WEBHOOK_SECRET ?? "super-secret-github-key";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${GITHUB_WEBHOOK_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { modelId, eapUrl } = await req.json() as { modelId: string, eapUrl: string };

    await db.modelRegistry.update({
      where: { id: modelId },
      data: { eapUrl: eapUrl }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update EAP URL" }, { status: 500 });
  }
}