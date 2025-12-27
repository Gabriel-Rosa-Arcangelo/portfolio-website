import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Zap, Shield, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import SkillsSection from "@/components/SkillsSection";
import { skills, socialLinks } from "@/data/projects";

const About = () => {
  const principles = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Readable, maintainable, well-documented. Code that your team can understand and extend.",
    },
    {
      icon: Zap,
      title: "Automation First",
      description: "If it can be automated, it should be. Reduce manual work, eliminate human error.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Production-ready systems with proper error handling, logging, and monitoring.",
    },
    {
      icon: Terminal,
      title: "Developer Experience",
      description: "Clear APIs, good documentation, and tooling that makes development enjoyable.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="mx-auto mb-6 w-36 h-36 md:w-40 md:h-40 rounded-full border-2 border-primary/60 p-1 shadow-[0_0_40px_hsl(var(--primary)/0.25)]">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-card flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-3xl select-none">
                    G
                  </span>
                  <img
                    src="/profile.jpeg"
                    alt="Gabriel Rosa Arcangelo"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
              <span className="inline-block text-xs font-mono text-primary uppercase tracking-wider mb-4">
                About Me
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Gabriel Rosa Arcangelo
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Software Developer specializing in Bioinformatics & Healthcare Data.
                Building production-ready systems from prototype to cloud deploy.
              </p>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-8 md:p-10 mb-12"
            >
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                About
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I build custom web apps, APIs, and automations that save teams time and reduce errors.
                  My focus is on healthcare and biotech industries, where reliability and accuracy are critical.
                </p>
                <p>
                  With experience in Django, DRF, Celery, and PostgreSQL, I specialize in building
                  backend systems that handle complex data processing, validation, and reporting workflows.
                </p>
                <p>
                  I'm currently open to remote freelance work and long-term collaborations with teams
                  worldwide. I work in USD and am based in Brazil (UTC-3).
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="pb-20 md:pb-32">
        <div className="container">
          <SectionHeader
            subtitle="Philosophy"
            title="How I approach development"
            description="Core principles that guide my work."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="section-divider" />
      </div>

      {/* Skills */}
      <section className="py-20 md:py-32">
        <div className="container">
          <SectionHeader
            subtitle="Tech Stack"
            title="Tools I work with"
            description="A focused toolkit for building reliable, maintainable systems."
          />

          <div className="max-w-4xl mx-auto">
            <SkillsSection skills={skills} />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="section-divider" />
      </div>

      {/* How I Work */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              subtitle="Workflow"
              title="How I work"
              align="left"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h3 className="font-display font-semibold text-foreground mb-3">
                  Communication
                </h3>
                <ul className="space-y-2">
                  {[
                    "Async communication via Slack, Discord, or email",
                    "Weekly sync calls when needed",
                    "Clear documentation and progress updates",
                    "Responsive timezone overlap (UTC-3)",
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="font-display font-semibold text-foreground mb-3">
                  Development
                </h3>
                <ul className="space-y-2">
                  {[
                    "Git-based workflow with clear commits",
                    "Code reviews and quality checks",
                    "Automated testing where appropriate",
                    "Docker for consistent environments",
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6"
              >
                <h3 className="font-display font-semibold text-foreground mb-3">
                  Delivery
                </h3>
                <ul className="space-y-2">
                  {[
                    "Iterative releases with feedback loops",
                    "Documentation included by default",
                    "Deployment support and guidance",
                    "Post-launch support period",
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6"
              >
                <h3 className="font-display font-semibold text-foreground mb-3">
                  Payment
                </h3>
                <ul className="space-y-2">
                  {[
                    "USD payments via bank transfer or Wise",
                    "Clear milestone-based invoicing",
                    "Transparent pricing, no hidden fees",
                    "Flexible engagement models",
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's work together
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have a project in mind? I'd love to hear about it.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
