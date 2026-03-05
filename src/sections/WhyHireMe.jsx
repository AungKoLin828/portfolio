import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

const highlights = [
  "Senior-level Spring Boot & Batch expertise",
  "Proven Japan offshore delivery experience",
  "Strong legacy modernization background",
  "Focus on stability, performance, and maintainability",
];

export default function WhyHireMe() {
  return (
    <section id="whyhireme" className="whyhire-section">
      <h2 className="section-title">
        Professional Advantages I Offer
      </h2>

      <div className="whyhire-grid">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="whyhire-wrapper"
          >
            <GlassCard className="whyhire-card">
              <div className="whyhire-content">
                <div className="whyhire-icon">★</div>
                <p className="whyhire-text">{item}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}