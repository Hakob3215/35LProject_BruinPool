// MessageCenter.js
import React, { useState } from 'react';
import './MessageCenterPage.css';

const MessageCenter = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const messageInput = event.target.elements.message;
    const newMessage = messageInput.value.trim();
    if (newMessage) {
      setMessages([...messages, newMessage]);
      messageInput.value = '';
    }
  };

  return (
    <div className="message-center">
      <h2>Message Center for Carpools</h2>
      <form onSubmit={handleMessageSubmit}>
        <input type="text" name="message" placeholder="Type a message..." />
        <button type="submit">Send</button>
      </form>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageCenter;
