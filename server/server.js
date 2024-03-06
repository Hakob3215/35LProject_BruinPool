const express = require('express');
const app = express();
const db = require('./utils/db');

const port = 5000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post('/api/users/login', (req, res) => {
  console.log('Holy moly, it worked!')
  console.log(req.body.username);
  res.send('POST request to the homepage')
});
