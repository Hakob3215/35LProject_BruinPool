import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Assuming you have a CSS file for the HomePage styling

function HomePage() {
  const navigate = useNavigate();

  const handleOfferRide = () => {
    // Navigate to the page where users can offer a ride
    navigate('/offer-ride');
  };

  const handleRequestRide = () => {
    // Navigate to the page where users can request a ride
    navigate('/request-ride');
  };

  return (
    <div className="home-page">
      <h1>Welcome to BruinPool!</h1>
      <p>Your go-to platform for carpooling with fellow college students.</p>
      
      <div className="actions">
        <button onClick={handleOfferRide} className="offer-ride-btn">Offer a Ride</button>
        <button onClick={handleRequestRide} className="request-ride-btn">Request a Ride</button>
      </div>

      {/* Optionally, add more content here such as featured rides, blog posts, etc. */}
    </div>
  );
}

export default HomePage;
