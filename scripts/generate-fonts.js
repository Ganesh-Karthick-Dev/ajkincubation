const fs = require('fs');
const path = require('path');
const { NodeIO } = require('@gltf-transform/core');
const { FontLoader } = require('three/examples/jsm/loaders/FontLoader');
const { TTFLoader } = require('three/examples/jsm/loaders/TTFLoader');

async function generateFont() {
  // Create fonts directory if it doesn't exist
  const fontsDir = path.join(process.cwd(), 'public', 'fonts');
  if (!fs.existsSync(fontsDir)) {
    fs.mkdirSync(fontsDir, { recursive: true });
  }

  // Download Inter font files
  const fontUrls = [
    {
      url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZs.ttf',
      outputName: 'Inter_Regular.json'
    },
    {
      url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZs.ttf',
      outputName: 'Inter_Bold.json'
    }
  ];

  console.log('Generating font files...');

  for (const font of fontUrls) {
    try {
      console.log(`Downloading ${font.url}...`);
      const response = await fetch(font.url);
      const arrayBuffer = await response.arrayBuffer();
      
      // Convert TTF to typeface JSON
      console.log(`Converting ${font.outputName} to JSON format...`);
      const loader = new TTFLoader();
      const fontData = loader.parse(arrayBuffer);
      
      const fontLoader = new FontLoader();
      const parsedFont = fontLoader.parse(fontData);
      
      // Write to file
      const outputPath = path.join(fontsDir, font.outputName);
      fs.writeFileSync(outputPath, JSON.stringify(parsedFont.data));
      
      console.log(`Generated ${font.outputName}`);
    } catch (error) {
      console.error(`Error processing ${font.outputName}:`, error);
    }
  }

  console.log('Font generation complete!');
}

generateFont().catch(console.error); 