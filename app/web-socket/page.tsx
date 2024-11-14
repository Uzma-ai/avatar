"use client";

import { useState, useEffect } from "react";

const RealTimeUpdates = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const ws = new WebSocket(
      process.env.NEXT_PUBLIC_WEBSOCKET_URL || "ws://localhost:8765" //Change the url with your Websocket url
    );

    ws.onopen = () => {
      console.log("WebSocket connection established");
    };

    ws.onmessage = (event) => {
      console.log("Received message:", event.data);
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error", error);
    };

    // Save the WebSocket instance to state
    setSocket(ws);

    // Cleanup function to close WebSocket on component unmount
    return () => {
      ws.close();
    };
  }, []);

  // Function to send a message through the WebSocket
  const sendMessage = () => {
    if (socket && inputMessage) {
      socket.send(inputMessage);
      setInputMessage("");
    }
  };

  return (
    <div>
      <h1>WebSocket Example</h1>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={sendMessage}>Send Message</button>
      <div>
        <h2>Messages:</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RealTimeUpdates;
