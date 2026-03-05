import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

const responsibilities = [
  "Manage a team of 8+ developers, with 80% hands-on development and 20% management.",
  "Ensure Agile sprint delivery with consistent 95% on-time completion.",
  "Conduct code reviews, optimize backend logic, and maintain scalable architecture.",
  "Mentor junior developers and enforce coding best practices.",
];

export default function Responsibilities() {
  return (
    <section id="responsibilities" className="responsibilities-section">
      <h2 className="section-title">Responsibilities</h2>

      <div className="responsibilities-grid">
        {responsibilities.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="responsibility-wrapper"
          >
            <GlassCard className="responsibility-card">
              <div className="responsibility-content">
                <div className="responsibility-icon">✔</div>
                <p className="responsibility-text">{item}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}