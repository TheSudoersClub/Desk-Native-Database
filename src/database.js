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

// data-manipulation functions
import {
    //  addData (insert)
    addData
} from './lib/data-manipulation/insert.js';

import {
    //  updateData (update)
    updateData
} from './lib/data-manipulation/update.js';

import {
    //  deleteData (delete)
    deleteData
} from './lib/data-manipulation/delete.js';


// desk-native-database
export function database(dbDir) {
    // Database directory path
    const DB_DIR = dbDir;

    // return the functions
    return {
        createCollection: (filename) => createCollection(DB_DIR, filename),
        getAllData: (filename) => getAllData(DB_DIR, filename),
        getDataById: (filename, id) => getDataById(DB_DIR, filename, id),
        addData: (filename, newData) => addData(DB_DIR, filename, newData),
        updateData: (filename, id, newData) => updateData(DB_DIR, filename, id, newData),
        deleteData: (filename, id, fields) => deleteData(DB_DIR, filename, id, fields)
    };
}