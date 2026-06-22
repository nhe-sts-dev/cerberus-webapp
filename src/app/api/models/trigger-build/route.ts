import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { modelId, tfliteUrl } = await req.json() as { modelId: string, tfliteUrl: string };

    const GITHUB_PAT = process.env.GITHUB_PAT;
    const GITHUB_REPO = process.env.GITHUB_REPO; // e.g., "jludik/cerberus-web-app"

    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/dispatches`, {
      method: "POST",
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": `token ${GITHUB_PAT}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        event_type: "build-eap",
        client_payload: {
          modelId: modelId,
          tfliteUrl: tfliteUrl
        }
      })
    });

    if (!response.ok) throw new Error("GitHub API failed");

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to trigger build" }, { status: 500 });
  }
}