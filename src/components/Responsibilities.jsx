import { motion } from "framer-motion";

const responsibilities = [
  "Manage a team of 8+ developers, with 80% hands-on development and 20% management.",
  "Ensure Agile sprint delivery with consistent 95% on-time completion.",
  "Conduct code reviews, optimize backend logic, and maintain scalable architecture.",
  "Mentor junior developers and enforce coding best practices.",
];

export default function Responsibilities() {
  return (
    <section id="responsibilities" className="py-20 px-6 md:px-12 bg-indigo-900/70">
      <h1 className="section-title">Responsibilities</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 justify-items-center max-w-5xl mx-auto">
        {responsibilities.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,255,255,0.2)" }}
            className="card p-6 w-full max-w-sm flex items-start gap-3"
          >
            <span className="text-cyan-400 text-xl mt-1"></span>
            <p className="text-slate-200 text-base sm:text-lg">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
