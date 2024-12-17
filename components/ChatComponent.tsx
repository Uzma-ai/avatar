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
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [pendingAudio, setPendingAudio] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const socketConnection: Socket = io("http://localhost:8000");

    socketConnection.on("connect", () => {
      console.log("WebSocket connection established");
      setIsConnected(true);
    });

    socketConnection.on("disconnect", () => {
      console.log("WebSocket connection disconnected");
      setIsConnected(false);
    });

    socketConnection.on("response", (data: { response: string }) => {
      const botMessage: Message = {
        text: data.response,
        sender: "bot",
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    });

    setSocket(socketConnection);

    return () => {
      socketConnection.disconnect();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (event) => {
      setAudioChunks((prev) => [...prev, event.data]);
    };

    recorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });

      // Ensure the Blob is valid and playable
      console.log("Audio Blob size:", audioBlob.size);
      console.log("Audio Blob type:", audioBlob.type);

      // Create a URL for playback
      const audioURL = URL.createObjectURL(audioBlob);

      // Save the recorded audio URL for preview
      setPendingAudio(audioURL);

      // Clear the chunks to prepare for the next recording
      setAudioChunks([]);
    };

    recorder.start();
    setMediaRecorder(recorder);
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
    setIsRecording(false);
  };

  const sendAudioToBackend = async (audioBlob: Blob) => {
    const formData = new FormData();
    formData.append("audio", audioBlob);

    try {
      const response = await fetch("http://localhost:8000/process-audio", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to process audio");
      }

      console.log("Audio successfully sent to the backend");
    } catch (error) {
      console.error("Error sending audio to backend:", error);
    }
  };

  const handleSendAudio = () => {
    if (pendingAudio) {
      // Add the recorded audio to the chat
      const newMessage: Message = {
        text: "",
        sender: "user",
        audioURL: pendingAudio,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Convert audio URL to a Blob for sending to the backend
      fetch(pendingAudio)
        .then((res) => res.blob())
        .then((audioBlob) => sendAudioToBackend(audioBlob))
        .catch((error) =>
          console.error("Error converting audio URL to Blob:", error)
        );

      setPendingAudio(null); // Clear the pending audio
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
          {pendingAudio && (
            <div className="mb-4 text-right">
              <div className="inline-block p-3 rounded-lg bg-lightgray max-w-[80%]">
                <audio
                  controls
                  className="w-full"
                  onError={(e) => {
                    const nativeEvent = e.nativeEvent;
                    console.error("Audio playback error:", nativeEvent);
                  }}
                >
                  <source src={pendingAudio} type="audio/webm" />
                  Your browser does not support the audio element.
                </audio>
                <Button
                  onClick={handleSendAudio}
                  className="mt-2 bg-secondarycolor w-full"
                >
                  Send Audio
                </Button>
              </div>
            </div>
          )}
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
                  onClick={startRecording}
                >
                  <Mic className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  className="bg-secondarycolor rounded-full w-10 h-10"
                  type="button"
                  onClick={stopRecording}
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
