import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import './RideRequestsPage.css'; // Make sure to create a corresponding CSS file


function convertMinutesToTime(minutes) {
  let hours = Math.floor(minutes / 60);
  let mins = minutes % 60;
  let period = hours < 12 ? 'AM' : 'PM';

  if (hours === 0) {
      hours = 12;
  } else if (hours > 12) {
      hours -= 12;
  }

  // Pad minutes with a zero if below 10
  mins = mins < 10 ? '0' + mins : mins;

  return `${hours}:${mins} ${period}`;
}


function RideRequestsPage() {
  const [rideRequests, setRideRequests] = useState([]);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');

  const [hasSearched, setHasSearched] = useState(false);


  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/SignIn');
    } else {
      setUser(storedUser);
    }
  }, [navigate, setUser]); // Empty dependency array

  const handleSelectRide = (otherUser) => {
    // Here, send the selected ride request to the backend to create a chat room
    fetch('/api/new-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, otherUser }),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        navigate('/message-center');
      })}).catch((error) => { 
        console.error('Error:', error);
      });

};

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, send the search parameters to the backend to fetch ride requests

    setHasSearched(true);
    // For the message on screen

    fetch('/api/rides/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, date, startTime, endTime, location }),
    }).then((response) => {
      response.json().then((data) => {
        const newRequests = data.map(request => ({
          username: request.username,
          date: request.date,
          startTime: convertMinutesToTime(request.startTime),
          endTime: convertMinutesToTime(request.endTime),
          location: request.location
        }));
      setRideRequests(newRequests);

      });
    }).catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="ride-requests-page">
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input value={date} type="date" name="date" onChange={e => setDate(e.target.value)} required/>
        </label>
        <label>
          Start Time:
          <input value={startTime} type="time" name="time" onChange={e => setStartTime(e.target.value)} required/>
        </label>
        <label>
          End Time:
          <input value={endTime} type="time" name="time" onChange={e => setEndTime(e.target.value)} required/>
        </label>
        <label>
          Location:
          <select value={location} onChange={e => setLocation(e.target.value)} required>
            <option value="">Select a location</option>
            <option value="LAX">LAX</option>
            <option value="Burbank Airport">Burbank Airport</option>
            <option value="Santa Monica">Santa Monica</option>
          </select>
        </label>
        <button type="submit">Search For Rides</button>
      </form>
      <div className= "ride-requests-list">
        {rideRequests.length > 0 ? (
          <div>
            <h2>Ride Requests</h2>
            {rideRequests.map(request => (
              <div key={request.username} className="ride-request-item">
                <h4>{request.username}</h4>
                <h4>Date: {new Date(request.date).toISOString().split('T')[0]}</h4>
                <h4>Time: {request.startTime} - {request.endTime}</h4>
                <h4>Location: {request.location}</h4>
                <button onClick={() => handleSelectRide(request)}>Select Ride</button>
              </div>
            ))}
          </div>
        ) : (
          hasSearched ? <h2> No Requests Found </h2> : <h2> Please select a ride location and time </h2>
        )}
      </div>
    </div>
  );
}

export default RideRequestsPage;
