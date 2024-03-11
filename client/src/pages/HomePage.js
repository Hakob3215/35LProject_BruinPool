import React, {useContext, useEffect} from 'react';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

import './HomePage.css'; 


function HomePage() {
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext);


  useEffect(() => {
    if (!user){
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
    if (!storedUser) {
      navigate('/SignIn');
    }
  }
  }, [user, navigate, setUser]);
  
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
