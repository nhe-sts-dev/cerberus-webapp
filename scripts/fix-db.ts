// import "dotenv/config"; // Force load .env right away
// pnpm exec tsx --env-file=.env scripts/fix-db.ts 
import { db } from "../src/server/db";

async function main() {
  const publicDomain = process.env.R2_PUBLIC_DOMAIN;

  if (!publicDomain || publicDomain.includes("YOUR-ACTUAL-URL")) {
    console.error("❌ ERROR: Please set your real R2_PUBLIC_DOMAIN in your .env file!");
    process.exit(1);
  }

  console.log("🔍 Searching for records with 'undefined' URLs...");

  // 1. Find all the records that got messed up
  const brokenImages = await db.busImage.findMany({
    where: {
      imageUrl: {
        startsWith: "https://pub-cerberus-dataset.r2.dev/",
      },
    },
  });

  if (brokenImages.length === 0) {
    console.log("✅ No broken records found!");
    return;
  }

  console.log(`Found ${brokenImages.length} records to fix. Processing...`);

  // 2. Loop through and fix them one by one
  let fixedCount = 0;
  for (const image of brokenImages) {
    // Swap out "undefined" for your real R2 domain
    const correctedUrl = image.imageUrl.replace("https://pub-cerberus-dataset.r2.dev/", `https://${publicDomain}/`);

    // Update the database record
    await db.busImage.update({
      where: { id: image.id },
      data: {
        imageUrl: correctedUrl,
        // isVerified: false, // Resetting to false as requested
        // timeTaken: null,   // Wiping the inaccurate file modification time
      },
    });

    fixedCount++;
  }

  console.log(`🎉 Successfully fixed ${fixedCount} records!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });