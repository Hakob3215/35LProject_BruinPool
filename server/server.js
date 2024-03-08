const express = require('express');
const app = express();
const db = require('./utils/db');

userModel = db.user;
travelBlogModel = db.travelBlog;
chatLogModel = db.chatLogs;

const port = 5000;

app.use(express.json());

app.post('/api/users/login', (req, res) => {
  // check if request is received
  console.log('Holy moly, it worked!');
  // check if the data is correctly received
  console.log(req.body.username, req.body.password);
  // check if the corresponding user exists in the database
  userModel.findOne({
    username: req.body.username,
    password: req.body.password
  }).then((user) => {
    // if successful, check if the user exists
    if (user){
      // if the user exists, send a truth response to the client
      console.log('User found');
      res.send(true);
    } else{
      // else send a falsehood response to the client
      console.log('User not found');
      res.send(false);
    }
  }).catch((err) => {
    // catch err
    console.log(err);
  });
});


app.get('/api/travel-suggestions', (req, res) => {
  // Check request received
  console.log('Travel suggestions requested');

  travelBlogModel.find({
  }).then((data) => {
    // Send data 
    if(data){
    console.log("Data Sent");
    res.send(data);
    } else{
      // Data is empty
      console.log("Data not sent");
      res.send(data);   // Empty data
    }
  }).catch((err) => {
    // Catch error
    console.log(err);
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});