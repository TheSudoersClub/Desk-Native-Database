import {
    database
} from '../src/database.js';

// initialize the database (database dir holds all the json files from the database)
const db = database("../database");

// // create a new collection in database 
// db.createCollection("hello");

// get all the data form the given collection
let data = db.getAllData("hello")
console.log(data)

// get the specific data by its id
let dataById = db.getDataById("hello", 2);
console.log(dataById);