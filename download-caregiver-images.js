const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    // Maria Rodriguez - Latina caregiver
    url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    filename: 'maria.jpg'
  },
  {
    // David Chen - Asian caregiver
    url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    filename: 'david.jpg'
  },
  {
    // Aisha Williams - Black caregiver
    url: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80',
    filename: 'aisha.jpg'
  },
  {
    // James Kim - Asian caregiver
    url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80',
    filename: 'james.jpg'
  },
  {
    // Sarah Patel - South Asian caregiver
    url: 'https://images.unsplash.com/photo-1590650213165-c1fef80648c4?auto=format&fit=crop&w=800&q=80',
    filename: 'sarah.jpg'
  },
  {
    // Michael Thompson - White caregiver
    url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    filename: 'michael.jpg'
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