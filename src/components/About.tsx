import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [panelState, setPanelState] = useState<"open" | "minimized" | "maximized" | "closed">("open");

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Building practical{" "}
            <span className="gradient-text">AI solutions from data</span>{" "}
            to deployment.
          </h2>
        </motion.div>

        {/* Summary + highlight grid */}
        <div className={`grid gap-12 items-start ${panelState === "maximized" ? "md:grid-cols-1" : "md:grid-cols-2"}`}>
          {/* Left: prose summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed text-[17px] mb-6">
            I am an aspiring AI/ML Engineer and Data Science enthusiast pursuing a B.Tech in Information Technology. 
            I specialize in Machine Learning, NLP, Generative AI, and Retrieval-Augmented Generation (RAG), with hands-on experience
             building recommendation systems, predictive models, intelligent chatbots, and AI-powered applications. Skilled in Python, Scikit-learn, 
             LangChain, LangGraph, and modern AI frameworks, I enjoy transforming complex data into practical, scalable solutions that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[17px] mb-6">
              At{" "}
              <a
                href="https://www.techiesgroup.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-semibold hover:text-primary transition-colors"
              >
                TechieShubhdeep IT Solutions Pvt Ltd
              </a>
              , As a Data Science Intern, I fine-tuned ML models using Python and Scikit-learn,
               analyzed 10,000+ records, and built deployable projects — including a TF-IDF movie recommender, a 
               Random Forest house price predictor, and an NLP-based spam classifier — using Django, Streamlit, and Gradio.

            </p>
            <p className="text-muted-foreground leading-relaxed text-[17px]">
              Driven by one goal:{" "}
              <span className="text-foreground font-semibold">
              building practical AI solutions from data to deployment.
              </span>
              .
            </p>
          </motion.div>

          {/* Right: JSON code block */}
          <AnimatePresence>
            {panelState !== "closed" && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl border border-border/50 bg-muted/20 overflow-hidden transition-all duration-300 ${
                  panelState === "maximized" ? "md:col-span-2" : ""
                }`}
              >
                {/* Code block header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
                  {/* Red — close */}
                  <button
                    onClick={() => setPanelState("closed")}
                    className="group w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors flex items-center justify-center"
                    title="Close"
                  >
                    <span className="hidden group-hover:block text-red-900 text-[8px] font-bold leading-none">✕</span>
                  </button>
                  {/* Yellow — minimize */}
                  <button
                    onClick={() => setPanelState(panelState === "minimized" ? "open" : "minimized")}
                    className="group w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors flex items-center justify-center"
                    title="Minimize"
                  >
                    <span className="hidden group-hover:block text-yellow-900 text-[8px] font-bold leading-none">−</span>
                  </button>
                  {/* Green — maximize */}
                  <button
                    onClick={() => setPanelState(panelState === "maximized" ? "open" : "maximized")}
                    className="group w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors flex items-center justify-center"
                    title="Maximize"
                  >
                    <span className="hidden group-hover:block text-green-900 text-[8px] font-bold leading-none">+</span>
                  </button>
                  <span className="ml-2 text-xs font-mono text-muted-foreground">expertise.json</span>
                </div>
                <AnimatePresence>
                  {panelState !== "minimized" && (
                    <motion.pre
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="p-5 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto"
                    >
                      <code>
{`{
  `}<span className="text-primary">"expertise"</span>{`: [`}
{`
    {`}
{`
      `}<span className="text-primary">"category"</span>{`: `}<span className="text-green-400">"Machine Learning"</span>{`,`}
{`
      `}<span className="text-primary">"stack"</span>{`: `}<span className="text-green-400">"Python + Scikit-learn + Pandas"</span>{`,`}
{`
      `}<span className="text-primary">"focus"</span>{`: `}<span className="text-green-400">"Predictive modeling & feature engineering"</span>
{`
    },`}
{`
    {`}
{`
      `}<span className="text-primary">"category"</span>{`: `}<span className="text-green-400">"Generative & Agentic AI"</span>{`,`}
{`
      `}<span className="text-primary">"stack"</span>{`: `}<span className="text-green-400">"LangChain + LangGraph + CrewAI + RAG"</span>{`,`}
{`
      `}<span className="text-primary">"focus"</span>{`: `}<span className="text-green-400">"Multi-step agentic workflows, Rag"</span>
{`
    },`}
{`
      `}<span className="text-primary">"category"</span>{`: `}<span className="text-green-400">"Cloud & Infrastructure"</span>{`,`}
{`
      `}<span className="text-primary">"certs"</span>{`: [`}<span className="text-green-400">"AWS"</span>{`, `}<span className="text-green-400">"Render"</span>{`, `}<span className="text-green-400">"Vercel"</span>{`,`}<span className="text-green-400">"PostgreSQl"</span>{`,`}<span className="text-green-400">"MongoDB"</span>{`,`}<span className="text-green-400">""</span>{`]`}
{`
    },`}
{`

  ]`}
{`}`}
                      </code>
                    </motion.pre>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
