"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { personalInfo, projectsData, skillsData, experiences, awards } from "../../lib/data";
import Link from "next/link";
import { Github, ExternalLink, Mail, FileText, Award } from "lucide-react";

// Blueprint grid background
function BlueprintGrid() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[#0a1628]" />
      {/* Major grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(to right, #1e90ff 1px, transparent 1px),
          linear-gradient(to bottom, #1e90ff 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
      }} />
      {/* Minor grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(to right, #1e90ff 1px, transparent 1px),
          linear-gradient(to bottom, #1e90ff 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
      }} />
    </div>
  );
}

// Measurement annotation
function Annotation({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest ${className}`}>
      {children}
    </span>
  );
}

// Blueprint box with corner marks
function BlueprintBox({ children, title, className = "" }: { children: React.ReactNode; title?: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Corner marks */}
      <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-cyan-500/50" />
      <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-cyan-500/50" />
      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-cyan-500/50" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-cyan-500/50" />
      
      {/* Center marks */}
      <div className="absolute top-1/2 -left-3 w-2 h-px bg-cyan-500/30" />
      <div className="absolute top-1/2 -right-3 w-2 h-px bg-cyan-500/30" />
      <div className="absolute -top-3 left-1/2 w-px h-2 bg-cyan-500/30" />
      <div className="absolute -bottom-3 left-1/2 w-px h-2 bg-cyan-500/30" />
      
      {title && (
        <div className="absolute -top-6 left-0">
          <Annotation>{title}</Annotation>
        </div>
      )}
      
      <div className="border border-cyan-500/30 bg-[#0a1628]/80 backdrop-blur-sm p-6">
        {children}
      </div>
    </div>
  );
}

