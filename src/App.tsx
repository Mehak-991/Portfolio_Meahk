import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { SparklesCore } from "@/components/ui/sparkles";

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Global sparkles on top of all content */}
      <div className="fixed inset-0 z-30 pointer-events-none">
        <SparklesCore
          id="global-sparkles"
          background="transparent"
          minSize={0.3}
          maxSize={1}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#a78bfa"
          speed={0.5}
        />
      </div>

      <Navbar />

      {/* Main content */}
      <main className="relative z-10 bg-background">
        <Hero />

        {/* Subtle separator between hero and content */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Cinematic footer with curtain-reveal scroll effect */}
      <CinematicFooter />
    </div>
  );
}
