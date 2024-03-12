import React, { useContext, useState, useEffect } from 'react';
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';


import './HomePage.css';

const containerStyle = {
  flex: 1,
  height: '60vh' // Adjust height as needed
};

const center = {
  lat: 34.0689,
  lng: -118.4452
};



function HomePage() {
  const navigate = useNavigate();

  // Simulate checking for an ongoing request with useState
  const [hasRequest, setHasRequest] = useState(false);
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    if(!user){
      const storedUser = JSON.parse(localStorage.getItem('user'));
      setUser(storedUser);
      if(!user){
        navigate('/SignIn');
      }
    }
  }, [user, setUser, navigate]);

  const toggleRequest = () => setHasRequest(!hasRequest);

  return (
    <LoadScriptNext
      googleMapsApiKey="AIzaSyCVnMRYNg4qGPr9gKOmy7GeeQJ98shDunE" // Replace with your Google Maps API key
    >
      <div className="homepage-container">
        <div className="left-sidebar">
          {/* Placeholder for user information */}
          <h2>User Info</h2>
          <p>Welcome, User! Here's some placeholder info.</p>
        </div>
        <div className="map-container">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
          <div className="ride-request-buttons">
            {hasRequest ? (
              <button onClick={toggleRequest} className="cancel-button">Cancel Ride</button>
            ) : (
              <button onClick={toggleRequest} className="request-button">Request Ride</button>
            )}
          </div>
        </div>
        <div className="right-sidebar">
          {/* Placeholder for recent uploads */}
          <h2>Recent Requests</h2>
          <p>Here's some random info about recent ride requests.</p>
        </div>
      </div>
    </LoadScriptNext>
  );
}

export default HomePage;








/*import React, {useContext, useEffect} from 'react';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

import './HomePage.css'; 


function HomePage() {
  const navigate = useNavigate();
  const {user} = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navigate('/SignIn');
    }
  }, [user, navigate]);
  
  const handleScheduleRide = () => {
    // Navigate to the page where users can request a ride
    navigate('/Schedule-ride');
  };

  return (

    <div className="home-page">
      <h1>Welcome to BruinPool, {user ? user.username : "ERR"}!</h1>
      <p>Your go-to platform for carpooling with fellow college students.</p>
      
      <div className="actions">
        <button onClick={handleScheduleRide} className="schedule-ride-btn">Schedule a Ride</button>
      </div>

    </div>
  );
}

export default HomePage;

*/