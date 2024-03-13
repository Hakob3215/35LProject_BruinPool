import React, { useState } from 'react';
import './MessageCenterPage.css';

const MessageCenterPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    { id: 1, name: 'John Doe', messages: [] },
    { id: 2, name: 'Jane Smith', messages: [] },
    // Add more conversations as needed
  ];

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    const updatedConversations = conversations.map((conversation) =>
      conversation.id === selectedConversation.id
        ? { ...conversation, messages: [...conversation.messages, newMessage.trim()] }
        : conversation
    );
    setSelectedConversation({ ...selectedConversation, messages: [...selectedConversation.messages, newMessage.trim()] });
    setNewMessage('');
  };

  return (
    <div className="message-center-container">
      <div className="sidebar">
        <h2 className="title">Conversations</h2>
        <ul>
          {conversations.map((conversation) => (
            <React.Fragment key={conversation.id}>
              <li onClick={() => handleConversationClick(conversation)}>
                {conversation.name}
              </li>
              <div className="separator"></div>
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className="conversation">
        {selectedConversation ? (
          <>
            <h2 className="title">{selectedConversation.name}</h2>
            {selectedConversation.messages.length > 0 ? (
              <ul>
                {selectedConversation.messages.map((message, index) => (
                  <li key={index} className="message">
                    {message}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No messages yet</p>
            )}
            <div className="message-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </>
        ) : (
          <p className="title">Please select a conversation</p>
        )}
      </div>
    </div>
  );
};

export default MessageCenterPage;
