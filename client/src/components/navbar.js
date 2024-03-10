import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../UserContext';
import './navbar.css';

function Navbar() {
  const {user} = useContext(UserContext);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={process.env.PUBLIC_URL + '/publiclogo.png'} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/Home" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Schedule-ride" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Schedule Ride
          </NavLink>
        </li>
        <li>
          <NavLink to="/travel-suggestions" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Travel Suggestions
          </NavLink>
        </li>
        <li>
          <NavLink to="/travel-suggestions" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Message Center
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Sign Out
          </NavLink>
        </li>
        <li className = "welcome-message">
          Welcome, {user ? user.username : "ERR"}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
