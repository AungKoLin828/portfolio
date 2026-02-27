import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const sections = [
  { name: "Home", id: "hero" },
  { name: "Education", id: "education" },
  { name: "Professional Experiences", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Responsibilities", id: "responsibilities" },
  { name: "Contact", id: "contact" },
  { name: "Advantages", id: "whyhireme" },
];

export default function Menu() {
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ======================
     ACTIVE SECTION TRACK
  ====================== */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const top = el.offsetTop - 90;
        const bottom = top + el.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ======================
     SCROLL FUNCTION
  ====================== */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setMobileOpen(false);
  };

  /* ======================
     BODY LOCK WHEN MOBILE MENU OPEN
  ====================== */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <header className="menu-header">
      <div className="menu-container">
        {/* LOGO */}
        <div className="menu-logo" onClick={() => scrollToSection("hero")}>
          <img src={logo} alt="Logo" />
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </div>

        {/* NAV */}
        <nav className={`menu-nav ${mobileOpen ? "show" : ""}`}>
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
      </div>
    </header>
  );
}
