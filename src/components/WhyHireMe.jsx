import { motion } from "framer-motion";

const highlights = [
  "Senior-level Spring Boot & Batch expertise",
  "Proven Japan offshore delivery experience",
  "Strong legacy modernization background",
  "Focus on stability, performance, and maintainability",
];

export default function WhyHireMe() {
  return (
    <section className="py-20 px-6 md:px-12 bg-indigo-900/70">
      <h2 className="section-title">Why Hire Me</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center max-w-5xl mx-auto">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,255,255,0.2)" }}
            className="card p-6 w-full max-w-sm flex items-start gap-3"
          >
            <span className="text-cyan-400 text-2xl mt-1"></span>
            <p className="text-slate-200 text-base sm:text-lg">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
