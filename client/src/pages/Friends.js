import React, { useState, useEffect } from 'react';
import './Friends.css'; // Make sure to create a corresponding CSS file

function Friends() {
  const [Friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState({ name: '', phoneNumber: '' });

  useEffect(() => {
    // Placeholder for fetching ride history from the backend
    fetch('/api/friends')
      .then((response) => response.json())
      .then((data) => setFriends(data))
      .catch((error) => console.error('Error fetching friends:', error));
  }, []);

  const handleInputChange = (event) => {
    setNewFriend({ ...newFriend, [event.target.name]: event.target.value });
  };

  const handleAddFriend = () => {
    // Add logic to save newFriend to your backend
    setNewFriend({ name: '', phoneNumber: '' });
  };

  return (
    <div className="friends-page">
      <h1>My Friends</h1>
      <div>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleInputChange}
          placeholder="Friend's Name"
        />
        <input
          type="text"
          name="phoneNumber"
          value={newFriend.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
        <button onClick={handleAddFriend}>Add Friend</button>
      </div>
      <ul className="friends-list">
        {Friends.length > 0 ? (
          Friends.map((friend) => (
            <li key={friend.id} className="friends-item">
              {friend.name} - {friend.phoneNumber}
            </li>
          ))
        ) : (
          <li>No friends added yet.</li>
        )}
      </ul>
    </div>
  );
}

export default Friends;