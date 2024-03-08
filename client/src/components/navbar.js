import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={process.env.PUBLIC_URL + '/BruinPooltemplogo.png'} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/Home" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/requests" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Ride Requests
          </NavLink>
        </li>
        <li>
          <NavLink to="/history" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Ride History
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink to="/travel-suggestions" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Travel Suggestions
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Sign Out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
