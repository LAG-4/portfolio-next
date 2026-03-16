"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo, projectsData, skillsData, experiences, awards } from "../../lib/data";
import Link from "next/link";
import { Github, ExternalLink, Mail, FileText, ChevronDown, Terminal, Code, Cpu, Award, Briefcase, User, FolderOpen } from "lucide-react";

// Terminal typing effect hook
function useTypewriter(text: string, speed: number = 50, delay: number = 0) {
  const [displayed, setDisplayed] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setIsComplete(false);
    
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, isComplete };
}

// Terminal Line Component
function TerminalLine({ 
  command, 
  output, 
  delay = 0,
  showCursor = false 
}: { 
  command: string; 
  output?: React.ReactNode; 
  delay?: number;
  showCursor?: boolean;
}) {
  const { displayed, isComplete } = useTypewriter(command, 30, delay);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000 }}
      className="mb-4"
    >
      <div className="flex items-center gap-2">
        <span className="text-emerald-400 font-bold">aryan@portfolio</span>
        <span className="text-gray-500">:</span>
        <span className="text-cyan-400">~</span>
        <span className="text-gray-500">$</span>
        <span className="text-gray-100 ml-2">
          {displayed}
          {!isComplete && <span className="animate-blink text-emerald-400">▊</span>}
        </span>
      </div>
      {isComplete && output && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 pl-0 text-gray-300"
        >
          {output}
        </motion.div>
      )}
      {showCursor && isComplete && (
        <div className="flex items-center gap-2 mt-4">
          <span className="text-emerald-400 font-bold">aryan@portfolio</span>
          <span className="text-gray-500">:</span>
          <span className="text-cyan-400">~</span>
          <span className="text-gray-500">$</span>
          <span className="animate-blink text-emerald-400 ml-2">▊</span>
        </div>
      )}
    </motion.div>
  );
}

// ASCII Art Header
const asciiName = `
 █████╗ ██████╗ ██╗   ██╗ █████╗ ███╗   ██╗
██╔══██╗██╔══██╗╚██╗ ██╔╝██╔══██╗████╗  ██║
███████║██████╔╝ ╚████╔╝ ███████║██╔██╗ ██║
██╔══██║██╔══██╗  ╚██╔╝  ██╔══██║██║╚██╗██║
██║  ██║██║  ██║   ██║   ██║  ██║██║ ╚████║
╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝
`;

// Navigation Item
function NavItem({ icon: Icon, label, section, active, onClick }: {
  icon: React.ElementType;
  label: string;
  section: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2 w-full text-left transition-all duration-200 border-l-2 ${
        active 
          ? "border-emerald-400 text-emerald-400 bg-emerald-400/10" 
          : "border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-600"
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="font-mono text-sm">{label}</span>
    </button>
  );
}

// Project Card
function ProjectCard({ project, index }: { project: typeof projectsData[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-gray-800 bg-gray-900/50 p-6 hover:border-emerald-500/50 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-emerald-400 font-mono">{project.title}</h3>
          <p className="text-gray-500 text-sm mt-1">{project.tagline}</p>
        </div>
        <div className="flex gap-2">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-emerald-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.liveLink && project.liveLink !== "#" && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-emerald-400 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
      
      {project.recognition && (
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-mono">
          <Award className="w-3 h-3" />
          {project.recognition}
        </div>
      )}
      
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs font-mono border border-gray-700">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// Skill Bar
function SkillBar({ name, proficiency, tags }: { name: string; proficiency: number; tags: string[] }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-300 font-mono text-sm">{name}</span>
        <span className="text-emerald-400 font-mono text-xs">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-none overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
        />
      </div>
      <div className="flex gap-2 mt-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs text-gray-600 font-mono">#{tag.toLowerCase().replace(/\s/g, '-')}</span>
        ))}
      </div>
    </div>
  );
}

