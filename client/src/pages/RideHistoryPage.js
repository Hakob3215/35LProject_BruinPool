import React, { useState, useEffect } from 'react';
import './RideHistoryPage.css'; // Make sure to create a corresponding CSS file

function RideHistoryPage() {
  const [rideHistory, setRideHistory] = useState([]);

  useEffect(() => {
    // Placeholder for fetching ride history from the backend
    fetch('/api/ride-history')
      .then((response) => response.json())
      .then((data) => setRideHistory(data))
      .catch((error) => console.error('Error fetching ride history:', error));
  }, []);

  return (
    <div className="ride-history-page">
      <h1>My Ride History</h1>
      <ul className="ride-history-list">
        {rideHistory.length > 0 ? (
          rideHistory.map((ride) => (
            <li key={ride.id} className="ride-history-item">
              <h2>{ride.date} - {ride.destination}</h2>
              <p>Driver: {ride.driver}</p>
              <p>Passengers: {ride.passengers.join(', ')}</p>
            </li>
          ))
        ) : (
          <p>No ride history found.</p>
        )}
      </ul>
    </div>
  );
}

export default RideHistoryPage;
