import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import RideRequestsPage from './pages/RideRequestsPage';
import RideHistoryPage from './pages/RideHistoryPage';
import FavoritesPage from './pages/FavoritesPage';
import Friends from './pages/Friends'
import FirstPage from './pages/FirstPage'
import TravelSuggestionsPage from './pages/TravelSuggestionsPage';
import Navbar from './components/navbar';
import './App.css'; // Ensure your global styles are here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element  = {<FirstPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
