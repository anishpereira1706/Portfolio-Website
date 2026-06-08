import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = './public';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.png')) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace('.png', '.webp'));
    console.log(`Optimizing ${file}...`);
    
    // Resize down if they are unnecessarily huge, keeping high quality WebP
    await sharp(inputPath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);
      
    // Delete the old heavy PNG
    fs.unlinkSync(inputPath);
    console.log(`Converted and deleted ${file}`);
  }
}
console.log('All images optimized!');
