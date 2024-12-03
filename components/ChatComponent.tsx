"use client";

import React, { useState,useRef, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  SendHorizontal,
  Mic,
  Square,
} from "lucide-react";

interface Message {
  text: string;
  sender: "user" | "bot";
  audioURL?: string;
}

type Conversation = {
  id: number;
  title: string;
  messages: Message[];
};

const ChatComponent: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [, setIsConnected] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([
      {
        id: 1,
        title: "Welcome Chat",
        messages: [
          { sender: "bot", text: "Hello! How can I assist you today?" },
        ],
      },
    ]);
    const [currentConversation] = useState(1);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);

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

    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [conversations]);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (input.trim() || audioURL) {
        const newMessage: Message = audioURL
          ? { sender: "user", text: "Audio message", audioURL }
          : { sender: "user", text: input };

        const updatedConversations = conversations.map((conv) => {
          if (conv.id === currentConversation) {
            return {
              ...conv,
              messages: [...conv.messages, newMessage],
            };
          }
          return conv;
        });
        setConversations(updatedConversations);
        setInput("");
        setAudioURL("");

        // Simulate AI response
        setTimeout(() => {
          const aiResponse: Message = {
            sender: "bot",
            text: "I received your message. How can I help further?",
          };
          const updatedWithAiResponse = updatedConversations.map((conv) => {
            if (conv.id === currentConversation) {
              return {
                ...conv,
                messages: [...conv.messages, aiResponse],
              };
            }
            return conv;
          });
          setConversations(updatedWithAiResponse);
        }, 1000);
      }
  };
  
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.start();

      const audioChunks: BlobPart[] = [];
      mediaRecorder.current.addEventListener(
        "dataavailable",
        (event: BlobEvent) => {
          audioChunks.push(event.data);
        }
      );

      mediaRecorder.current.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
      });

      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state !== "inactive") {
      mediaRecorder.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <>
      <ScrollArea className="flex-1 p-4 md:block  md:border-x-2 md:border-mediumgray">
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
                  <audio controls src={msg.audioURL} className="max-w-full">
                    Your browser does not support the audio element.
                  </audio>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 md:block">
        <form
          onSubmit={handleSubmit}
          className="flex space-x-2 items-center md:gap-5 md:pr-10"
        >
          <Input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-inputbackground text-black h-10 md:h-14 rounded-full border-none px-6 focus:!border-none focus:!ring-0 focus:!outline-none"
          />
          {!isRecording ? (
            <Button
              className="bg-secondarycolor rounded-full w-10 h-10"
              type="button"
              onClick={startRecording}
            >
              <Mic className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              className="bg-secondarycolor rounded-full w-10 h-10"
              type="button"
              onClick={stopRecording}
              variant="destructive"
            >
              <Square className="h-4 w-4" />
            </Button>
          )}
          <Button
            onClick={handleSendMessage}
            className="bg-secondarycolor rounded-full w-10 h-10"
            type="submit"
          >
            <SendHorizontal className="h-4 w-4" />
          </Button>
        </form>
        {audioURL && (
          <div className="mt-2">
            <audio controls src={audioURL} className="max-w-full">
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatComponent;
