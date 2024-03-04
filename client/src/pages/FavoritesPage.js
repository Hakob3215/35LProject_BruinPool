import React, { useState, useEffect } from 'react';
import './FavoritesPage.css'; // Make sure to create a corresponding CSS file

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Placeholder for fetching favorite drivers from the backend
    fetch('/api/favorites')
      .then((response) => response.json())
      .then((data) => setFavorites(data))
      .catch((error) => console.error('Error fetching favorites:', error));
  }, []);

  return (
    <div className="favorites-page">
      <h1>My Favorite Drivers</h1>
      <ul className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map((driver) => (
            <li key={driver.id} className="favorite-item">
              <h2>{driver.name}</h2>
              <p>Contact: {driver.contact}</p>
              {/* Additional information like ratings or reviews could go here */}
            </li>
          ))
        ) : (
          <p>No favorites found.</p>
        )}
      </ul>
    </div>
  );
}

export default FavoritesPage;
