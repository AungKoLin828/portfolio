import { motion } from "framer-motion";
import skills from "../data/skills.json";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <h2 className="section-title">TECHNICAL SKILLS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {Object.entries(skills).map(([category, list], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0,255,255,0.2)" }}
            className="card p-6 w-full"
          >
            <h3 className="text-cyan-400 font-semibold mb-4 text-lg sm:text-xl capitalize">{category}</h3>
            <ul className="text-slate-200 text-sm sm:text-base space-y-1">
              {list.map((item) => <li key={item}> {item}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
