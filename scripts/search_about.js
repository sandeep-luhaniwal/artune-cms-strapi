const fs = require('fs');
const path = require('path');

const targetFile = 'd:\\delaine\\artune-frontend\\src\\utils\\apiCaller.ts';
if (fs.existsSync(targetFile)) {
  const content = fs.readFileSync(targetFile, 'utf8');
  const lines = content.split('\n');
  console.log(`--- Lines 190 to 250 in ${targetFile} ---`);
  for (let i = 190; i < Math.min(lines.length, 250); i++) {
    console.log(`${i + 1}: ${lines[i]}`);
  }
} else {
  console.log('File not found:', targetFile);
}
