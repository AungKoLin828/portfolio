import { useState, useEffect } from "react";

const sections = [
  { name: "Home", id: "hero" },
  { name: "Education", id: "education" },
  { name: "Professional Experiences", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Responsibilities", id: "responsibilities" },
  { name: "Why Hire Me", id: "whyhireme" },
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

    const yOffset = -80; // fixed header height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-indigo-950 border-b border-cyan-500/20 shadow-lg z-50">
      <div className="h-full max-w-7xl mx-auto flex items-center gap-4 px-4 sm:px-6 overflow-x-auto whitespace-nowrap no-scrollbar">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`px-4 py-2 rounded-lg text-sm sm:text-base flex-shrink-0 transition ${
              active === section.id
                ? "bg-cyan-500/20 text-cyan-300"
                : "text-gray-300 hover:text-indigo-400"
            }`}
          >
            {section.name}
          </button>
        ))}
      </div>
    </header>
  );
}
