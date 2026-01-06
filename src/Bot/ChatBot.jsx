import React, { useState, useRef, useEffect } from "react";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaUser,
  FaArrowLeft,
  FaRegSmile,
  FaPaperclip,
} from "react-icons/fa";
import { BsFillMicFill } from "react-icons/bs";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: "Just now",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSend = async () => {
    if (!inputMessage.trim()) return;

    // const userMessage = {
    //   role: "user",
    //   content: inputMessage,
    // };

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: inputMessage,
        sender: "user",
        timestamp: "Just now",
      },
    ]);

    setInputMessage("");
    setIsTyping(true);

    try {
      // for ai response from node backend
      // const response = await fetch("https://aeksec-backend.onrender.com/chat", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     messages: [
      //       { role: "system", content: "You are a helpful AI assistant." },
      //       ...messages.map((m) => ({
      //         role: m.sender === "user" ? "user" : "assistant",
      //         content: m.text,
      //       })),
      //       userMessage,
      //     ],
      //   }),
      // });

      
      // for bot website python reply
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: inputMessage,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: data.reply,
          sender: "bot",
          timestamp: "Just now",
        },
      ]);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "⚠️ Something went wrong. Please try again.",
          sender: "bot",
          timestamp: "Just now",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileMessage = {
        id: messages.length + 1,
        text: `File uploaded: ${file.name}`,
        sender: "user",
        timestamp: "Just now",
        file: { name: file.name, size: (file.size / 1024).toFixed(2) + "KB" },
      };
      setMessages([...messages, fileMessage]);
    }
  };

  const quickReplies = [
    "What services do you offer?",
    "Can I schedule a meeting?",
    "Tell me about pricing",
    "Contact support",
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          aria-label="Open chatbot"
        >
          <FaRobot className="text-2xl" />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div
          className="
    fixed inset-0 sm:static
    flex flex-col
    w-full sm:w-96
    h-[100dvh] sm:h-[600px]
    bg-white
    rounded-none sm:rounded-2xl
    shadow-none sm:shadow-2xl
    overflow-hidden
    border sm:border-gray-200
  "
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition"
                aria-label="Close chatbot"
              >
                <FaArrowLeft />
              </button>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <FaRobot className="text-2xl" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-500"></span>
                </div>
                <div>
                  <h3 className="font-bold">AI Assistant</h3>
                  <p className="text-xs text-blue-100">
                    Online • Ready to help
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-full transition"
              aria-label="Close chatbot"
            >
              <FaTimes />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-4 sm:p-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div className="flex items-end space-x-2 max-w-full">
                  {message.sender === "bot" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                      <FaRobot className="text-white text-sm" />
                    </div>
                  )}
                  <div
                    className={`
    max-w-[85%] sm:max-w-[70%]
    ${message.sender === "user" ? "ml-auto" : ""}
  `}
                  >
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none"
                          : "bg-white text-gray-800 rounded-bl-none shadow-sm"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">
                        {message.text}
                      </p>
                      {message.file && (
                        <div className="mt-2 p-2 bg-black/10 rounded-lg">
                          <p className="text-xs font-medium">
                            {message.file.name}
                          </p>
                          <p className="text-xs opacity-75">
                            {message.file.size}
                          </p>
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 mt-1 block">
                      {message.sender === "user" ? "You" : "Assistant"} •{" "}
                      {message.timestamp}
                    </span>
                  </div>
                  {message.sender === "user" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <FaUser className="text-gray-600 text-sm" />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <FaRobot className="text-white text-sm" />
                </div>
                <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="mt-4">
                <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputMessage(reply);
                        setTimeout(handleSend, 100);
                      }}
                      className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here..."
                  className="
    w-full
    p-2 sm:p-3
    pr-10
    border border-gray-300
    rounded-xl
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    resize-none
    text-sm
  "
                  rows="1"
                />
                <button className="absolute right-2 top-2 text-gray-400 hover:text-blue-500"></button>
              </div>
              <div className="flex space-x-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  onClick={handleFileUpload}
                  className="p-3 text-gray-500 hover:text-blue-500 hover:bg-gray-100 rounded-full transition"
                  aria-label="Attach file"
                >
                  <FaPaperclip />
                </button>
                <button
                  onClick={handleSend}
                  disabled={!inputMessage.trim()}
                  className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
                  aria-label="Send message"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <button className="hidden sm:flex items-center text-xs text-gray-500 hover:text-blue-500">
                <BsFillMicFill className="mr-1" />
                Voice input
              </button>
              <p className="text-xs text-gray-500">
                Press Enter to send • Shift+Enter for new line
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
