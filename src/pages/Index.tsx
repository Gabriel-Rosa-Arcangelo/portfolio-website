import { useEffect, useState } from "react";
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
  const [showWhoAmI, setShowWhoAmI] = useState(false);
  const [isCompiling, setIsCompiling] = useState(false);

  const handleCompile = () => {
    if (isCompiling) return;
    setIsCompiling(true);
    setShowWhoAmI(false);
    window.setTimeout(() => {
      setShowWhoAmI(true);
      setIsCompiling(false);
    }, 700);
  };

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
          style={{ paddingTop: "calc(7rem + 0px)" }}
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
                <span className="hero-tag">Backend Engineer</span>
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
                I build resilient Django REST API systems with Celery, Redis, and PostgreSQL, focused on
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
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 bg-primary/10 shadow-[0_10px_24px_-18px_hsl(var(--primary)/0.6)] transition-transform duration-200 hover:scale-150"
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
              description="Production-minded systems that automate data, expose documented APIs, and power dashboards."
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
                    Private work described at capability level, without client code or data
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
              <div className="min-w-0">
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
            <div className="grid gap-12 lg:gap-10 lg:grid-cols-[600px_minmax(0,1fr)] lg:items-start">
              <div className="space-y-6">
                <div className="flex w-full max-w-none flex-col items-start gap-4 text-left lg:max-w-sm lg:items-center lg:text-center">
                  <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-primary/40 bg-card shadow-[0_0_40px_-24px_hsl(var(--primary)/0.6)] sm:h-52 sm:w-52">
                    <img
                      src="/profile.png"
                      alt="Gabriel Rosa"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      Profile
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Backend engineering for healthcare, biotech, and data-driven products.
                    </p>
                  </div>
                </div>

                <div className="glass-card p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      whoAmI()
                    </p>
                    <button
                      type="button"
                      onClick={handleCompile}
                      disabled={isCompiling}
                      className="inline-flex items-center gap-2 rounded-full border border-[#44475a] bg-[#1f212a] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[#f8f8f2] transition-colors hover:border-[#6272a4] disabled:opacity-60"
                    >
                      {isCompiling ? (
                        <>
                          Compiling
                          <span className="inline-flex h-2 w-2 rounded-full bg-[#50fa7b] animate-pulse" />
                        </>
                      ) : (
                        "Compile"
                      )}
                    </button>
                  </div>
                  <pre className="mt-3 min-h-[220px] overflow-x-hidden rounded-xl p-4 text-[11px] leading-snug code-dracula whitespace-pre-wrap break-words sm:min-h-[240px] sm:overflow-x-auto sm:text-xs sm:whitespace-pre">
<code>
  <span className="code-keyword">function</span>{" "}
  <span className="code-fn">whoAmI</span>
  <span className="code-punct">()</span>{" "}
  <span className="code-punct">{"{"}</span>
  {"\n"}  <span className="code-keyword">return</span>{" "}
  <span className="code-punct">{"{"}</span>
  {"\n"}    <span className="code-prop">role</span>
  <span className="code-punct">: </span>
  <span className="code-string">&quot;Backend Engineer&quot;</span>
  <span className="code-punct">,</span>
  {"\n"}    <span className="code-prop">focus</span>
  <span className="code-punct">: [</span>
  <span className="code-string">&quot;REST APIs&quot;</span>
  <span className="code-punct">, </span>
  <span className="code-string">&quot;Data Pipelines&quot;</span>
  <span className="code-punct">, </span>
  <span className="code-string">&quot;Automated Reporting&quot;</span>
  <span className="code-punct">],</span>
  {"\n"}    <span className="code-prop">stack</span>
  <span className="code-punct">: [</span>
  <span className="code-string">&quot;Python&quot;</span>
  <span className="code-punct">, </span>
  <span className="code-string">&quot;Django&quot;</span>
  <span className="code-punct">, </span>
  <span className="code-string">&quot;PostgreSQL&quot;</span>
  <span className="code-punct">, </span>
  <span className="code-string">&quot;Celery&quot;</span>
  <span className="code-punct">, </span>
  <span className="code-string">&quot;Redis&quot;</span>
  <span className="code-punct">],</span>
  {"\n"}    <span className="code-prop">domain</span>
  <span className="code-punct">: [</span>
  <span className="code-string">&quot;Healthcare&quot;</span>
  <span className="code-punct">, </span>
  <span className="code-string">&quot;Genomics&quot;</span>
  <span className="code-punct">, </span>
  <span className="code-string">&quot;Metagenomics&quot;</span>
  <span className="code-punct">, </span>
  <span className="code-string">&quot;Proteomics&quot;</span>
  <span className="code-punct">],</span>
  {"\n"}    <span className="code-prop">strengths</span>
  <span className="code-punct">: [</span>
  <span className="code-string">&quot;Performance&quot;</span>
  <span className="code-punct">, </span>
  <span className="code-string">&quot;Data Integrity&quot;</span>
  <span className="code-punct">, </span>
  <span className="code-string">&quot;Clean Architecture&quot;</span>
  <span className="code-punct">],</span>
  {"\n"}  <span className="code-punct">{"};"}</span>
  {"\n"}<span className="code-punct">{"}"}</span>
  {"\n\n"}<span className="code-keyword">const</span>{" "}
  <span className="code-prop">profile</span>
  <span className="code-punct"> = </span>
  <span className="code-fn">whoAmI</span>
  <span className="code-punct">();</span>
  {"\n"}<span className="code-prop">console</span>
  <span className="code-punct">.</span>
  <span className="code-fn">log</span>
  <span className="code-punct">(</span>
  <span className="code-prop">profile</span>
  <span className="code-punct">);</span>
</code>
                  </pre>
                  {showWhoAmI && (
                    <div className="mt-3 rounded-xl border border-[#44475a] bg-[#1f212a] p-3 text-xs text-[#f8f8f2]">
                      <span className="code-keyword">Output:</span>{" "}
                      Backend Engineer · Biomedical Informatics · Python/Django · REST APIs & Data
                      Pipelines · Healthcare & Omics Data
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full">
                <SectionHeader
                  subtitle="About"
                  title="Backend Engineer"
                  description="Biomedical Informatics background with a focus on production-ready systems."
                  align="left"
                />
                <div className="space-y-4 text-muted-foreground max-w-none text-left md:text-justify">
                  <p>
                    I&apos;m a Backend Engineer with a strong foundation in Biomedical Informatics from USP
                    (Universidade de Sao Paulo). I specialize in designing and shipping
                    production-ready backends using Python and Django.
                  </p>
                  <p>
                    My work spans REST APIs, data pipelines, and automated reporting workflows that
                    transform complex healthcare and scientific data into usable insights. I have
                    hands-on experience with omics data - including genomics, metagenomics, and
                    proteomics.
                  </p>
                  <p>
                    I prioritize performance, data integrity, and clean architecture so teams can trust
                    their systems and move faster.
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
            </div>

            <div className="mt-16">
              <SectionHeader
                subtitle="Timeline"
                title="Experience"
                description="A timeline of roles and projects in healthcare and biotech."
              />
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
