import React, { useContext, useState, useEffect } from 'react';
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const containerStyle = {
  flex: 1,
  height: '60vh', // Adjust height as needed
};

const center = {
  lat: 34.0689,
  lng: -118.4452,
};

function HomePage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  // HAKOB, when useState is set to false, the button is Request Ride, when useState is set to true, it shows Cancel
  // IDK do some API magic to make sure it sets the right boolean here.
  const [hasRequest, setHasRequest] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/SignIn');
    } else {
      setUser(storedUser);
    }
  }, []); // Empty dependency array

  const handleRequestClick = () => {
    if (hasRequest) {

      window.location.reload(); // Refresh the page after canceling the request
    } else {
      navigate('/requests'); // Navigate to RequestRide page if there's no ongoing request
    }
  };

  return (
    <LoadScriptNext googleMapsApiKey="AIzaSyCVnMRYNg4qGPr9gKOmy7GeeQJ98shDunE">
      <div className="homepage-container">
        <div className="left-sidebar">
          <h2>Welcome, {user ? user.fullname : "Guest"}!</h2>
          <h3>Getting Started:</h3>
          <ul>
            <li><strong>Request a Ride:</strong> Click the "Request Ride" button below the map. Enter your destination and preferred time.</li>
            <li><strong>Find a Match:</strong> Look at the "Recent Requests" section on the right sidebar for potential ride matches.</li>
            <li><strong>Chat and Coordinate:</strong> After finding a match, use the messaging feature to discuss details like pickup points and shared costs.</li>
          </ul>
          <p>Use these features to connect with fellow users, plan your rides, and contribute to our community's eco-friendly travel initiatives!</p>
        </div>
        <div className="map-container">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
          >
            <Marker position={center} />
          </GoogleMap>
          <div className="ride-request-buttons">
            {hasRequest ? (
              <button onClick={handleRequestClick} className="cancel-button">Cancel Ride</button>
            ) : (
              <button onClick={handleRequestClick} className="request-button">Request Ride</button>
            )}
          </div>
        </div>
        <div className="right-sidebar">
          <h2>Recent Requests</h2>
          <p>Here's some random info about recent ride requests.</p>
        </div>
      </div>
    </LoadScriptNext>
  );
}

export default HomePage;












