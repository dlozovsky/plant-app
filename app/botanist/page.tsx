"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Send, Leaf, Image, Sparkles, ThumbsUp, ThumbsDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
  image?: string
}

export default function BotanistChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm Dr. Sage, your AI plant expert. How can I help with your plants today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response after a delay
    setTimeout(
      () => {
        const botResponse = getBotResponse(inputValue)
        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string

        // Add user message with image
        const userMessage: Message = {
          id: Date.now().toString(),
          content: "I uploaded a photo of my plant.",
          sender: "user",
          timestamp: new Date(),
          image: imageUrl,
        }

        setMessages((prev) => [...prev, userMessage])
        setIsTyping(true)

        // Simulate bot response after a delay
        setTimeout(() => {
          const botResponse: Message = {
            id: (Date.now() + 1).toString(),
            content:
              "Thanks for sharing your plant photo! This appears to be a Monstera Deliciosa, also known as a Swiss Cheese Plant. It looks healthy overall, with good leaf development. The fenestrations (holes) in the leaves are well-formed, which indicates it's getting adequate light. Would you like specific care tips for this plant?",
            sender: "bot",
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, botResponse])
          setIsTyping(false)
        }, 2000)
      }
      reader.readAsDataURL(file)
    }
  }

  const getBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase()
    let response = ""

    if (input.includes("yellow leaves") || input.includes("yellowing")) {
      response =
        "Yellowing leaves can be caused by several factors. The most common are overwatering, nutrient deficiencies, or insufficient light. Check if the soil is too wet and allow it to dry out between waterings. If the plant is in low light, consider moving it to a brighter location. A balanced fertilizer might help if it's a nutrient issue."
    } else if (input.includes("water") || input.includes("watering")) {
      response =
        "Most houseplants prefer to dry out slightly between waterings. Check the top 1-2 inches of soil - if it's dry, it's time to water. Always ensure your pot has drainage holes, and empty any excess water from the saucer. Different plants have different needs, so I can provide specific advice if you tell me which plant you're caring for."
    } else if (input.includes("light") || input.includes("sunlight")) {
      response =
        "Light is crucial for plants! Most houseplants prefer bright, indirect light. Direct sunlight can burn the leaves of many indoor plants, while insufficient light can lead to leggy growth and poor health. South or west-facing windows typically provide the brightest light, while north-facing windows offer gentler light suitable for shade-loving plants."
    } else if (input.includes("fertilizer") || input.includes("feed")) {
      response =
        "Most houseplants benefit from fertilizing during their active growing season (spring and summer). Use a balanced, water-soluble fertilizer diluted to half the recommended strength. Apply every 4-6 weeks. Reduce or stop fertilizing in fall and winter when growth slows. Over-fertilizing can damage plants, so it's better to under-fertilize than over-fertilize."
    } else if (input.includes("repot") || input.includes("repotting")) {
      response =
        "Repotting is typically needed when a plant becomes root-bound (roots circling the pot or growing out of drainage holes). Spring is the best time to repot. Choose a pot 1-2 inches larger in diameter than the current one, with drainage holes. Use fresh potting mix suitable for your plant type. Water thoroughly after repotting, but avoid fertilizing for about a month."
    } else if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      response =
        "Hello there! I'm Dr. Sage, your AI plant expert. How can I help with your plants today? Feel free to ask me about plant care, troubleshooting issues, or identification."
    } else if (input.includes("thank")) {
      response =
        "You're welcome! I'm happy to help with your plant questions anytime. Is there anything else you'd like to know about your plants?"
    } else {
      response =
        "That's an interesting question about plants! I'd be happy to help with specific plant care advice, troubleshooting issues, or identification. Could you provide more details about your plant or your specific concern?"
    }

    return {
      id: Date.now().toString(),
      content: response,
      sender: "bot",
      timestamp: new Date(),
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const suggestedQuestions = [
    "Why are my plant's leaves turning yellow?",
    "How often should I water my monstera?",
    "What's the best light for succulents?",
    "How do I get rid of fungus gnats?",
    "When should I repot my houseplants?",
  ]

  return (
    <main className="flex min-h-screen flex-col bg-[#f8faf5]">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-green-100">
        <div className="container flex h-16 items-center">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5 text-green-700" />
            </Button>
          </Link>
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Dr. Sage" />
              <AvatarFallback className="bg-green-100">
                <Leaf className="h-4 w-4 text-green-600" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-semibold text-lg text-green-800">Dr. Sage</h1>
              <p className="text-xs text-green-600">AI Botanist</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container flex-1 py-6 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] ${message.sender === "user" ? "order-1" : "order-2"}`}>
                {message.sender === "bot" && (
                  <div className="flex items-center mb-1">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Dr. Sage" />
                      <AvatarFallback className="bg-green-100">
                        <Leaf className="h-3 w-3 text-green-600" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium text-green-800">Dr. Sage</span>
                    <span className="text-xs text-gray-400 ml-2">{formatTime(message.timestamp)}</span>
                  </div>
                )}

                <div
                  className={`rounded-lg p-3 ${
                    message.sender === "user" ? "bg-green-600 text-white" : "bg-white border border-green-100"
                  }`}
                >
                  {message.image && (
                    <div className="mb-2 rounded overflow-hidden">
                      <img src={message.image || "/placeholder.svg"} alt="User uploaded plant" className="max-w-full" />
                    </div>
                  )}
                  <p className={message.sender === "user" ? "text-white" : "text-gray-700"}>{message.content}</p>
                </div>

                {message.sender === "user" && (
                  <div className="flex justify-end mt-1">
                    <span className="text-xs text-gray-400">{formatTime(message.timestamp)}</span>
                  </div>
                )}

                {message.sender === "bot" && (
                  <div className="flex mt-1 space-x-2">
                    <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                      <ThumbsUp className="h-3 w-3 text-gray-400" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                      <ThumbsDown className="h-3 w-3 text-gray-400" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[80%] order-2">
                <div className="flex items-center mb-1">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Dr. Sage" />
                    <AvatarFallback className="bg-green-100">
                      <Leaf className="h-3 w-3 text-green-600" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium text-green-800">Dr. Sage</span>
                </div>
                <div className="rounded-lg p-3 bg-white border border-green-100">
                  <div className="flex space-x-1">
                    <div
                      className="h-2 w-2 rounded-full bg-green-400 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="h-2 w-2 rounded-full bg-green-400 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="h-2 w-2 rounded-full bg-green-400 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {messages.length === 1 && (
          <Card className="mb-4 border-green-100">
            <CardContent className="p-4">
              <div className="flex items-center mb-3">
                <Sparkles className="h-4 w-4 text-green-600 mr-2" />
                <h3 className="font-medium text-green-800">Suggested Questions</h3>
              </div>
              <div className="grid gap-2">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="justify-start h-auto py-2 border-green-100 text-left"
                    onClick={() => {
                      setInputValue(question)
                      setTimeout(() => handleSendMessage(), 100)
                    }}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="flex-shrink-0 border-green-200"
            onClick={() => fileInputRef.current?.click()}
          >
            <Image className="h-5 w-5 text-green-700" />
          </Button>
          <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageUpload} />

          <div className="relative flex-1">
            <Input
              placeholder="Ask Dr. Sage about your plants..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage()
                }
              }}
              className="pr-10 border-green-200"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full text-green-700"
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

