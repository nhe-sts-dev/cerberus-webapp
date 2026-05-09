import fs from "fs";
import path from "path";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../src/server/s3"; // Adjust path if necessary
import { db } from "../src/server/db"; // Adjust path if necessary
import { v4 as uuidv4 } from "uuid";
import mime from "mime-types"; // npm install mime-types

const DATA_DIR = path.join(process.cwd(), "public/data_import");
const BATCH_SIZE = 5; // Upload 5 at a time so we don't crash your internet/RAM

async function processFolder(folderName: "Clean" | "Dirty", label: "CLEAN" | "DIRTY") {
  const folderPath = path.join(DATA_DIR, folderName);
  
  if (!fs.existsSync(folderPath)) {
    console.log(`Folder not found: ${folderPath}`);
    return;
  }

  const files = fs.readdirSync(folderPath).filter(file => !file.startsWith('.')); // Ignore hidden files like .DS_Store
  console.log(`Found ${files.length} images in ${folderName}. Starting upload...`);

  // Process in batches
  for (let i = 0; i < files.length; i += BATCH_SIZE) {
    const batch = files.slice(i, i + BATCH_SIZE);
    
    await Promise.all(batch.map(async (fileName) => {
      try {
        const filePath = path.join(folderPath, fileName);
        const fileBuffer = fs.readFileSync(filePath);
        
        const fileExtension = path.extname(fileName) ?? ".jpg";
        const uniqueFileName = `historical-data/${label.toLowerCase()}/${uuidv4()}${fileExtension}`;
        const contentType = mime.lookup(filePath) || "image/jpeg";

        // 1. Upload to R2
        await s3Client.send(
          new PutObjectCommand({
            Bucket: process.env.R2_BUCKET_NAME,
            Key: uniqueFileName,
            Body: fileBuffer,
            ContentType: contentType,
          })
        );

        const publicUrl = `https://${process.env.R2_PUBLIC_DOMAIN}/${uniqueFileName}`;

        // 2. Create Database Record
        await db.busImage.create({
          data: {
            imageUrl: publicUrl,
            label: label,
            isVerified: true, // We assume Google Drive data is already human-verified
            timeTaken: fs.statSync(filePath).mtime, // Use file creation/modified time as a fallback
          }
        });

        console.log(`✅ Successfully imported: ${fileName} as ${label}`);
      } catch (error) {
        console.error(`❌ Failed to import ${fileName}:`, error);
      }
    }));
  }
}

async function main() {
    console.log("R2 Bucket:", process.env.R2_BUCKET_NAME);
  console.log("Endpoint:", process.env.R2_ENDPOINT);
  console.log("Key ID prefix:", process.env.R2_ACCESS_KEY_ID?.substring(0, 5) + "...");
  console.log("🚀 Starting data migration...");
  await processFolder("Clean", "CLEAN");
  await processFolder("Dirty", "DIRTY");
  console.log("🎉 Migration complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });