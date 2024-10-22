'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MenuIcon, PlusIcon, SendIcon, UserIcon, Mic, MicOff } from "lucide-react"

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! How can I assist you today?" },
  ])
  const [input, setInput] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition
      const recognitionInstance = new SpeechRecognition()
      
      recognitionInstance.continuous = false
      recognitionInstance.interimResults = false
      recognitionInstance.lang = 'en-US'

      recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript
        setInput(prevInput => prevInput + ' ' + transcript)
      }

      recognitionInstance.onend = () => {
        setIsListening(false)
      }

      setRecognition(recognitionInstance)
    }
  }, [])

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }])
      setInput("")
      // Here you would typically send the message to your AI backend
      // and then add the AI's response to the messages
    }
  }

  const toggleListening = () => {
    if (recognition) {
      if (isListening) {
        recognition.stop()
      } else {
        recognition.start()
        setIsListening(true)
      }
    } else {
      console.error('Speech recognition not supported in this browser')
      // You might want to show an error message to the user here
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4 hidden md:block">
        <Button variant="outline" className="w-full mb-4 text-white border-white hover:bg-gray-800">
          <PlusIcon className="mr-2 h-4 w-4" /> New Chat
        </Button>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              Chat 1
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              Chat 2
            </Button>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b p-4 flex justify-between items-center">
          <Button variant="ghost" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-bold">Avatar</h1>
          <Button variant="ghost" className="rounded-full">
            <UserIcon className="h-6 w-4" />
          </Button>
        </header>

        {/* Chat Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="max-w-2xl mx-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-lg p-2 max-w-sm ${
                    message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="max-w-2xl mx-auto flex">
            <Input
              className="flex-1 mr-2"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <Button 
              onClick={toggleListening} 
              variant="outline" 
              className="mr-2"
              aria-label={isListening ? "Stop listening" : "Start listening"}
            >
              {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
            <Button onClick={handleSend}>
              <SendIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}