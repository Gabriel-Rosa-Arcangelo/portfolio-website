import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

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
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

      <div className="space-y-8 md:space-y-12">
        {experience.map((item, index) => (
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
            {/* Timeline dot */}
            <div
              className={`absolute top-2 w-3 h-3 rounded-full bg-primary border-4 border-background ${
                index % 2 === 0 ? "left-0 md:left-auto md:-right-1.5" : "left-0 md:-left-1.5"
              }`}
            />

            {/* Card */}
            <div className="glass-card p-6">
              {/* Header */}
              <div className={`flex items-start gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div className={index % 2 === 0 ? "md:text-right" : ""}>
                  <h3 className="font-display font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <p className="text-sm text-primary">{item.company}</p>
                </div>
              </div>

              {/* Meta */}
              <div className={`flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </span>
                <span className="px-2 py-0.5 rounded bg-muted text-muted-foreground">
                  {item.type}
                </span>
              </div>

              {/* Highlights */}
              <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                {item.highlights.map((highlight, i) => (
                  <li key={i} className={`text-sm text-muted-foreground flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
