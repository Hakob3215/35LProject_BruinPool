import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignInPage from './SignInPage';
import FirstPage from './FirstPage'; 

function App() {
  const [isSignInClicked, setIsSignInClicked] = useState(false);

  const handleSignInClick = () => {
    window.location.href = '/SignInPage';
    setIsSignInClicked(true); 
  };
  let element = <FirstPage handleSignInClick={handleSignInClick} />;

  if (isSignInClicked) {
    element = <SignInPage />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element = {element}

        />
        <Route path="/SignInPage" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;