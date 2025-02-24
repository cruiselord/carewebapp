import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

async function generateOgImage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to match OG image dimensions
  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 2, // For better quality
  });

  // Create a simple HTML file with your OG image component
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { margin: 0; }
          .container {
            width: 1200px;
            height: 630px;
            background: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 48px;
            font-family: system-ui;
          }
          .inner {
            width: 100%;
            height: 100%;
            border: 8px solid rgba(85, 107, 47, 0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 32px;
          }
          .title {
            font-size: 60px;
            font-weight: bold;
            color: #556B2F;
            margin-bottom: 32px;
          }
          .description {
            font-size: 30px;
            color: #4A5568;
            text-align: center;
            max-width: 768px;
            margin-bottom: 48px;
          }
          .services {
            display: flex;
            gap: 32px;
            margin-top: 32px;
          }
          .service {
            font-size: 20px;
            color: #DAA520;
            font-weight: 500;
            padding: 12px 24px;
            border: 2px solid #DAA520;
            border-radius: 8px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="inner">
            <div class="title">Glorious Care Inc.</div>
            <div class="description">
              Professional and compassionate senior care services tailored to your loved ones' needs
            </div>
            <div class="services">
              <div class="service">Assisted Living</div>
              <div class="service">Memory Care</div>
              <div class="service">Skilled Nursing</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  await page.setContent(html);

  // Ensure the public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Take a screenshot and save it
  await page.screenshot({
    path: path.join(publicDir, 'og-preview.jpg'),
    quality: 100,
    type: 'jpeg',
  });

  await browser.close();
  console.log('OpenGraph image generated successfully!');
}

generateOgImage().catch(console.error); 