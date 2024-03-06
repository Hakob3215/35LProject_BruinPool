const express = require('express');
const app = express();
const db = require('./utils/db');

userModel = db.user;
travelBlogModel = db.travelBlog;

const port = 5000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post('/api/users/login', (req, res) => {
  console.log('Holy moly, it worked!');
  console.log(req.body.username, req.body.password);
  userModel.findOne({
    username: req.body.username,
    password: req.body.password
  }).then((user) => {
    if (user){
      console.log('User found');
      res.send(true);
    } else{
      console.log('User not found');
      res.send(false);
    }
  }).catch((err) => {
    console.log(err);
  });
});
