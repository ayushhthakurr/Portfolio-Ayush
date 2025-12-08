"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const experiences = [
    {
      role: "Founding Engineer",
      company: "KreditMitra",
      location: "Bengaluru, IN",
      period: "Nov 2025 - Dec 2025",
      points: [
        "Leading backend engineering for an AI-driven WhatsApp bot that checks CIBIL score and evaluates loan eligibility",
        "Built secure integrations with NBFC partners and credit APIs for end-to-end user verification",
        "Collaborating on product ideation, user funnel optimization, and campaign execution"
      ]
    },
    {
      role: "Technical Specialist Intern",
      company: "WarpDrive Tech Works",
      location: "Bengaluru, IN",
      period: "Apr 2025 - Nov 2025",
      points: [
        "Designed and integrated scalable backend workflows within Salesforce CRM",
        "Built AI-driven components and Lightning Web Components (LWC)",
        "Improved automation and overall user workflows"
      ]
    },
    {
      role: "Software Developer Intern",
      company: "ToolPill Technologies",
      location: "Bengaluru, IN",
      period: "Feb 2024 - Apr 2024",
      points: [
        "Delivered client-facing EdTech app, driving team collaboration and successful project execution",
        "Implemented UI components in Flutter with responsive design",
        "Collaborated on RESTful API integration for real-time data interaction"
      ]
    }
  ];

  return (
    <section id="about" className="pt-6 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection direction="up">
          <div className="max-w-4xl mx-auto mb-4 text-center">
            <motion.div
              className="terminal-font text-sm text-primary mb-3"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-muted-foreground">$</span> cat about.md
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              whileHover={{ scale: 1.02 }}
            >
              About Me
            </motion.h2>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.15}>
          <div className="max-w-4xl mx-auto mb-8 text-center">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mx-4 md:mx-0">
              I am a passionate Software Engineer with a strong foundation in computer science, problem-solving, and modern software development practices. As a fresher, I have hands-on experience working on real-world projects involving web development, databases, and scalable application design. I enjoy learning new technologies, writing clean and efficient code, and collaborating with teams to deliver impactful products. I am eager to contribute to challenging projects, grow as a developer, and bring creative solutions to real-world problems.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto px-4 md:px-0">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="tech-card p-6 rounded-lg border border-border/50 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logos/vit-bhopal.svg"
                  alt="VIT Bhopal logo"
                  width={40}
                  height={40}
                  className="flex-shrink-0"
                />
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-primary" size={28} />
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">Vellore Institute of Technology, Bhopal</p>
                <p className="text-muted-foreground text-sm font-medium">B.Tech. Computer Science</p>
                <p className="text-primary text-sm font-mono font-semibold">CGPA: 8.65</p>
                <p className="text-muted-foreground text-xs pt-2">Sept 2021 – Oct 2025</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.4}>
            <div className="tech-card p-6 rounded-lg border border-border/50 shadow-lg hover:shadow-xl hover:border-accent/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-accent" size={28} />
                <h3 className="text-xl font-bold">Leadership</h3>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm font-medium">President, Igniters Club</p>
                <p className="text-muted-foreground text-sm">Led 50+ members</p>
                <p className="text-accent text-sm font-mono font-semibold">6+ Events</p>
                <p className="text-muted-foreground text-xs pt-2">Impacted 5,000+ students</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="up" delay={0.5}>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 terminal-font">
              <span className="text-primary">$</span> ./experience --list
            </h3>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.company} direction="left" delay={0.6 + index * 0.1}>
              <motion.div
                className="tech-card p-6 rounded-lg hover:border-primary transition-colors"
                whileHover={{ x: 10 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                    <p className="text-primary terminal-font text-sm">{exp.company} – {exp.location}</p>
                  </div>
                  <span className="text-muted-foreground text-sm terminal-font mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
