import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import './RideRequestsPage.css'; // Make sure to create a corresponding CSS file


function RideRequestsPage() {
  const [rideRequests, setRideRequests] = useState([]);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');


  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/SignIn');
    } else {
      setUser(storedUser);
    }
  }, []); // Empty dependency array

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, send the search parameters to the backend to fetch ride requests
    

    fetch('/api/rides/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date, startTime, endTime, location }),
    }).then((response) => {
      response.json().then((data) => {
        setRideRequests(data);
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
          <input value={date} type="date" name="date" onChange={e => setDate(e.target.value)} />
        </label>
        <label>
          Start Time:
          <input value={startTime} type="time" name="time" onChange={e => setStartTime(e.target.value)} />
        </label>
        <label>
          End Time:
          <input value={endTime} type="time" name="time" onChange={e => setEndTime(e.target.value)}/>
        </label>
        <label>
          Location:
          <select value={location} onChange={e => setLocation(e.target.value)}>
            <option value="LAX">LAX</option>
            <option value="Burbank Airport">Burbank Airport</option>
            <option value="Santa Monica">Santa Monica</option>
          </select>
        </label>
        <button type="submit">Search For Rides</button>
      </form>
    </div>
  );
}

export default RideRequestsPage;
