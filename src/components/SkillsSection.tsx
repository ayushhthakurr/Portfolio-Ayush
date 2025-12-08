"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function SkillsSection() {
  const skillCategories = [
{
  name: "Languages & Databases",
  skills: [
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Apex",
    "Go",
    "SQL",
    "MySQL",
    "MongoDB",
    "Firebase",
    "DynamoDB"
  ],
  color: "#58a6ff",
},
{
  name: "Frameworks & Tools",
  skills: [
    "React.js",
    "Next.js",
    "Express.js",
    "Tailwind CSS",
    "Docker",
    "AWS (EC2, S3)",
    "Git",
    "GitHub",
    "Postman",
    "Redis",
    "Flutter",
    "Figma",
    "CI/CD Pipelines",
    "VS Code",
    "HTML",
    "CSS",
    "WebContainer API",
    "LangChain",
    "OpenAI API",
    "Hugging Face Transformers"
  ],
  color: "#3fb950",
},
{
  name: "Concepts & Technologies",
  skills: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Operating Systems",
    "DBMS",
    "REST API Development",
    "Microservices",
    "Authentication (JWT)",
    "MVC Architecture",
    "System Design (Basic)",
    "Backend Integration",
    "Automation",
    "CI/CD",
    "Prompt Engineering",
    "Agentic Workflows"
  ],
  color: "#a371f7",
},

  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection direction="up">
          <div className="mb-16">
            <motion.div
              className="terminal-font text-sm text-primary mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-muted-foreground">$</span> ls -la ./skills/
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Skills & Technologies
            </motion.h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.name}
              direction={categoryIndex === 0 ? "left" : categoryIndex === 2 ? "right" : "up"}
              delay={categoryIndex * 0.2}
            >
              <motion.div
                className="tech-card p-6 rounded-lg relative overflow-hidden group h-full"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3 className="text-xl font-bold terminal-font">{category.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 text-sm terminal-font border border-border rounded-md hover:border-primary hover:bg-primary/10 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}