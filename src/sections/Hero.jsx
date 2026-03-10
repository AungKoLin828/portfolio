import { motion } from "framer-motion";
import profile from "../data/profile.json";
import { FiDownload } from "react-icons/fi";
import GlassCard from "../components/GlassCard";
import devImage from "../assets/developer.png";

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
          <div className="hero-content">
            <img src={devImage} alt="Developer coding" className="hero-image" />

            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-btn-wrapper">
              <a
                href="/AUNG KO LIN_Resume.pdf"
                download
                className="hero-download-btn"
              >
                <FiDownload />
                Download CV
              </a>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
