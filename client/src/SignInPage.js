import React from 'react';
import './SignInPage.css';

function SignInPage() {
  return (
    <div>
      <h2>Sign In Page</h2>
      <form>
        <div className="form-group"> {}
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group"> {}
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" id="signin-button">Sign In</button>
      </form>
    </div>
  );
}

export default SignInPage;
