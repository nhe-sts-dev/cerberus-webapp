import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";
import Papa from "papaparse";
import * as xlsx from "xlsx";

const GOLDEN_ARROW_SECRET = process.env.TRANSPONDER_SECRET_KEY ?? "super-secret-axis-key-123";

interface GateEvent {
  fleetNumber: string;
  timestamp: string | Date;
  gateId?: string;
}

// Helper to chunk arrays for Promise.all so we don't crash Neon DB connections
const chunkArray = <T>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${GOLDEN_ARROW_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = file.name.toLowerCase();
    let records: GateEvent[] = [];

    if (fileName.endsWith(".csv")) {
      const text = buffer.toString("utf-8");
      const result = Papa.parse<GateEvent>(text, { header: true, skipEmptyLines: true });
      records = result.data;
    } else if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls")) {
      const workbook = xlsx.read(buffer, { type: "buffer" });
    //   const firstSheetName = workbook.SheetNames[0];
    //   const worksheet = workbook.Sheets[firstSheetName!];
    const firstSheetName = workbook.SheetNames[0];
      if (!firstSheetName) {
        return NextResponse.json({ error: "Excel file contains no sheets" }, { status: 400 });
      }
      const worksheet = workbook.Sheets[firstSheetName];
      if (!worksheet) {
        return NextResponse.json({ error: "Excel sheet not found or is empty" }, { status: 400 });
      }
      records = xlsx.utils.sheet_to_json<GateEvent>(worksheet);
    } else {
      return NextResponse.json({ error: "Unsupported file type." }, { status: 400 });
    }

    let matchCount = 0;
    let logCount = 0;

    // Process in chunks of 50 to stay within Vercel execution limits
    const chunks = chunkArray(records, 50);

    for (const chunk of chunks) {
      // Run 50 database operations concurrently
      await Promise.all(chunk.map(async (record) => {
        if (!record.fleetNumber || !record.timestamp) return;

        // SAFEGUARD: Ensure South African Timezone (+02:00)
        let timeString = record.timestamp.toString();
        if (!timeString.includes("Z") && !timeString.includes("+02:00")) {
          // If no timezone is provided, force it to SAST
          timeString = `${timeString}+02:00`; 
        }
        
        const transponderTime = new Date(timeString);

        // 1. Log it
        const log = await db.transponderLog.create({
          data: {
            fleetNumber: record.fleetNumber.toString(),
            gateId: record.gateId?.toString() ?? "Batch-Upload",
            timestamp: transponderTime,
          }
        });
        logCount++;

        // 2. Fuzzy match
        const minTime = new Date(transponderTime.getTime() - 60 * 1000);
        const maxTime = new Date(transponderTime.getTime() + 60 * 1000);

        const matchingImage = await db.busImage.findFirst({
          where: {
            fleetNumber: null,
            timeTaken: { gte: minTime, lte: maxTime }
          }
        });

        if (matchingImage) {
          await db.$transaction([
            db.busImage.update({
              where: { id: matchingImage.id },
              data: { fleetNumber: log.fleetNumber }
            }),
            db.transponderLog.update({
              where: { id: log.id },
              data: { matchedImageId: matchingImage.id }
            })
          ]);
          matchCount++;
        }
      }));
    }

    return NextResponse.json({ 
      success: true, 
      message: `Processed ${logCount} records. Matched ${matchCount} to images.`,
    }, { status: 200 });

  } catch (error) {
    console.error("Batch API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


























// import { NextRequest, NextResponse } from "next/server";
// import { db } from "~/server/db";
// import Papa from "papaparse";
// import * as xlsx from "xlsx";

// const GOLDEN_ARROW_SECRET = process.env.CAMERA_SECRET_KEY ?? "super-secret-axis-key-123";

// // Standardize the shape of the data we expect
// interface GateEvent {
//   fleetNumber: string;
//   timestamp: string | Date;
//   gateId?: string;
// }

// export async function POST(req: NextRequest) {
//   try {
//     const authHeader = req.headers.get("authorization");
//     if (authHeader !== `Bearer ${GOLDEN_ARROW_SECRET}`) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const formData = await req.formData();
//     const file = formData.get("file") as File | null;

//     if (!file) {
//       return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
//     }

//     const buffer = Buffer.from(await file.arrayBuffer());
//     const fileName = file.name.toLowerCase();
//     let records: GateEvent[] = [];

//     // --- PARSE FILE BASED ON EXTENSION ---
//     if (fileName.endsWith(".csv")) {
//       const text = buffer.toString("utf-8");
//       const result = Papa.parse<GateEvent>(text, { header: true, skipEmptyLines: true });
//       records = result.data;
//     } 
//     else if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls")) {
//       const workbook = xlsx.read(buffer, { type: "buffer" });
//       const firstSheetName = workbook.SheetNames[0];
//       if (!firstSheetName) {
//         return NextResponse.json({ error: "Excel file contains no sheets" }, { status: 400 });
//       }
//       const worksheet = workbook.Sheets[firstSheetName];
//       if (!worksheet) {
//         return NextResponse.json({ error: "Excel sheet not found or is empty" }, { status: 400 });
//       }
//       records = xlsx.utils.sheet_to_json<GateEvent>(worksheet);
//     } 
//     else {
//       return NextResponse.json({ error: "Unsupported file type. Use .csv or .xlsx" }, { status: 400 });
//     }

//     // --- PROCESS RECORDS ---
//     let matchCount = 0;
//     let logCount = 0;

//     for (const record of records) {
//       if (!record.fleetNumber || !record.timestamp) continue;

//       const transponderTime = new Date(record.timestamp);
      
//       // 1. Log it
//       const log = await db.transponderLog.create({
//         data: {
//           fleetNumber: record.fleetNumber.toString(),
//           gateId: record.gateId?.toString() ?? "Batch-Upload",
//           timestamp: transponderTime,
//         }
//       });
//       logCount++;

//       // 2. Fuzzy match against existing UNMATCHED images
//       const minTime = new Date(transponderTime.getTime() - 60 * 1000);
//       const maxTime = new Date(transponderTime.getTime() + 60 * 1000);

//       const matchingImage = await db.busImage.findFirst({
//         where: {
//           fleetNumber: null, 
//           timeTaken: { gte: minTime, lte: maxTime }
//         }
//       });

//       if (matchingImage) {
//         await db.$transaction([
//           db.busImage.update({
//             where: { id: matchingImage.id },
//             data: { fleetNumber: log.fleetNumber }
//           }),
//           db.transponderLog.update({
//             where: { id: log.id },
//             data: { matchedImageId: matchingImage.id }
//           })
//         ]);
//         matchCount++;
//       }
//     }

//     return NextResponse.json({ 
//       success: true, 
//       message: `Processed ${logCount} records. Successfully matched ${matchCount} to existing images.`,
//     }, { status: 200 });

//   } catch (error) {
//     console.error("Batch API Error:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }