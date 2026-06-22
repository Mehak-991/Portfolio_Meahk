import React, { useRef } from "react";
import techieLogo from "@/assets/techie-logo.png";
import cognifyzLogo from "@/assets/cognifyz-logo.png";
import eDCIITLogo from "@/assets/eDCIIT-logo.png";
import { motion, useInView } from "motion/react";
import { Building2, Calendar, MapPin } from "lucide-react";

const EXPERIENCE = [
  {
    company: "TechieShubhdeep IT Solutions Pvt Ltd",
    logo: techieLogo,
    role: "Data Science Intern",
    location: "On Site ,Gwalior",
    period: "May 2026 – Present",
    type: "Internship",
    bullets: [
      "Engineered and fine-tuned ML models using Python and Scikit-learn, achieving 15- ~20% increase in model accuracy through feature engineering and predictive analysis.",
      "Performed data preprocessing and exploratory data analysis on 500+ records, generating ~25% more actionable insights via statistical analysis to enhance model performance.",
      "Generated insightful analytical reports and visualizations with Pandas, NumPy, Matplotlib, and Seaborn, reducing manual data processing time by more than 8+ hours each week.",
    ],
    tags: ["Python", "Machine Learing", "EDA", "Predictive Analysis", "Scikit-Learn", "Feature Engineering", " Data visualization"],
  },
  {
    company: "Cognifyz Technologies",
    logo: cognifyzLogo,
    role: "Machine Learning Intern",
    location: "Remote",
    period: "Jun 2025 – Jul 2025",
    type: "Internship",
    bullets: [
      "Performed end-to-end data analysis on 10,000+ records using Python (Pandas, NumPy) to generate actionable business insights and support data-driven decision-making.",
      "Applied statistical analysis, data cleaning, and feature interpretation techniques to solve 15+ real-world business problems using structured and unstructured datasets.",
      "Built analytical reports and dashboards using data visualization tools (Matplotlib, Seaborn) to improve insight accuracy and decision efficiency by 20%.",
    ],
    tags: ["Data Analysis", "EDA", "Statistical Analysis", "Predictive Modeling ", "Data Visualization", "Model Evaliaytion"],
  },
  {
    company: "Entrepreneurship Development Cell (eDC) IIT Delhi",
    logo: eDCIITLogo, // Add logo import here
    role: "Campus Ambassador",
    location: "Remote",
    period: "Dec 2025 – Feb 2026",
    type: "InternshipCampus Ambassador (Leadership Role)",
    bullets: [
      "Selected as a Campus Ambassador at Entrepreneurship Development Cell (eDC), IIT Delhi, representing the organization and promoting entrepreneurship initiatives among students.",
      "Increased awareness of startup culture, innovation programs, and eDC events through campus outreach and engagement activities.",
      "Collaborated with the eDC team to drive student participation in workshops, competitions, and networking opportunities.",
      "Developed strong leadership, communication, marketing, and community-building skills while coordinating promotional campaigns.",
    ],
    tags: ["Communication & Public Speaking", "Leadership & Team Coordination", "Time Management & Organization", "Marketing & Promotion", "Event Coordination"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Where I've <span className="gradient-text">shipped</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="relative pl-12 md:pl-24 pb-12"
            >
              {/* Timeline Circle (Logo) */}
              <div 
                className={`absolute left-0 md:left-8 -translate-x-1/2 w-16 h-16 rounded-full border-[6px] border-primary/80 flex items-center justify-center z-10 overflow-hidden shadow-xl shadow-primary/20 ${
                  i % 2 === 0 ? "bg-[#2D3343]" : "bg-[#E5E1E1]"
                }`}
              >
                {exp.logo ? (
                  <div className={`w-full h-full p-2 flex items-center justify-center ${
                    i % 2 === 0 ? "bg-[#2D3343]" : "bg-[#E5E1E1]"
                  }`}>
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className={`w-full h-full flex items-center justify-center opacity-50 ${
                    i % 2 === 0 ? "bg-[#2D3343]" : "bg-[#E5E1E1]"
                  }`}>
                    <Building2 size={24} className={i % 2 === 0 ? "text-white" : "text-primary/60"} />
                  </div>
                )}
              </div>

              {/* Card */}
              <div className="p-6 md:p-8 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/20 transition-colors">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 size={16} className="text-primary" />
                      <span className="text-sm font-semibold text-primary">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <span className="text-xs font-mono text-muted-foreground border border-border/50 rounded px-2 py-0.5">{exp.type}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                {exp.bullets.length > 0 && (
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tags */}
                {exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
