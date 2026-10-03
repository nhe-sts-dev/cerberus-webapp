// Run via: pnpm exec tsx --env-file=.env scripts/cleanup-data.ts

import { db } from "../src/server/db";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../src/server/s3";

async function main() {
  console.log("Starting production data cleanup pipeline...");

  // 1. Rename incorrectly labeled gate IDs
  const updateResult = await db.busImage.updateMany({
    where: { gateId: "Bus snap shot" },
    data: { gateId: "AG" },
  });
  console.log(`✅ Renamed ${updateResult.count} gateId entries from 'Bus snap shot' to 'AG'.`);

//   // 2. Identify bad data within the date range (inclusive)
//   const startDate = new Date("2026-08-31T00:00:00.000Z");
//   const endDate = new Date("2026-09-19T23:59:59.999Z");

//   const badImages = await db.busImage.findMany({
//     where: {
//       createdAt: {
//         gte: startDate,
//         lte: endDate,
//       },
//     },
//     select: { id: true, imageUrl: true },
//   });

//   if (badImages.length === 0) {
//     console.log("✅ No images found in the specified date range. Exiting.");
//     return;
//   }

//   console.log(`Found ${badImages.length} images to delete. Processing R2 deletions...`);

//   // 3. Delete from Cloudflare R2
//   let r2DeleteCount = 0;
//   for (const img of badImages) {
//     if (img.imageUrl) {
//       const urlParts = img.imageUrl.split("/");
//       const folder = urlParts[urlParts.length - 2];
//       const filename = urlParts[urlParts.length - 1];
//       const objectKey = `${folder}/${filename}`;

//       try {
//         await s3Client.send(
//           new DeleteObjectCommand({
//             Bucket: process.env.R2_BUCKET_NAME,
//             Key: objectKey,
//           })
//         );
//         r2DeleteCount++;
//       } catch (error) {
//         console.error(`❌ Failed to delete ${objectKey} from R2:`, error);
//       }
//     }
//   }
//   console.log(`✅ Deleted ${r2DeleteCount} image files from Cloudflare R2.`);

//   // 4. Clear Database - Relational Order
//   console.log("Wiping records from Neon DB...");
//   const idsToDelete = badImages.map((img) => img.id);

//   // Nullify foreign key references in TransponderLog to prevent constraint violations
//   await db.transponderLog.updateMany({
//     where: { matchedImageId: { in: idsToDelete } },
//     data: { matchedImageId: null },
//   });

//   // Delete the target BusImages (InferenceLogs and DatasetImages will Cascade delete automatically based on your schema)
//   const dbDeleteResult = await db.busImage.deleteMany({
//     where: { id: { in: idsToDelete } },
//   });

//   console.log(`✅ Successfully deleted ${dbDeleteResult.count} BusImage records from DB.`);
  console.log("Cleanup complete!");
}

main()
  .catch((e) => {
    console.error("Fatal Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });