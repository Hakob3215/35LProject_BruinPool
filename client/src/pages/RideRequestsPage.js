import React, { useState, useEffect } from 'react';
import './RideRequestsPage.css'; // Make sure to create a corresponding CSS file

function RideRequestsPage() {
  const [rideRequests, setRideRequests] = useState([]);

  useEffect(() => {
    // Placeholder for fetching ride requests from the backend
    fetch('/api/ride-requests')
      .then((response) => response.json())
      .then((data) => setRideRequests(data))
      .catch((error) => console.error('Error fetching ride requests:', error));
  }, []);

  return (
    <div className="ride-requests-page">
      <h1>My Ride Requests</h1>
      <ul className="ride-requests-list">
        {rideRequests.length > 0 ? (
          rideRequests.map((request) => (
            <li key={request.id} className="ride-request">
              <h2>{request.destination}</h2>
              <p>Time: {request.time}</p>
              <p>Status: {request.status}</p>
            </li>
          ))
        ) : (
          <p>No ride requests found.</p>
        )}
      </ul>
    </div>
  );
}

export default RideRequestsPage;
