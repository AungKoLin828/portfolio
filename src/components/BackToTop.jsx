import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 p-3 rounded-full bg-cyan-500 text-white shadow-lg z-50
        transition-all duration-500
        ${visible ? "right-10 opacity-100" : "right-[-80px] opacity-0"}
        hover:bg-cyan-400
      `}
      aria-label="Back to Top"
    >
      ⬆
    </button>
  );
}
