"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CircleUserRound,
  History,
  Lock,
  MessageSquare,
  Shield,
  Upload,
  User,
  ChevronDown,
  Power,
  SendHorizontal,
  Mic,
  Square,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Message = {
  role: "user" | "assistant";
  content: string;
  audioURL?: string;
};

type Conversation = {
  id: number;
  title: string;
  messages: Message[];
};

export default function ChatAssistant() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 1,
      title: "Welcome Chat",
      messages: [
        { role: "assistant", content: "Hello! How can I assist you today?" },
      ],
    },
  ]);
  const [currentConversation] = useState(1);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const [isAvatarDropdownOpen, setIsAvatarDropdoenOpen] = useState(false);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversations]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() || audioURL) {
      const newMessage: Message = audioURL
        ? { role: "user", content: "Audio message", audioURL }
        : { role: "user", content: input };

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
          role: "assistant",
          content: "I received your message. How can I help further?",
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
    <div className="relative flex h-screen overflow-hidden md:bg-primarycolor text-black">
      <div className="flex items-center justify-center w-full h-full">
        {/* Avatar Section */}
        {checked ? (
          <div className="hidden md:block relative w-3/12 h-full transition-all duration-300">
            <Image
              src="/avatar.png"
              alt="Avatar Image"
              fill
              className="object-cover"
            />
          </div>
        ) : null}
        {/* Chat Section */}
        <div
          className={`${
            checked ? "md:w-9/12" : "w-full"
          } h-screen flex flex-col justify-between transition-all duration-300 relative`}
        >
          {/* Mobile Avatar Section */}
          {checked ? (
            <div className="absolute inset-0 block md:hidden -z-10">
              <Image
                src="/avatar.png"
                alt="Avatar Background"
                fill
                className="object-cover"
              />
            </div>
          ) : null}

          {/* Navbar section */}
          <div className="w-full h-20 flex items-center justify-between p-2 md:p-6">
            <div>
              <DropdownMenu
                open={isAvatarDropdownOpen}
                onOpenChange={setIsAvatarDropdoenOpen}
              >
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-2 rounded-full bg-whitecolor p-1 shadow-sm hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="User menu"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/useravtar.jpeg"
                        alt="User avatar"
                        className="object-cover"
                      />
                      <AvatarFallback>H</AvatarFallback>
                    </Avatar>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 transition-transform ${
                        isAvatarDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                    {isAvatarDropdownOpen && (
                      <span className="sr-only">
                        Menu is open, press escape to close
                      </span>
                    )}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[200px]"
                  align="start"
                  alignOffset={-8}
                  sideOffset={5}
                >
                  <div className="flex items-center gap-2 p-2 mb-1">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/useravtar.jpeg"
                        alt="User avatar"
                        className="object-cover"
                      />
                      <AvatarFallback>H</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">Hannah</span>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4 text-blue-500" />
                    <span>User Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Shield className="mr-2 h-4 w-4 text-blue-500" />
                    <span>Admin</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <CircleUserRound className="mr-2 h-4 w-4 text-blue-500" />
                    <span>Avatar</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Lock className="mr-2 h-4 w-4 text-blue-500" />
                    <span>Reset Password</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4 text-blue-500" />
                    <span>Past Chats</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <History className="mr-2 h-4 w-4 text-blue-500" />
                    <span>Reset History</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Upload className="mr-2 h-4 w-4 text-blue-500" />
                    <span>Uploads</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-md font-medium text-whitecolor md:text-black">Avatar</h2>
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="avatar-mode"
                  className="text-sm text-muted-foreground"
                >
                  Off
                </Label>
                <Switch
                  id="avatar-mode"
                  checked={checked}
                  onCheckedChange={setChecked}
                  className="h-6 w-10 data-[state=checked]:bg-secondarycolor"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full shadow-sm transition-transform duration-100 translate-x-0.5 data-[state=checked]:translate-x-6">
                    <Power className="h-3 w-3 text-black data-[state=checked]:text-[#5182E3]]" />
                  </div>
                </Switch>
                <Label
                  htmlFor="avatar-mode"
                  className="text-sm text-muted-foreground"
                >
                  On
                </Label>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="w-full h-1/2 md:h-[calc(100vh-80px)] px-2 md:px-6">
            <div className="relative z-10 h-full flex flex-col">
              <ScrollArea className="flex-1 p-4 md:block  md:border-x-2 md:border-mediumgray">
                {conversations
                  .find((conv) => conv.id === currentConversation)
                  ?.messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${
                        message.role === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      <div
                        className={`inline-block p-3 rounded-lg ${
                          message.role === "user"
                            ? "bg-lightgray"
                            : "bg-whitecolor"
                        } max-w-[80%]`}
                      >
                        {message.audioURL ? (
                          <audio
                            controls
                            src={message.audioURL}
                            className="max-w-full"
                          >
                            Your browser does not support the audio element.
                          </audio>
                        ) : (
                          message.content
                        )}
                      </div>
                    </div>
                  ))}
                <div ref={messagesEndRef} />
              </ScrollArea>

              <div className="p-4 md:block">
                <form
                  onSubmit={handleSubmit}
                  className="flex space-x-2 items-center md:gap-5 md:pr-10"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Avatar"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
