const express = require('express');
const app = express();
const db = require('./utils/db');

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


