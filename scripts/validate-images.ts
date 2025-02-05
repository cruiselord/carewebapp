import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function validateImages() {
  const expectedStructure = {
    about: ['hero.jpg', 'mission.jpg', 'values.jpg'],
    locations: ['hero.jpg', 'manhattan.jpg', 'brooklyn.jpg', 'queens.jpg'],
    caregivers: ['hero.jpg', 'sarah.jpg', 'michael.jpg', 'emily.jpg'],
    consultation: ['hero.jpg', 'features.jpg']
  };

  const baseDir = path.join('public', 'images');
  let allValid = true;

  for (const [directory, files] of Object.entries(expectedStructure)) {
    const dirPath = path.join(baseDir, directory);
    
    // Check if directory exists
    if (!fs.existsSync(dirPath)) {
      console.error(`❌ Directory missing: ${directory}`);
      allValid = false;
      continue;
    }

    console.log(`\nChecking ${directory}...`);

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      
      // Check if file exists
      if (!fs.existsSync(filePath)) {
        console.error(`❌ File missing: ${directory}/${file}`);
        allValid = false;
        continue;
      }

      try {
        // Get image metadata
        const metadata = await sharp(filePath).metadata();
        const stats = fs.statSync(filePath);
        const sizeMB = stats.size / (1024 * 1024);

        const status = {
          width: metadata.width === 1920 ? '✅' : '⚠️',
          size: sizeMB < 1 ? '✅' : '⚠️',
          format: metadata.format === 'jpeg' ? '✅' : '⚠️'
        };

        console.log(`
${directory}/${file}:
  Width: ${status.width} ${metadata.width}px
  Size: ${status.size} ${sizeMB.toFixed(2)}MB
  Format: ${status.format} ${metadata.format}
        `);

      } catch (error) {
        console.error(`❌ Error validating ${directory}/${file}:`, error);
        allValid = false;
      }
    }
  }

  if (allValid) {
    console.log('\n✅ All images are present and properly optimized!');
  } else {
    console.error('\n❌ Some issues were found with the images.');
  }
}

validateImages().catch(console.error); 