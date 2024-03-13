// TravelSuggestionsPost.js
import React, { useState } from 'react';
import './TravelSuggestionsPost.css';

function TravelSuggestionsPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder for handling form submission
    
    fetch('/api/travelposts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        }
      )
      alert("Successfully posted!")
    }).catch((error) => {
      console.error('Error:', error);
    });

    console.log('Form submitted:', { title, content });

  };

  // When user is done writing post (or wants to exit)
  // Returns user back to TravelSuggestionsPage
  const returnBackToPosts = () => {
    window.location.href = '/travel-suggestions';
  }

  return (
    <div className="travel-suggestions-post">
      <h1>Create New Travel Suggestion</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title of Travel Suggestion:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Write your Suggestion:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            required
          ></textarea>
        </div>
        <div class="button-container">
          <button type="button" onClick={handleSubmit}>Submit</button>
          <button type="button" onClick={returnBackToPosts}>Done</button>
        </div>
      </form>
    </div>
  );
}

export default TravelSuggestionsPost;