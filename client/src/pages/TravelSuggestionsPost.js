// TravelSuggestionsPost.js
import React, { useState } from 'react';
import './TravelSuggestionsPost.css';

function TravelSuggestionsPost() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder for handling form submission
    console.log('Form submitted:', { title, date, time, content });
  };

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
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TravelSuggestionsPost;
