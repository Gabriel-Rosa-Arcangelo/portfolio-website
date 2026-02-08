import { motion } from "framer-motion";
import { Code2, Webhook, FileSpreadsheet, Cloud, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Webhook,
  FileSpreadsheet,
  Cloud,
};

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    description: string;
    deliverables: string[];
    timeline: string;
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const Icon = iconMap[service.icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card-hover h-full p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-display font-semibold text-foreground">
              {service.title}
            </h3>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              {service.subtitle}
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">{service.description}</p>

        <ul className="mt-4 space-y-2">
          {service.deliverables.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t card-divider pt-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Typical timeline
          </span>
          <p className="mt-2 text-sm text-foreground">{service.timeline}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
