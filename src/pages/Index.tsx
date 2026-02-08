import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Database,
  Github,
  Linkedin,
  ShieldCheck,
  Workflow,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import ContactForm from "@/components/ContactForm";
import FloatingStack from "@/components/FloatingStack";
import TechIcon from "@/components/TechIcon";
import { projects, ndaProjects, services, experience, skills, socialLinks } from "@/data/projects";

const sectionByPath: Record<string, string> = {
  "/projects": "projects",
  "/services": "services",
  "/about": "about",
  "/contact": "contact",
};

const focusAreas = [
  {
    title: "API-first systems",
    description: "Secure, documented APIs with strong DX and observability.",
    icon: ShieldCheck,
  },
  {
    title: "Automation pipelines",
    description: "Celery-backed workflows, queues, and scheduled jobs.",
    icon: Workflow,
  },
  {
    title: "Data-ready backends",
    description: "PostgreSQL + analytics-ready schemas and reporting.",
    icon: Database,
  },
  {
    title: "Cloud deploys",
    description: "Dockerized services, CI/CD, and AWS-ready setups.",
    icon: Cloud,
  },
];

const Index = () => {
  const location = useLocation();
  const featuredProjects = projects.filter((p) => p.featured);

  useEffect(() => {
    const target = sectionByPath[location.pathname];
    if (!target) return;

    const handle = window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);

    return () => window.clearTimeout(handle);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 -z-10 mesh-bg" />
      <div className="fixed inset-0 -z-10 grid-overlay opacity-50" />
      <div className="noise-overlay" />

      <Navbar />

      <main className="relative">
        <section
          id="home"
          className="relative pt-28 pb-20 md:pt-36 overflow-hidden"
          style={{ paddingTop: "calc(7rem + 60px)" }}
        >
          <div className="absolute inset-0 z-0 hero-grid" />
          <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs font-mono uppercase tracking-[0.35em] text-accent"
              >
                <span className="hero-tag">Backend Developer</span>
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-4xl font-display font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl"
              >
                Backend systems.
                <span className="gradient-text block">Built for scale.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-2xl text-lg text-muted-foreground"
              >
                I build resilient Django/DRF systems with Celery, Redis, and PostgreSQL, focused on
                healthcare and biotech data workflows. From MVP to cloud deploy, your stack stays
                clean, documented, and scalable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link to="/projects">
                  <Button size="lg" className="btn-glow">
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/50 bg-primary/15 text-primary shadow-[0_16px_36px_-24px_hsl(var(--primary)/0.7)] hover:bg-primary/25"
                  >
                    Let&apos;s Talk
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                {[
                  "Git",
                  "Python",
                  "Django",
                  "Celery",
                  "Redis",
                  "PostgreSQL",
                  "MySQL",
                  "Docker",
                  "Cloud",
                ].map((tech) =>
                  <span
                    key={tech}
                    aria-label={tech}
                    title={tech}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 bg-primary/10 shadow-[0_10px_24px_-18px_hsl(var(--primary)/0.6)]"
                  >
                    <TechIcon name={tech} size={28} className="opacity-95" />
                  </span>,
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 flex items-center gap-4"
              >
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/70 px-4 py-2 text-sm font-medium text-foreground shadow-[0_12px_28px_-22px_hsl(var(--primary)/0.6)] transition-colors hover:border-primary/50 hover:bg-primary/10"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/70 px-4 py-2 text-sm font-medium text-foreground shadow-[0_12px_28px_-22px_hsl(var(--primary)/0.6)] transition-colors hover:border-primary/50 hover:bg-primary/10"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FloatingStack />
            </motion.div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-card p-5"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-base font-display font-semibold text-foreground">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{area.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="container">
          <div className="section-divider" />
        </div>

        <section id="projects" className="py-20 md:py-28">
          <div className="container">
            <SectionHeader
              subtitle="Featured Work"
              title="Projects built for reliability and scale"
              description="Production-ready systems that automate data, expose clean APIs, and power dashboards."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <div className="mt-12 glass-card p-6 md:p-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    Private Work
                  </p>
                  <h3 className="mt-2 text-xl font-display font-semibold text-foreground">
                    NDA projects delivered for labs and biotech teams
                  </h3>
                </div>
                <Link to="/contact">
                  <Button size="sm" variant="outline">
                    Request details
                  </Button>
                </Link>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {ndaProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="section-divider" />
        </div>

        <section id="services" className="py-20 md:py-28">
          <div className="container">
            <SectionHeader
              subtitle="Services"
              title="Backend delivery you can depend on"
              description="From API development to automation and DevOps, I build the infrastructure behind your product."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <div className="container">
          <div className="section-divider" />
        </div>

        <section id="stack" className="py-20 md:py-28">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
              <div>
                <SectionHeader
                  subtitle="Tech Stack"
                  title="Tools I rely on to ship safely"
                  description="Modern backend tooling that keeps systems observable, maintainable, and secure."
                  align="left"
                />
                <div className="glass-card p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    Backend-first, product-focused
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    I prioritize API design, data integrity, and automation. The result is software that
                    scales gracefully and lets your team move faster with confidence.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "API Design",
                      "Async Jobs",
                      "Observability",
                      "Security",
                      "Data Pipelines",
                    ].map((item) => (
                      <span key={item} className="tech-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <SkillsSection skills={skills} />
            </div>
          </div>
        </section>

        <div className="container">
          <div className="section-divider" />
        </div>

        <section id="about" className="py-20 md:py-28">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
              <div>
                <SectionHeader
                  subtitle="About"
                  title="Backend developer focused on healthcare & biotech"
                  description="I help teams automate data-heavy workflows and ship compliant, reliable systems."
                  align="left"
                />
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My work blends backend engineering with data automation, supporting labs and product
                    teams that need accurate, traceable pipelines. Every build comes with clear
                    documentation, testing strategies, and deploy-ready infrastructure.
                  </p>
                  <p>
                    Based in Brazil (UTC-3), I collaborate with remote teams worldwide and deliver in USD.
                  </p>
                </div>
                <div className="mt-6 glass-card p-6">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
                    Availability
                  </h4>
                  <p className="mt-2 text-sm text-foreground">
                    Open to freelance and long-term collaborations. Async-friendly, with weekly syncs when
                    needed.
                  </p>
                </div>
              </div>
              <ExperienceTimeline experience={experience} />
            </div>
          </div>
        </section>

        <div className="container">
          <div className="section-divider" />
        </div>

        <section id="contact" className="py-20 md:py-28">
          <div className="container">
            <SectionHeader
              subtitle="Contact"
              title="Let&apos;s build something dependable"
              description="Share your idea or timeline and I&apos;ll get back with next steps."
            />
            <div className="mx-auto max-w-5xl">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
