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
      <div className="glass-card-hover h-full flex flex-col p-6">
        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <span className="text-xs font-mono text-muted-foreground">
              {service.subtitle}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4">
          {service.description}
        </p>

        {/* Deliverables */}
        <ul className="space-y-2 flex-1 mb-4">
          {service.deliverables.map((item, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Timeline */}
        <div className="pt-4 border-t border-border">
          <span className="text-xs font-mono text-muted-foreground">
            Typical timeline: <span className="text-foreground">{service.timeline}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
