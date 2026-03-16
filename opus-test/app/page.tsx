"use client";

import { motion } from "motion/react";
import Link from "next/link";

const designs = [
  {
    id: 1,
    name: "Terminal",
    subtitle: "Cyber-punk Hacker Aesthetic",
    gradient: "from-emerald-500 via-green-400 to-cyan-400",
    bgColor: "bg-black",
    description: "Dark brutalist design with terminal commands, scanlines, and glitch effects",
  },
  {
    id: 2,
    name: "Editorial",
    subtitle: "Magazine Typography",
    gradient: "from-amber-200 via-orange-100 to-stone-200",
    bgColor: "bg-stone-100",
    description: "Elegant serif typography with editorial layout and warm tones",
  },
  {
    id: 3,
    name: "Matrix",
    subtitle: "Neo-noir Cyberpunk",
    gradient: "from-green-500 via-emerald-400 to-lime-400",
    bgColor: "bg-black",
    description: "Code rain animation, glitch effects, and dark hacker vibes",
  },
  {
    id: 4,
    name: "Blueprint",
    subtitle: "Technical Wireframe",
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    bgColor: "bg-slate-900",
    description: "Technical drawing aesthetic with grid lines and engineering precision",
  },
  {
    id: 5,
    name: "Noir",
    subtitle: "Film Detective",
    gradient: "from-stone-400 via-amber-300 to-stone-500",
    bgColor: "bg-stone-900",
    description: "Film noir typewriter style with case file dossiers and moody lighting",
  },
  {
    id: 6,
    name: "Gallery",
    subtitle: "Art Museum",
    gradient: "from-neutral-200 via-white to-neutral-300",
    bgColor: "bg-white",
    description: "Clean white walls, artwork frames, and elegant exhibition labels",
  },
  {
    id: 7,
    name: "Newspaper",
    subtitle: "Classic Broadsheet",
    gradient: "from-neutral-300 via-stone-200 to-neutral-400",
    bgColor: "bg-stone-50",
    description: "Traditional newspaper layout with columns, headlines, and classified ads",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="fixed inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="font-[family-name:'Syne'] text-6xl md:text-8xl font-extrabold tracking-tight mb-4">
            <span className="text-gradient bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Portfolio
            </span>
          </h1>
          <h2 className="font-[family-name:'Space_Mono'] text-xl md:text-2xl text-gray-400 tracking-widest uppercase">
            Design Explorations
          </h2>
          <p className="mt-6 text-gray-500 max-w-xl mx-auto font-[family-name:'Space_Mono'] text-sm">
            7 unique portfolio designs for Aryan Gupta — each with its own distinctive aesthetic, 
            structure, and personality. Click to explore.
          </p>
        </motion.header>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link href={`/${design.id}`}>
                <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500">
                  {/* Background gradient preview */}
                  <div className={`absolute inset-0 ${design.bgColor} transition-transform duration-700 group-hover:scale-105`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${design.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-gradient-to-r ${design.gradient} text-black mb-4`}>
                        DESIGN {design.id}
                      </span>
                      <h3 className="font-[family-name:'Syne'] text-3xl font-bold text-white mb-1">
                        {design.name}
                      </h3>
                      <p className="text-gray-400 text-sm font-[family-name:'Space_Mono']">
                        {design.subtitle}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4">
                        {design.description}
                      </p>
                      <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                        <span className="text-sm font-medium">Explore</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${design.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 text-sm font-[family-name:'Space_Mono']">
            Created for Aryan Gupta&apos;s portfolio showcase
          </p>
        </motion.footer>
      </div>
    </main>
  );
}
