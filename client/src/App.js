import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import RideRequestsPage from './pages/RideRequestsPage';
import RideHistoryPage from './pages/RideHistoryPage';
import FavoritesPage from './pages/FavoritesPage';
import TravelSuggestionsPage from './pages/TravelSuggestionsPage';
import Navbar from './components/navbar';
import './App.css'; // Ensure your global styles are here

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/requests" element={<RideRequestsPage />} />
        <Route path="/history" element={<RideHistoryPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/travel-suggestions" element={<TravelSuggestionsPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
