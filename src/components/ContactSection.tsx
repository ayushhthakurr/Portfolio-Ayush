"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "thakurayush817@gmail.com",
      href: "mailto:thakurayush817@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8815308325",
      href: "tel:+918815308325",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <motion.div
              className="terminal-font text-sm text-primary mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-muted-foreground">$</span> ./contact --reach-out
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Get In Touch
            </motion.h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next project or opportunity
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6 terminal-font">
                  <span className="text-primary">$</span> contact_info
                </h3>
              </div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="tech-card p-4 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg border border-primary/30 flex items-center justify-center">
                      <info.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground font-medium hover:text-primary transition-colors terminal-font text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium terminal-font text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Resume button below contact info */}
              <motion.div
                className="pt-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: contactInfo.length * 0.1 }}
              >
                <a
                  href="https://drive.google.com/file/d/1jOF_20HlBLodGDzlal_W5zpyaGK7D6Zz/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-md font-medium terminal-font hover:opacity-90 transition-opacity"
                >
                  Resume
                </a>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.3}>
            <div className="tech-card p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold terminal-font">
                  <span className="text-primary">$</span> send_message
                </h3>
              </div>

              <form
                action="https://formspree.io/f/mrbzdbaq"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium mb-2 terminal-font">
                    <span className="text-primary">--name</span>
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:border-primary focus:outline-none transition-colors terminal-font"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 terminal-font">
                    <span className="text-primary">--email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:border-primary focus:outline-none transition-colors terminal-font"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 terminal-font">
                    <span className="text-primary">--message</span>
                  </label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:border-primary focus:outline-none transition-colors terminal-font resize-none"
                    placeholder="Your message..."
                    rows={6}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium terminal-font flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}


