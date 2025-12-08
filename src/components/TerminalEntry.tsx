"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalEntryProps {
  onComplete: () => void;
}

export default function TerminalEntry({ onComplete }: TerminalEntryProps) {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([
    "Welcome to Ayush Thakur's Portfolio",
    "Type 'run' to start...",
  ]);
  const [isBooting, setIsBooting] = useState(false);

  const bootSequence = [
    "Initializing portfolio...",
    "Loading components...",
    "Connecting to server...",
    "Starting application...",
    "Done! ✓",
  ];

  useEffect(() => {
    if (isBooting) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < bootSequence.length) {
          setLines((prev) => [...prev, bootSequence[currentIndex]]);
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 500);
        }
      }, 300);

      return () => clearInterval(interval);
    }
  }, [isBooting, onComplete]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() === "run") {
      setLines((prev) => [...prev, `$ ${input}`, ""]);
      setInput("");
      setIsBooting(true);
    } else {
      setLines((prev) => [...prev, `$ ${input}`, `Command not found: ${input}`, ""]);
      setInput("");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-[#0d1117] z-50 flex items-center justify-center p-4"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-3xl">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden shadow-2xl">
          {/* Mac-style window controls */}
          <div className="bg-[#1c2128] px-4 py-3 flex items-center gap-2 border-b border-[#30363d]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center text-sm text-gray-400 font-mono">
              ayush@portfolio:~
            </div>
          </div>

          {/* Terminal content */}
          <div className="p-6 h-[400px] overflow-y-auto font-mono text-sm">
            <AnimatePresence mode="popLayout">
              {lines.filter(line => line !== undefined).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-2 ${
                    line?.startsWith("$")
                      ? "text-[#58a6ff]"
                      : line?.includes("✓")
                      ? "text-[#3fb950]"
                      : line?.includes("not found")
                      ? "text-[#f85149]"
                      : "text-gray-300"
                  }`}
                >
                  {line}
                </motion.div>
              ))}
            </AnimatePresence>

            {!isBooting && (
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-300"
                  autoFocus
                  disabled={isBooting}
                />
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-gray-300"
                >
                  ▊
                </motion.span>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}