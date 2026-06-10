import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db"; 

// You can use the same secret, or generate a specific one for Golden Arrow
const GOLDEN_ARROW_SECRET = process.env.TRANSPONDER_SECRET_KEY ?? "super-secret-axis-key-123";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(req: NextRequest) {
  try {
    // 1. Authenticate Golden Arrow's Request
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${GOLDEN_ARROW_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Parse their JSON payload
    const body = await req.json() as unknown;
    
    if (typeof body !== 'object' || body === null) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }
    
    const { fleetNumber, gateId, timestamp } = body as Record<string, unknown>;

    if (!fleetNumber || timestamp === undefined || timestamp === null) {
      return NextResponse.json({ error: "Missing fleetNumber or timestamp" }, { status: 400 });
    }

    // Ensure timestamp is a string, number, or Date before constructing Date
    if (typeof timestamp !== 'string' && typeof timestamp !== 'number' && !(timestamp instanceof Date)) {
      return NextResponse.json({ error: "Invalid timestamp format" }, { status: 400 });
    }

    const transponderTime = new Date(timestamp);

    // 3. Save the ping to our log
    // Normalize gateId to a string to satisfy the DB type
    const gateIdStr = typeof gateId === 'string' ? gateId : "Unknown-Gate";

    const log = await db.transponderLog.create({
      data: {
        fleetNumber: fleetNumber as string,
        gateId: gateIdStr,
        timestamp: transponderTime,
      }
    });

    // 4. The Matching Algorithm (Fuzzy Time Matching)
    // Look for a BusImage taken within 60 seconds before or after this ping
    // that doesn't already have a fleetNumber assigned.
    const timeWindowSeconds = 60; 
    const minTime = new Date(transponderTime.getTime() - timeWindowSeconds * 1000);
    const maxTime = new Date(transponderTime.getTime() + timeWindowSeconds * 1000);

    let matchingImage = await db.busImage.findFirst({
      where: {
        fleetNumber: null, // Only grab images without a fleet number
        timeTaken: {
          gte: minTime,
          lte: maxTime,
        }
      },
      orderBy: {
        // Get the closest one in time if multiple exist
        timeTaken: 'desc' 
      }
    });

    // 2. If no match is found, maybe the camera is 1 second behind! Let's wait.
    if (!matchingImage) {
    console.log("No immediate match found. Sleeping for 2 seconds to wait for camera...");
    await delay(2000); // Pause execution for 2 seconds
    
    // 3. Try one last time
    matchingImage = await db.busImage.findFirst({
      where: {
        fleetNumber: null, // Only grab images without a fleet number
        timeTaken: {
          gte: minTime,
          lte: maxTime,
        }
      },
      orderBy: {
        // Get the closest one in time if multiple exist
        timeTaken: 'desc' 
      }
    });
    }

    // 5. If we found a match, update the BusImage with the fleetNumber
    if (matchingImage) {
      await db.$transaction([
        db.busImage.update({
          where: { id: matchingImage.id },
          data: { fleetNumber: fleetNumber }
        }),
        db.transponderLog.update({
          where: { id: log.id },
          data: { matchedImageId: matchingImage.id }
        })
      ]);
      
      return NextResponse.json({ 
        success: true, 
        message: "Logged and successfully matched to an image",
        matchedImageId: matchingImage.id 
      }, { status: 200 });
    }

    return NextResponse.json({ 
      success: true, 
      message: "Logged, awaiting image match" 
    }, { status: 200 });

  } catch (error) {
    console.error("Transponder API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}