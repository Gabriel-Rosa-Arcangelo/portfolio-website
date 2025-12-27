import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Check, Mail, Linkedin, Github, Calendar, Copy } from "lucide-react";
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

    // Reset after opening the draft
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

  const googleCalendarUrl = (() => {
    const url = new URL("https://calendar.google.com/calendar/render");
    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set("text", "30-minute intro call");
    url.searchParams.set(
      "details",
      "30-minute intro call to discuss your project.\n\nIf Google Meet isn't auto-added, please add one before sending the invite.",
    );
    url.searchParams.set("location", "Google Meet");
    url.searchParams.set("add", socialLinks.email);
    return url.toString();
  })();

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
      {/* Form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project..."
              rows={5}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && (
              <p className="text-xs text-destructive">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="w-full gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Opening...
              </>
            ) : isSubmitted ? (
              <>
                <Check className="w-4 h-4" />
                Draft Ready
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </motion.div>

      {/* Direct Links */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-6"
      >
        <div className="glass-card p-6">
          <h3 className="font-display font-semibold text-foreground mb-4">
            Direct Contact
          </h3>
          <div className="space-y-3">
            <button
              onClick={copyEmail}
              className="w-full flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="flex-1 text-sm text-foreground truncate">
                {socialLinks.email}
              </span>
              {copied ? (
                <Check className="w-4 h-4 text-primary" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground" />
              )}
            </button>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="flex-1 text-sm text-foreground">LinkedIn Profile</span>
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <Github className="w-5 h-5 text-primary" />
              <span className="flex-1 text-sm text-foreground">GitHub Profile</span>
            </a>
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="font-display font-semibold text-foreground mb-4">
            Schedule a Call
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Prefer a video call? Book a 30-minute intro call to discuss your project.
          </p>
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="w-full gap-2">
              <Calendar className="w-4 h-4" />
              Book a Call
            </Button>
          </a>
        </div>

        <div className="glass-card p-6">
          <h3 className="font-display font-semibold text-foreground mb-2">
            Availability
          </h3>
          <p className="text-sm text-muted-foreground">
            Open to remote freelance & long-term collaborations.
            <br />
            <span className="text-primary">Global clients, USD payments</span>
            <br />
            Based in Brazil (UTC-3)
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
