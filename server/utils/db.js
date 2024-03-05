const mongoDB = require('mongodb');
const mongoClient = mongoDB.MongoClient;

console.log("code is running");
const url = "mongodb+srv://hatajyan:xYc3A8BAY2K2PI2X@expressreacttest.gsec3af.mongodb.net/?retryWrites=true&w=majority";
const client = new mongoClient(url);
client.connect().then(() => {
    console.log("Connected to the database: ");
}).catch((err) => {
    console.log("Error: ", err);
});

const db = client.db('testDB');

module.exports = db; // export the database connectiond