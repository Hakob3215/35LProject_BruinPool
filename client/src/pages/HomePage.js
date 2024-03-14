import React, { useContext, useState, useEffect } from 'react';
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const containerStyle = {
  flex: 1,
  height: '60vh',
};

const center = {
  lat: 34.0717,
  lng: -118.4509,
};
const locationsCoordinates = {
  "LAX": { lat: 33.9416, lng: -118.4085 },
  "Burbank Airport": { lat: 34.2015, lng: -118.3597 },
  "Santa Monica": { lat: 34.0195, lng: -118.4912 },
  "LA Union Station": { lat: 34.0562, lng: -118.2363 },
  "UCLA Ackerman Union": { lat: 34.0705, lng: -118.4443 },
  "USC Campus": { lat: 34.0224, lng: -118.2851 },
  "Disneyland": { lat: 33.8121, lng: -117.9190 },
  "Universal Studios": { lat: 34.1381, lng: -118.3534 },
  "Hollywood": { lat: 34.0928, lng: -118.3287 },
  "Venice Beach": { lat: 33.9850, lng: -118.4695 },
  "Crypto.com Arena": { lat: 34.0431, lng: -118.2673 }
};

function convertMinutesToTime(minutes) {
  if (minutes === null || minutes === undefined) return '';

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const period = hours < 12 ? 'AM' : 'PM';

  let formattedHours = hours % 12;
  if (formattedHours === 0) formattedHours = 12; // Adjust 0 hours to 12 for readability

  const formattedMinutes = mins < 10 ? '0' + mins : mins;

  return `${formattedHours}:${formattedMinutes} ${period}`;
}


function HomePage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [requests, setRequests] = useState([]);

  const [hasRequest, setHasRequest] = useState();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/SignIn');
    } else {
      setUser(storedUser);
    }
  }, [setUser, navigate]);

  useEffect(() => {
    fetch('/api/all-requests', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      response.json().then((data) => {
        setRequests(data);
        console.log(data);
      }).catch((error) => {
        console.error('Error:', error);
      });
    }).catch((error) => {
      console.error('Error:', error);
    });
  }, []);

  useEffect(() => {
    if (user && user.username) {
      fetch('/api/check-ride-request', { // Using the new endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: user.username }),
      })
      .then(response => response.json())
      .then(data => {
        // Process the response
        setHasRequest(data.hasRequest);
        if (data.hasRequest) {
          setLocation(data.location);
          // get the current date (not the time)
          const date = new Date(data.date).toISOString().split('T')[0];
          const [year, month, day] = date.split('-'); 
          setDate(`${month}/${day}/${year}`); // Format the date as MM/DD/YYYY
          setStartTime(data.startTime);
          setEndTime(data.endTime);
        } else {
          setLocation('');
          setDate('');
          setStartTime('');
          setEndTime('');
        }
      })
      .catch(error => console.error('Error fetching ride request status:', error));
    }
  }, [user]);

  const handleRequestClick = () => {
    if (hasRequest) {
      fetch('/api/cancel-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: user.username }),
      })
      .then(() => {
        setHasRequest(false);
        setLocation('');
        setDate('');
        setStartTime('');
        setEndTime('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    } else {
      navigate('/requests');
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
            center={locationsCoordinates[location] || center}
            zoom={15}
          >
            {locationsCoordinates[location] && (
              <Marker position={locationsCoordinates[location]} />
            )}
          </GoogleMap>
          <div className="ride-request-buttons">
            {hasRequest ? (
              <>
                <button onClick={handleRequestClick} className="cancel-button">Cancel Ride</button>
                <p className="current-request-info">Current Request is for {location} on {date} from {convertMinutesToTime(startTime)} to {convertMinutesToTime(endTime)}.</p>
              </>
            ) : (
              <button onClick={handleRequestClick} className="request-button">Request Ride</button>
            )}
          </div>
        </div>
        <div className="right-sidebar">
          <h2>Recent Requests</h2>
          {requests.map((request, index) => 
             request.username !== user.username ? (
              <div key={index}>
              <h4>{request.username}</h4>
              <p>{request.location}</p>
              <p>{request.date.split('T')[0]}</p>
              <p>{convertMinutesToTime(request.startTime)} - {convertMinutesToTime(request.endTime)}</p>
              <br></br>
        </div>
  ) : (
    // Do nothing if the request is the user's own request
    null
  )
)}
        </div>
      </div>
    </LoadScriptNext>
  );
}


export default HomePage;





