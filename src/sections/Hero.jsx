import { motion } from "framer-motion";
import profile from "../data/profile.json";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import GlassCard from "../components/GlassCard";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-container"
      >
        <GlassCard className="hero-card">
          <h1 className="hero-role">{profile.role}</h1>

          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-info-grid">
            <div className="hero-info-item">
              📍 {profile.location}
            </div>

            <div className="hero-info-item">
              <FaEnvelope /> {profile.email}
            </div>

            <div className="hero-info-item">
              📞 {profile.phone}
            </div>
          </div>

          <div className="hero-socials">
            <a
              href={`https://linkedin.com/in/${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon"
            >
              <FaLinkedin />
            </a>

            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon"
            >
              <FaGithub />
            </a>
          </div>

          <a
            href="/AUNG KO LIN_Resume.pdf"
            download
            className="hero-download-btn"
          >
            <FiDownload />
            Download CV
          </a>
        </GlassCard>
      </motion.div>
    </section>
  );
}