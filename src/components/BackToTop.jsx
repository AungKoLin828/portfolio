import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const duration = 800; // total scroll duration in ms
    const start = window.pageYOffset;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0 → 1
      const ease = progress < 0.5 
        ? 2 * progress * progress 
        : -1 + (4 - 2 * progress) * progress; // easeInOutQuad
      window.scrollTo(0, start * (1 - ease));
      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 p-4 rounded-full shadow-lg z-50
        bg-gradient-to-br from-cyan-500 to-indigo-500 text-white
        transform transition-all duration-500
        ${visible ? "right-10 opacity-100 scale-100" : "right-[-80px] opacity-0 scale-75"}
        hover:scale-110 hover:opacity-90
      `}
      aria-label="Back to Top" style={{ marginLeft: "90%" }}
    >
      ⬆
    </button>
  );
}
