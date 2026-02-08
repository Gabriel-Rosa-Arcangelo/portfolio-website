import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import TechIcon from "@/components/TechIcon";

const stackItems = [
  {
    label: "Python",
    tone: "primary",
    style: { top: "4%", left: "8%" },
    float: { duration: 6.4, delay: 0 },
  },
  {
    label: "Django",
    tone: "primary",
    style: { top: "10%", right: "6%" },
    float: { duration: 5.8, delay: 0.2 },
  },
  {
    label: "REST API",
    tone: "accent",
    style: { top: "36%", right: "2%" },
    float: { duration: 6.8, delay: 0.35 },
  },
  {
    label: "PostgreSQL",
    tone: "primary",
    style: { bottom: "18%", right: "14%" },
    float: { duration: 7.2, delay: 0.15 },
  },
  {
    label: "Docker",
    tone: "accent",
    style: { bottom: "6%", left: "16%" },
    float: { duration: 6.2, delay: 0.1 },
  },
  {
    label: "Redis",
    tone: "accent",
    style: { top: "58%", left: "4%" },
    float: { duration: 5.6, delay: 0.4 },
  },
  {
    label: "AWS",
    tone: "primary",
    style: { top: "14%", left: "48%" },
    float: { duration: 7, delay: 0.25 },
  },
] as const;

const toneClasses = {
  primary: "border-primary/40 bg-primary/10",
  accent: "border-accent/40 bg-accent/10",
} as const;

const FloatingStack = () => {
  return (
    <div className="relative h-[360px] w-full overflow-hidden md:h-[420px]">
      <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-card/80" />
      <div className="absolute inset-6 rounded-[26px] border border-white/10" />

      <div className="absolute left-1/2 top-1/2 w-[240px] -translate-x-1/2 -translate-y-1/2 glass-card p-5 text-center">
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Backend Core
        </span>
        <h3 className="mt-2 text-lg font-display font-semibold text-foreground">
          APIs, automations & data
        </h3>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {["Django", "Celery", "PostgreSQL", "Docker"].map((item) => (
            <span key={item} className="tech-badge">
              <TechIcon name={item} size={14} className="opacity-90" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {stackItems.map((item) => (
        <motion.div
          key={item.label}
          style={item.style}
          className="absolute"
          animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
          transition={{
            duration: item.float.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: item.float.delay,
          }}
        >
          <div className={cn("floating-chip", toneClasses[item.tone])}>
            <TechIcon name={item.label} size={16} className="opacity-90" />
            <span
              className={item.label === "AWS" ? "text-white font-semibold" : undefined}
              style={item.label === "AWS" ? { color: "#ffffff" } : undefined}
            >
              {item.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingStack;
