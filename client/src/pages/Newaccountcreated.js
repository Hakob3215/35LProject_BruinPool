import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Newaccountcreated.css';
import './HomePage.js';

function NewAccountCreated() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/Home'); // Assuming '/home' is the route for the Home Page
  };

  return (
    <div className="container">
      <h1>New Account Created!</h1>
      <p>You may continue to the Home Page</p>
      <button onClick={goToHomePage} className="btn">Home Page</button>
    </div>
  );
}

export default NewAccountCreated;