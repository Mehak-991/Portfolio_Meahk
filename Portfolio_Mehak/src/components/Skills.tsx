import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    color: "from-amber-500 to-orange-600",
    skills: ["Python", "C++", "JavaScript", "Java"],
  },
  {
    title: "Frontend & Frameworks",
    color: "from-cyan-500 to-blue-600",
    skills: [
      "React.js",
      "HTML5",
      "CSS3",
      "Django",
      "Streamlit",
      "Gradio",


    ],
  },
  {
    title: "Backend & APIs",
    color: "from-cyan-500 to-blue-600",
    skills: [
      "FastAPI",
      "Flask",
      "Django",
      "RESTful APIs",
      "Postman",
      "Session Management",
    ],
  },
   {
    title: "AI / GenAI",
    color: "from-violet-500 to-purple-600",
    skills: [
      "Multi-Agent Systems",
      "RAG Pipelines",
      "CrewAI",
      "LangChain",
      "LangGraph",
      "LLM APIs",
      "Gemini",
      "Prompt Engineering",
    ],
  },
  {
    title: "ML & Analytics",
    color: "from-cyan-500 to-blue-600",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Transformers",
      "Hugging Face",
      "Vision Transformer (ViT)",
      "EDA",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Statistical Analysis",      
    ],
  },
  {
    title: "Databases & Cloud",
    color: "from-rose-500 to-pink-600",
    skills: ["MySQL", "PostgreSQL", "MogoDB", "Vercel", "Pinecone (Vector Database)", "Render", "AWS", "Streamlit Cloud "],
  },
  {
    title: "Tools",
    color: "from-cyan-500 to-blue-600",
    skills: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "Docker",
      "Google Colab",
    ],
  },
  {
    title: "CS Fundamentals",
    color: "from-indigo-500 to-blue-600",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "Operating Systems",
      "Computer Vision ",
      "Debugging",
      "Performance Profiling",
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Technical <span className="gradient-text">arsenal</span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group relative p-6 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/20 transition-all"
            >
              {/* Category title with gradient bar */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${cat.color}`} />
                <h3 className="text-lg font-bold text-foreground">{cat.title}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg bg-muted/50 text-muted-foreground border border-border/30 hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