export default function TerminalDesign() {
  const [activeSection, setActiveSection] = useState("home");
  const [bootComplete, setBootComplete] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setBootComplete(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: "home", label: "whoami", icon: Terminal },
    { id: "about", label: "cat about.txt", icon: User },
    { id: "projects", label: "ls projects/", icon: FolderOpen },
    { id: "skills", label: "skills --list", icon: Code },
    { id: "experience", label: "cat resume.md", icon: Briefcase },
    { id: "contact", label: "mail --compose", icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100 font-[family-name:'JetBrains_Mono'] design-terminal noise-overlay">
      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent animate-scanline" />
      </div>

      {/* CRT screen curve effect */}
      <div className="fixed inset-0 pointer-events-none z-40" style={{
        boxShadow: 'inset 0 0 150px rgba(0, 0, 0, 0.7)',
        borderRadius: '10px'
      }} />

      {/* Back navigation */}
      <Link href="/" className="fixed top-4 left-4 z-50 flex items-center gap-2 text-gray-500 hover:text-emerald-400 transition-colors text-sm">
        <span>←</span>
        <span>cd ..</span>
      </Link>

      {/* Boot sequence overlay */}
      <AnimatePresence>
        {!bootComplete && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-[#0d1117] flex items-center justify-center"
          >
            <div className="font-mono text-sm">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0 }}>
                <span className="text-emerald-400">[</span> OK <span className="text-emerald-400">]</span> Loading system modules...
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <span className="text-emerald-400">[</span> OK <span className="text-emerald-400">]</span> Initializing portfolio.service
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                <span className="text-emerald-400">[</span> OK <span className="text-emerald-400">]</span> Loading project data...
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                <span className="text-emerald-400">[</span> OK <span className="text-emerald-400">]</span> Establishing neural links...
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
                <span className="text-cyan-400">[</span> <span className="animate-blink">...</span> <span className="text-cyan-400">]</span> Booting interface...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="hidden lg:flex flex-col w-64 border-r border-gray-800 bg-[#0d1117]/80 backdrop-blur-sm fixed h-full"
        >
          <div className="p-6 border-b border-gray-800">
            <div className="text-emerald-400 text-xs tracking-widest mb-2">SYSTEM v1.0.0</div>
            <div className="text-lg font-bold">aryan.dev</div>
          </div>
          
          <nav className="flex-1 py-6">
            {sections.map((section) => (
              <NavItem
                key={section.id}
                icon={section.icon}
                label={section.label}
                section={section.id}
                active={activeSection === section.id}
                onClick={() => scrollToSection(section.id)}
              />
            ))}
          </nav>

          <div className="p-6 border-t border-gray-800">
            <div className="text-xs text-gray-600 mb-2">// Quick actions</div>
            <div className="flex gap-3">
              <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-emerald-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalInfo.resumePath} className="text-gray-500 hover:text-emerald-400 transition-colors">
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main ref={mainRef} className="flex-1 lg:ml-64">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex flex-col justify-center p-8 lg:p-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.7 }}
            >
              <pre className="text-emerald-400 text-[0.5rem] sm:text-xs md:text-sm leading-tight mb-8 overflow-x-auto">
                {asciiName}
              </pre>

              <TerminalLine
                command="whoami"
                delay={3000}
                output={
                  <div className="space-y-2">
                    <div><span className="text-emerald-400">Name:</span> {personalInfo.name}</div>
                    <div><span className="text-emerald-400">Role:</span> {personalInfo.title}</div>
                    <div><span className="text-emerald-400">Location:</span> {personalInfo.location}</div>
                    <div><span className="text-emerald-400">Education:</span> {personalInfo.education}</div>
                  </div>
                }
              />

              <TerminalLine
                command="cat highlights.txt"
                delay={4500}
                output={
                  <ul className="space-y-1">
                    {personalInfo.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-yellow-400">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                }
                showCursor
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6 }}
                className="mt-12 flex flex-wrap gap-4"
              >
                <a 
                  href={personalInfo.resumePath}
                  className="px-6 py-3 bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  download resume.pdf
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="px-6 py-3 border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  send --email
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-600"
            >
              <span className="text-xs mb-2">scroll down</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen p-8 lg:p-16 border-t border-gray-800">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-emerald-400">$</span> cat about.txt
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-gray-800 bg-gray-900/30 p-6">
                  <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                    <span className="text-gray-500">#</span> My Story
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{personalInfo.about}</p>
                </div>
                
                <div className="border border-gray-800 bg-gray-900/30 p-6">
                  <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                    <span className="text-gray-500">#</span> What Drives Me
                  </h3>
                  <ul className="space-y-3">
                    {personalInfo.drivingForce.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <Cpu className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border border-gray-800 bg-gray-900/30 p-6">
                <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                  <span className="text-gray-500">#</span> Quick Facts
                </h3>
                <div className="flex flex-wrap gap-3">
                  {personalInfo.quickFacts.map((fact, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 text-gray-400 text-sm border border-gray-700">
                      {fact}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen p-8 lg:p-16 border-t border-gray-800">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                <span className="text-emerald-400">$</span> ls projects/
              </h2>
              <p className="text-gray-500 mb-8">total {projectsData.length} items</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {projectsData.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="min-h-screen p-8 lg:p-16 border-t border-gray-800">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-emerald-400">$</span> skills --list --verbose
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-800 bg-gray-900/30 p-6">
                  <h3 className="text-cyan-400 font-bold mb-6 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Development
                  </h3>
                  {skillsData.development.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>

                <div className="border border-gray-800 bg-gray-900/30 p-6">
                  <h3 className="text-purple-400 font-bold mb-6 flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    AI & Data Science
                  </h3>
                  {skillsData.aiDataScience.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>

                <div className="border border-gray-800 bg-gray-900/30 p-6">
                  <h3 className="text-orange-400 font-bold mb-6 flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    Tools & Platforms
                  </h3>
                  {skillsData.toolsPlatforms.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="min-h-screen p-8 lg:p-16 border-t border-gray-800">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-emerald-400">$</span> cat resume.md
              </h2>

              {/* Work Experience */}
              <div className="mb-12">
                <h3 className="text-xl text-cyan-400 font-bold mb-6">## Work Experience</h3>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-emerald-500 pl-6 pb-8 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-500 rounded-full" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1">{exp.duration}</span>
                    </div>
                    <p className="text-emerald-400 mb-3">{exp.company}</p>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-gray-600">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs border border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Awards */}
              <div>
                <h3 className="text-xl text-yellow-400 font-bold mb-6">## Awards & Certifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {awards.map((award, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-yellow-500/30 bg-yellow-500/5 p-6"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <Award className="w-5 h-5 text-yellow-400 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-white">{award.title}</h4>
                          <p className="text-yellow-400 text-sm">{award.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{award.description}</p>
                      <a 
                        href={award.certificateLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View Certificate
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen p-8 lg:p-16 border-t border-gray-800 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <span className="text-emerald-400">$</span> mail --compose
              </h2>
              <p className="text-gray-500 mb-8">Ready to build something amazing together?</p>

              <div className="border border-gray-800 bg-gray-900/30 p-8 text-left">
                <div className="mb-4">
                  <span className="text-gray-500">To:</span>
                  <span className="text-emerald-400 ml-2">{personalInfo.email}</span>
                </div>
                <div className="mb-4">
                  <span className="text-gray-500">Subject:</span>
                  <span className="text-gray-300 ml-2">Let&apos;s Collaborate!</span>
                </div>
                <div className="border-t border-gray-800 pt-4">
                  <p className="text-gray-400 mb-6">
                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="px-6 py-3 bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Send Email
                    </a>
                    <a 
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-gray-700 text-gray-300 hover:border-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-gray-600 text-sm">
                Built with Next.js • Designed with passion • © 2024
              </p>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}
