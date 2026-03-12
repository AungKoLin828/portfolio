import { useState } from "react";
import { smartAI } from "../utils/smartAIEngine";
import { FiSend, FiMessageCircle } from "react-icons/fi";

export default function SmartPortfolioAI() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello 👋 I'm Aung Ko Lin's portfolio assistant." },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;

    const userMsg = { role: "user", text: input };

    setMessages((prev) => [...prev, userMsg]);

    setInput("");

    // typing animation delay
    setTimeout(() => {
      const reply = smartAI(input);

      const aiMsg = { role: "ai", text: reply };

      setMessages((prev) => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <button onClick={() => setOpen(!open)} className="ai-toggle">
        <FiMessageCircle />
      </button>

      {open && (
        <div className="ai-container">
          <div className="ai-header">🤖 Ask about Aung Ko Lin</div>

          <div className="ai-chat">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "msg-user" : "msg-ai"}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Suggestions */}

          <div className="ai-suggestions">
            <button
              onClick={() => setInput("What programming languages do you use?")}
            >
              Languages
            </button>

            <button onClick={() => setInput("What frameworks do you know?")}>
              Frameworks
            </button>

            <button onClick={() => setInput("What databases do you use?")}>
              Databases
            </button>

            <button onClick={() => setInput("How many years of experience?")}>
              Experience
            </button>

            <button onClick={() => setInput("How can I contact you?")}>
              Contact
            </button>
          </div>

          <div className="ai-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />

            <button onClick={sendMessage}>
              <FiSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
