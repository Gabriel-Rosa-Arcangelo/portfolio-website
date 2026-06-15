import { motion } from "framer-motion";
import { Activity, CheckCircle2, Database, Server, Workflow } from "lucide-react";

const layers = [
  {
    label: "API layer",
    detail: "Django REST Framework",
    icon: Server,
    status: "healthy",
  },
  {
    label: "Async processing",
    detail: "Celery + Redis",
    icon: Workflow,
    status: "processing",
  },
  {
    label: "Data layer",
    detail: "PostgreSQL + object storage",
    icon: Database,
    status: "replicated",
  },
];

const ArchitecturePanel = () => (
  <div className="architecture-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
    <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
    <div className="relative">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
            Production mindset
          </p>
          <h2 className="mt-2 text-lg font-display font-semibold text-foreground">
            Reliable systems, end to end
          </h2>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-emerald-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
          Online
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {layers.map((layer, index) => {
          const Icon = layer.icon;
          return (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.35 + index * 0.1 }}
              className="architecture-layer"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-foreground">{layer.label}</span>
                <span className="block truncate text-xs text-muted-foreground">{layer.detail}</span>
              </span>
              <span className="hidden text-[10px] font-mono uppercase tracking-wider text-emerald-300 sm:block">
                {layer.status}
              </span>
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
            </motion.div>
          );
        })}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {[
          ["API", "documented"],
          ["Jobs", "auditable"],
          ["Data", "validated"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              {label}
            </p>
            <p className="mt-1 text-xs font-medium text-foreground">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <Activity className="h-3.5 w-3.5 text-accent" />
        Designed for observability, maintainability, and scale.
      </div>
    </div>
  </div>
);

export default ArchitecturePanel;
