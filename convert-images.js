import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = './src/assets';

const imagesToConvert = [
  'project 1.png',
  'project 2 (1).png',
  'project 3.png',
  'octo-pos.png',
  'business-needs-us.jpg',
  'growth-systems.jpg'
];

async function convertImages() {
  for (const img of imagesToConvert) {
    const inputPath = path.join(assetsDir, img);
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${img} - not found`);
      continue;
    }
    const ext = path.extname(img);
    const basename = path.basename(img, ext);
    const outputPath = path.join(assetsDir, `${basename}.webp`);
    
    const info = await sharp(inputPath)
      .resize({ width: 1280, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);
      
    const originalSize = fs.statSync(inputPath).size;
    console.log(`${img}: ${(originalSize / 1024).toFixed(2)} KB -> ${(info.size / 1024).toFixed(2)} KB`);
  }
}

convertImages().catch(console.error);
