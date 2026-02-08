import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/projects";

const navItems = [
  { label: "Home", href: "/", sectionId: "home" },
  { label: "Projects", href: "/projects", sectionId: "projects" },
  { label: "Services", href: "/services", sectionId: "services" },
  { label: "About", href: "/about", sectionId: "about" },
  { label: "Contact", href: "/contact", sectionId: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string, sectionId?: string) => {
    if (isActive(href)) {
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        scrollToTop();
      }
    }
    setIsOpen(false);
  };

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

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => handleNavClick(item.href, item.sectionId)}
                className={`rounded-full border px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] transition-all ${
                  isActive(item.href)
                    ? "border-primary/40 bg-primary/15 text-primary"
                    : "border-transparent text-muted-foreground hover:border-white/15 hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
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
            <Link to="/contact">
              <Button size="sm" className="btn-glow">
                Let&apos;s Talk
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground"
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
            className="md:hidden border-b border-white/10 bg-background/95 backdrop-blur-2xl"
          >
            <div className="container py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => handleNavClick(item.href, item.sectionId)}
                  className={`block rounded-2xl border px-4 py-3 text-xs font-mono uppercase tracking-[0.2em] transition-all ${
                    isActive(item.href)
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
                <Link to="/contact" className="flex-1" onClick={() => setIsOpen(false)}>
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
