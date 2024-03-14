<h1 align="center">
  <br>
  <img src="client/public/publiclogo.png" alt="BruinPool" width="200"></a>
  <br>
  <b>BruinPool</b>
  <br>
</h1>

Public Repository Link for History:
https://github.com/Hakob3215/35LProject_BruinPool

BruinPool is a full stack web application designed to connect UCLA students to ride sharing opportunities based on matching times and common destinations. 



## Features
* **Make a Request:** Users can send out their rideshare request based on date, start time, end time, and location. 
* **Find a Match:** Users can match with other users who want to go to the same place at a similar time.
* **Message Your Matched Rider:** Once matched, users can message their matched rider within the app to communicate ride details.
* **Community Blog:** Anyone can post their travel suggestions on the Travel Suggestions blog.

## Tech Stack
* JavaScript
* Node.js
* React.js
* Express.js
* MongoDB/Mongoose

## How to Run the App Locally

### Getting Started
Download or clone the [35LProject_BruinPool](https://github.com/Hakob3215/35LProject_BruinPool) repository to your local machine. 

### Backend (Server side)
It is crucial that you set up the backend of the repository first before running anything on the client side. 

#### Setup
* In the terminal, navigate to the server directory:
```
cd server
```

The backend relies of several dependencies, notably Express.js and Mongoose (from MongoDB). 
* Install the necessary `node_modules` by running:
```
npm install
```
#### Connecting to the Database
You will need to add a database for MongoDB to connect to:

Firstly, you will need to create a `.env` file within the /server/ directory. Within that file add the following line:

```
MONGO_CONNECTION_STRING=[MongoURL here]
```

In the spot `[MongoURL here]`, you must add either our existing database:

```
LOOK INSIDE HAKOB ATAJYAN'S FINAL REPORT FOR LINK
```

Or create a new one of your own through MongoDB's Atlas cloud hosting system. To do so, follow these steps:

Follow this URL for MongoDB Atlas:
```
https://www.mongodb.com/atlas/database
```

And click `Try Free` or `Sign In`, if you already have an account. Once you are signed in, you can accept the terms if you just created an account. Additionally, answer the user questions given to proceed.

Afterwards, you should either be given the option to `Create a Deployment`, or you will already be in the `Deploy your database` screen. Once their, be sure to select the free tier, and set the rest of the settings to your preferences.

Afterwards, you should click `create/deploy database`, and once you do so, you should be given the option to create a user for the database. Be sure to keep the password in this section saved in a safe area, before proceeeding. After you create the user, click `Connect to Cluster/Database` and you should see numerous options. Click `Drivers`, and copy the connection URI shown. If the password is hidden, replace the `<password>` portion of the string with the password you saved earlier. 

Now place this string in the `[MongoURL here]` portion from earlier, inside server/.env

Also just to be sure, under `Network Access`, be sure to add your current IP address if not already inside. Alternatively, you can add a new IP, and click `Allow Access from Anywhere` to add a global IP, but only do this if you are sure.

After you do either these steps, or use the database provided in the report, you should be able to connect to the database through your URL.

Note that if you are using the provided URL, you can use an account with username and password both: `test` to log-in easily. Alternatively, you can create a new user as well.


#### Running the Backend
To start the server, run: 
```
npm start
```
The backend will run on http://localhost:5000. 
* On MacOS, port 5000 may be in use due to AirPlay. Go into **System Settings > General > AirDrop & Handoff** to disable the AirPlay Receiver.

Once successfully connected, the terminal should display the following:
```
BruinPool listening at http://localhost:5000
Database Connected
```

### Frontend (Client side)
It is crucial that the backend of the repository is fully set up before running anything on the client side. 

#### Setup
* In a new terminal, navigate to the client directory:
```
cd client
```

The backend relies of several dependencies, including React.js.
* Install the necessary `node_modules` by running:
```
npm install
```

#### API Key
Similar to the backend, there is a Google Maps API key that is in use for the `HomePage.js` file. To properly set this API key up, follow these steps:

Inside the client directory, create a new `.env` file. Inside this file, insert the following line:
'''REACT_APP_GOOGLE_MAPS_API_KEY=[GET API KEY FROM HAKOB'S FINAL REPORT]'''

If you have your own API_KEY, you can insert it instead of `[GET API KEY FROM HAKOB'S FINAL REPORT]`.

#### Running the Frontend
To start the client, run: 
```
npm start
```
The frontend will run on http://localhost:3000. This will automatically launch the page in the browser.

<br/><br/>


## About the Project

**BruinPool**  
CS 35L, Winter 2024  
UCLA  

**Team**  
Hakob Atajyan - Hakob3215  
Arthur Baghdasian - underlyingtech21  
Eric Chakhoyan - echa2162  
Ajay Krishnan - amkrishnan28  
Alan Lin - alanlin0068  

**Appendix**  
README Layout & organization reference: https://github.com/bliutech/RendeYou  
