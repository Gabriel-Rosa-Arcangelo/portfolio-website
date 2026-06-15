import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/projects";

const navItems = [
  { label: "Home", href: "/", sectionId: "home" },
  { label: "Work", href: "/projects", sectionId: "projects" },
  { label: "Experience", href: "/experience", sectionId: "experience" },
  { label: "Stack", href: "/stack", sectionId: "stack" },
  { label: "About", href: "/about", sectionId: "about" },
  { label: "Contact", href: "/contact", sectionId: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const isActive = (href: string, sectionId?: string) => {
    if (isHome && sectionId) {
      return (activeSection ?? "home") === sectionId;
    }
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const smoothScrollTo = (targetY: number, duration = 1100) => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      window.scrollTo(0, targetY);
      return;
    }

    const startY = window.scrollY;
    const delta = targetY - startY;
    if (Math.abs(delta) < 1) return;

    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    const easeInOut = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOut(progress);
      window.scrollTo(0, startY + delta * eased);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        root.style.scrollBehavior = previousBehavior;
      }
    };

    window.requestAnimationFrame(step);
  };

  const scrollToTop = () => {
    smoothScrollTo(0);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const navHeight = document.querySelector("nav")?.getBoundingClientRect().height ?? 0;
    const targetTop = section.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    smoothScrollTo(Math.max(0, targetTop));
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    sectionId?: string,
  ) => {
    if (isHome && sectionId) {
      event.preventDefault();
      scrollToSection(sectionId);
      setIsOpen(false);
      return;
    }

    if (isActive(href, sectionId)) {
      event.preventDefault();
      scrollToTop();
    }

    setIsOpen(false);
  };

  useEffect(() => {
    if (!isHome) {
      setActiveSection(null);
      return;
    }

    const sectionIds = navItems
      .map((item) => item.sectionId)
      .filter((id): id is string => Boolean(id));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    let ticking = false;
    const updateActive = () => {
      const navHeight = document.querySelector("nav")?.getBoundingClientRect().height ?? 0;
      const scrollPosition = window.scrollY + navHeight + 24;
      let currentId = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentId = section.id;
        }
      }

      setActiveSection(currentId);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 border-b border-white/10 bg-background/75 backdrop-blur-2xl" />

      <div className="container relative">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center" onClick={scrollToTop}>
            <span className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Gabriel Rosa
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={(event) => handleNavClick(event, item.href, item.sectionId)}
                className={`rounded-full border px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] transition-all ${
                  isActive(item.href, item.sectionId)
                    ? "border-primary/40 bg-primary/15 text-primary"
                    : "border-transparent text-muted-foreground hover:border-white/15 hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-transparent p-2 text-muted-foreground transition-colors hover:border-white/10 hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-transparent p-2 text-muted-foreground transition-colors hover:border-white/10 hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <Link to="/contact" onClick={(event) => handleNavClick(event, "/contact", "contact")}>
              <Button size="sm" className="btn-glow">
                Let&apos;s Talk
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-b border-white/10 bg-background/95 backdrop-blur-2xl"
          >
            <div className="container py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={(event) => handleNavClick(event, item.href, item.sectionId)}
                  className={`block rounded-2xl border px-4 py-3 text-xs font-mono uppercase tracking-[0.2em] transition-all ${
                    isActive(item.href, item.sectionId)
                      ? "border-primary/40 bg-primary/15 text-primary"
                      : "border-transparent text-muted-foreground hover:border-white/15 hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center gap-3 px-2 pt-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <Link
                  to="/contact"
                  className="flex-1"
                  onClick={(event) => handleNavClick(event, "/contact", "contact")}
                >
                  <Button size="sm" className="w-full btn-glow">
                    Let&apos;s Talk
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
