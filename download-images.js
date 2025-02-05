const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    filename: 'sarah.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
    filename: 'michael.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    filename: 'lisa.jpg'
  }
];

const downloadImage = (url, filename) => {
  const teamDir = path.join(__dirname, 'public', 'team');
  if (!fs.existsSync(teamDir)) {
    fs.mkdirSync(teamDir, { recursive: true });
  }
  
  const targetPath = path.join(teamDir, filename);
  
  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(targetPath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

// Download all images
images.forEach(img => downloadImage(img.url, img.filename)); 