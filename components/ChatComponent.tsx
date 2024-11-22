"use client"; 

import React, { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const ChatComponent: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false); // State to track connection status
  const [userInput, setUserInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Create a WebSocket connection
    const socketConnection: Socket = io("http://localhost:5000");

    // Listen for 'connect' event
    socketConnection.on("connect", () => {
      console.log("WebSocket connection established");
      setIsConnected(true);
    });

    // Listen for 'disconnect' event
    socketConnection.on("disconnect", () => {
      console.log("WebSocket connection disconnected");
      setIsConnected(false);
    });

    // Listen for responses from the server
    socketConnection.on("response", (data: { response: string }) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.response, sender: "bot" },
      ]);
    });

    setSocket(socketConnection);

    // Cleanup the WebSocket connection when the component unmounts
    return () => {
      socketConnection.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (socket && userInput.trim()) {
      socket.emit("user_input", { input: userInput });
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userInput, sender: "user" },
      ]);
      setUserInput("");
    }
  };

  return (
    <div>
      <div>
        {isConnected ? <p>Connection established!</p> : <p>Connecting...</p>}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "message user" : "message bot"}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
