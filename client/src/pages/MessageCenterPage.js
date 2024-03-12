// MessageCenterPage.js
import React, { useState } from 'react';
import './MessageCenterPage.css';

const MessageCenter = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(null);

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const messageInput = event.target.elements.message;
    const newMessage = messageInput.value.trim();
    if (newMessage) {
      setMessages([...messages, { id: Date.now(), text: newMessage }]);
      messageInput.value = '';
    }
  };

  const selectMessage = (index) => {
    setSelectedMessageIndex(index);
  };

  return (
    <div className="message-center-container">
      <div className="message-list">
        <h2>Messages</h2>
        {messages.map((message, index) => (
          <div key={message.id} className="message-preview" onClick={() => selectMessage(index)}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="current-message">
        <h2>Conversation</h2>
        {selectedMessageIndex !== null && (
          <div className="message">
            {messages[selectedMessageIndex].text}
          </div>
        )}
        <form onSubmit={handleMessageSubmit}>
          <input type="text" name="message" placeholder="Type a message..." />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default MessageCenter;
