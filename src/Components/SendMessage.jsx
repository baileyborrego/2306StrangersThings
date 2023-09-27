import { useState } from "react";
import { sendMessageToPost } from "../API";
import { useParams } from "react-router-dom";

export default function SendMessage() {
  const { authorUsername } = useParams();
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") {
      console.error("Cannot send an empty message.");
      return;
    }

    try {
      const result = await sendMessageToPost(authorUsername, newMessage);
      console.log("Message sent successfully:", result);

      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <h2>Send a Message to {authorUsername}</h2>
      <div>
        <textarea
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

