import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

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

const ExperienceTimeline = ({ experience }: ExperienceTimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-1/2 md:-translate-x-px" />

      <div className="space-y-8 md:space-y-12">
        {experience.map((item, index) => {
          const isStudy =
            item.role.toLowerCase().includes("student") ||
            item.type.toLowerCase().includes("scientific");
          const Icon = isStudy ? GraduationCap : Briefcase;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative md:w-1/2 pl-8 md:pl-0 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              <div
                className={`absolute top-2 h-3 w-3 rounded-full border-4 border-background bg-primary ${
                  index % 2 === 0 ? "left-0 md:left-auto md:-right-1.5" : "left-0 md:-left-1.5"
                }`}
              />

              <div className="glass-card p-6">
                <div
                  className={`flex items-start gap-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className={index % 2 === 0 ? "md:text-right" : ""}>
                    <h3 className="text-base font-display font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <p className="text-sm text-primary">{item.company}</p>
                  </div>
                </div>

                <div
                  className={`mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {item.location}
                  </span>
                  <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.2em]">
                    {item.type}
                  </span>
                </div>

                <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {item.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 text-sm text-muted-foreground ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
