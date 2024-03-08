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
import NewAccountCreated from './pages/Newaccountcreated';
import Navbar from './components/navbar';

import './App.css'; // Ensure your global styles are here
import { UserProvider } from './UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
      <Routes>
        <Route path="/" element  = {<FirstPage />} />
        <Route path="/SignIn" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Newaccountcreated" element={<NewAccountCreated/>} />
        <Route path="/Home" element={<> <Navbar />  <HomePage/> </> }/>
        <Route path="/requests" element={<> <Navbar />  <RideRequestsPage/> </>} />
        <Route path="/history" element={<> <Navbar /><RideHistoryPage/> </>} />
        <Route path="/Friends" element={<> <Navbar /><Friends/> </>} />
        <Route path="/favorites" element={<> <Navbar /> <FavoritesPage/> </>} />
        <Route path="/travel-suggestions" element={<> <Navbar /><TravelSuggestionsPage/> </>} />
        {/* Add more routes as needed */}
      </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;