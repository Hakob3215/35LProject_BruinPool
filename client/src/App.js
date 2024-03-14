import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import RideRequestsPage from './pages/RideRequestsPage';
import FirstPage from './pages/FirstPage'
import MessageCenterPage from './pages/MessageCenterPage';
import Navbar from './components/navbar';
import TravelSuggestionsPage from './pages/TravelSuggestionsPage';
import TravelSuggestionPost from './pages/TravelSuggestionsPost';

import './App.css'; 
import { UserProvider } from './UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
      <Routes>
        <Route path="/" element  = {<FirstPage />} />
        <Route path="/SignIn" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Home" element={<> <Navbar />  <HomePage/> </> }/>
        <Route path="/requests" element={<> <Navbar />  <RideRequestsPage/> </>} />
        <Route path="/travel-suggestions" element={<> <Navbar /><TravelSuggestionsPage/> </>} />
        <Route path="/message-center" element={<> <Navbar /><MessageCenterPage/> </>} />
        <Route path="/travel-suggestionspost" element={<> <Navbar /><TravelSuggestionPost/> </>} />

        

        {}
      </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;