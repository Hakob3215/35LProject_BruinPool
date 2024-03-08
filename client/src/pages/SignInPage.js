import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css'; // Make sure to create a corresponding CSS file
import './HomePage.js';

function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert('Please fill in both fields.');
      return;
    }
    // Here  send the credentials to the backend for verification
    // using mongoose, fetch the username and password from the database
    
    // how to send the username and password to the backend?
    fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => {
      response.json().then((data) => {
        if (data){
          setLoginError('');
          navigate('/Home');
          // handle login here
        } else {
            setLoginError('We couldn’t find an account with that username and password. Please try again.');
        }
        }
      )
    }).catch((error) => {
      console.error('Error:', error);
    });

    console.log('Submitting', { username, password });
  
  };

  return (
    <>
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="signin-button">Sign In</button>
        {loginError && <p className="error-message">{loginError}</p>}
      </form>
    </div>
    
    </>
  );
}

export default SignInPage;
