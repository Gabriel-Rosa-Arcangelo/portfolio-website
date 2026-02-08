import { Link } from "react-router-dom";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/projects";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-background/80">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary shadow-[0_0_30px_-20px_hsl(var(--primary)/0.8)]">
                <span className="font-display text-sm font-semibold">GR</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-sm font-semibold text-foreground">Gabriel Rosa</span>
                <span className="text-xs text-muted-foreground">Backend Developer</span>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Backend systems for healthcare and data-heavy products. I design APIs, automation
              pipelines, and deploy-ready infrastructure with Django, Celery, and PostgreSQL.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="glass-card p-6">
            <h4 className="text-lg font-display font-semibold text-foreground">
              Ready to plan your backend?
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your scope and timeline. I reply with next steps and a clear plan.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button size="sm" className="btn-glow">
                  Start a Project
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="sm" variant="outline">
                  View Work
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Remote-friendly",
                "USD payments",
                "UTC-3",
                "Async-first",
              ].map((item) => (
                <span key={item} className="tech-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Gabriel Rosa Arcangelo. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
