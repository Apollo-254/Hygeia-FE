import React, { useState } from "react";

import styles from "../styles/chat.module.css";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello!", sender: "me" },
    { text: "Hi there!", sender: "other" },
    { text: "How are you?", sender: "me" },
    { text: "I'm good, thanks!", sender: "other" },
  ]);

  const sendMessage = () => {
    const newMessage = { text: "New message", sender: "me" };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className={styles["chat-container"]}>
      <h1>Chat App</h1>
      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === "me"
                ? styles["sent-message"]
                : styles["received-message"]
            }`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>

      <div className={styles["chat-footer"]}>
        <div className={styles["input-wrapper"]}>
     
          <input type="text" placeholder="Type your message..." className={styles["inputField" ]}/>
        </div>
        <div className={styles["button-wrapper"]}>
        <button className={styles["button-send"]}> 
            Send
          </button>
        </div>
      </div>
    
    </div>
  );
};

export default Chat;
