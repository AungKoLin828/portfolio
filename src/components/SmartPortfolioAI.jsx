import { useState, useRef, useEffect } from "react";
import { smartAI } from "../utils/smartAIEngine";
import { FiSend, FiMessageCircle, FiMic } from "react-icons/fi";

export default function SmartPortfolioAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello 👋 I'm Aung Ko Lin's portfolio assistant." },
  ]);
  const [input, setInput] = useState("");

  const chatEndRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Typing animation for AI reply
  const sendMessage = (msgText = input) => {
    if (!msgText) return;

    const userMsg = { role: "user", text: msgText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const reply = String(smartAI(msgText) || "");
    let i = 0;

    // Add empty AI message first
    setMessages((prev) => [...prev, { role: "ai", text: "" }]);

    const interval = setInterval(() => {
      i++;
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          text: reply.slice(0, i),
        };
        return updated;
      });

      if (i >= reply.length) clearInterval(interval);
    }, 30); // typing speed
  };

  // Voice input using Web Speech API
  const startVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice input not supported in this browser!");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      sendMessage(transcript);
    };

    recognition.start();
  };

  // Predefined smart suggestions
  const suggestions = [
    { label: "Languages", text: "What programming languages do you use?" },
    { label: "Frameworks", text: "What frameworks do you know?" },
    { label: "Databases", text: "What databases do you use?" },
    { label: "Experience", text: "How many years of experience?" },
    { label: "Contact", text: "How can I contact you?" },
  ];

  return (
    <>
      {/* Floating Button */}
      <button onClick={() => setOpen(!open)} className="ai-toggle">
        <FiMessageCircle />
      </button>

      {open && (
        <div className="ai-container">
          <div className="ai-header">🤖 Ask about Aung Ko Lin</div>

          {/* Chat Messages */}
          <div className="ai-chat">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "msg-user" : "msg-ai"}
              >
                {m.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Smart Suggestions */}
          <div className="ai-suggestions">
            {suggestions.map((s, i) => (
              <button key={i} onClick={() => sendMessage(s.text)}>
                {s.label}
              </button>
            ))}
          </div>

          {/* Input + Send + Voice */}
          <div className="ai-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Ask something..."
            />
            <button onClick={sendMessage}>
              <FiSend />
            </button>
            <button onClick={startVoiceInput}>
              <FiMic />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
