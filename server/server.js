const express = require('express');
const validator = require('validator');
const bcrypt = require('bcrypt');

const app = express();
const db = require('./utils/db');

userModel = db.user;
travelBlogModel = db.travelBlog;
chatLogModel = db.chatLogs;

const port = 5000;

app.use(express.json());


// handle login request
app.post('/api/users/login', (req, res) => {
  // check if request is received
  console.log('Sign In request received');
  // check if the data is correctly received
  console.log(req.body.username, req.body.password);
  // check if the corresponding user exists in the database
  userModel.findOne({
    username: req.body.username,
  }).then((user) => {
    // if successful, check if the user exists
    if (user){
      // if the user exists, check if the password is correct
      console.log('User found');
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err){
          console.log(err);
        }
        // if the password is correct, send the non-sensitive corresponding user data to the client
        if (result){
          let userObj = {
            username: user.username,
            email: user.email,
            fullname: user.fullname
          }
          res.send(userObj);
        } else{
          // else send a falsehood response to the client
          res.send(false);
        }
      });
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

// handle travel request page opening
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

// handle sign up request
app.post('/api/users/signup', async (req, res) => {
  console.log('Sign Up request received');
  let usertaken = false;
  let emailtaken = false;
  await userModel.findOne({
    username: req.body.username
  }).then((user) => {
    if(user){
      usertaken = true;
    }
  }).catch((err) => {
    console.log(err);
  });

  await userModel.findOne({
    email: req.body.email
  }).then((email) => {
    if(email){
      emailtaken = true;
    }
  }).catch((err) => {
    console.log(err);
  });

  // response codes:
  // 200: user exists
  // 201: email exists
  // 202: both exist
  // 203: neither exist, create user
  // 204: invalid email

  if (usertaken && emailtaken) {
    res.sendStatus(202);
    return;
  }
  if (usertaken) {
    res.sendStatus(200);
    return;
  }
  if (emailtaken) {
    res.sendStatus(201);
    return;
  }

  // check if the email is valid
  if (!validator.isEmail(req.body.email)) {
    res.sendStatus(204);
    return;
  }

  let newUser = new userModel({
    username: req.body.username,
    email: req.body.email,
    fullname: req.body.fullname,
    password: req.body.password
  });
  newUser.save().then(() => {
    console.log('User created');
    res.sendStatus(203);
  }).catch((err) => {
    console.log(err);
  });
});


// handle new posts
app.post('/api/travelposts', async (req, res) => {
  console.log("Request received");
  let newPost = new travelBlogModel({
    title: req.body.title,
    content: req.body.content,
    date: new Date()
  });
  newPost.save().then(() => {
    console.log('Post saved');
    res.send(true);
  }).catch((err) => {
    console.log(err);
  });
});

// response to ride search
app.post('/api/rides/search', (req, res) => {

  // convert the time of the request to minutes (easier to compare)
  let [hours, minutes] = req.body.startTime.split(':').map(Number);
  let startTimeInMinutes = hours * 60 + minutes;
  [hours, minutes] = req.body.endTime.split(':').map(Number);
  let endTimeInMinutes = hours * 60 + minutes;
  
  // convert the date string to a date object (range of dates from 00:00 to 23:59)
  let startDate = new Date(req.body.date);
  let endDate = new Date(req.body.date);
  endDate.setDate(endDate.getDate() + 1);

  // get username to avoid matching with the user's own request (just in case!)
  curUserName = req.body.user.username;
  

  // find all users that share the location+date+intersect with the time range
  userModel.find({
    username: {$ne: curUserName},
    date: {$gte: startDate, $lt: endDate},
    startTime: {$lte: endTimeInMinutes},
    endTime: {$gte: startTimeInMinutes},
    location: req.body.location
  }).then((data) => {    
    res.send(data);
  }).catch((err) => {
    console.log('Error!:', err);
  });

  // update the user's request in the database
  userModel.updateOne(
    {username: curUserName},
    { $set: {
      date: startDate,
      startTime: startTimeInMinutes,
      endTime: endTimeInMinutes,
      location: req.body.location
    }}, {new: true}
  ).catch((err) => {
    console.log('Error!:', err);
  });


});

// handle new chatroom creation
app.post('/api/new-chat', (req, res) => {
  // sort the username so that duplicates are avoided (ie; user1-user2 and user2-user1 are the same chatroom)
  let users = [req.body.user.username, req.body.otherUser.username].sort();

  chatLogModel.findOne({
    users: users
  }).then((chatroom) => {
    if (chatroom){
      // if the chatroom already exists, update its last message time
      chatroom.lastMessage = new Date();
      chatroom.save().then(() => {
        console.log('Chatroom updated');
        res.send(false);
      }).catch((err) => {
        console.log(err);
      });
      return;
    } else{
      // if the chatroom does not exist, create a new chatroom
      res.send(true);
        let newChatroom = new chatLogModel({
          users: users,
          messages: []
        });
      newChatroom.save().then(() => {
        console.log('Chatroom created');
      }).catch((err) => {
        console.log(err);
      });

    }
  })
});

// handle request status when home page is opened
app.post('/api/request-status', (req, res) => {
  userModel.findOne({
    username: req.body.user.username
  }).then((user) => {
    res.send({hasRequest: (user.date != null),
      location: user.location,
      date: user.date,
      startTime: user.startTime,
      endTime: user.endTime
    });
  }).catch((err) => {
    console.log(err);
  });
});

// handle request cancellation
app.post('/api/cancel-request', (req, res) => {
  const username = req.body.username; // Adjusted to a possibly corrected structure based on your frontend
  userModel.updateOne(
    { username: username },
    { $set: { date: null, startTime: null, endTime: null, location: null }}
  )
  .then(result => {
    if (result.modifiedCount === 0) {
      // No document was modified, which means user wasn't found or already had null values
      return res.status(404).json({ message: "User not found or request already canceled." });
    }
    // Successfully updated the user document
    res.json({ message: "Ride request canceled successfully." });
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({ message: 'Error canceling the ride request.' });
  });
});

// handle chatroom page opening 
app.post('/api/message-center/chat-users', (req, res) => {
  // get the chatroom data
  chatLogModel.find({
    // find the chatrooms that the user is a part of
    users: {$in: [req.body.user.username]}
  }).then((data) => {
    const userList = data.map((chatroom) => {
      // find the other user in the chatroom
      const otherUser = chatroom.users.find((user) => user !== req.body.user.username);
      // find the time of the last message
      const lastMessage = chatroom.lastMessage;
      return {otherUser, lastMessage};
    });
    // sort the chatrooms by the time of the last message from latest to oldest
    userList.sort((a, b) => new Date(b.lastMessage).getTime() - new Date(a.lastMessage).getTime());
    res.send(userList);
  }).catch((err) => {
    console.log(err);
  });
});

// handle chatroom message opening
app.post('/api/message-center/chat-messages', (req, res) => {
  chatLogModel.findOne({
    users: {$all: [req.body.user.username, req.body.otherUser]}
  }).then((chatlog) => {
    res.send(chatlog.messages);
  }).catch((err) => {
    console.log(err);
  });
  });

// handle chatroom message sending
app.post('/api/message-center/send-message', (req, res) => {
  console.log("Message received!: ", req.body.content);
  chatLogModel.findOneAndUpdate({
    users: {$all: [req.body.user.username, req.body.otherUser]}
  }, {
    $push: {
      messages: {
        sender: req.body.user.username,
        content: req.body.content,
        timestamp: new Date()
      }
    },
    $set: {
      lastMessage: new Date()
    }
  }, {new: true}
  ).then(updatedChatlog => {
    if(!updatedChatlog){
      res.send([]);
      return;
    }
    res.send(updatedChatlog.messages);
  }).catch((err) => {
    console.log(err);
  });
});

//homepage button
  app.post('/api/check-ride-request', async (req, res) => {
    const { username } = req.body;
    try {
      const foundUser = await userModel.findOne({ username: username });
      if (foundUser && foundUser.location) { // Assuming location being non-empty signifies an active request
        res.json({
          hasRequest: true,
          location: foundUser.location,
          date: foundUser.date,
          startTime: foundUser.startTime,
          endTime: foundUser.endTime
        });
      } else {
        res.json({ hasRequest: false });
      }
    } catch (err) {
      console.error('Error checking ride request:', err);
      res.status(500).send('Internal Server Error');
    }
  });
  


app.listen(port, () => {
  console.log(`BruinLearn listening at http://localhost:${port}`);
});