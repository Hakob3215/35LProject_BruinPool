BruinPool
===

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
* MongoDB

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
You will need to connect your IP address to the MongoDB database in order to establish the backend connection.
<insert stuff here>  


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
* In the terminal, navigate to the client directory:
```
cd client
```

The backend relies of several dependencies, including React.js.
* Install the necessary `node_modules` by running:
```
npm install
```

#### API Key
<insert stuff about API key, dtabase mongo!!!></insert>


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
Hakob Atajyan  
Arthur Baghdasian  
Eric Chakhoyan  
Ajay Krishnan  
Alan Lin  

**Appendix**  
README Layout & organization reference: https://github.com/bliutech/RendeYou  
