// function to create a new collection (JSON file) in database
const createCollection = require('./lib/create-collection/createCollection.js');

// data-access functions
const getAllData = require("./lib/data-access/getAllData.js");

const getDataById = require("./lib/data-access/getDataById.js");

// data-manipulation functions

//  addData (insert)
const addData = require('./lib/data-manipulation/insert.js');


//  updateData(update)
const updateData = require('./lib/data-manipulation/update.js');


//  deleteData (delete)  
const deleteData = require('./lib/data-manipulation/delete.js');


// desk-native-database
function database(DB_DIR) {

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

// export module
module.exports = database;