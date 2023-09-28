import { useState, useEffect } from "react";
import { fetchMessages, sendMessageToPost, deleteMessage } from "../API";

function MessageList({ postId }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch messages when the component mounts or postId changes
    const token = sessionStorage.getItem("token");
    if (token) {
      fetchMessages(postId, token)
        .then((data) => {
          setMessages(data);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }, [postId]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") {
      setError("Cannot send an empty message.");
      return;
    }

    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const result = await sendMessageToPost(postId, newMessage, token);
        setMessages(result.messages);
        setNewMessage("");
      } catch (error) {
        setError("Error sending message. Please try again.");
      }
    } else {
      setError("You must be logged in to send a message.");
    }
  };

  const handleDeleteMessage = async (messageId) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        await deleteMessage(messageId, token);
        // Filter out the deleted message from the current messages
        const updatedMessages = messages.filter(
          (message) => message._id !== messageId
        );
        setMessages(updatedMessages);
      } catch (error) {
        setError("Error deleting message. Please try again.");
      }
    }
  };

  return (
    <div>
      <h1>Direct Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>
            From: {message.sender.username}: {message.text}
            {message.sender._id === token && (
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
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default MessageList;
