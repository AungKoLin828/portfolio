import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { name: "Home", id: "hero" },
  { name: "Education", id: "education" },
  { name: "Professional Experience", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Responsibilities", id: "responsibilities" },
  { name: "Why Hire Me", id: "whyhireme" },
];

export default function Menu() {
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll Spy + Hide/Show Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active section detection
      const scrollPos = currentScrollY + window.innerHeight / 3;
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Smooth Scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const targetPosition = el.offsetTop - 80;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 700;
    let start = null;

    const easeInOut = (t) =>
      t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animation = (currentTime) => {
      if (!start) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOut(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

    return (
    <AnimatePresence>
        {visible && (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="
            fixed top-6 left-1/2 -translate-x-1/2
            z-50
            px-6 py-3
            rounded-2xl
            bg-slate-900/85
            backdrop-blur-2xl
            border border-slate-700/60
            shadow-2xl
            flex flex-wrap gap-2
            "
        >
            {sections.map((section) => (
            <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="relative px-4 py-2 text-sm sm:text-base font-medium
                        rounded-xl transition-all duration-300
                        bg-transparent border-none shadow-none"
            >
                {/* Active background */}
                {active === section.id && (
                <motion.span
                    layoutId="activeTab"
                    className="
                    absolute inset-0
                    rounded-xl
                    bg-slate-700/80
                    "
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
                )}

                {/* Text */}
                <span
                className={
                    active === section.id
                    ? "relative z-10 text-white"
                    : "relative z-10 text-slate-400 hover:text-white"
                }
                >
                {section.name}
                </span>
            </button>
            ))}
        </motion.nav>
        )}
    </AnimatePresence>
    );

}
