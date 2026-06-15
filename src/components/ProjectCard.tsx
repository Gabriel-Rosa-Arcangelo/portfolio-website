import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Github,
  ExternalLink,
  Server,
  Workflow,
  HeartPulse,
  Brain,
  Monitor,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import { Project } from "@/data/projects";
import TechIcon from "@/components/TechIcon";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const getProjectIcon = () => {
    if (project.isNDA) return ShieldCheck;
    if (project.title.includes("Student Researcher")) return GraduationCap;
    if (project.category.includes("Healthcare")) return HeartPulse;
    if (project.category.includes("ML")) return Brain;
    if (project.category.includes("Automation")) return Workflow;
    if (project.category.includes("React")) return Monitor;
    return Server;
  };

  const Icon = getProjectIcon();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card-hover relative h-full overflow-hidden p-6">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.18),transparent_60%)]" />

        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </span>
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  {project.organization ?? project.type}
                </span>
                <h3 className="mt-2 text-xl font-display font-semibold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
              </div>
            </div>
            {project.isNDA && (
              <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-primary">
                Confidential
              </span>
            )}
          </div>

          <p className="mt-3 text-sm text-muted-foreground">{project.oneLiner}</p>

          <ul className="mt-4 space-y-2">
            {project.highlights.slice(0, 3).map((highlight, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((tech) => (
              <span key={tech} className="tech-badge">
                <TechIcon name={tech} size={14} className="opacity-90" />
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="tech-badge">+{project.stack.length - 5}</span>
            )}
          </div>

          <div className="mt-6 flex items-center justify-between border-t card-divider pt-4">
            {!project.isNDA ? (
              <>
                <Link
                  to={`/projects/${project.slug}`}
                  className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex items-center gap-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    className="rounded-full border border-transparent p-2 text-muted-foreground transition-colors hover:border-primary/20 hover:text-primary"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    className="rounded-full border border-transparent p-2 text-muted-foreground transition-colors hover:border-primary/20 hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </>
            ) : (
              <span className="text-xs text-muted-foreground">
                Capability-level summary. Private implementation withheld.
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
