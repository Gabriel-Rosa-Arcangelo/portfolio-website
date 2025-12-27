import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container">
          <SectionHeader
            subtitle="Contact"
            title="Let's build something great"
            description="Have a project in mind? I'd love to hear about it. Get in touch and let's discuss how I can help."
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20 md:pb-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
