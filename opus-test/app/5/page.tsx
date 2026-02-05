"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { personalInfo, projectsData, skillsData, experiences, awards } from "../../lib/data";
import Link from "next/link";
import { Github, ExternalLink, Mail, FileText, Award } from "lucide-react";

// Typewriter effect hook
function useTypewriter(text: string, speed: number = 80) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

// Film grain overlay
function FilmGrain() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }} />
  );
}

// Noir-style divider with dot
function NoirDivider() {
  return (
    <div className="flex items-center gap-4 my-16">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-stone-600" />
      <div className="w-2 h-2 bg-stone-500 rounded-full" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-stone-600" />
    </div>
  );
}

// Case file card
function CaseFile({ children, label, className = "" }: { children: React.ReactNode; label: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Paper texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200 rounded shadow-lg transform rotate-1" />
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-stone-100 rounded shadow-md transform -rotate-1" />
      
      {/* Main card */}
      <div className="relative bg-stone-50 rounded shadow-lg p-6 border border-stone-200">
        <div className="absolute -top-3 left-4 px-2 bg-stone-800 text-stone-200 text-xs font-mono uppercase tracking-widest">
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}

// Project dossier
function Dossier({ project, index }: { project: typeof projectsData[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <CaseFile label={`Case #${String(index + 1).padStart(3, '0')}`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-[family-name:'Courier_New'] text-xl font-bold text-stone-800 mb-1">
              {project.title}
            </h3>
            <p className="text-stone-500 text-sm italic">{project.tagline}</p>
          </div>
          
          <div className="flex gap-2">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-stone-800 text-stone-200 hover:bg-stone-700 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveLink && project.liveLink !== "#" && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-stone-800 text-stone-200 hover:bg-stone-700 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        
        {project.recognition && (
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-amber-100 border border-amber-300 text-amber-800 text-xs">
            <Award className="w-3 h-3" />
            {project.recognition}
          </div>
        )}
        
        <p className="text-stone-600 text-sm leading-relaxed mb-4 font-[family-name:'Courier_New']">
          {project.description}
        </p>
        
        <div className="border-t border-stone-300 pt-4 border-dashed">
          <p className="text-stone-400 text-xs uppercase tracking-widest mb-2">Evidence Tags</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-stone-200 text-stone-600 text-xs font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CaseFile>
    </motion.div>
  );
}

// Skill meter styled as detective notes
function SkillNote({ name, value }: { name: string; value: number }) {
  return (
    <div className="flex items-center gap-4 py-2 border-b border-stone-300 border-dashed last:border-b-0">
      <span className="text-stone-700 text-sm flex-1 font-[family-name:'Courier_New']">{name}</span>
      <div className="w-24 flex gap-0.5">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-4 ${i < Math.floor(value / 10) ? 'bg-stone-700' : 'bg-stone-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function NoirDesign() {
  const heroText = useTypewriter("ARYAN GUPTA", 150);

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100">
      <FilmGrain />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-stone-900/95 backdrop-blur-sm border-b border-stone-700">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-stone-500 hover:text-stone-300 text-sm font-mono transition-colors">
            [BACK]
          </Link>
          <span className="text-stone-500 text-xs font-mono tracking-widest">CASE FILE: PORTFOLIO</span>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          {/* Venetian blinds effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 h-8 bg-gradient-to-b from-black to-transparent"
                style={{ top: `${i * 5}%` }}
              />
            ))}
          </div>
          
          <div className="text-center relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="text-stone-500 text-sm font-mono tracking-[0.5em] mb-8">
                THE CASE OF THE
              </p>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[family-name:'Courier_New']">
                {heroText}
                <span className="animate-blink text-amber-500">|</span>
              </h1>
              
              <p className="text-stone-400 text-lg mb-2 italic">
                &quot;{personalInfo.title}&quot;
              </p>
              <p className="text-stone-500 text-sm mb-12">
                {personalInfo.tagline}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href={personalInfo.resumePath}
                   className="px-6 py-3 bg-amber-600 text-stone-900 font-bold hover:bg-amber-500 transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  THE DOSSIER
                </a>
                <a href={`mailto:${personalInfo.email}`}
                   className="px-6 py-3 border border-stone-500 text-stone-300 hover:bg-stone-800 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  MAKE CONTACT
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About - The Subject */}
        <section className="py-24 px-6 bg-stone-100 text-stone-900">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 font-[family-name:'Courier_New'] text-center">
                THE SUBJECT
              </h2>
              
              <NoirDivider />
              
              <div className="grid md:grid-cols-2 gap-8">
                <CaseFile label="Background">
                  <p className="text-stone-600 leading-relaxed font-[family-name:'Courier_New'] text-sm">
                    {personalInfo.about}
                  </p>
                </CaseFile>
                
                <CaseFile label="Distinguishing Traits">
                  <ul className="space-y-3">
                    {personalInfo.drivingForce.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm font-[family-name:'Courier_New']">
                        <span className="text-amber-600">&#9679;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CaseFile>
              </div>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Location", value: personalInfo.location },
                  { label: "Education", value: "B.Tech CS @ VIT" },
                  { label: "Status", value: "At Large" },
                  { label: "Cases Solved", value: `${projectsData.length}+` },
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 bg-stone-200/50 border border-stone-300">
                    <p className="text-stone-400 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-stone-800 font-bold font-[family-name:'Courier_New']">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects - Case Files */}
        <section className="py-24 px-6 bg-stone-800">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 font-[family-name:'Courier_New'] text-center text-stone-100">
                CASE FILES
              </h2>
              
              <NoirDivider />
              
              <div className="grid md:grid-cols-2 gap-8">
                {projectsData.map((project, index) => (
                  <Dossier key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills - Known Capabilities */}
        <section className="py-24 px-6 bg-stone-100 text-stone-900">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 font-[family-name:'Courier_New'] text-center">
                KNOWN CAPABILITIES
              </h2>
              
              <NoirDivider />
              
              <div className="grid md:grid-cols-3 gap-8">
                <CaseFile label="Development">
                  {skillsData.development.map((skill) => (
                    <SkillNote key={skill.name} name={skill.name} value={skill.proficiency} />
                  ))}
                </CaseFile>
                
                <CaseFile label="AI & Data">
                  {skillsData.aiDataScience.map((skill) => (
                    <SkillNote key={skill.name} name={skill.name} value={skill.proficiency} />
                  ))}
                </CaseFile>
                
                <CaseFile label="Tools">
                  {skillsData.toolsPlatforms.map((skill) => (
                    <SkillNote key={skill.name} name={skill.name} value={skill.proficiency} />
                  ))}
                </CaseFile>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience & Awards */}
        <section className="py-24 px-6 bg-stone-900">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-8 font-[family-name:'Courier_New'] text-stone-100">
                  PRIOR AFFILIATIONS
                </h2>
                
                {experiences.map((exp, index) => (
                  <div key={index} className="mb-8 pl-6 border-l-2 border-amber-600">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-stone-200 font-bold font-[family-name:'Courier_New']">{exp.role}</h3>
                      <span className="text-stone-500 text-xs">{exp.duration}</span>
                    </div>
                    <p className="text-amber-500 text-sm mb-3">{exp.company}</p>
                    <ul className="space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-stone-400 text-sm flex items-start gap-2 font-[family-name:'Courier_New']">
                          <span className="text-stone-600">-</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
              
              {/* Awards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-8 font-[family-name:'Courier_New'] text-stone-100">
                  COMMENDATIONS
                </h2>
                
                {awards.map((award, index) => (
                  <div key={index} className="mb-8 p-6 bg-amber-900/20 border border-amber-800/50">
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-amber-400 font-bold font-[family-name:'Courier_New']">{award.title}</h3>
                        <p className="text-stone-400 text-sm mb-2">{award.subtitle}</p>
                        <a href={award.certificateLink} target="_blank" rel="noopener noreferrer"
                           className="text-amber-500/70 text-xs hover:text-amber-400 transition-colors underline">
                          View Evidence
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 px-6 bg-stone-100 text-stone-900">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 font-[family-name:'Courier_New']">
                NEED A PROBLEM SOLVED?
              </h2>
              <p className="text-stone-500 mb-12 italic">
                &quot;I work alone, but I&apos;m always looking for the right case.&quot;
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`mailto:${personalInfo.email}`}
                   className="px-8 py-4 bg-stone-800 text-stone-100 font-bold hover:bg-stone-700 transition-colors">
                  LEAVE A MESSAGE
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                   className="px-8 py-4 border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-stone-100 transition-colors">
                  VIEW THE FILES
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-900 border-t border-stone-700 py-8 px-6">
          <div className="max-w-4xl mx-auto flex justify-between items-center text-stone-500 text-sm font-mono">
            <span>© 2024 {personalInfo.name}</span>
            <span>CASE CLOSED</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
