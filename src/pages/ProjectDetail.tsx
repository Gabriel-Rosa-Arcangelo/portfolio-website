import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechIcon from "@/components/TechIcon";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <div className="fixed inset-0 -z-10 mesh-bg" />
        <div className="fixed inset-0 -z-10 grid-overlay opacity-50" />
        <div className="noise-overlay" />
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const projectImages = project.images?.length ? project.images : null;
  const totalImages = projectImages?.length ?? 0;

  const nextImage = () => {
    if (!totalImages) return;
    setCurrentImage((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    if (!totalImages) return;
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 -z-10 mesh-bg" />
      <div className="fixed inset-0 -z-10 grid-overlay opacity-50" />
      <div className="noise-overlay" />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          <div className="max-w-4xl">
            {/* Type badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-mono text-primary uppercase tracking-wider mb-4"
            >
              {project.type}
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              {project.title}
            </motion.h1>

            {/* One-liner */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-6"
            >
              {project.oneLiner}
            </motion.p>

            {/* Stack badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {project.stack.map((tech) => (
                <span key={tech} className="tech-badge">
                  <TechIcon name={tech} size={14} className="opacity-90" />
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2">
                    <Github className="w-4 h-4" />
                    View Source
                  </Button>
                </a>
              )}
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshot Carousel */}
      {projectImages && (
        <section className="pb-12 md:pb-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative max-w-4xl"
            >
              <div className="glass-card overflow-hidden">
                <img
                  src={projectImages[currentImage]}
                  alt={`${project.title} screenshot ${currentImage + 1}`}
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={prevImage}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImage ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Case Study Content */}
      <section className="pb-20 md:pb-32">
        <div className="container">
          <div className="max-w-4xl grid md:grid-cols-2 gap-8">
            {/* Problem */}
            {project.problem && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6"
              >
                <h3 className="font-display font-semibold text-foreground mb-3">
                  The Problem
                </h3>
                <p className="text-muted-foreground text-sm">{project.problem}</p>
              </motion.div>
            )}

            {/* Solution */}
            {project.solution && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="font-display font-semibold text-foreground mb-3">
                  The Solution
                </h3>
                <p className="text-muted-foreground text-sm">{project.solution}</p>
              </motion.div>
            )}

            {/* Architecture */}
            {project.architecture && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card p-6 md:col-span-2"
              >
                <h3 className="font-display font-semibold text-foreground mb-3">
                  Architecture
                </h3>
                <p className="text-muted-foreground text-sm">{project.architecture}</p>
              </motion.div>
            )}

            {/* Key Features */}
            {project.keyFeatures && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card p-6 md:col-span-2"
              >
                <h3 className="font-display font-semibold text-foreground mb-3">
                  Key Features
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {project.keyFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-6 md:col-span-2"
            >
              <h3 className="font-display font-semibold text-foreground mb-3">
                Highlights
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
