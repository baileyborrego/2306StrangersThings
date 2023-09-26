import React, { useEffect, useState } from "react";
import { fetchMessages, sendMessageToPost, deleteMessage } from "../API";

const MessageList = ({ token }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // grabbing the messages
    fetchMessages()
      .then((fetchedMessages) => setMessages(fetchedMessages))
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") {
      // delete trim if buggy, found it online
      console.error("Cannot send an empty message.");
      return;
    }

    try {
      const result = await sendMessageToPost(token, newMessage);
      // Assuming the API returns the updated list of messages after sending - im trying to streamline this into one component
      setMessages(result.messages);
      setNewMessage(""); // hopefully shows a blank space after the message sent
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleDeleteMessage = async (messageId) => {
    try {
      await deleteMessage(token, messageId);
      // filter out the deleted message from the current messages - so you actually delete messages
      const updatedMessages = messages.filter(
        (message) => message._id !== messageId
      );
      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div>
      <h1>Direct Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>
            From:{message.sender.username}: {message.text}
            {message.sender._id === token._id && (
              <button onClick={() => handleDeleteMessage(message._id)}>
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default MessageList;
