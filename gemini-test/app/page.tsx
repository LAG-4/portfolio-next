"use client";

import { DATA } from "../lib/data";
import { motion } from "motion/react";
import Link from "next/link";
import { Star, Zap, Briefcase, Code, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-black font-sans p-4 md:p-8">
      <main className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <header className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all relative">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 relative z-10">
            <div>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic">
                {DATA.name}
              </h1>
              <div className="flex flex-wrap gap-4 items-center">
                  <span className="inline-block bg-pink-400 border-2 border-black px-4 py-2 mt-4 font-bold text-lg transform -rotate-2">
                    {DATA.title}
                  </span>
                  <Link href={DATA.contact.resume} className="inline-block bg-white border-2 border-black px-4 py-2 mt-4 font-bold text-lg hover:bg-gray-100 transition-colors">
                    Download Resume
                  </Link>
              </div>
            </div>
            <div className="bg-blue-400 border-2 border-black p-4 rounded-full animate-spin-slow w-32 h-32 flex items-center justify-center">
                 <Star size={64} className="fill-yellow-400 stroke-black stroke-2" />
            </div>
          </div>
          {/* Decorative pattern background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
        </header>

        {/* Marquee */}
        <div className="overflow-hidden border-y-4 border-black bg-yellow-400 py-4 transform rotate-1">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="whitespace-nowrap flex gap-8 text-4xl font-bold uppercase"
          >
            {[...Array(6)].map((_, i) => (
                <span key={i} className="flex items-center gap-4">
                    Open for Work <span className="text-white text-stroke-black">★</span> 
                    Full Stack Dev <span className="text-white text-stroke-black">★</span>
                </span>
            ))}
          </motion.div>
        </div>

        {/* Experience Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 bg-orange-500 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center items-center text-center">
                <Briefcase size={64} className="mb-4 text-white stroke-[3px]" />
                <h2 className="text-4xl font-black uppercase text-white text-shadow-black">Experience</h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
                {DATA.experience.map((exp, i) => (
                    <div key={i} className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                        <div className="flex flex-col md:flex-row justify-between md:items-center border-b-2 border-black pb-4 mb-4">
                            <h3 className="text-2xl font-black">{exp.role}</h3>
                            <span className="font-bold bg-black text-white px-3 py-1 text-sm transform rotate-2">{exp.company}</span>
                        </div>
                        <p className="font-medium text-gray-600 mb-4 font-mono text-sm uppercase tracking-wide">{exp.duration}</p>
                        <ul className="list-disc pl-5 space-y-1 font-medium">
                            {exp.description.map((d, j) => (
                                <li key={j}>{d}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        {/* Skills Section */}
        <section className="bg-purple-200 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
             <div className="flex items-center gap-4 mb-8">
                 <Zap size={48} className="fill-yellow-400 stroke-black stroke-2" />
                 <h2 className="text-4xl font-black uppercase">Technical Arsenal</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {Object.entries(DATA.skills).map(([category, skills]) => (
                     <div key={category} className="bg-white border-4 border-black p-6 relative">
                         <h3 className="text-xl font-black uppercase mb-4 bg-black text-white inline-block px-2 absolute -top-4 -left-2 transform -rotate-2">
                             {category.replace(/([A-Z])/g, ' $1').trim()}
                         </h3>
                         <div className="flex flex-wrap gap-2 mt-2">
                             {skills.map((skill: any) => (
                                 <span key={skill.name} className="font-bold border-2 border-black px-2 py-1 bg-gray-100 hover:bg-yellow-300 transition-colors text-sm cursor-default">
                                     {skill.name}
                                 </span>
                             ))}
                         </div>
                     </div>
                 ))}
             </div>
        </section>

        {/* Awards Section */}
        <section className="bg-pink-500 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white">
             <div className="flex items-center gap-4 mb-8">
                 <Star size={48} className="fill-yellow-400 stroke-black stroke-2" />
                 <h2 className="text-4xl font-black uppercase text-shadow-black">Hall of Fame</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {DATA.awards.map((award, i) => (
                     <div key={i} className="bg-white text-black border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:rotate-1 transition-transform">
                         <div className="flex justify-between items-start mb-4">
                             <h3 className="text-2xl font-black uppercase">{award.award}</h3>
                             <Link href={award.link} target="_blank">
                                 <ArrowUpRight size={24} className="border-2 border-black rounded-full p-1 hover:bg-yellow-400 transition-colors" />
                             </Link>
                         </div>
                         <p className="font-bold text-lg mb-2">{award.title}</p>
                         <p className="font-medium text-sm border-t-2 border-black pt-2">{award.description}</p>
                     </div>
                 ))}
             </div>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="md:col-span-full mb-4">
                <h2 className="text-5xl font-black uppercase text-center md:text-left">Selected Projects</h2>
            </div>
            {DATA.projects.map((project, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, rotate: Math.random() * 2 - 1 }}
                    className="border-4 border-black bg-white flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                >
                    <div className="h-48 border-b-4 border-black bg-green-200 flex items-center justify-center overflow-hidden relative group">
                         {/* Pattern */}
                         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #000 2px, transparent 2px)", backgroundSize: "20px 20px" }}></div>
                         <h3 className="text-3xl font-black z-10 text-center px-4 transform rotate-[-5deg] bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2">
                            PROJECT {i + 1}
                         </h3>
                         <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                             <span className="text-white font-black text-xl uppercase">View Details</span>
                         </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold uppercase leading-none">{project.title}</h2>
                            <p className="font-medium text-sm leading-snug border-l-4 border-yellow-400 pl-3">
                                {project.tagline || project.description.substring(0, 100) + "..."}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 4).map(tag => (
                                <span key={tag} className="text-xs font-bold border-2 border-black px-2 py-1 bg-blue-200 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Link href={project.liveLink && project.liveLink !== "#" ? project.liveLink : project.githubLink || "#"} target="_blank" className="bg-black text-white font-bold py-3 px-6 text-center hover:bg-neutral-800 transition-colors border-2 border-transparent hover:border-black hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(100,100,100,1)] active:translate-x-1 active:translate-y-1 active:shadow-none">
                            VIEW PROJECT
                        </Link>
                    </div>
                </motion.div>
            ))}
        </section>

        {/* Footer */}
        <footer className="border-4 border-black bg-red-500 p-12 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)" }}></div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 text-white text-shadow-black relative z-10">
                Let's Build Something.
            </h2>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Link href={`mailto:${DATA.contact.email}`} className="bg-white border-4 border-black px-8 py-4 font-bold text-xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                    Email Me
                </Link>
                <Link href={DATA.contact.twitter} className="bg-white border-4 border-black px-8 py-4 font-bold text-xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                    Twitter
                </Link>
                <Link href={DATA.contact.github} className="bg-white border-4 border-black px-8 py-4 font-bold text-xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                    GitHub
                </Link>
            </div>
        </footer>

      </main>
    </div>
  );
}
