import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg'; 

function FirstPage({ handleSignInClick }) {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" ></img>
        <p>
          Welcome to Bruin Pool
        </p>
        <nav>
          <Link to="/SignInPage" className="App-link" onClick={handleSignInClick}>Sign In</Link>
        </nav>
      </header>
    </div>
  );
}

export default FirstPage;
