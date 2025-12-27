import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { projects, ndaProjects } from "@/data/projects";

const allCategories = [
  "All",
  "Django",
  "DRF",
  "Celery",
  "React",
  "Automation",
  "Healthcare",
  "ML",
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allProjects = [...projects, ...ndaProjects];

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesFilter =
        activeFilter === "All" || project.category.includes(activeFilter);
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.oneLiner.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.stack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery, allProjects]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container">
          <SectionHeader
            subtitle="Portfolio"
            title="All Projects"
            description="Explore my work across fullstack development, automation, and healthcare data systems."
          />

          {/* Search & Filters */}
          <div className="max-w-3xl mx-auto">
            {/* Search */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeFilter === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No projects found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveFilter("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
