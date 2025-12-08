"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TerminalEntry from "@/components/TerminalEntry";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showTerminal && (
          <TerminalEntry onComplete={() => setShowTerminal(false)} />
        )}
      </AnimatePresence>
      
      {!showTerminal && (
        <div className="relative overflow-hidden">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
}