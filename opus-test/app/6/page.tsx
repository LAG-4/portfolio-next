"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { personalInfo, projectsData, skillsData, experiences, awards } from "../../lib/data";
import Link from "next/link";
import { Github, ExternalLink, Mail, FileText, Award, ArrowRight } from "lucide-react";

// Exhibition label component
function ExhibitLabel({ title, description, year = "2024" }: { title: string; description: string; year?: string }) {
  return (
    <div className="max-w-xs">
      <p className="text-xs text-neutral-400 mb-1">{year}</p>
      <h4 className="text-sm font-medium text-neutral-900 mb-2">{title}</h4>
      <p className="text-xs text-neutral-500 leading-relaxed">{description}</p>
    </div>
  );
}

// Gallery wall section
function GalleryWall({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-neutral-100 ${className}`}>
      {children}
    </div>
  );
}

// Artwork frame
function ArtworkFrame({ project, index }: { project: typeof projectsData[0]; index: number }) {
  const sizes = ['h-64', 'h-80', 'h-72', 'h-96', 'h-56', 'h-64'];
  const size = sizes[index % sizes.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="relative inline-block">
        {/* Frame shadow */}
        <div className="absolute inset-0 bg-black/10 translate-x-2 translate-y-2" />
        
        {/* Frame */}
        <div className="relative bg-white p-3 shadow-sm border border-neutral-200">
          {/* Inner mat */}
          <div className="bg-neutral-50 p-4">
            {/* Artwork */}
            <div className={`${size} w-full bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-300 relative overflow-hidden group-hover:from-neutral-300 group-hover:to-neutral-200 transition-all duration-500`}>
              {/* Abstract pattern based on project */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                  {index % 2 === 0 ? '◯' : '◆'}
                </div>
              </div>
              
              {project.recognition && (
                <div className="absolute top-4 right-4 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
              )}
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-neutral-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {project.liveLink && project.liveLink !== "#" && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                     className="p-3 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                     className="p-3 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Exhibition label */}
      <div className="mt-6">
        <ExhibitLabel
          title={project.title}
          description={project.tagline}
          year="2024"
        />
        <div className="flex flex-wrap gap-1 mt-3">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[10px] text-neutral-400 uppercase tracking-wider">
              {tech}{project.techStack.indexOf(tech) < 2 ? ' · ' : ''}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Skill as museum stat
function SkillStat({ name, value }: { name: string; value: number }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-neutral-200 last:border-b-0">
      <span className="text-sm text-neutral-600">{name}</span>
      <div className="flex items-center gap-3">
        <div className="w-20 h-1 bg-neutral-200 relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${value}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-y-0 left-0 bg-neutral-900"
          />
        </div>
        <span className="text-xs text-neutral-400 w-8">{value}%</span>
      </div>
    </div>
  );
}

export default function GalleryDesign() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-neutral-900">
      {/* Minimal navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-neutral-400 hover:text-neutral-900 text-sm transition-colors">
            Back
          </Link>
          <span className="text-xs text-neutral-400 tracking-[0.3em] uppercase">Portfolio Exhibition</span>
          <a href={`mailto:${personalInfo.email}`} className="text-neutral-400 hover:text-neutral-900 text-sm transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero - Gallery entrance */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="text-center px-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs tracking-[0.5em] text-neutral-400 uppercase mb-8"
          >
            Presenting
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-6xl md:text-8xl font-light tracking-tight mb-4"
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-24 h-px bg-neutral-300 mx-auto my-8"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-neutral-500 text-lg max-w-md mx-auto"
          >
            {personalInfo.title}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-12 flex justify-center gap-6"
          >
            <a href={personalInfo.resumePath}
               className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors group">
              <FileText className="w-4 h-4" />
              Resume
              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-neutral-300 to-transparent" />
        </motion.div>
      </section>

      {/* Introduction - Wall text */}
      <GalleryWall className="py-32 px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-8">About the Artist</h2>
            <p className="text-neutral-600 leading-loose mb-8">
              {personalInfo.about}
            </p>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
              {personalInfo.drivingForce.map((item, i) => (
                <div key={i}>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mb-2">Focus {i + 1}</p>
                  <p className="text-sm text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </GalleryWall>

      {/* Projects - Main exhibition */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-light mb-4">Exhibition: Selected Works</h2>
            <p className="text-neutral-400">{projectsData.length} pieces</p>
          </motion.div>
          
          {/* Masonry-style grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
            {projectsData.map((project, index) => (
              <ArtworkFrame key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills - Technical room */}
      <GalleryWall className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-16">Technical Proficiency</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xs text-neutral-400 uppercase tracking-wider mb-6">Development</h3>
                {skillsData.development.map((skill) => (
                  <SkillStat key={skill.name} name={skill.name} value={skill.proficiency} />
                ))}
              </div>
              
              <div>
                <h3 className="text-xs text-neutral-400 uppercase tracking-wider mb-6">AI & Data Science</h3>
                {skillsData.aiDataScience.map((skill) => (
                  <SkillStat key={skill.name} name={skill.name} value={skill.proficiency} />
                ))}
              </div>
              
              <div>
                <h3 className="text-xs text-neutral-400 uppercase tracking-wider mb-6">Tools & Platforms</h3>
                {skillsData.toolsPlatforms.map((skill) => (
                  <SkillStat key={skill.name} name={skill.name} value={skill.proficiency} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </GalleryWall>

      {/* Experience & Awards - Archive room */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-light mb-8">Experience</h2>
              
              {experiences.map((exp, index) => (
                <div key={index} className="mb-8 pb-8 border-b border-neutral-100 last:border-b-0">
                  <p className="text-xs text-neutral-400 mb-2">{exp.duration}</p>
                  <h3 className="text-lg font-medium mb-1">{exp.role}</h3>
                  <p className="text-neutral-500 text-sm mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-neutral-600 flex items-start gap-2">
                        <span className="text-neutral-300 mt-1.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
            
            {/* Awards */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-light mb-8">Recognition</h2>
              
              {awards.map((award, index) => (
                <div key={index} className="mb-8 pb-8 border-b border-neutral-100 last:border-b-0">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-50 flex items-center justify-center rounded-full shrink-0">
                      <Award className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{award.title}</h3>
                      <p className="text-amber-600 text-sm mb-2">{award.subtitle}</p>
                      <p className="text-neutral-500 text-sm mb-3">{award.description}</p>
                      <a href={award.certificateLink} target="_blank" rel="noopener noreferrer"
                         className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-1">
                        View Certificate <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact - Exit */}
      <GalleryWall className="py-32 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-4">Thank you for visiting</h2>
            <p className="text-neutral-500 mb-12">
              Interested in collaboration or commission work?
            </p>
            
            <div className="flex justify-center gap-6">
              <a href={`mailto:${personalInfo.email}`}
                 className="px-8 py-4 bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition-colors">
                Get in Touch
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                 className="px-8 py-4 border border-neutral-300 text-neutral-700 text-sm hover:border-neutral-900 hover:text-neutral-900 transition-colors">
                View Archive
              </a>
            </div>
          </motion.div>
        </div>
      </GalleryWall>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-100 py-8 px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-xs text-neutral-400">
          <span>© 2024 {personalInfo.name}</span>
          <span>All works displayed are original creations</span>
        </div>
      </footer>
    </div>
  );
}
