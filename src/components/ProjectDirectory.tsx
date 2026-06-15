import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
import TechIcon from "@/components/TechIcon";

interface ProjectDirectoryProps {
  projects: Project[];
}

const ProjectDirectory = ({ projects }: ProjectDirectoryProps) => (
  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-card/70">
    <div className="hidden grid-cols-[1.4fr_1fr_0.6fr] gap-4 border-b border-white/10 px-6 py-4 text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground md:grid">
      <span>Project</span>
      <span>Core stack</span>
      <span className="text-right">Links</span>
    </div>
    <div className="divide-y divide-white/10">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.24) }}
          className="group grid gap-4 px-5 py-5 transition-colors hover:bg-white/[0.035] md:grid-cols-[1.4fr_1fr_0.6fr] md:items-center md:px-6"
        >
          <div>
            <p className="text-sm font-display font-semibold text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </p>
            <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{project.oneLiner}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <TechIcon name={tech} size={13} />
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 md:justify-end">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Case study
              <ArrowUpRight className="h-3 w-3" />
            </Link>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label={`${project.title} on GitHub`}
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ProjectDirectory;
