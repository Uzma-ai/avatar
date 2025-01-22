"use client";

import React, { useState, useRef, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SendHorizontal, Mic, Square } from "lucide-react";

interface Message {
  text: string;
  sender: "user" | "bot";
  audioURL?: string;
}

interface ChatComponentProps {
  voicechecked: boolean;
}

const ChatComponent: React.FC<ChatComponentProps> = ({ voicechecked }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [, setIsConnected] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const socketConnection: Socket = io("http://localhost:5050");

    socketConnection.on("connect", () => {
      console.log("WebSocket connection established");
      setIsConnected(true);
    });

    socketConnection.on("disconnect", () => {
      console.log("WebSocket connection disconnected");
      setIsConnected(false);
    });

    socketConnection.on(
      "response",
      (data: { response: string; language: string }) => {
        const botMessage: Message = {
          text: data.response,
          sender: "bot",
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
          speakText(data.response, data.language);
      }
    );

    setSocket(socketConnection);

    return () => {
      socketConnection.disconnect();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const speakText = (text: string, language: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language; // Set the language for TTS
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Text-to-Speech is not supported in this browser.");
    }
  };


  const handleSendMessage = () => {
    if (socket && userInput.trim()) {
      socket.emit("user_input", { input: userInput });

      const newMessage: Message = { text: userInput, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setUserInput("");
    }
  };

  return (
    <>
      <ScrollArea className="flex-1 p-4 md:block md:border-x-2 md:border-mediumgray">
        <div>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 ${
                msg.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg ${
                  msg.sender === "user" ? "bg-lightgray" : "bg-whitecolor"
                } max-w-[80%]`}
              >
                {msg.audioURL ? (
                  <audio controls className="w-full">
                    <source src={msg.audioURL} type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
        </div>
        <div ref={messagesEndRef} />
      </ScrollArea>
      <div className="p-4 md:block">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex space-x-2 items-center md:gap-5 md:pr-10"
        >
          <Input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask Avatar..."
            className="flex-1 bg-inputbackground text-black h-10 md:h-14 rounded-full border-none px-6 focus:!border-none focus:!ring-0 focus:!outline-none"
          />
          {voicechecked && (
            <div>
              {!isRecording ? (
                <Button
                  className="bg-secondarycolor rounded-full w-10 h-10"
                  type="button"
                  onClick={() => {
                    setIsRecording(true);
                  }}
                >
                  <Mic className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  className="bg-secondarycolor rounded-full w-10 h-10"
                  type="button"
                  onClick={() => {
                    setIsRecording(false);
                  }}
                >
                  <Square className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}
          <Button
            onClick={handleSendMessage}
            className="bg-secondarycolor rounded-full w-10 h-10"
            type="submit"
          >
            <SendHorizontal className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default ChatComponent;
