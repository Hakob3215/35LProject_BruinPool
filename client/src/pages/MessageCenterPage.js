import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import './MessageCenterPage.css';

const MessageCenterPage = () => {
  const [selectedConversation, setSelectedConversation] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [conversations, setConversations] = useState([]);
  const [currentChatUser, setCurrentChatUser] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // const conversations = [
  //   { id: 1, name: 'John Doe', messages: [] },
  //   { id: 2, name: 'Jane Smith', messages: [] },
  //   // Add more conversations as needed
  // ];

// if the user is not signed in, redirect to the sign in page
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/SignIn');
    } else {
      setUser(storedUser);
    }
  }, []); // Empty dependency array

// gather all the conversations that the user is a part of
  useEffect(() => {
    if (!user) {
      return;
    }
    fetch('/api/message-center/chat-users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user })
    }).then((response) => {
      response.json().then((data) => {
        setConversations(data);
      }).catch((error) => {
        console.error('Error:', error);
      });
    }).catch((error) => {
      console.error('Error:', error);
    });
  }, [user, selectedConversation]);

  const handleConversationClick = (conversation) => {
    // time to fetch the messages from the backend
    setCurrentChatUser(conversation.otherUser);
    fetch('/api/message-center/chat-messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, otherUser: conversation.otherUser })
    }).then((response) => {
      response.json().then((data) => {
        // the response is an array of messages with: sender, content, and timestamp
        setSelectedConversation(data);
      }).catch((error) => {
        console.error('Error:', error);
      });
    }).catch((error) => {
      console.error('Error:', error);
    });
  };

  const handleSendMessage = (currentMessage) => {
    // if the submit box is empty, don't send the message
    if (currentMessage.trim() === '') return;

    // else its time to send the message to the backend
    fetch('/api/message-center/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, otherUser: currentChatUser, content: newMessage })
    }).then((response) => {
      response.json().then((data) => {
        // response is the updated chatlog, to be refreshed
        setSelectedConversation(data);
        // clear the input box
        setNewMessage('');

      })
    })
  };

  return (
    <div className="message-center-container">
      <div className="sidebar">
        <h2 className="title">Conversations</h2>
        <ul>
          {conversations.map((conversation) => (
            <React.Fragment key={conversation.otherUser}>
              <li onClick={() => handleConversationClick(conversation)}>
                {conversation.otherUser}
              </li>
              <div className="separator"></div>
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className="conversation">
        {currentChatUser ? (
          <>
            <h2 className="title">{currentChatUser}</h2>
            {selectedConversation.length > 0 ? (
              <ul>
                {selectedConversation.map((message, index) => (
                  message.sender === user.username ? (
                  <li key={index} className="message">
                    {message.content}
                  </li>
                  ) : (
                    <li key={index} className="other-message">
                      {message.content}
                    </li>
                  )
                ))}
              </ul>
            ) : (
              <p>No messages yet</p>
            )}
            <form className="message-input" onSubmit={(e) => { e.preventDefault(); handleSendMessage(newMessage); }}>
              <input
                type="text"
                placeholder={"Send a message to " + currentChatUser + "..."}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </>
        ) : (
          <p className="title">Please select a conversation</p>
        )}
      </div>
    </div>
  );
};

export default MessageCenterPage;
