import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { 
  ExternalLink, Sparkles, House, Mail, Github, Clapperboard, 
  CheckCircle2, Zap, BarChart3, Users, Play, Globe 
} from "lucide-react";
import movieIcon from "@/assets/projects/movie-icon.png";
import homeIcon from "@/assets/projects/home-icon.png";
import emailIcon from "@/assets/projects/email-icon.png";
import sparklesIcon from "@/assets/projects/sparkles-icon.png";
import CineMatchAI from "@/assets/projects/CineMatch AI.png";
import CaliforniaH from "@/assets/projects/CaliforniaH.png";
import SEOEngine from "@/assets/projects/SEOEngine.png";
import SMSspam from "@/assets/projects/SMSspam.png";

const PROJECTS = [
  {
    title: "Movie Recommendation System using NLP TF-IDF",
    subtitle: "Python · Django · REST API · NLP · TF-IDF · Scikit-Learn",
    description: "Designed a content-based recommendation pipeline that transforms user movie input into personalized suggestions in real time.",
    mockup: CineMatchAI,
    icon: Clapperboard,
    accentColor: "text-primary",
    gradient: "from-violet-500/20 to-purple-500/20",
    github: "https://github.com/Mehak-991/Movie-Recommendation-System-using-NLP-TF-IDF",
    live: "https://movie-recommendation-system-using-nlp-tf-u3tm.onrender.com",
    features: [
      "Built a content-based recommendation system using NLP techniques including TF-IDF vectorization and SVD for accurate similarity matching.",
      "Engineered a scalable backend with Python & Django to process datasets from 2,000 to over 1,000,000+ movie records with sub-50ms response times.",
      "Implemented fuzzy-matching autocomplete search with a fully responsive, mobile-friendly UI for seamless cross-device experience.",
      "Developed REST API architecture for smooth integration with external frontend applications using Scikit-Learn, Pandas, and NumPy.",
      "Deployed on Heroku with Docker & Render, ensuring production-level reliability and DevOps-ready environment."
    ],
    stats: [
      { label: "Movies Processed", value: "1M+", icon: Users },
      { label: "Query Response", value: "< 50ms", icon: Zap, color: "text-amber-400" },
      { label: "Recommendation Accuracy", value: "95%", icon: BarChart3, color: "text-emerald-400" }
    ]

  },
  {
    title: "California House Price Prediction Model",
    subtitle: "Python · scikit-learn · NumPy · Gradio · GridSearchCV",
    description: "ML-powered web app predicting California house prices with a GridSearchCV-tuned Random Forest model, featuring real-time inference.",
    mockup: CaliforniaH, // Placeholder for now
    icon: House,
    accentColor: "text-emerald-400",
    gradient: "from-emerald-500/20 to-green-500/20",
    github: "https://github.com/Mehak-991/California-House-Price-Prediction-Model",
    live: "  https://california-house-price-prediction-model-3.onrender.com",
    features: [
      "Developed a Random Forest regression model (scikit-learn) to predict California house prices, trained on 20,640 housing records with numerical and categorical features.",
      "Performed data preprocessing, feature engineering, and standardization, including missing value imputation and one-hot encoding for optimal model accuracy.",
      "Tuned hyperparameters using GridSearchCV with 5-fold cross-validation, comparing Linear Regression, Decision Tree, and Random Forest models.",
      "Achieved a test RMSE of ~$47,000-$49,000 using key features like median income, location, and ocean proximity.",
      "Built and deployed an interactive Gradio web app with a Python inference API for single and batch price predictions.",
    ],
    stats: [
      { label: "Dataset Size", value: "20K+", icon: Users },
      { label: "Test RMSE", value: "~$47K", icon: Zap, color: "text-amber-400" },
      { label: "Cross-Validation", value: "5-Fold", icon: BarChart3, color: "text-emerald-400" }
    ]
  },
  {
    title: "SMS Spam Classification System using NLP",
    subtitle: "Python · Machine Learing · NLTK · Streamlit · Pickle · Naive Bayes ,",
    description: "AI-driven SEO content engine that scrapes e-commerce trends and generates intent-aware blog content using LLMs.",
    mockup: SMSspam,
    icon: Sparkles,
    accentColor: "text-indigo-400",
    gradient: "from-indigo-500/20 to-purple-500/20",
    github: "https://github.com/Mehak-991/SMS-Spam-Classification-System-using-NLP",
    live: "https://sms-spam-classification-system-using-nlp-jrq2.onrender.com",
    features: [
      "Developed an NLP-based SMS Spam Classification System using TF-IDF vectorization and a scikit-learn classifier, trained on the UCI SMS Spam Collection dataset for binary text classification.",
      "Implemented a complete text preprocessing pipeline including lowercasing, punctuation removal, tokenization, stopword removal, and stemming to improve model accuracy and generalization.",
      "Achieved strong classification performance with 97.10% accuracy, 100% precision, 76.19% recall, and an F1-score of 86.49% on the test dataset.",
      "Built and deployed an interactive Streamlit web application with custom UI styling, enabling real-time spam detection using saved model and vectorizer artifacts.",
      "Designed a reproducible ML workflow using Jupyter Notebook for data exploration, model training, and evaluation, with serialized model files (.pkl) for fast inference without retraining."
    ],
    stats: [
      { label: "Extraction Speed", value: "2x", icon: Users },
      { label: "LLM Intelligence", value: "Gemini", icon: Zap, color: "text-amber-400" },
      { label: "Auth Flow", value: "100%", icon: BarChart3, color: "text-emerald-400" }
    ]
  },
  {
    title: "SEO Engine AI",
    subtitle: "Python · FastAPI · REACT · Gemini 2.0 · Playwright",
    description: "AI-driven SEO content engine that scrapes e-commerce trends and generates intent-aware blog content using LLMs.",
    mockup: SEOEngine, // Placeholder for now
    icon: Sparkles,
    accentColor: "text-indigo-400",
    gradient: "from-indigo-500/20 to-purple-500/20",
    github: "https://github.com/Mehak-991/SEO-Engine-AI",
    live: "https://seo-engine-frontend.onrender.com",
    features: [
      "Developed an AI-powered content automation system that scrapes real-time e-commerce trend data and generates SEO-optimized blog posts using a large language model (Gemini 2.0 Flash).",
      "Built a backend service using Python and FastAPI to handle asynchronous web scraping, AI content generation, and API integrations with minimal latency.",
      "Implemented automated web scraping using Playwright with stealth configuration to extract trending product data while avoiding bot detection mechanisms.",
      "Developed a full-stack architecture using React with Framer Motion for the frontend and FastAPI for a high-performance, asynchronous backend handling concurrent scraping and content generation tasks.",
      "Built a responsive frontend using React and Framer Motion to display real-time scraping, analysis, and content generation status to the user."
    ],
    stats: [
      { label: "Extraction Speed", value: "2x", icon: Users },
      { label: "LLM Intelligence", value: "Gemini", icon: Zap, color: "text-amber-400" },
      { label: "Auth Flow", value: "100%", icon: BarChart3, color: "text-emerald-400" }
    ]
  }
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-16 px-6 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-[10px] font-mono text-primary tracking-widest uppercase mb-2 text-center md:text-left">
            PROJECTS
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-center md:text-left leading-none">
            Things I've <span className="gradient-text">built</span>
          </h2>
        </motion.div>

        {/* PROJECTS LIST (ALL HORIZONTAL) */}
        <div className="flex flex-col gap-16">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              className="relative group"
            >
              {/* Card Container with Glassmorphism */}
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#050510]/80 backdrop-blur-3xl shadow-xl shadow-primary/10 p-5 md:p-8 text-left">
                
                {/* Background cosmic effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.15),transparent_70%)]" />

                <div className={`flex flex-col lg:flex-row gap-6 lg:gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* LEFT SIDE: Preview Image (35%) */}
                  <div className="w-full lg:w-[35%] relative">
                    <motion.div
                      whileHover={{ scale: 1.02, rotateY: i % 2 === 0 ? -3 : 3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative rounded-xl overflow-hidden border border-primary/20 shadow-lg bg-black/40"
                    >
                      <img 
                        src={project.mockup} 
                        alt={project.title} 
                        className="w-full h-auto object-contain max-h-[320px] block mx-auto"
                      />
                    </motion.div>
                  </div>

                  {/* RIGHT SIDE: Information (65%) */}
                  <div className="w-full lg:w-[65%] flex flex-col items-start">
                    <h3 className="text-xl md:text-3xl font-black tracking-tight text-white mb-4 leading-tight">

                      {project.title.split(' using ').map((part, index) => (
                        index === 0 ? <React.Fragment key={index}>{part} <br /></React.Fragment> : <span key={index} className="text-primary tracking-tight">using {part}</span>
                      ))}
                    </h3>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.subtitle.split(' · ').map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 border border-white/10 text-muted-foreground hover:bg-white/10 hover:text-white transition-all cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>

                    {/* Feature Checklist */}
                    <div className="grid sm:grid-cols-1 gap-y-2.5 mb-8 w-full">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5 text-[13px] text-foreground/80 leading-relaxed">
                          <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between w-full gap-4 mt-4 border-t border-white/5 pt-4">
                      {/* Stats Section Small */}
                      <div className="flex items-center gap-5 p-1.5 rounded-lg bg-white/[0.01]">
                        {project.stats.map((stat) => (
                          <div key={stat.label} className="flex items-center gap-2">
                            <stat.icon size={14} className={stat.color || "text-primary/80"} />
                            <div>
                              <p className="text-[14px] font-bold text-white leading-none">{stat.value}</p>
                              <p className="text-[7px] uppercase tracking-widest text-muted-foreground mt-0.5">{stat.label}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Buttons Small */}
                      <div className="flex items-center gap-2.5">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-primary text-white font-bold text-[10px] flex items-center gap-2 transition-all"
                        >
                          <Github size={14} />
                          GitHub
                        </a>
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white font-bold text-[10px] flex items-center gap-2 hover:bg-white/10 transition-all"
                        >
                          <Play size={14} fill="currentColor" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Outer glow effect */}
              <div className="absolute inset-0 -z-10 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
