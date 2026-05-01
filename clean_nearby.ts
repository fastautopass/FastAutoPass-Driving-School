import fs from 'fs';
import { ALL_LOCATIONS } from './constants';

const validIds = new Set(ALL_LOCATIONS.map(l => l.id));

let newFileContent = fs.readFileSync('constants.tsx', 'utf8');

ALL_LOCATIONS.forEach(location => {
  const existingNearby = location.nearbyIds || [];
  const validNearby = existingNearby.filter(id => validIds.has(id));
  
  if (existingNearby.length !== validNearby.length) {
    console.log(`Cleaning ${location.id}: [${existingNearby}] -> [${validNearby}]`);
    
    // We need to be careful with string replacement.
    // We'll target the specific line for this location.
    const searchString = `id: '${location.id}'`;
    const lines = newFileContent.split('\n');
    const lineIndex = lines.findIndex(line => line.includes(searchString));
    
    if (lineIndex !== -1) {
      const nearbyMarker = 'nearbyIds: [';
      const startIdx = lines[lineIndex].indexOf(nearbyMarker);
      if (startIdx !== -1) {
          const endIdx = lines[lineIndex].indexOf(']', startIdx);
          const oldPart = lines[lineIndex].substring(startIdx, endIdx + 1);
          const newPart = `nearbyIds: [${validNearby.map(id => `'${id}'`).join(', ')}]`;
          lines[lineIndex] = lines[lineIndex].replace(oldPart, newPart);
      }
    }
    newFileContent = lines.join('\n');
  }
});

fs.writeFileSync('constants.tsx', newFileContent);
console.log('Finished cleaning constants.tsx');
