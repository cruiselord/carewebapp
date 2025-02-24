const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport to match OG image dimensions
  await page.setViewport({ width: 1200, height: 630 });
  
  // Load the HTML file
  await page.goto(`file:${path.join(__dirname, '../public/og-template.html')}`);
  
  // Take the screenshot
  await page.screenshot({
    path: path.join(__dirname, '../public/og-preview.jpg'),
    quality: 100,
    type: 'jpeg'
  });

  await browser.close();
  console.log('OpenGraph image generated successfully!');
})().catch(console.error); 