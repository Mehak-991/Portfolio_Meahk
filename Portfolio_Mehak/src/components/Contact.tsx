import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Let's build{" "}
            <span className="gradient-text">something great</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
           I'm always open to discussing AI/ML, Data Science, Generative AI, innovative projects, and 
           collaboration opportunities.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          <a
            href="mailto:missmehak755@gmail.com"
            className="group flex items-center gap-4 p-6 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/30 hover:bg-muted/30 transition-all"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <Mail size={22} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-foreground">Email</p>
              <p className="text-xs text-muted-foreground">missmehak755@gmail.com</p>
            </div>
          </a>

          <a
            href="https://github.com/Mehak-991"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/30 hover:bg-muted/30 transition-all"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <Github size={22} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-foreground">GitHub</p>
              <p className="text-xs text-muted-foreground">Mehak-991</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/mehak-verma99"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/30 hover:bg-muted/30 transition-all"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <Linkedin size={22} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-foreground">LinkedIn</p>
              <p className="text-xs text-muted-foreground">mehak-verma99</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 rounded-2xl border border-border/50 bg-muted/10">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <MapPin size={22} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-foreground">Location</p>
              <p className="text-xs text-muted-foreground">Madhya Pradesh, India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
