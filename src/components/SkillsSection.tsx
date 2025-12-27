import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: string[];
  color: string;
}

interface SkillsSectionProps {
  skills: Record<string, string[]>;
}

const categories: { key: string; name: string; color: string }[] = [
  { key: "backend", name: "Backend", color: "primary" },
  { key: "data", name: "Data", color: "primary" },
  { key: "database", name: "Database", color: "primary" },
  { key: "frontend", name: "Frontend", color: "primary" },
  { key: "devops", name: "DevOps", color: "primary" },
  { key: "domain", name: "Domain", color: "primary" },
];

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          className="glass-card p-4 md:p-5"
        >
          <h4 className="font-display font-medium text-foreground text-sm mb-3">
            {category.name}
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {skills[category.key]?.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                className="tech-badge"
              >
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
