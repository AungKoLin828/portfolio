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
    <section id="whyhireme" className="py-20 px-6 md:px-12 bg-black/60">
      <h2 className="section-title">Professional Advantages I Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center max-w-5xl mx-auto">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
            }}
            className="w-full max-w-sm"
          >
            <GlassCard className="p-6 flex items-start gap-3">
              <p className="text-slate-200 text-base sm:text-lg">{item}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
