import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const sections = [
  { name: "Home", id: "hero" },
  { name: "Education", id: "education" },
  { name: "Professional Experiences", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Responsibilities", id: "responsibilities" },
  { name: "Contact", id: "contact" },
  { name: "Professional Advantages I Offer", id: "whyhireme" },
];

export default function Menu() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const top = el.offsetTop - 80; // header height
        const bottom = top + el.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const targetPosition =
      el.getBoundingClientRect().top + window.pageYOffset - 80; // offset for fixed header
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1000ms = 1 second, increase for slower
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1); // 0 → 1
      window.scrollTo(0, startPosition + distance * progressRatio);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <header className="menu-header">
      <div className="menu-container">
        {/* LOGO */}
        <div className="menu-logo" onClick={() => scrollToSection("hero")}>
          <img src={logo} alt="Logo" />
        </div>

        {/* MENU */}
        <nav className="menu-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={active === section.id ? "menu-btn active" : "menu-btn"}
            >
              {section.name}
            </button>
          ))}
        </nav>
        <div></div>
      </div>
    </header>
  );
}
