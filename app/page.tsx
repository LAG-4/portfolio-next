"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, ExternalLink, Award, Mail, FileText, 
  Code, Sparkles, Cpu, Briefcase, Plus, X, Server, ToggleLeft, ToggleRight, Laptop, Play, GraduationCap, MapPin, Layers, Terminal, Copy, Check,
  ChevronDown, ChevronUp, Filter
} from "lucide-react";
import { projectsData } from "@/lib/data";

interface ServiceState {
  name: string;
  running: boolean;
  log: string;
}

export default function RootHomePage() {
  // Homelab console states
  const [cpu, setCpu] = useState(12);
  const [ram, setRam] = useState(48);
  const [temp, setTemp] = useState(42);
  const [services, setServices] = useState<Record<string, ServiceState>>({
    jellyfin: { name: "Jellyfin Streamer", running: true, log: "Streaming active media at 1080p." },
    immich: { name: "Immich Backups", running: true, log: "Awaiting new device photos sync." },
    n8n: { name: "n8n Automation", running: false, log: "Pipeline idle. Awaiting cron trigger." }
  });
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "pi-server login: aryangpt",
    "Tailscale link active (100.82.11.90)",
    "Ready for micro-service signals."
  ]);

  // Projects dynamic explorer states
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const getProjectCategories = (id: string): string[] => {
    switch (id) {
      case "learnai":
      case "gaias-touch":
        return ["Web & Mobile"];
      case "hyd-cafe-finder":
      case "ecoroom":
        return ["Web & Mobile"];
      case "quantum-finance-screener":
      case "ai-assistant-hub":
      case "ai-news-reporter":
      case "health-trends-bot":
        return ["AI & Agents"];
      case "shesafe":
        return ["Web & Mobile", "IoT & Hardware"];
      case "voice-car":
        return ["IoT & Hardware"];
      default:
        return [];
    }
  };

  const filteredProjects = projectsData.filter(p => {
    if (activeFilter === "All") return true;
    const categories = getProjectCategories(p.id);
    return categories.includes(activeFilter);
  });

  const visibleProjects = isExpanded ? filteredProjects : projectsData.slice(0, 4);

  // Command copy state
  const [copied, setCopied] = useState(false);
  const commandText = "curl -L lagaryan.click";

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(commandText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // CPU/RAM simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setCpu(Math.floor(Math.random() * 15) + 8);
      setTemp(Math.floor(Math.random() * 4) + 40);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const toggleService = (id: string) => {
    setServices(prev => {
      const target = prev[id];
      const nextRunning = !target.running;
      const nextLog = nextRunning 
        ? `Service ${target.name} started successfully.`
        : `Service ${target.name} terminated gracefully.`;
      
      setConsoleLogs(logs => [
        ...logs,
        `[sys] toggle_service --id=${id} --state=${nextRunning ? "ON" : "OFF"}`,
        `[${id}] ${nextLog}`
      ].slice(-5)); // Keep last 5 logs

      return {
        ...prev,
        [id]: {
          ...target,
          running: nextRunning,
          log: nextRunning 
            ? (id === "jellyfin" ? "Streaming active media at 1080p." : id === "immich" ? "Photos sync active." : "Pipeline listening...")
            : "Service halted."
        }
      };
    });
  };

  const experiences = [
    {
      role: "Systems Engineer (Mainframe Developer)",
      company: "Infosys",
      date: "Feb 2026 - Present",
      bullets: [
        "Specializing in mainframe application development, writing highly optimized COBOL and JCL scripts on IBM z/OS.",
        "Completed comprehensive enterprise training in Java, SQL, and relational database systems.",
        "Maintaining, upgrading, and debugging mission-critical core database queries using DB2."
      ],
      skills: ["COBOL", "JCL", "IBM z/OS", "DB2", "Java", "SQL"]
    },
    {
      role: "Flutter Development Intern",
      company: "Persist Ventures",
      date: "May 2024 - July 2024",
      bullets: [
        "Scaled mobile excellence by serving 15,000+ active production client devices.",
        "Achieved a 30% reduction in latency through extensive state rendering optimization.",
        "Gained deep expertise in enterprise-level Flutter development and Django REST API integration."
      ],
      skills: ["Flutter", "Dart", "Django APIs", "Git", "Agile"],
      projectLink: "https://neighborgood.io/",
      projectLinkText: "neighborgood.io"
    }
  ];

  const skillCategories = [
    {
      title: "Mainframe & Databases",
      skills: [
        { name: "COBOL & JCL", details: "IBM z/OS" },
        { name: "DB2", details: "Mainframe SQL" },
        { name: "Java", details: "OOP & Enterprise" },
        { name: "SQL", details: "RDBMS Design" }
      ]
    },
    {
      title: "AI & Intelligent Systems",
      skills: [
        { name: "LangChain", details: "LLM Agent Apps" },
        { name: "OpenAI API", details: "GPT Models" },
        { name: "Google Gemini", details: "Multimodal AI" },
        { name: "RAG Systems", details: "Vector Retrieval" },
        { name: "AI Agents", details: "Autonomous Flows" }
      ]
    },
    {
      title: "Full-Stack Development",
      skills: [
        { name: "Flutter & Dart", details: "Mobile Core" },
        { name: "Python", details: "AI & Backend" },
        { name: "Next.js & React", details: "Web Apps" },
        { name: "TypeScript", details: "Type Safety" },
        { name: "MERN Stack", details: "Full-Stack Nodes" }
      ]
    },
    {
      title: "Infrastructure & Tools",
      skills: [
        { name: "Firebase", details: "BaaS & Firestore" },
        { name: "AWS Cloud", details: "Services Integration" },
        { name: "Linux Homelab", details: "Self-hosting" },
        { name: "n8n Automation", details: "Workflow Pipelines" },
        { name: "Git & GitHub", details: "Version Control" }
      ]
    }
  ];

  const quickFacts = [
    { label: "Education", value: "B.Tech CS @ VIT", icon: GraduationCap },
    { label: "Location", value: "India", icon: MapPin },
    { label: "SIH Winner", value: "1st Place (National)", icon: Award },
    { label: "Engineering", value: "Mainframe & Full-Stack", icon: Cpu }
  ];

  return (
    <div className="min-h-screen bg-[#070709] text-[#f4f4f6] font-inter py-12 px-6 md:px-12 relative overflow-x-hidden select-none">
      
      {/* Cyber Grid Lines backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#131316_1px,transparent_1px),linear-gradient(to_bottom,#131316_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Decorative premium ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/5 to-purple-500/0 rounded-full blur-[160px] pointer-events-none" />

      {/* Header bar */}
      <div className="max-w-5xl mx-auto mb-20 flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-sm font-bold uppercase tracking-widest text-zinc-300 font-mono">ARYAN.GUPTA // SYSTEMS ENGINEER</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-zinc-400 font-mono">2026 CORE ARCHIVES</span>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto z-10 relative space-y-24 pb-32">
        
        {/* SECTION 1: HEADER & BIO */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm md:text-base font-mono uppercase text-indigo-400 tracking-[0.25em] font-bold block mb-4">
              Systems Engineer & Full-Stack Builder
            </span>
            <h1 className="text-6xl md:text-8xl font-outfit font-extrabold tracking-tight text-white leading-none">
              Aryan Gupta
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-200 text-xl md:text-2xl font-normal max-w-3xl leading-relaxed"
          >
            I'm a Computer Science engineer who turns caffeine into code. I specialize in building highly resilient transactional logic on <span className="text-white font-bold">IBM z/OS mainframes</span> at <span className="text-white font-bold underline decoration-indigo-500 decoration-2">Infosys</span>, developing seamless mobile-web architectures, and integrating autonomous AI agent reasoning workflows.
          </motion.p>

          {/* Social Links Row */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="/resume.pdf" 
              download="Aryan_Gupta_Resume.pdf"
              className="flex items-center gap-2 text-sm bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3.5 rounded-2xl font-bold transition-all shadow-md shadow-indigo-600/10"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
            <a 
              href="mailto:contact@lagaryan.click" 
              className="flex items-center gap-2 text-sm bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3.5 border border-zinc-800 rounded-2xl font-bold transition-all"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a 
              href="https://github.com/LAG-4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3.5 border border-zinc-800 rounded-2xl font-bold transition-all"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a 
              href="https://blog.lagaryan.click" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white px-6 py-3.5 border border-zinc-900 rounded-2xl font-bold transition-all"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              Read Blog
            </a>
          </div>
        </section>

        {/* QUICK FACTS GRID */}
        <section className="bg-zinc-950/40 border border-zinc-900 p-6 md:p-8 rounded-3xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div key={index} className="flex items-center gap-4 border-r border-zinc-900 last:border-0 pr-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-2xl text-indigo-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase block font-semibold">{fact.label}</span>
                    <span className="text-sm md:text-base font-bold text-white block mt-0.5">{fact.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: SKILLS MATRIX */}
        <section id="skills" className="space-y-8 border-t border-zinc-900 pt-16">
          <div>
            <h2 className="text-3xl font-outfit font-extrabold text-white">Skills Matrix</h2>
            <p className="text-zinc-300 text-base md:text-lg mt-1.5 leading-relaxed">
              Highly categorized, comprehensive technical stack with focus details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, index) => (
              <div key={index} className="bg-[#0c0c0f]/80 border border-zinc-900 p-6 rounded-3xl space-y-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-300 font-bold flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="text-sm bg-zinc-950 border border-zinc-900 text-zinc-200 px-3.5 py-2.5 rounded-2xl hover:border-zinc-700 transition-colors font-medium flex flex-col items-start gap-0.5"
                    >
                      <span className="font-bold text-white">{skill.name}</span>
                      <span className="text-[10px] font-mono text-zinc-500 font-medium uppercase tracking-wider">{skill.details}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: EXPERIENCE TIMELINE */}
        <section id="experience" className="space-y-12 border-t border-zinc-900 pt-16">
          <div>
            <h2 className="text-3xl font-outfit font-extrabold text-white">Professional Experience</h2>
            <p className="text-zinc-300 text-base md:text-lg mt-1.5 leading-relaxed">
              Industry contributions and roles in legacy systems and mobile environments.
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start border-l-2 border-zinc-900 pl-6 md:pl-0 md:border-l-0">
                <div className="md:col-span-1 text-sm md:text-base font-mono text-indigo-400 font-bold uppercase tracking-wider md:pt-1">
                  {exp.date}
                </div>
                
                <div className="md:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-outfit font-extrabold text-white flex flex-wrap items-center gap-2 leading-tight">
                      {exp.role}
                      <span className="text-sm text-zinc-400 font-mono font-bold">@ {exp.company}</span>
                    </h3>
                    
                    {exp.projectLink && (
                      <a 
                        href={exp.projectLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 font-bold uppercase tracking-wider mt-2 group"
                      >
                        <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        {exp.projectLinkText}
                      </a>
                    )}
                  </div>
                  
                  <ul className="space-y-3 text-zinc-200 text-sm md:text-base leading-relaxed list-none pl-0">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className="text-zinc-600 mt-1.5 font-bold">—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.skills.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono font-semibold uppercase bg-zinc-900 border border-zinc-850 text-zinc-400 px-2.5 py-1 rounded-xl">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: SELECTED PROJECTS */}
        <section id="projects" className="space-y-8 border-t border-zinc-900 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-outfit font-extrabold text-white">Selected Projects</h2>
              <p className="text-zinc-300 text-base md:text-lg mt-1.5 leading-relaxed">
                Curated items built in full-stack dev, hackathons, and AI pipelines.
              </p>
            </div>

            {/* Filter Categories pills - only visible when expanded */}
            <div className="h-10">
              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-wrap items-center gap-2 bg-zinc-950/40 p-2 border border-zinc-900 rounded-2xl w-full md:w-auto"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider px-2 border-r border-zinc-900 mr-1">
                      <Filter className="w-3.5 h-3.5 text-indigo-400" />
                      Filter
                    </div>
                    {["All", "AI & Agents", "Web & Mobile", "IoT & Hardware"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`text-xs font-mono font-bold uppercase px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                          activeFilter === cat 
                            ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                            : "text-zinc-400 hover:text-white bg-zinc-900/60 border border-zinc-850 hover:border-zinc-700"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((p, idx) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: isExpanded ? Math.min(idx * 0.05, 0.3) : 0 }}
                  className="bg-[#0c0c0f]/80 border border-zinc-900 hover:border-zinc-750 p-6 rounded-3xl flex flex-col justify-between transition-colors group/card relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-indigo-500/0 to-indigo-500/2 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-mono text-zinc-500 font-semibold tracking-wider">PROJECT_ID // {p.id.toUpperCase()}</span>
                      <div className="flex gap-3 z-10 relative">
                        {p.githubLink && p.githubLink !== "#" && (
                          <a 
                            href={p.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-zinc-400 hover:text-white transition-colors p-1 hover:bg-zinc-900 rounded-lg"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {p.liveLink && p.liveLink !== "#" && (
                          <a 
                            href={p.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-zinc-400 hover:text-white transition-colors p-1 hover:bg-zinc-900 rounded-lg"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-outfit font-extrabold text-white mb-2.5 flex flex-wrap items-center gap-2">
                      {p.title}
                      {p.recognition && (
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/20">
                          {p.recognition}
                        </span>
                      )}
                    </h4>
                    
                    <p className="text-zinc-200 text-sm md:text-base leading-relaxed line-clamp-4 font-normal mb-4">
                      {p.description}
                    </p>

                    {/* Metrics / Key highlights inside the card if present */}
                    {p.metrics && p.metrics.length > 0 && (
                      <div className="space-y-1 mt-3 pl-2.5 border-l border-zinc-800">
                        {p.metrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx} className="text-xs text-zinc-400 flex items-start gap-1.5 leading-normal">
                            <span className="text-indigo-500 mt-1 font-bold">•</span>
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-zinc-900">
                    {p.techStack.slice(0, 4).map(tech => (
                      <span key={tech} className="text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 px-3 py-1 rounded-xl">
                        {tech}
                      </span>
                    ))}
                    {p.techStack.length > 4 && (
                      <span className="text-xs text-zinc-500 font-bold px-2 py-1">
                        +{p.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="flex justify-center pt-4">
            <button
              onClick={() => {
                if (isExpanded) {
                  setIsExpanded(false);
                  setActiveFilter("All");
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  setIsExpanded(true);
                }
              }}
              className="flex items-center gap-2 text-sm bg-zinc-950 hover:bg-zinc-900 text-zinc-200 hover:text-white px-8 py-3.5 border border-zinc-850 hover:border-zinc-700 rounded-2xl font-bold transition-all shadow-lg hover:shadow-indigo-950/20 active:scale-95 group cursor-pointer font-sans"
            >
              {isExpanded ? (
                <>
                  Show Featured Only
                  <ChevronUp className="w-4 h-4 text-zinc-400 group-hover:text-white transition-transform duration-300 group-hover:-translate-y-0.5" />
                </>
              ) : (
                <>
                  Explore More Projects ({projectsData.length - 4} additional)
                  <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-white transition-transform duration-300 group-hover:translate-y-0.5 animate-bounce" />
                </>
              )}
            </button>
          </div>
        </section>

        {/* SECTION 5: SMART INDIA HACKATHON FOCUS */}
        <section id="awards" className="space-y-8 border-t border-zinc-900 pt-16">
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/0 border border-amber-500/10 rounded-3xl p-8 flex flex-col sm:flex-row items-start gap-6">
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-2xl">
              <Award className="w-8 h-8 animate-pulse" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-outfit font-extrabold text-white">Smart India Hackathon Champion</h3>
              <p className="text-zinc-200 text-base md:text-lg leading-relaxed max-w-3xl">
                Secured <span className="font-bold text-amber-400">1st Place</span> at the prestigious National Hackathon, <span className="font-bold text-white">Smart India Hackathon 2023</span>. Designed and deployed <span className="font-bold text-white">SheSafe</span>, an integrated safety system for campus ecosystems integrating custom wearable IoT hardware nodes with robust, real-time backend API services and Aadhaar verification.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: TERMINAL PORTFOLIO SHOWCASE */}
        <section id="terminal-cli" className="space-y-8 border-t border-zinc-900 pt-16">
          <div>
            <h2 className="text-3xl font-outfit font-extrabold text-white">Terminal CLI Portfolio</h2>
            <p className="text-zinc-300 text-base md:text-lg mt-1.5 leading-relaxed">
              Prefer the command line? You can fetch my full interactive portfolio directly inside your standard terminal.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-zinc-900 shadow-2xl bg-[#09090b] font-mono text-sm md:text-base">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0d0d11] border-b border-zinc-900">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-zinc-500 text-xs font-semibold">guest@lagaryan: ~ (zsh)</div>
              <div className="w-8" />
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-8 space-y-6 text-zinc-300">
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-white font-semibold">{commandText}</span>
              </div>

              <div className="space-y-1.5 text-indigo-400 font-bold leading-normal text-xs md:text-sm overflow-x-auto whitespace-pre">
                {`   ░███    ░█████████  ░██     ░██    ░███    ░███    ░██ `}
                <br />
                {`  ░██░██   ░██     ░██  ░██   ░██    ░██░██   ░████   ░██ `}
                <br />
                {` ░██  ░██  ░██     ░██   ░██ ░██    ░██  ░██  ░██░██  ░██ `}
                <br />
                {`░█████████ ░█████████     ░████    ░█████████ ░██ ░██ ░██ `}
              </div>

              <div className="space-y-2 border-t border-zinc-900/60 pt-4 text-xs md:text-sm text-zinc-400 font-medium">
                <div>Welcome to Aryan Gupta's Command Line Portfolio Hub.</div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">?</span> Loading remote modules... <span className="text-emerald-500 font-bold">Done.</span>
                </div>
                <div className="text-zinc-500 font-mono mt-2">
                  Commands: [1] skills | [2] experience | [3] projects | [4] contact
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-900/60 justify-between items-center">
                <div className="flex gap-3">
                  <Link 
                    href="/cli" 
                    className="flex items-center gap-2 text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-xl font-bold transition-all shadow-md shadow-indigo-600/10 font-sans"
                  >
                    <Terminal className="w-4 h-4" />
                    Launch Web Terminal
                  </Link>
                </div>

                <button 
                  onClick={handleCopyCommand}
                  className="flex items-center gap-2 text-xs bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 px-5 py-3 rounded-xl font-bold transition-all font-sans"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      Command Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy curl Command
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* INTERACTIVE FUN WIDGET: Raspberry Pi Homelab Console */}
        <section className="space-y-8 border-t border-zinc-900 pt-16">
          <div className="bg-zinc-950/80 border border-zinc-900 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-stretch">
            
            {/* Widget left column (Status telemetry) */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <Server className="w-6 h-6 text-indigo-400 animate-pulse" />
                <div>
                  <h3 className="text-base font-bold text-white">Pi Homelab Console</h3>
                  <p className="text-xs text-zinc-400 font-mono">pi-cluster.local // active</p>
                </div>
              </div>

              {/* Dynamic telemetry stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#0b0b0e] border border-zinc-900 p-3 rounded-2xl text-center">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block font-semibold">CPU</span>
                  <span className="text-sm md:text-base font-mono font-bold text-indigo-400">{cpu}%</span>
                </div>
                <div className="bg-[#0b0b0e] border border-zinc-900 p-3 rounded-2xl text-center">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block font-semibold">RAM</span>
                  <span className="text-sm md:text-base font-mono font-bold text-emerald-400">{ram}%</span>
                </div>
                <div className="bg-[#0b0b0e] border border-zinc-900 p-3 rounded-2xl text-center">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block font-semibold">TEMP</span>
                  <span className="text-sm md:text-base font-mono font-bold text-red-400">{temp}°C</span>
                </div>
              </div>

              {/* Service triggers */}
              <div className="space-y-3 border-t border-zinc-900 pt-4">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-bold">Services Switchboard</span>
                <div className="space-y-2">
                  {Object.entries(services).map(([id, s]) => (
                    <div key={id} className="flex justify-between items-center bg-[#0b0b0e] px-4 py-2.5 border border-zinc-900 rounded-xl">
                      <span className="text-xs font-semibold text-zinc-200 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${s.running ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`} />
                        {s.name}
                      </span>
                      <button 
                        onClick={() => toggleService(id)}
                        className={`text-sm p-1 rounded font-mono ${s.running ? "text-indigo-400" : "text-zinc-500 hover:text-zinc-300"}`}
                        title="Toggle Power"
                      >
                        {s.running ? <ToggleRight className="w-6 h-6" /> : <ToggleLeft className="w-6 h-6" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Widget right column (System logs output) */}
            <div className="flex-1 bg-black border border-zinc-900 rounded-3xl p-6 flex flex-col justify-between font-mono text-xs text-indigo-300 min-h-[220px] shadow-inner">
              <div className="space-y-2 overflow-hidden">
                <span className="text-zinc-500 block text-[10px] font-bold border-b border-zinc-900 pb-2 mb-2">=== TERMINAL CONSOLE LOGS ===</span>
                {consoleLogs.map((log, idx) => (
                  <div key={idx} className="line-clamp-1 leading-relaxed">
                    {log}
                  </div>
                ))}
              </div>
              <div className="text-zinc-500 text-[10px] mt-4 flex justify-between border-t border-zinc-900 pt-2 font-bold">
                <span>PORT: 8080</span>
                <span>STATUS: OK</span>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Floating Bottom Glass Navigation Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900/70 border border-zinc-800/80 rounded-2xl px-8 py-4 flex items-center gap-8 backdrop-blur-lg shadow-xl shadow-black/50 z-40 max-w-lg w-fit">
        <a href="#skills" className="text-sm text-zinc-300 hover:text-white transition-colors font-outfit font-bold uppercase tracking-widest">
          Skills
        </a>
        <span className="text-zinc-800">|</span>
        <a href="#experience" className="text-sm text-zinc-300 hover:text-white transition-colors font-outfit font-bold uppercase tracking-widest">
          Exp
        </a>
        <span className="text-zinc-800">|</span>
        <a href="#projects" className="text-sm text-zinc-300 hover:text-white transition-colors font-outfit font-bold uppercase tracking-widest">
          Work
        </a>
      </div>

    </div>
  );
}
