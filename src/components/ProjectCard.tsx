import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card-hover h-full flex flex-col p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-wider">
              {project.type}
            </span>
            <h3 className="font-display text-xl font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          {project.isNDA && (
            <span className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground">
              NDA
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm flex-1 mb-4">
          {project.oneLiner}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-4">
          {project.highlights.slice(0, 3).map((highlight, i) => (
            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="tech-badge">+{project.stack.length - 5}</span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          {!project.isNDA ? (
            <>
              <Link
                to={`/projects/${project.slug}`}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </>
          ) : (
            <span className="text-xs text-muted-foreground">
              Details available on request
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
