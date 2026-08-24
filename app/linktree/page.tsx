"use client";

import React from "react";
import {
  SiGithub as Github,
  SiInstagram as Instagram,
  SiX as Twitter,
  SiYoutube as Youtube,
} from "@icons-pack/react-simple-icons";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { 
  Mail, Share2, ArrowUpRight
} from "lucide-react";

export default function LinktreePage() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/lag-4",
      icon: Github,
      desc: "Open source contributions, side projects, and mainframe utilities.",
      color: "group-hover:border-purple-500/50 group-hover:shadow-purple-500/10",
      iconColor: "text-purple-400"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aryan-gupta4203/",
      icon: LinkedInIcon,
      desc: "Professional experience, industry networking, and enterprise updates.",
      color: "group-hover:border-blue-500/50 group-hover:shadow-blue-500/10",
      iconColor: "text-blue-400"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@lag_aryan4",
      icon: Youtube,
      desc: "Video essays, design walkthroughs, and editing reels.",
      color: "group-hover:border-red-500/50 group-hover:shadow-red-500/10",
      iconColor: "text-red-400"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/lag_aryan",
      icon: Instagram,
      desc: "Personal snapshots, updates, and general visual design ideas.",
      color: "group-hover:border-pink-500/50 group-hover:shadow-pink-500/10",
      iconColor: "text-pink-400"
    },
    {
      name: "Twitter / X",
      url: "https://x.com/lag_aryan",
      icon: Twitter,
      desc: "Tech discussions, micro-blogs, and real-time development thoughts.",
      color: "group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/10",
      iconColor: "text-cyan-400"
    },
    {
      name: "Email Connection",
      url: "mailto:aryangupta4feb@gmail.com",
      icon: Mail,
      desc: "Direct queries for recruitment, opportunities, or quick coffee chats.",
      color: "group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/10",
      iconColor: "text-emerald-400"
    }
  ];

  return (
    <div className="min-h-screen text-[#f4f4f6] font-inter py-12 px-6 md:px-12 relative overflow-x-hidden select-none">
      
      {/* Header bar */}
      <div className="max-w-5xl mx-auto mb-16 flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-sm font-bold uppercase tracking-widest text-zinc-300 font-mono">
            ARYAN.GUPTA // SOCIAL INDEX
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-zinc-400 font-mono">LINK DECK v2.6</span>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto z-10 relative space-y-12 pb-32">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-5 py-2">
            <Share2 className="w-4 h-4 text-indigo-400 animate-pulse" />
            <span className="text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider">
              Network Portal
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-outfit font-extrabold tracking-tight text-white leading-none">
            Social Directory
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-lg mx-auto font-normal">
            Secure connection points for my technical contributions, project hubs, and creative social channels.
          </p>
        </div>

        {/* 3D Glass Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-[#0c0c0f]/80 border border-zinc-900 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-[200px] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 shadow-lg hover:shadow-2xl z-10 relative overflow-hidden ${link.color}`}
              >
                {/* Glowing light beam background for glass effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-indigo-500/0 to-indigo-500/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className={`p-3 bg-zinc-950 border border-zinc-900 rounded-2xl transition-colors group-hover:bg-zinc-900 ${link.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-outfit font-extrabold text-white group-hover:text-indigo-400 transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-zinc-400 text-xs md:text-sm mt-1 leading-normal font-normal line-clamp-2">
                      {link.desc}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </main>

      {/* Mini info line */}
      <div className="text-center font-mono text-[10px] text-zinc-600 mt-10">
        INDEX_SYSTEM // SECURE CONNECTIONS ACTIVE
      </div>

    </div>
  );
}
