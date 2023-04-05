// function to create a new collection (JSON file) in database
import {
    createCollection
} from './lib/create-collection/createCollection.js';

// desk-native-database
export function database(dbDir) {
    // Database directory path
    const DB_DIR = dbDir;

    // return the functions
    return {
        createCollection: (filename) => createCollection(DB_DIR, filename)
    };
}