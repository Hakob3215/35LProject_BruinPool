import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import './TravelSuggestionsPage.css'; // Make sure to create a corresponding CSS file

function TravelSuggestionsPage() {
  const [travelSuggestions, setTravelSuggestions] = useState([]);
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/SignIn');
    } else {
      setUser(storedUser);
    }
  }, []); // Empty dependency array

  useEffect(() => {
    // Placeholder for fetching travel suggestions from the backend
    fetch('/api/travel-suggestions',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => setTravelSuggestions(data))
      .catch(error => console.error('Error fetching travel suggestions:', error));
  }, []);
  const handleCreateSuggestion = () => {
    navigate('/travel-suggestionspost');
  };


  return (
    <div className="travel-suggestions-page">
      <h1>Travel Suggestions</h1>
      <div className="new-suggestion-container">
        <button className="new-suggestion-button" onClick={handleCreateSuggestion}>Create New Suggestion</button>
      </div>
      {travelSuggestions.length > 0 ? (
        <div className="suggestions-list">
          {travelSuggestions.map(suggestion => (
            <div key={suggestion._id} className="suggestion-item">
              <h2>{suggestion.title}</h2>
              <h5>{(new Date(suggestion.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }))}, {(new Date(suggestion.date).toLocaleTimeString())}</h5>
              <p>{suggestion.content}</p>
              {/* Additional details or a link to the full post could go here */}
            </div>
          ))}
        </div>
      ) : (
        <p>No travel suggestions found.</p>
      )}
    </div>
  );
}

export default TravelSuggestionsPage;
