"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { personalInfo, projectsData, skillsData, experiences, awards } from "../../lib/data";
import Link from "next/link";
import { ArrowUpRight, Mail, FileText, Github } from "lucide-react";

// Elegant Divider
function EditorialDivider() {
  return (
    <div className="flex items-center gap-6 my-16">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
      <div className="w-2 h-2 rotate-45 border border-stone-400" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
    </div>
  );
}

// Feature Article Card
function FeatureCard({ project, featured = false }: { project: typeof projectsData[0]; featured?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`group ${featured ? 'col-span-2 row-span-2' : ''}`}
    >
      <div className={`relative overflow-hidden bg-stone-100 ${featured ? 'aspect-[16/10]' : 'aspect-[4/3]'} mb-6`}>
        {/* Placeholder image with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-stone-200" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UwZDZjYyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        
        {project.recognition && (
          <div className="absolute top-4 left-4 bg-amber-800 text-amber-50 px-3 py-1 text-xs uppercase tracking-widest font-medium">
            {project.recognition}
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-stone-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          {project.liveLink && project.liveLink !== "#" && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-white text-stone-900 hover:bg-amber-100 transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white text-stone-900 hover:bg-amber-100 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs uppercase tracking-widest text-amber-700">
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className={`font-[family-name:'Playfair_Display'] ${featured ? 'text-4xl' : 'text-2xl'} font-medium text-stone-900 group-hover:text-amber-800 transition-colors`}>
          {project.title}
        </h3>
        
        <p className="font-[family-name:'Cormorant_Garamond'] text-lg text-stone-600 leading-relaxed">
          {project.tagline}
        </p>
      </div>
    </motion.article>
  );
}

// Skill Category
function SkillCategory({ title, skills, accent }: { title: string; skills: typeof skillsData.development; accent: string }) {
  return (
    <div className="space-y-6">
      <h4 className={`text-sm uppercase tracking-[0.3em] ${accent}`}>{title}</h4>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-[family-name:'Cormorant_Garamond'] text-xl text-stone-800">{skill.name}</span>
              <span className="text-xs text-stone-400">{skill.proficiency}%</span>
            </div>
            <div className="h-px bg-stone-200 relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.proficiency}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className={`absolute inset-y-0 left-0 ${accent.replace('text-', 'bg-')}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EditorialDesign() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f5f0eb] text-stone-900 design-editorial">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      {/* Back navigation */}
      <Link href="/" className="fixed top-8 left-8 z-50 text-stone-500 hover:text-amber-700 transition-colors font-[family-name:'Cormorant_Garamond'] text-lg italic">
        ← Return
      </Link>

      {/* Fixed side markers */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40">
        {['About', 'Work', 'Skills', 'Contact'].map((section, i) => (
          <a 
            key={section}
            href={`#${section.toLowerCase()}`}
            className="text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-amber-700 transition-colors origin-center -rotate-90 whitespace-nowrap"
            style={{ writingMode: 'vertical-rl' }}
          >
            {section}
          </a>
        ))}
      </div>

      {/* Hero */}
      <motion.header 
        style={{ opacity: headerOpacity, y: headerY }}
        className="fixed inset-x-0 top-0 z-30 min-h-screen flex items-center justify-center pointer-events-none"
      >
        <div className="text-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="font-[family-name:'Cormorant_Garamond'] text-lg italic text-amber-700 mb-4">
              Full-Stack Developer & AI Enthusiast
            </p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-[family-name:'Playfair_Display'] text-7xl md:text-9xl font-medium tracking-tight mb-6"
          >
            {personalInfo.name.split(' ')[0]}
            <br />
            <span className="italic font-light">{personalInfo.name.split(' ')[1]}</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center gap-8 mt-12 pointer-events-auto"
          >
            <a href={personalInfo.resumePath} 
               className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-stone-600 hover:text-amber-700 transition-colors">
              <FileText className="w-4 h-4" />
              Resume
            </a>
            <a href={`mailto:${personalInfo.email}`}
               className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-stone-600 hover:text-amber-700 transition-colors">
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </motion.div>
        </div>
      </motion.header>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 text-stone-400"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-stone-400 to-transparent" />
        </div>
      </motion.div>

      {/* Main Content - starts after hero */}
      <main className="relative z-20 pt-[100vh]">
        {/* About Section */}
        <section id="about" className="max-w-4xl mx-auto px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-8">The Story</p>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <p className="font-[family-name:'Playfair_Display'] text-4xl md:text-5xl font-light leading-tight text-stone-800 mb-8">
                  {personalInfo.tagline}
                </p>
                <p className="font-[family-name:'Cormorant_Garamond'] text-xl leading-relaxed text-stone-600">
                  {personalInfo.about}
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-2">Location</p>
                  <p className="font-[family-name:'Cormorant_Garamond'] text-lg text-stone-800">{personalInfo.location}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-2">Education</p>
                  <p className="font-[family-name:'Cormorant_Garamond'] text-lg text-stone-800">{personalInfo.education}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-2">Focus</p>
                  {personalInfo.drivingForce.map((item, i) => (
                    <p key={i} className="font-[family-name:'Cormorant_Garamond'] text-lg text-stone-800">{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <EditorialDivider />
          
          {/* Highlights as pull quotes */}
          <div className="grid md:grid-cols-2 gap-8">
            {personalInfo.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-amber-600 pl-6"
              >
                <p className="font-[family-name:'Playfair_Display'] text-2xl italic text-stone-700">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="bg-white py-32">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-4">Selected Work</p>
              <h2 className="font-[family-name:'Playfair_Display'] text-5xl md:text-6xl font-light">
                Featured Projects
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {projectsData.slice(0, 6).map((project, index) => (
                <FeatureCard key={project.id} project={project} featured={index === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="max-w-4xl mx-auto px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-8">Experience</p>
            
            {experiences.map((exp, index) => (
              <div key={index} className="mb-16">
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                  <h3 className="font-[family-name:'Playfair_Display'] text-3xl font-medium">{exp.role}</h3>
                  <span className="font-[family-name:'Cormorant_Garamond'] text-lg italic text-stone-500">{exp.duration}</span>
                </div>
                <p className="text-amber-700 text-lg mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="font-[family-name:'Cormorant_Garamond'] text-lg text-stone-600 flex items-start gap-3">
                      <span className="text-amber-600 mt-1">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
          
          <EditorialDivider />
          
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-8">Recognition</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="border border-stone-200 p-8 bg-stone-50">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-700 mb-2">{award.subtitle}</p>
                  <h4 className="font-[family-name:'Playfair_Display'] text-2xl font-medium mb-4">{award.title}</h4>
                  <p className="font-[family-name:'Cormorant_Garamond'] text-lg text-stone-600 mb-4">{award.description}</p>
                  <a 
                    href={award.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-amber-700 hover:text-amber-900 transition-colors"
                  >
                    View Certificate <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-stone-900 text-stone-100 py-32">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4">Expertise</p>
              <h2 className="font-[family-name:'Playfair_Display'] text-5xl font-light text-stone-100">
                Technical Proficiency
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <SkillCategory title="Development" skills={skillsData.development} accent="text-amber-400" />
              <SkillCategory title="AI & Data Science" skills={skillsData.aiDataScience} accent="text-rose-400" />
              <SkillCategory title="Tools & Platforms" skills={skillsData.toolsPlatforms} accent="text-cyan-400" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-8">Get in Touch</p>
              
              <h2 className="font-[family-name:'Playfair_Display'] text-5xl md:text-7xl font-light mb-8">
                Let&apos;s Create<br />
                <span className="italic">Together</span>
              </h2>
              
              <p className="font-[family-name:'Cormorant_Garamond'] text-xl text-stone-600 max-w-xl mx-auto mb-12">
                I&apos;m always excited to collaborate on innovative projects. 
                Whether you have a specific idea or just want to explore possibilities, let&apos;s connect.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="px-8 py-4 bg-stone-900 text-stone-100 hover:bg-amber-800 transition-colors font-[family-name:'Cormorant_Garamond'] text-lg tracking-wide"
                >
                  Send an Email
                </a>
                <a 
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-100 transition-colors font-[family-name:'Cormorant_Garamond'] text-lg tracking-wide"
                >
                  View GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-stone-200 py-12">
          <div className="max-w-4xl mx-auto px-8 flex flex-wrap justify-between items-center gap-4">
            <p className="font-[family-name:'Cormorant_Garamond'] text-stone-500">
              © 2024 {personalInfo.name}
            </p>
            <p className="font-[family-name:'Cormorant_Garamond'] text-stone-500 italic">
              Crafted with intention
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
