import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Progress } from "@/components/ui/interfaces-progress";

const LOADING_PHRASES = [
  "Initializing Mhak Verma 's dimension...",
  "Loading multi-agent systems...",
  "Compiling neural pathways...",
  "Deploying to the cloud...",
  "Establishing secure connection...",
  "Almost there...",
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Animate progress from 0 to 100 over ~0.2 seconds
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
      }
      setProgress(current);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  // Cycle through phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % LOADING_PHRASES.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Trigger exit after progress completes
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(onComplete, 100);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.15, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundSize: "60px 60px",
          backgroundImage:
            "linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 max-w-md w-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-black tracking-tight"
        >
          <span className="gradient-text">M</span>
          <span className="text-foreground">ohit</span>
          <span className="text-muted-foreground text-sm font-mono">.dev</span>
        </motion.div>

        {/* Loading text */}
        <motion.p
          key={phraseIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-sm font-mono text-muted-foreground h-5 text-center"
        >
          {LOADING_PHRASES[phraseIndex]}
        </motion.p>

        {/* Progress bar */}
        <div className="w-full space-y-3">
          <Progress value={progress} className="h-1.5" />
          <div className="flex justify-between text-xs font-mono text-muted-foreground">
            <span>Loading</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
