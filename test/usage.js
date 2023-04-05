import {
    database
} from '../src/database.js';

const db = database("../database");

db.createCollection("hello");