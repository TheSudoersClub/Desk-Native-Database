import {
    loadJSONFile
} from '../helpers/helpers.js'

// Get a single data object from a JSON file by ID
export function getDataById(DB_DIR, filename, id) {
    const data = loadJSONFile(DB_DIR, filename);
    return data.find(d => d.id === id);
}