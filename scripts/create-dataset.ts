// pnpm exec tsx --env-file=.env scripts/create-dataset.ts 
import { db } from "../src/server/db";

async function main() {
  console.log("Starting dataset creation...");

  // 1. Fetch all currently labeled images
  const images = await db.busImage.findMany({
    where: {
      label: { in: ["DIRTY", "CLEAN"] },
    },
    select: { id: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });

  if (images.length === 0) {
    console.log("No labeled images found. Exiting.");
    return;
  }

  // 2. Format the date safely (DD-MM-YYYY)
  const latestDate = images[0]?.createdAt;
  if (!latestDate) return;

  const day = latestDate.getDate().toString().padStart(2, "0");
  const month = (latestDate.getMonth() + 1).toString().padStart(2, "0");
  const year = latestDate.getFullYear();
  
  const datasetName = `Dataset-beginning-${day}-${month}-${year}`;

  console.log(`Found ${images.length} images. Creating dataset: ${datasetName}`);

  // 3. Create Dataset and relations mapping directly to the imageId foreign key
  const newDataset = await db.dataset.create({
    data: {
      name: datasetName,
      description: "Initial baseline dataset containing all manually verified images up to this date.",
      images: {
        create: images.map((img) => ({
          imageId: img.id, // Directly mapping the foreign key is vastly safer for TS
        })),
      },
    },
  });

  console.log(`✅ Success! Dataset created with ID: ${newDataset.id}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });