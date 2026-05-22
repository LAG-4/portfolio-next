"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Code, Video, Share2, Shield } from "lucide-react";

export function FloatingNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Work", href: "/#projects", icon: Code },
    { name: "Videos", href: "/editing", icon: Video },
    { name: "Socials", href: "/linktree", icon: Share2 },
    { name: "Privacy", href: "/privacy-policy", icon: Shield },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-950/80 border border-zinc-900/90 rounded-2xl px-6 py-3 flex items-center backdrop-blur-xl shadow-2xl shadow-black/80 z-50 max-w-[95vw] sm:max-w-lg w-fit transition-all hover:border-zinc-800">
      {navItems.map((item, idx) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        return (
          <div key={item.name} className="flex items-center">
            {idx > 0 && <span className="text-zinc-800 mx-3 sm:mx-4 font-light font-mono select-none">|</span>}
            <Link
              href={item.href}
              className={`flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all hover:text-white ${
                isActive ? "text-indigo-400 font-extrabold" : "text-zinc-400 animate-pulse-subtle"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-indigo-400" : "text-zinc-500"}`} />
              <span className="hidden sm:inline">{item.name}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
