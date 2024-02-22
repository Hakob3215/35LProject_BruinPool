const express = require('express');
const app = express();
const port = 3000;
count = 0;

app.get('/', (req, res) => {
    count++;
    res.send('Hello World!, Opened '+ count + ' times');
});

app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port} Very Cool!');
});