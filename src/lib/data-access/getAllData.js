import {
    loadJSONFile
} from '../helpers/helpers.js'

// Get all data from a JSON file
export function getAllData(DB_DIR, filename) {
    return loadJSONFile(DB_DIR, filename);
}