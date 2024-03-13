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
    // Returns user back to TravelSuggestionsPage
      window.location.href = '/travel-suggestions';
    }).catch((error) => {
      console.error('Error:', error);
    });

    console.log('Form submitted:', { title, content });

  };


  return (
    <div className="travel-suggestions-post">
      <h1>Create New Travel Suggestion</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label id = "l2">Title of Travel Suggestion:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label id = "l2" >Write your Suggestion:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            required
          ></textarea>
        </div>
        <div class="button-container">
          <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default TravelSuggestionsPost;
