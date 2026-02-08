import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Loader2,
  Check,
  Mail,
  Linkedin,
  Github,
  Calendar,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { socialLinks } from "@/data/projects";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const inputBaseStyles =
    "border-white/15 bg-white/5 text-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] hover:border-white/25 focus-visible:border-primary/60 focus-visible:ring-primary/35 focus-visible:ring-offset-0";

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Opening email draft…",
      description: `To: ${socialLinks.email}`,
    });

    const subject = `Portfolio contact — ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    const mailtoUrl = `mailto:${socialLinks.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    toast({
      title: "Email copied!",
      description: socialLinks.email,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const scheduleMailtoUrl = (() => {
    const subject = "Schedule a 30-minute intro call";
    const body = [
      "Hi Gabriel,",
      "",
      "I'd like to schedule a 30-minute intro call.",
      "",
      "My availability:",
      "- ",
      "",
      "Time zone:",
      "",
      "Thanks,",
    ].join("\n");
    return `mailto:${socialLinks.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  })();

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="glass-card space-y-6 p-6 md:p-8">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              className={`${inputBaseStyles} ${
                errors.name ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/40" : ""
              }`}
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className={`${inputBaseStyles} ${
                errors.email ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/40" : ""
              }`}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project..."
              rows={5}
              className={`${inputBaseStyles} ${
                errors.message ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/40" : ""
              }`}
            />
            {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting || isSubmitted} className="w-full btn-glow">
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Opening...
              </>
            ) : isSubmitted ? (
              <>
                <Check className="h-4 w-4" />
                Draft Ready
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-6"
      >
        <div className="glass-card p-6">
          <h3 className="text-lg font-display font-semibold text-foreground">Direct Contact</h3>
          <div className="mt-4 space-y-3">
            <button
              onClick={copyEmail}
              className="flex w-full items-center gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-3 text-left transition-colors hover:border-primary/40"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="flex-1 truncate text-sm text-foreground">{socialLinks.email}</span>
              {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
            </button>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-3 transition-colors hover:border-primary/40"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <span className="flex-1 text-sm text-foreground">LinkedIn Profile</span>
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-3 transition-colors hover:border-primary/40"
            >
              <Github className="h-5 w-5 text-primary" />
              <span className="flex-1 text-sm text-foreground">GitHub Profile</span>
            </a>
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-lg font-display font-semibold text-foreground">Schedule a Call</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Prefer a video call? Book a 30-minute intro to discuss your scope.
          </p>
          <a href={scheduleMailtoUrl}>
            <Button variant="outline" className="mt-4 w-full">
              <Calendar className="h-4 w-4" />
              Book a Call
            </Button>
          </a>
        </div>

      </motion.div>
    </div>

      <div className="mt-6">
        <div className="glass-card p-6 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Availability
            </h3>
            <p className="mt-2 text-sm text-foreground">
              Open to remote freelance and long-term collaborations.
            </p>
          </div>
          <p className="mt-4 text-sm text-muted-foreground md:mt-0">Global clients, USD payments.</p>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
