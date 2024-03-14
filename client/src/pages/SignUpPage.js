import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css'; 
import './SignInPage.js';

function SignUpPage() {
  const navigate = useNavigate();
  // State for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setfullname] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState(false);

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
      // 204: invalid email
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
          navigate('/SignIn')
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
          <label htmlFor="username" id = "PasswordHeader">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group" id = "PasswordHeader">
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
        <div className="form-group" id = "PasswordHeader" >
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
          <label htmlFor="password" id = "PasswordHeader">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={
              (e) => {
              setPassword(e.target.value);
              // check if the password is valid (8+ characters, 1+ number)
              // if it isn't, set loginError to an error message
              if (e.target.value.length < 8) {
                setLoginError('Password must be at least 8 characters long');
                setPasswordError(true);
              } else if (!/\d/.test(e.target.value)) {
                setLoginError('Password must contain at least one number');
                setPasswordError(true);
              } else {
                setLoginError('');
                setPasswordError(false);
              }
            
            }
          }
            required
          />
        </div>
        <button type="submit" className="signup-button" disabled={passwordError}>Register</button>
        {loginError && <p className="error-message">{loginError}</p>}
        <a href="/" className='back-link' >Back to First Page</a>
      </form>
    </div>
  );
}

export default SignUpPage;
