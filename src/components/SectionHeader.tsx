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
  const isCentered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 md:mb-14 ${isCentered ? "text-center" : "text-left"}`}
    >
      {subtitle && (
        <div className={`flex items-center gap-3 ${isCentered ? "justify-center" : "justify-start"}`}>
          <span className="h-px w-10 bg-gradient-to-r from-primary to-accent" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            {subtitle}
          </span>
        </div>
      )}
      <h2 className="mt-4 text-3xl font-display font-semibold text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg text-muted-foreground ${
            isCentered ? "mx-auto max-w-2xl" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
};

export default SectionHeader;
