import { motion } from "framer-motion";
import TechIcon from "@/components/TechIcon";

interface SkillsSectionProps {
  skills: Record<string, string[]>;
}

const categories: { key: string; name: string }[] = [
  { key: "backend", name: "Backend" },
  { key: "data", name: "Data" },
  { key: "database", name: "Database" },
  { key: "frontend", name: "Frontend" },
  { key: "devops", name: "DevOps" },
  { key: "domain", name: "Domain" },
];

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          className="glass-card p-5"
        >
          <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
            {category.name}
          </h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills[category.key]?.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.04 }}
                className="tech-badge"
              >
                <TechIcon name={skill} size={14} className="opacity-90" />
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsSection;
