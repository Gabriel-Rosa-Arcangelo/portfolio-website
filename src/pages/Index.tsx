import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import SectionHeader from "@/components/SectionHeader";
import { projects, ndaProjects, services, experience, skills, socialLinks } from "@/data/projects";

const Index = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticlesBackground />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        
        {/* Content */}
        <div className="container relative z-10 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Open to remote freelance & collaborations
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Building production-grade{" "}
              <span className="gradient-text">automation,</span> APIs, and data-driven{" "}
              <span className="gradient-text">dashboards.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Django/DRF + Celery + PostgreSQL + Docker — from prototype to cloud deploy.
            </motion.p>

            {/* Stack badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2 mb-10"
            >
              {["Django", "DRF", "Pandas", "Celery", "PostgreSQL", "Redis", "Docker", "AWS"].map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/projects">
                <Button size="lg" className="gap-2 px-8">
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2 px-8">
                  Contact Me
                </Button>
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center gap-4 mt-10"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card hover:border-primary/30 transition-colors"
              >
                <Github className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card hover:border-primary/30 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground" />
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            onClick={scrollToProjects}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs font-mono">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </motion.button>
        </div>

        {/* Floating glass cards (decorative) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute left-10 top-1/3 hidden lg:block"
        >
          <div className="glass-card w-48 h-32 animate-float opacity-30" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute right-10 top-2/3 hidden lg:block"
        >
          <div className="glass-card w-36 h-24 animate-float animation-delay-200 opacity-30" />
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 md:py-32">
        <div className="container">
          <SectionHeader
            subtitle="Featured Work"
            title="Projects that showcase my expertise"
            description="Production-ready systems that automate data and power full-stack dashboards."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <Link to="/projects">
              <Button variant="outline" size="lg" className="gap-2">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="section-divider" />
      </div>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <SectionHeader
            subtitle="Services"
            title="What I can build for you"
            description="End-to-end solutions tailored to your business needs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="section-divider" />
      </div>

      {/* Skills Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <SectionHeader
            subtitle="Tech Stack"
            title="Tools & technologies I work with"
            description="A focused toolkit for building reliable, maintainable systems."
          />

          <SkillsSection skills={skills} />
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="section-divider" />
      </div>

      {/* Experience Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <SectionHeader
            subtitle="Experience"
            title="Professional journey"
            description="Building production-ready systems for healthcare and biotech."
          />

          <ExperienceTimeline experience={experience} />
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="section-divider" />
      </div>

      {/* NDA Projects Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <SectionHeader
            subtitle="Private Work"
            title="Projects under NDA"
            description="Some professional work is private due to NDA; public demos available on request."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {ndaProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="section-divider" />
      </div>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to build something great?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss your project and see how I can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="gap-2 px-8">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 px-8">
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
