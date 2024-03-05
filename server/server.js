const express = require('express');
const app = express();
const db = require('./utils/db');

const port = 3000;

count = 0;
const path = require('path');



db.collection('testCollection').insertOne({name: 'testName', age: 25});

app.use(express.static(path.join(__dirname, 'client/build')));


// app.get('/', (req, res) => {
//     count++;
//     res.send('Hello World!, Opened '+ count + ' times');
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/../client/public/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});