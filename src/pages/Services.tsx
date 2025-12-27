import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/data/projects";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container">
          <SectionHeader
            subtitle="Services"
            title="What I can build for you"
            description="End-to-end solutions tailored to your business needs. From prototype to production."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-12 md:pb-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <SectionHeader
            subtitle="Process"
            title="How I work"
            description="A straightforward approach focused on delivering value quickly."
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your needs, constraints, and goals through focused discussions.",
                },
                {
                  step: "02",
                  title: "Proposal",
                  description: "Clear scope, timeline, and pricing. No surprises, no hidden costs.",
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Iterative builds with regular updates. You see progress, not just the end result.",
                },
                {
                  step: "04",
                  title: "Delivery",
                  description: "Deployment, documentation, and handoff. Plus ongoing support as needed.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <span className="text-3xl font-display font-bold text-primary mb-3 block">
                    {item.step}
                  </span>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
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
              Have a project in mind?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss your requirements and find the best solution for your needs.
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

export default Services;
