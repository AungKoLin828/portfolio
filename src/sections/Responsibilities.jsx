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
    <section id="responsibilities" className="py-20 px-6 md:px-12 bg-black/60">
      <h1 className="section-title">Responsibilities</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center max-w-5xl mx-auto">
        {responsibilities.map((item, i) => (
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
