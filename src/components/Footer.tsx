"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/ayushhthakurr",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ayush-thakur-1b1127221/",
    },
    {
      name: "LeetCode",
      icon: ExternalLink,
      href: "https://leetcode.com/u/ayushthakurr/",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:thakurayush817@gmail.com",
    },
  ];

  return (
    <footer className="relative border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <p className="terminal-font text-sm text-muted-foreground mb-2">
              <span className="text-primary">$</span> Built with Next.js, TypeScript & Tailwind CSS
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ayush Thakur. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}