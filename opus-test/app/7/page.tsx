"use client";

import { motion } from "motion/react";
import { personalInfo, projectsData, skillsData, experiences, awards } from "../../lib/data";
import Link from "next/link";
import { Github, ExternalLink, Mail, FileText, Award } from "lucide-react";

// Newspaper headline style
function Headline({ children, size = "large" }: { children: React.ReactNode; size?: "large" | "medium" | "small" }) {
  const sizeClasses = {
    large: "text-5xl md:text-7xl",
    medium: "text-3xl md:text-4xl",
    small: "text-xl md:text-2xl",
  };
  
  return (
    <h2 className={`font-[family-name:'Playfair_Display'] ${sizeClasses[size]} font-bold leading-tight text-neutral-900`}>
      {children}
    </h2>
  );
}

// Column separator
function ColumnRule() {
  return <div className="hidden md:block w-px bg-neutral-300 self-stretch" />;
}

// Byline component
function Byline({ author, date }: { author: string; date: string }) {
  return (
    <div className="flex items-center gap-2 text-xs text-neutral-500 uppercase tracking-wider mt-2 mb-4">
      <span>By {author}</span>
      <span>|</span>
      <span>{date}</span>
    </div>
  );
}

// Article card
function ArticleCard({ project, featured = false }: { project: typeof projectsData[0]; featured?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group ${featured ? 'col-span-2' : ''}`}
    >
      {/* Image placeholder */}
      <div className={`${featured ? 'h-64' : 'h-40'} bg-gradient-to-br from-neutral-200 to-neutral-300 mb-4 relative overflow-hidden`}>
        {project.recognition && (
          <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase">
            Award Winner
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-neutral-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {project.liveLink && project.liveLink !== "#" && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
               className="p-2 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
               className="p-2 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors">
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      
      <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">
        {project.techStack.slice(0, 2).join(' / ')}
      </div>
      
      <h3 className={`font-[family-name:'Playfair_Display'] ${featured ? 'text-2xl' : 'text-lg'} font-bold text-neutral-900 mb-2 group-hover:text-red-700 transition-colors`}>
        {project.title}
      </h3>
      
      <p className="text-neutral-600 text-sm leading-relaxed mb-3">
        {featured ? project.description : project.tagline}
      </p>
      
      {featured && (
        <Byline author="Aryan Gupta" date="2024" />
      )}
    </motion.article>
  );
}

// Classified ad style skill
function ClassifiedSkill({ name, value }: { name: string; value: number }) {
  return (
    <div className="border-b border-neutral-200 border-dashed py-2 last:border-b-0">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-neutral-800">{name}</span>
        <span className="text-xs text-neutral-500">{value}%</span>
      </div>
    </div>
  );
}

export default function NewspaperDesign() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-900">
      {/* Masthead */}
      <header className="border-b-4 border-double border-neutral-900 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <Link href="/" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wider">
              ← Back to Index
            </Link>
            <span className="text-xs text-neutral-500 uppercase tracking-wider">{today}</span>
            <span className="text-xs text-neutral-500 uppercase tracking-wider">Vol. XXIV No. 7</span>
          </div>
          
          <div className="text-center py-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-[family-name:'Playfair_Display'] text-6xl md:text-8xl font-black tracking-tight text-neutral-900"
              style={{ fontVariant: 'small-caps' }}
            >
              The Developer&apos;s Chronicle
            </motion.h1>
            <p className="text-xs text-neutral-500 uppercase tracking-[0.5em] mt-2">
              All the code that&apos;s fit to ship
            </p>
          </div>
          
          {/* Weather/quick info bar */}
          <div className="flex justify-center gap-8 py-3 border-t border-neutral-300 text-xs text-neutral-600">
            <span>Location: {personalInfo.location}</span>
            <span>Status: Available for Hire</span>
            <span>Projects: {projectsData.length}+</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Front page hero */}
        <section className="grid md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-neutral-200">
          {/* Main story */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2"
          >
            <Headline>{personalInfo.name.toUpperCase()}</Headline>
            <Headline size="medium">Announces New Era in Full-Stack Development</Headline>
            <Byline author="Staff Writer" date={today} />
            
            <div className="columns-2 gap-8 text-neutral-700 leading-relaxed text-[15px]">
              <p className="mb-4">
                <span className="text-5xl font-[family-name:'Playfair_Display'] float-left mr-2 leading-none">{personalInfo.about.charAt(0)}</span>
                {personalInfo.about.slice(1)}
              </p>
              <p className="mb-4">
                Industry experts have noted the unique combination of skills that sets this developer apart. 
                &quot;{personalInfo.drivingForce[0]},&quot; states the official profile, highlighting a commitment 
                to staying at the cutting edge of technology.
              </p>
              <p>
                The developer continues to push boundaries with {projectsData.length}+ completed projects 
                spanning AI/ML, mobile development, and full-stack web applications.
              </p>
            </div>
            
            <div className="flex gap-4 mt-6">
              <a href={personalInfo.resumePath}
                 className="px-4 py-2 bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition-colors flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Full Dossier (PDF)
              </a>
              <a href={`mailto:${personalInfo.email}`}
                 className="px-4 py-2 border border-neutral-900 text-neutral-900 text-sm hover:bg-neutral-900 hover:text-white transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Letters to Editor
              </a>
            </div>
          </motion.div>
          
          <ColumnRule />
          
          {/* Sidebar highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="border-b-2 border-neutral-900 pb-2 mb-4">
              <h3 className="font-[family-name:'Playfair_Display'] text-lg font-bold uppercase tracking-wider">
                Key Highlights
              </h3>
            </div>
            
            <ul className="space-y-4">
              {personalInfo.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">&#9632;</span>
                  <span className="text-sm text-neutral-700">{highlight}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-neutral-100 border border-neutral-200">
              <h4 className="font-bold text-xs uppercase tracking-wider mb-2">Quick Facts</h4>
              <div className="text-xs text-neutral-600 space-y-1">
                <p><strong>Education:</strong> {personalInfo.education}</p>
                <p><strong>Focus:</strong> AI/ML, Full-Stack</p>
                <p><strong>Availability:</strong> Open to opportunities</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects section */}
        <section className="mb-12 pb-12 border-b border-neutral-200">
          <div className="border-b-2 border-neutral-900 pb-2 mb-8">
            <h2 className="font-[family-name:'Playfair_Display'] text-2xl font-bold uppercase tracking-wider">
              Featured Projects
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projectsData.slice(0, 6).map((project, index) => (
              <ArticleCard key={project.id} project={project} featured={index === 0} />
            ))}
          </div>
        </section>

        {/* Skills & Experience in newspaper columns */}
        <section className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Skills column */}
          <div>
            <div className="border-b-2 border-neutral-900 pb-2 mb-4">
              <h3 className="font-[family-name:'Playfair_Display'] text-lg font-bold uppercase tracking-wider">
                Technical Proficiencies
              </h3>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Development</h4>
              {skillsData.development.map((skill) => (
                <ClassifiedSkill key={skill.name} name={skill.name} value={skill.proficiency} />
              ))}
            </div>
            
            <div className="mb-6">
              <h4 className="text-xs text-neutral-500 uppercase tracking-wider mb-2">AI & Data</h4>
              {skillsData.aiDataScience.map((skill) => (
                <ClassifiedSkill key={skill.name} name={skill.name} value={skill.proficiency} />
              ))}
            </div>
            
            <div>
              <h4 className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Tools</h4>
              {skillsData.toolsPlatforms.map((skill) => (
                <ClassifiedSkill key={skill.name} name={skill.name} value={skill.proficiency} />
              ))}
            </div>
          </div>
          
          <ColumnRule />
          
          {/* Experience column */}
          <div>
            <div className="border-b-2 border-neutral-900 pb-2 mb-4">
              <h3 className="font-[family-name:'Playfair_Display'] text-lg font-bold uppercase tracking-wider">
                Career History
              </h3>
            </div>
            
            {experiences.map((exp, index) => (
              <article key={index} className="mb-6 pb-6 border-b border-neutral-200 last:border-b-0">
                <h4 className="font-[family-name:'Playfair_Display'] text-lg font-bold text-neutral-900">
                  {exp.role}
                </h4>
                <p className="text-sm text-red-700 mb-2">{exp.company}</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-3">{exp.duration}</p>
                <ul className="text-sm text-neutral-600 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neutral-400">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          
          <ColumnRule />
          
          {/* Awards column */}
          <div>
            <div className="border-b-2 border-neutral-900 pb-2 mb-4">
              <h3 className="font-[family-name:'Playfair_Display'] text-lg font-bold uppercase tracking-wider">
                Honors & Awards
              </h3>
            </div>
            
            {awards.map((award, index) => (
              <article key={index} className="mb-6 pb-6 border-b border-neutral-200 last:border-b-0">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-[family-name:'Playfair_Display'] text-lg font-bold text-neutral-900">
                      {award.title}
                    </h4>
                    <p className="text-sm text-amber-700 mb-2">{award.subtitle}</p>
                    <p className="text-sm text-neutral-600 mb-3">{award.description}</p>
                    <a href={award.certificateLink} target="_blank" rel="noopener noreferrer"
                       className="text-xs text-neutral-500 hover:text-neutral-900 underline transition-colors">
                      View Certificate
                    </a>
                  </div>
                </div>
              </article>
            ))}
            
            {/* Classified ad style contact */}
            <div className="mt-8 p-4 border-2 border-neutral-900 bg-neutral-50">
              <h4 className="font-bold text-center text-xs uppercase tracking-wider mb-2 border-b border-neutral-300 pb-2">
                Professional Inquiries
              </h4>
              <p className="text-xs text-center text-neutral-600 mt-3">
                For collaboration, employment, or project discussions, 
                contact via electronic mail:
              </p>
              <p className="text-sm text-center font-bold mt-2">{personalInfo.email}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                   className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
                  [GitHub]
                </a>
                <a href={personalInfo.blog} target="_blank" rel="noopener noreferrer"
                   className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
                  [Blog]
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-double border-neutral-900 py-6 px-4 bg-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4 text-xs text-neutral-500">
            <span>© 2024 The Developer&apos;s Chronicle</span>
            <span>All Projects Fit to Ship</span>
            <span>Printed with Next.js</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