// Technical drawing style project card
function TechnicalCard({ project, index }: { project: typeof projectsData[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <BlueprintBox title={`PROJECT_${String(index + 1).padStart(3, '0')}`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-mono text-cyan-300 mb-1">{project.title}</h3>
            <p className="text-cyan-500/50 text-sm">{project.tagline}</p>
          </div>
          
          <div className="flex gap-2">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                 className="p-2 border border-cyan-500/30 text-cyan-500/50 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveLink && project.liveLink !== "#" && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                 className="p-2 border border-cyan-500/30 text-cyan-500/50 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        
        {project.recognition && (
          <div className="mb-4 inline-flex items-center gap-2 px-2 py-1 border border-yellow-500/30 text-yellow-400/80 text-xs font-mono">
            <Award className="w-3 h-3" />
            {project.recognition}
          </div>
        )}
        
        <p className="text-cyan-500/70 text-sm mb-4 leading-relaxed">{project.description}</p>
        
        {/* Tech stack with wire connectors */}
        <div className="border-t border-cyan-500/20 pt-4">
          <Annotation>TECH_STACK</Annotation>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech, i) => (
              <span key={tech} className="px-2 py-1 border border-cyan-500/30 text-cyan-400/70 text-xs font-mono bg-cyan-500/5">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </BlueprintBox>
    </motion.div>
  );
}

// Wireframe skill display
function WireframeSkill({ name, value, index }: { name: string; value: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex items-center gap-4 py-2 border-b border-cyan-500/10 last:border-b-0"
    >
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="text-cyan-300/80 text-sm font-mono">{name}</span>
          <span className="text-cyan-500/50 text-xs font-mono">{value}%</span>
        </div>
        <div className="h-1 bg-cyan-500/10 relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${value}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-600 to-cyan-400"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function BlueprintDesign() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen text-cyan-100 font-mono">
      <BlueprintGrid />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/90 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-cyan-500/60 hover:text-cyan-400 text-sm transition-colors">
            ← RETURN_TO_INDEX
          </Link>
          <Annotation>BLUEPRINT_v4.0</Annotation>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10 pt-20">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Annotation>DEVELOPER_PROFILE</Annotation>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-8"
              />
              
              <h1 className="text-5xl md:text-7xl font-light text-cyan-200 mb-4 tracking-wider">
                {personalInfo.name.toUpperCase()}
              </h1>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-8"
              />
              
              <p className="text-cyan-400/70 text-lg mb-2">{personalInfo.title}</p>
              <p className="text-cyan-500/50 text-sm mb-12">{personalInfo.tagline}</p>
              
              {/* Specification box */}
              <BlueprintBox className="max-w-md mx-auto mb-12">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-left">
                    <Annotation>LOCATION</Annotation>
                    <p className="text-cyan-300 mt-1">{personalInfo.location}</p>
                  </div>
                  <div className="text-left">
                    <Annotation>EDUCATION</Annotation>
                    <p className="text-cyan-300 mt-1">B.Tech CS @ VIT</p>
                  </div>
                  <div className="text-left">
                    <Annotation>STATUS</Annotation>
                    <p className="text-cyan-300 mt-1">AVAILABLE</p>
                  </div>
                  <div className="text-left">
                    <Annotation>PROJECTS</Annotation>
                    <p className="text-cyan-300 mt-1">{projectsData.length}+ COMPLETED</p>
                  </div>
                </div>
              </BlueprintBox>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href={personalInfo.resumePath}
                   className="px-6 py-3 border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-[#0a1628] transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  DOWNLOAD_SPECS.pdf
                </a>
                <a href={`mailto:${personalInfo.email}`}
                   className="px-6 py-3 border border-cyan-500/50 text-cyan-400/80 hover:border-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  SEND_MESSAGE
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-12">
                <Annotation>SECTION_01</Annotation>
                <div className="flex-1 h-px bg-cyan-500/20" />
                <span className="text-xl text-cyan-300">ABOUT</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <BlueprintBox title="DESCRIPTION">
                  <p className="text-cyan-400/70 leading-relaxed">{personalInfo.about}</p>
                </BlueprintBox>
                
                <BlueprintBox title="CORE_VALUES">
                  <ul className="space-y-3">
                    {personalInfo.drivingForce.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-cyan-400/70 text-sm">
                        <span className="text-cyan-500/50">◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </BlueprintBox>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-24 px-6 bg-[#0a1628]/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-12">
                <Annotation>SECTION_02</Annotation>
                <div className="flex-1 h-px bg-cyan-500/20" />
                <span className="text-xl text-cyan-300">PROJECTS</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {projectsData.map((project, index) => (
                  <TechnicalCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-12">
                <Annotation>SECTION_03</Annotation>
                <div className="flex-1 h-px bg-cyan-500/20" />
                <span className="text-xl text-cyan-300">SKILLS</span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <BlueprintBox title="DEVELOPMENT">
                  {skillsData.development.map((skill, i) => (
                    <WireframeSkill key={skill.name} name={skill.name} value={skill.proficiency} index={i} />
                  ))}
                </BlueprintBox>
                
                <BlueprintBox title="AI_&_DATA">
                  {skillsData.aiDataScience.map((skill, i) => (
                    <WireframeSkill key={skill.name} name={skill.name} value={skill.proficiency} index={i} />
                  ))}
                </BlueprintBox>
                
                <BlueprintBox title="TOOLS">
                  {skillsData.toolsPlatforms.map((skill, i) => (
                    <WireframeSkill key={skill.name} name={skill.name} value={skill.proficiency} index={i} />
                  ))}
                </BlueprintBox>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience & Awards */}
        <section className="py-24 px-6 bg-[#0a1628]/50">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Experience */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <Annotation>SECTION_04A</Annotation>
                  <span className="text-lg text-cyan-300">EXPERIENCE</span>
                </div>
                
                {experiences.map((exp, index) => (
                  <BlueprintBox key={index} title={`EXP_${index + 1}`} className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-cyan-300">{exp.role}</h3>
                      <span className="text-cyan-500/50 text-xs">{exp.duration}</span>
                    </div>
                    <p className="text-cyan-400/70 text-sm mb-3">{exp.company}</p>
                    <ul className="space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-cyan-500/60 text-xs flex items-start gap-2">
                          <span className="text-cyan-500/30">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </BlueprintBox>
                ))}
              </motion.div>
              
              {/* Awards */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <Annotation>SECTION_04B</Annotation>
                  <span className="text-lg text-cyan-300">AWARDS</span>
                </div>
                
                {awards.map((award, index) => (
                  <BlueprintBox key={index} title={`AWARD_${index + 1}`} className="mb-6">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-yellow-400/80 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-cyan-300">{award.title}</h3>
                        <p className="text-yellow-400/60 text-sm mb-2">{award.subtitle}</p>
                        <a href={award.certificateLink} target="_blank" rel="noopener noreferrer"
                           className="text-cyan-400/60 text-xs hover:text-cyan-400 transition-colors">
                          [VIEW_CERTIFICATE]
                        </a>
                      </div>
                    </div>
                  </BlueprintBox>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Annotation>SECTION_05</Annotation>
              <h2 className="text-3xl text-cyan-300 mt-4 mb-4">CONTACT</h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8"
              />
              
              <p className="text-cyan-500/60 mb-12">
                Ready to collaborate on your next project? Send a transmission.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`mailto:${personalInfo.email}`}
                   className="px-8 py-4 border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-[#0a1628] transition-colors">
                  INIT_CONTACT
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                   className="px-8 py-4 border border-cyan-500/50 text-cyan-400/80 hover:border-cyan-400 transition-colors">
                  VIEW_GITHUB
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-cyan-500/20 py-8 px-6">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <span className="text-cyan-500/40 text-sm">© 2024 {personalInfo.name}</span>
            <Annotation>REVISION_4.0.0</Annotation>
          </div>
        </footer>
      </main>
    </div>
  );
}
