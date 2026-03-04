import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import skills from "../data/skills.json";
import GlassCard from "../components/GlassCard";

const Icons = { ...FaIcons, ...SiIcons };

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-12">
      <h2 className="section-title">TECHNICAL SKILLS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {Object.entries(skills).map(([category, list], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 relative overflow-hidden">
              <h3 className="font-semibold mb-8 text-xl text-center tracking-wide">
                {category}
              </h3>

              <div className="skills-row">
                {list.map((item, index) => {
                  const IconComponent = Icons[item.icon];

                  return (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="skill-pill"
                    >
                      <div className={`skill-icon ${category}`}>
                        {IconComponent && <IconComponent />}
                      </div>

                      <span className="skill-name">{item.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
