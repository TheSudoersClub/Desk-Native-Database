// function to create a new collection (JSON file) in database
import {
    createCollection
} from './lib/create-collection/createCollection.js';

// data-access functions
import {
    getAllData
} from "./lib/data-access/getAllData.js"

import {
    getDataById
} from "./lib/data-access/getDataById.js"


// desk-native-database
export function database(dbDir) {
    // Database directory path
    const DB_DIR = dbDir;

    // return the functions
    return {
        createCollection: (filename) => createCollection(DB_DIR, filename),
        getAllData: (filename) => getAllData(DB_DIR, filename),
        getDataById: (filename, id) => getDataById(DB_DIR, filename, id)
    };
}