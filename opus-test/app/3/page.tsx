"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { personalInfo, projectsData, skillsData, experiences, awards } from "../../lib/data";
import Link from "next/link";
import { Github, ExternalLink, Mail, FileText, Award } from "lucide-react";

// Matrix rain character component
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charArray = chars.split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff41";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillStyle = `rgba(0, 255, 65, ${Math.random() * 0.5 + 0.5})`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
}

// Glitch text effect
function GlitchText({ children, className = "" }: { children: string; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute top-0 left-0 -translate-x-[2px] text-red-500 opacity-70 animate-glitch z-0" aria-hidden>
        {children}
      </span>
      <span className="absolute top-0 left-0 translate-x-[2px] text-cyan-500 opacity-70 animate-glitch z-0" style={{ animationDelay: "0.1s" }} aria-hidden>
        {children}
      </span>
    </span>
  );
}

// Cyber card component
function CyberCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative group ${className}`}>
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-green-500" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-green-500" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-green-500" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-green-500" />
      
      <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 p-6 group-hover:border-green-500/60 transition-colors">
        {children}
      </div>
    </div>
  );
}

// Project row
function ProjectRow({ project, index }: { project: typeof projectsData[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-b border-green-500/20 py-6 group cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-green-500/50 font-mono text-sm w-8">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-xl font-mono text-green-400 group-hover:text-green-300 transition-colors flex items-center gap-3">
              {project.title}
              {project.recognition && (
                <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                  {project.recognition}
                </span>
              )}
            </h3>
            <p className="text-green-500/60 text-sm mt-1">{project.tagline}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
               className="text-green-500/40 hover:text-green-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.liveLink && project.liveLink !== "#" && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
               className="text-green-500/40 hover:text-green-400 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      {/* Expanded content on hover */}
      <motion.div
        initial={false}
        animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pt-4 pl-14">
          <p className="text-green-500/70 text-sm mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs font-mono px-2 py-1 bg-green-500/10 text-green-400 border border-green-500/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Skill meter
function SkillMeter({ name, value }: { name: string; value: number }) {
  return (
    <div className="flex items-center gap-4 py-2">
      <span className="text-green-500/70 font-mono text-sm w-32 truncate">{name}</span>
      <div className="flex-1 h-2 bg-green-500/10 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-600 to-green-400"
        />
        {/* Scan line effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>
      <span className="text-green-400 font-mono text-sm w-12 text-right">{value}%</span>
    </div>
  );
}

export default function MatrixDesign() {
  const [systemTime, setSystemTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono overflow-hidden">
      <MatrixRain />
      
      {/* Overlay gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10" />
      
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-green-500/30 px-6 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-green-500/60 hover:text-green-400 text-sm transition-colors">
            [ESC] EXIT
          </Link>
          <div className="flex items-center gap-8 text-sm">
            <span className="text-green-500/40">SYS_TIME: {systemTime}</span>
            <span className="text-green-500/40">STATUS: <span className="text-green-400">ONLINE</span></span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-20 pt-20">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-green-500/60 text-sm mb-4 tracking-[0.5em]">IDENTITY_VERIFIED</p>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                <GlitchText className="text-green-400">{personalInfo.name.split(" ")[0].toUpperCase()}</GlitchText>
              </h1>
              <h2 className="text-4xl md:text-6xl font-light text-green-500/60 mb-8">
                {personalInfo.name.split(" ")[1].toUpperCase()}
              </h2>
              
              <p className="text-green-500/80 text-lg mb-2">&gt; {personalInfo.title}</p>
              <p className="text-green-500/50 text-sm mb-12">&gt; {personalInfo.tagline}</p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href={personalInfo.resumePath} 
                   className="px-6 py-3 bg-green-500 text-black font-bold hover:bg-green-400 transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  DOWNLOAD_CV.pdf
                </a>
                <a href={`mailto:${personalInfo.email}`}
                   className="px-6 py-3 border border-green-500 text-green-400 hover:bg-green-500/10 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  INIT_CONTACT
                </a>
              </div>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <div className="text-green-500/40 text-sm animate-pulse">
                [SCROLL TO CONTINUE]
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
                <span className="text-green-500/40">//</span>
                ABOUT_SYSTEM
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <CyberCard>
                  <h3 className="text-green-400 mb-4 text-sm tracking-wider">CORE_PROFILE</h3>
                  <p className="text-green-500/70 leading-relaxed">{personalInfo.about}</p>
                </CyberCard>
                
                <CyberCard>
                  <h3 className="text-green-400 mb-4 text-sm tracking-wider">SYSTEM_PARAMS</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-500/50">location:</span>
                      <span className="text-green-400">{personalInfo.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-500/50">education:</span>
                      <span className="text-green-400">{personalInfo.education}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-500/50">status:</span>
                      <span className="text-green-400">AVAILABLE</span>
                    </div>
                  </div>
                </CyberCard>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-32 px-6 bg-black/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-4">
                <span className="text-green-500/40">//</span>
                PROJECT_DATABASE
              </h2>
              <p className="text-green-500/50 text-sm mb-12">
                {projectsData.length} entries found
              </p>
              
              <div>
                {projectsData.map((project, index) => (
                  <ProjectRow key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-12 flex items-center gap-4">
                <span className="text-green-500/40">//</span>
                SKILL_MATRIX
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <CyberCard>
                  <h3 className="text-cyan-400 mb-6 text-sm tracking-wider">DEV_MODULES</h3>
                  {skillsData.development.map((skill) => (
                    <SkillMeter key={skill.name} name={skill.name} value={skill.proficiency} />
                  ))}
                </CyberCard>
                
                <CyberCard>
                  <h3 className="text-purple-400 mb-6 text-sm tracking-wider">AI_PROTOCOLS</h3>
                  {skillsData.aiDataScience.map((skill) => (
                    <SkillMeter key={skill.name} name={skill.name} value={skill.proficiency} />
                  ))}
                </CyberCard>
                
                <CyberCard>
                  <h3 className="text-yellow-400 mb-6 text-sm tracking-wider">TOOL_ARSENAL</h3>
                  {skillsData.toolsPlatforms.map((skill) => (
                    <SkillMeter key={skill.name} name={skill.name} value={skill.proficiency} />
                  ))}
                </CyberCard>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience & Awards */}
        <section className="py-32 px-6 bg-black/50">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
                  <span className="text-green-500/40">//</span>
                  EXP_LOG
                </h2>
                
                {experiences.map((exp, index) => (
                  <CyberCard key={index} className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-green-400 font-bold">{exp.role}</h3>
                      <span className="text-green-500/50 text-xs">{exp.duration}</span>
                    </div>
                    <p className="text-cyan-400 text-sm mb-3">{exp.company}</p>
                    <ul className="space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-green-500/60 text-sm flex items-start gap-2">
                          <span className="text-green-500/40">&gt;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CyberCard>
                ))}
              </motion.div>
              
              {/* Awards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
                  <span className="text-green-500/40">//</span>
                  ACHIEVEMENTS
                </h2>
                
                {awards.map((award, index) => (
                  <CyberCard key={index} className="mb-4">
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-yellow-400 shrink-0" />
                      <div>
                        <h3 className="text-yellow-400 font-bold">{award.title}</h3>
                        <p className="text-green-500/60 text-sm mb-2">{award.subtitle}</p>
                        <a href={award.certificateLink} target="_blank" rel="noopener noreferrer"
                           className="text-green-400 text-xs hover:text-green-300 transition-colors">
                          [VIEW_CERT]
                        </a>
                      </div>
                    </div>
                  </CyberCard>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-32 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">ESTABLISH_CONNECTION</h2>
              <p className="text-green-500/60 mb-12">
                Ready to collaborate? Initialize communication protocol.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`mailto:${personalInfo.email}`}
                   className="px-8 py-4 bg-green-500 text-black font-bold hover:bg-green-400 transition-colors">
                  SEND_TRANSMISSION
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                   className="px-8 py-4 border border-green-500 text-green-400 hover:bg-green-500/10 transition-colors">
                  ACCESS_GITHUB
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-green-500/20 py-8 px-6">
          <div className="max-w-4xl mx-auto flex justify-between items-center text-sm text-green-500/40">
            <span>© 2024 {personalInfo.name}</span>
            <span>SYSTEM_VERSION: 3.0.0</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
