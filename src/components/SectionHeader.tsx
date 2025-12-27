import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

const SectionHeader = ({
  title,
  subtitle,
  description,
  align = "center",
  children,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      {subtitle && (
        <span className="inline-block text-xs font-mono text-primary uppercase tracking-wider mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-muted-foreground text-lg ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
};

export default SectionHeader;
