"use client";

import React, { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import axios from "axios";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const ChatComponent: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const socketConnection: Socket = io("http://localhost:5000");

    socketConnection.on("connect", () => {
      console.log("WebSocket connection established");
      setIsConnected(true);
    });

    socketConnection.on("disconnect", () => {
      console.log("WebSocket connection disconnected");
      setIsConnected(false);
    });

    socketConnection.on("response", (data: { response: string }) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.response, sender: "bot" },
      ]);
    });

    setSocket(socketConnection);

    return () => {
      socketConnection.disconnect();
    };
  }, []);

  // Function to handle translation
  const translateText = async (text: string, targetLang: string) => {
    try {
      const response = await axios.post("https://libretranslate.de/translate", {
        q: text,
        source: "auto", // Automatically detects the source language
        target: targetLang,
        format: "text",
      });
      return response.data.translatedText;
    } catch (error) {
      console.error("Error translating text:", error);
      return text; // Return original text if translation fails
    }
  };

  const handleSendMessage = async () => {
    if (socket && userInput.trim()) {
      const translatedInput = await translateText(userInput, "en"); // Translate to English

      socket.emit("user_input", { input: translatedInput });

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
