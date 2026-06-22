import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import aceImg from "@/certs-img/Web3HackathonParticipant.png";
import cdlImg from "@/certs-img/QuizABitParticipant.png";
import adpImg from "@/certs-img/AWSSolutionsArchitectureJobSimulation.png";

const CERTS = [
  {
    title: "Web3 Hackathon Participant",
    org: "TantraFiesta'25 | Organized by IIT Nagpur",
    image: aceImg,
    url: "https://unstop.com/certificate-preview/d83b4499-ce30-497f-9dd2-15605165f8be",
  },
  {
    title: "Quiz-A-Bit Participant",
    org: "Tech-a-Thon 4.0 | Organized by ECE Society, BIT Mesra, Ranchi",
    image: cdlImg,
    url: "https://unstop.com/certificate-preview/9f48d4d9-de5c-4586-95fe-763cae040a93",
  },
  {
    title: " AWS Solutions Architecture Job Simulation",
    org: " Completed via Forage | June 2025",
    image: adpImg,
    url: "https://drive.google.com/file/d/1Zny8nAZu7iB1RDOiX4zocSyV9Dm50aQR/view?usp=sharing",
  },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            Certifications
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Hands-On <span className="gradient-text">Certified</span>
          </h2>
        </motion.div>

        {/* Cert cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {CERTS.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/20 transition-all text-center block"
            >
              {/* Certificate image */}
              <div className="mx-auto mb-6 w-full rounded-xl overflow-hidden border border-border/50 group-hover:border-primary/30 transition-colors bg-white/5">
                <img src={cert.image} alt={cert.title} className="w-full h-auto object-cover" />
              </div>

              {/* Cert name */}
              <h3 className="font-bold text-foreground mb-2 leading-tight">
                {cert.title}
              </h3>

              {/* Org */}
              <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
                <Award size={14} className="text-primary" />
                {cert.org}
              </div>

              {/* Verify link indicator */}
              <div className="flex items-center justify-center gap-1 mt-4 text-xs text-primary">
                <ExternalLink size={12} />
                Verify
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
