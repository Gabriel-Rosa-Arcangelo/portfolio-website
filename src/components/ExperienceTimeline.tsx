import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  highlights: string[];
}

interface ExperienceTimelineProps {
  experience: ExperienceItem[];
}

const ExperienceTimeline = ({ experience }: ExperienceTimelineProps) => (
  <div className="relative mx-auto max-w-5xl">
    <div className="absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent md:left-7" />

    <div className="space-y-5">
      {experience.map((item, index) => {
        const isCurrent = item.period.includes("Present");
        const initials = item.company
          .split(" ")
          .slice(0, 2)
          .map((word) => word[0])
          .join("");

        return (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.24) }}
            className="relative pl-14 md:pl-20"
          >
            <div
              className={`absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-xl border font-mono text-[10px] font-semibold md:h-14 md:w-14 md:text-xs ${
                isCurrent
                  ? "border-primary/40 bg-primary/15 text-primary shadow-[0_0_30px_-12px_hsl(var(--primary)/0.8)]"
                  : "border-white/10 bg-card text-muted-foreground"
              }`}
            >
              {initials}
            </div>

            <div className={`experience-card ${isCurrent ? "experience-card-current" : ""}`}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
                      {item.company}
                    </p>
                    {isCurrent && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[9px] font-mono uppercase tracking-wider text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-lg font-display font-semibold text-foreground md:text-xl">
                    {item.role}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground lg:max-w-xs lg:justify-end">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {item.location}
                  </span>
                  <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em]">
                    {item.type}
                  </span>
                </div>
              </div>

              <ul className="mt-5 grid gap-2.5 md:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        );
      })}
    </div>
  </div>
);

export default ExperienceTimeline;
