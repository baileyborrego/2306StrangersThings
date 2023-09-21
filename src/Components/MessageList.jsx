
//=============CONCERNS==========
//My only bug type concerns are related to API endpoints. might start there is future issues arise

import React, { useEffect, useState } from "react";

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await fetch(
          "https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-FT/posts"
        );
        const APIResponse = await response.json();
        if (APIResponse.success) {
          const fetchedMessages = APIResponse.data.posts.messages; // Assuming messages are nested in the API this way? - might be buggy
          setMessages(fetchedMessages);
        } else {
          console.error("OOPS :( ", APIResponse.error);
        }
      } catch (error) {
        console.error("Error loading messages:", error);
      }
    }

    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Direct Messages</h1>
      <ul>
        {messages.map((message, _id) => ( //i think its weird the api has "_id" but hopefully it works
          <li key={_id}>
            {message.sender.username}: {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
