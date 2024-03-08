import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css'; 
import './Newaccountcreated.js';

function SignUpPage() {
  const navigate = useNavigate();
  // State for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setfullname] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // check if the username, or email, has already been taken/used
    // if it has, return an error message
    
    fetch('/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, fullname, password })
    }).then((response) => {
      // response is a status code
      // 200: user exists
      // 201: email exists
      // 202: both exist
      // 203: neither exist, create user
      switch (response.status) {
        case 200:
          setLoginError('Username already taken!');
          break;
        case 201:
          setLoginError('Email already taken!');
          break;
        case 202:
          setLoginError('Username and email already taken!');
          break;
        case 203:
          setLoginError('');
          navigate('/Newaccountcreated');
          break;
        case 204:
          setLoginError('Invalid email!');
          break;
        default:
          alert('Error: Non 200 status code');
      }}).catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
            required
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
            required
          />
        </div>
        <button type="submit" className="signup-button">Register</button>
        {loginError && <p className="error-message">{loginError}</p>}
      </form>
    </div>
  );
}

export default SignUpPage;
