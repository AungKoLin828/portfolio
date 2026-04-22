import { useState, useRef, useEffect } from "react";
// import { smartAI } from "../utils/smartAIEngine";
import { hybridAI } from "../utils/hybridAI";
import { FiSend, FiMessageCircle, FiMic } from "react-icons/fi";

export default function SmartPortfolioAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello 👋 I'm Aung Ko Lin's portfolio assistant." },
  ]);
  const [input, setInput] = useState("");

  const chatEndRef = useRef(null);

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Typing animation with strict blank/null check
  const sendMessage = async (msgText) => {
    if (!msgText || msgText.trim() === "") return;

    const trimmedMsg = msgText.trim();
    const userMsg = { role: "user", text: trimmedMsg };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // loading placeholder
    setMessages((prev) => [...prev, { role: "ai", text: "..." }]);

    const history = messages.map((m) => ({
      role: m.role === "ai" ? "assistant" : "user",
      content: m.text,
    }));

    const reply = await hybridAI(trimmedMsg, history);

    let i = 0;

    const interval = setInterval(() => {
      i++;
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "ai",
          text: reply.slice(0, i),
        };
        return updated;
      });

      if (i >= reply.length) clearInterval(interval);
    }, 30);
  };

  // Predefined smart suggestion buttons
  const suggestions = [
    { label: "Languages", text: "What programming languages do you use?" },
    { label: "Frameworks", text: "What frameworks do you know?" },
    { label: "Databases", text: "What databases do you use?" },
    { label: "Experience", text: "How many years of experience?" },
    { label: "Contact", text: "How can I contact you?" },
  ];

  return (
    <>
      {/* Floating AI toggle button */}
      <button onClick={() => setOpen(!open)} className="ai-toggle">
        <FiMessageCircle />
      </button>

      {open && (
        <div className="ai-container">
          <div className="ai-header">🤖 Ask about Aung Ko Lin</div>

          {/* Chat messages */}
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

          {/* Smart suggestion buttons */}
          <div className="ai-suggestions">
            {suggestions.map((s, i) => (
              <button key={i} onClick={() => sendMessage(s.text)}>
                {s.label}
              </button>
            ))}
          </div>

          {/* Input area */}
          <div className="ai-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage(input);
                }
              }}
              placeholder="Ask something..."
            />
            <button onClick={() => sendMessage(input)}>
              <FiSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
