import React, { useState, useRef, useEffect } from "react";
import "../styles/test.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your AI assistant. Ask me anything, math problem, or equation!" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [math, setMath] = useState(null);
  const chatEndRef = useRef(null);

  // Load Math.js dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.11.0/math.min.js";
    script.onload = () => setMath(window.math);
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    simulateBotResponse(input);
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") handleSend();
  };

  const simulateBotResponse = text => {
    setIsTyping(true);
    setTimeout(() => {
      const botMessage = { sender: "bot", text: generateBotResponse(text) };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 800);
  };

  const generateBotResponse = text => {
    const lower = text.toLowerCase();

    // Time & date
    if (lower.includes("time")) return `🕒 Current time: ${new Date().toLocaleTimeString()}`;
    if (lower.includes("date")) return `📅 Today's date: ${new Date().toLocaleDateString()}`;

    // Math: Quadratic or Cubic Solver
    if (math) {
      // Quadratic detection
      const quadMatch = text.replace(/\s+/g, "").match(/^([+-]?\d*)x\^2([+-]\d*)x([+-]\d*)=0$/i);
      if (quadMatch) {
        const a = parseFloat(quadMatch[1] || "1");
        const b = parseFloat(quadMatch[2] || "0");
        const c = parseFloat(quadMatch[3] || "0");
        const discriminant = b * b - 4 * a * c;
        if (discriminant < 0) return "🧮 No real roots.";
        const r1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const r2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `🧮 Roots: ${r1}, ${r2}`;
      }

      // General math evaluation
      try {
        const result = math.evaluate(text);
        if (result !== undefined) return `🧮 Result: ${result}`;
      } catch {
        return "I couldn't compute that. Make sure it's valid!";
      }
    }

    // Simple keyword responses
    if (lower.includes("hello") || lower.includes("hi")) return "Hello! How are you?";
    if (lower.includes("your name")) return "I'm your AI assistant!";
    if (lower.includes("help")) return "I can answer questions, solve math problems, or give time/date info.";
    return "🤔 Interesting! Ask me a math problem, like 2+2 or 4x^2+6x+6=0.";
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">AI Chatbot 🤖</h2>
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.sender}`}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && <div className="message bot typing"><TypingDots /></div>}
        <div ref={chatEndRef} />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a question, math problem..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

const TypingDots = () => (
  <span>
    <span className="dot" />
    <span className="dot" style={{ animationDelay: "0.2s" }} />
    <span className="dot" style={{ animationDelay: "0.4s" }} />
  </span>
);

export default ChatBot;
