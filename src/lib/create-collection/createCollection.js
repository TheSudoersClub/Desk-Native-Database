import fs from 'fs';
import path from 'path';

// Create a new JSON file with an empty array
export function createCollection(DB_DIR, filename) {
    const filePath = path.join(DB_DIR, `${filename}.json`);
    const data = [];
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}