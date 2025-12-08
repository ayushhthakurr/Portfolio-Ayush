"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Craftly",
      description:
        "Real-time AI-driven code generation system with multi-user collaboration using Node.js, WebContainer API, and distributed cloud services. Browser-based dev environment with Monaco Editor and Groq SDK for instant editing, testing, and LLM-powered code generation.",
      tags: ["Node.js", "WebContainer API", "Monaco Editor", "Groq SDK", "AI"],
      github: "https://github.com/ayushhthakurr/Craftly",
      status: "Active",
      statusColor: "#3fb950",
    },
    {
      title: "Finance App",
      description:
        "Scalable finance app using Flutter capable of handling 10,000+ transactions per user with clean UI. Optimized Firebase integration reducing retrieval time by 30% and implemented UI in Figma with visual spend insights.",
      tags: ["Flutter", "Firebase", "Figma", "Mobile Development"],
      github: "https://github.com/ayushhthakurr/finance-app",
      status: "Active",
      statusColor: "#3fb950",
    },
    {
      title: "CIBIL Score WhatsApp Bot",
      description:
        "AI-driven WhatsApp bot for KreditMitra that checks CIBIL scores, evaluates loan eligibility, and automates credit improvement workflows. Integrated with NBFC partners and credit APIs for instant user verification.",
      tags: ["Python", "WhatsApp API", "AI", "Credit APIs", "Backend"],
      status: "In Development",
      statusColor: "#a371f7",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection direction="up">
          <div className="mb-16">
            <motion.div
              className="terminal-font text-sm text-primary mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-muted-foreground">$</span> cd projects && ls
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Featured Projects
            </motion.h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.2}
            >
              <motion.div
                className="tech-card rounded-lg p-6 group cursor-pointer h-full flex flex-col relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div 
                    className="flex items-center gap-2 terminal-font text-xs px-3 py-1 rounded-full border"
                    style={{ 
                      borderColor: project.statusColor,
                      color: project.statusColor
                    }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: project.statusColor }}
                    />
                    {project.status}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs terminal-font border border-border rounded text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                    <div className="flex gap-4 border-t border-border pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium terminal-font text-primary hover:text-secondary transition-colors"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.title === "Craftly" ? "https://craftly-psi.vercel.app/" : project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium terminal-font text-primary hover:text-secondary transition-colors"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      Demo
                    </motion.a>
                    </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}