import React, { useState, useEffect } from 'react';
import { fetchUserProfile, fetchUserMessages } from '../API';

export default function ProfilePage({ token }) {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch user profile information
    fetchUserProfile(token)
      .then((userData) => setUser(userData))
      .catch((error) => console.error('Error fetching user profile:', error));

    // Fetch user messages
    fetchUserMessages(token)
      .then((userMessages) => setMessages(userMessages))
      .catch((error) => console.error('Error fetching user messages:', error));
  }, [token]);

  return (
    <div>
      <h2>User Profile</h2>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Add more user profile information as needed */}
        </div>
      )}

      <h2>Your Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>
            <p>From: {message.sender.username}</p>
            <p>Message: {message.text}</p>
            {/* Add more message details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}
