const fs = require('fs')
const path = require('path')

// Create a new JSON file with an empty array
function createCollection(DB_DIR, filename) {
    const filePath = path.join(DB_DIR, `${filename}.json`);
    const data = [];
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// export module
module.exports = createCollection;