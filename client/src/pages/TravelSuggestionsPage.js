import React, { useState, useEffect } from 'react';
import './TravelSuggestionsPage.css'; // Make sure to create a corresponding CSS file

function TravelSuggestionsPage() {
  const [travelSuggestions, setTravelSuggestions] = useState([]);

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

  return (
    <div className="travel-suggestions-page">
      <h1>Travel Suggestions</h1>
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
