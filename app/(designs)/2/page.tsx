"use client";

/*
 * DESIGN 2 — "SIGNAL"  (world: signals-instruments-seven-segment)
 * THESIS: A portfolio built from the seven-segment display family — clocks,
 *   scoreboards, price totems — one eight-cell mask speaking every number.
 *   Refuses the soft card UI for hard lit segments on matte black.
 * OWN-WORLD: Pure black #050505, LED red #ff333a (owns the night), amber #ffae00,
 *   scoreboard green #2bff88; DSEG7/DSEG14 segment faces with real glow and ghost
 *   (unlit) cells drawn as deliberately as light; thin red hairline UI; JetBrains
 *   Mono fine print; rigid cell layout, instant segment swaps, never a slide.
 * STORY: Visitor reads Aryan's stats as a fuel totem, a live clock ticks,
 *   the scoreboard tallies his wins — proof rendered as instrumentation — and hires.
 * FIRST VIEWPORT: red-glow headline left, a three-tier price totem of stats right.
 * FORM: segment displays everywhere; live clock + ghost cells are the signature.
 */

import { useEffect, useState } from "react";
import { profile, socials, experiences, awards, skillsFlat, projectsData } from "@/lib/content";

const RED = "#ff333a", AMBER = "#ffae00", GREEN = "#2bff88";

// A lit segment display with its unlit "ghost" cells drawn behind.
function Seg({ text, color = RED, seg = 14, className = "", ghost = true }: {
  text: string; color?: string; seg?: 7 | 14; className?: string; ghost?: boolean;
}) {
  const font = seg === 7 ? "var(--f-seg7)" : "var(--f-seg14)";
  const ghostChar = seg === 7 ? "8" : "~";
  const ghostText = ghost ? text.replace(/[^\s:.]/g, ghostChar) : "";
  return (
    <span className={`relative inline-block ${className}`} style={{ fontFamily: font, lineHeight: 1 }}>
      {ghost && <span aria-hidden className="absolute inset-0 select-none" style={{ color: "#ffffff", opacity: 0.06 }}>{ghostText}</span>}
      <span className="relative" style={{ color, textShadow: `0 0 6px ${color}, 0 0 18px ${color}88` }}>{text}</span>
    </span>
  );
}

function Clock() {
  const [t, setT] = useState("--:--");
  useEffect(() => {
    const tick = () => setT(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }));
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);
  return <Seg text={t} seg={7} color={RED} className="text-4xl" />;
}

export default function Signal() {
  const totem = [
    { label: "PROJECTS SHIPPED", value: "10+", color: RED },
    { label: "SIH 2023 NATIONAL", value: "1st", color: AMBER },
    { label: "USERS REACHED", value: "15K", color: RED },
  ];
  const features = [
    { k: "AI", label: "AI + AGENTS", note: "LangChain · Gemini · RAG" },
    { k: "FS", label: "FULL-STACK", note: "Next · Flutter · Python" },
    { k: "MF", label: "MAINFRAME", note: "COBOL · JCL · DB2 @ Infosys" },
    { k: "OK", label: "FREELANCE", note: "Available now" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] p-2 text-white/80 [font-family:var(--f-mono)] selection:bg-[#ff333a] selection:text-black sm:p-3">
      <div className="min-h-[calc(100vh-1rem)] border border-[#ff333a]/40">
        {/* NAV */}
        <header className="flex items-center justify-between border-b border-[#ff333a]/30 px-4 py-3 sm:px-6">
          <Seg text="ARYAN.G" seg={14} color={RED} className="text-lg" ghost={false} />
          <nav className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-[#ff333a]/70">
            <a href="#work" className="hidden transition hover:text-white sm:inline">Displays</a>
            <a href="#skills" className="hidden transition hover:text-white sm:inline">Signals</a>
            <a href="#exp" className="hidden transition hover:text-white sm:inline">Log</a>
            <a href={`mailto:${profile.email}`} className="border border-[#ff333a]/50 px-3 py-1.5 text-[#ff9a2d] transition hover:bg-[#ff333a] hover:text-black">Request Access</a>
          </nav>
        </header>

        {/* HERO */}
        <section className="grid gap-8 px-4 py-10 lg:grid-cols-[1.2fr_1fr] lg:gap-6 sm:px-6 sm:py-14">
          <div className="flex flex-col justify-center">
            <Seg text="BUILD THINGS" seg={14} color={RED} className="text-[clamp(2rem,7vw,4.5rem)]" />
            <Seg text="THAT SHIP" seg={14} color={RED} className="mt-2 text-[clamp(2rem,7vw,4.5rem)]" />
            <p className="mt-6 max-w-md text-[13px] leading-relaxed text-white/55">
              {profile.name} — full-stack &amp; AI developer. Professional-grade builds engineered for
              clarity that holds from a phone screen to production scale. Open to freelance.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-[12px] uppercase tracking-wider">
              <a href="#work" className="border border-[#ff333a]/60 px-5 py-3 text-[#ff9a2d] transition hover:bg-[#ff333a] hover:text-black">Explore work ›</a>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="border border-white/15 px-5 py-3 text-white/60 transition hover:border-white/50">Résumé</a>
            </div>
          </div>

          {/* PRICE TOTEM */}
          <div className="mx-auto w-full max-w-sm border border-[#ff333a]/30 bg-black">
            {totem.map((r, i) => (
              <div key={r.label} className={`px-5 py-5 ${i > 0 ? "border-t border-[#ff333a]/20" : ""}`}>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">{r.label}</div>
                <Seg text={r.value} seg={7} color={r.color} className="text-6xl" />
              </div>
            ))}
          </div>
        </section>

        {/* FEATURE STRIP */}
        <section className="grid grid-cols-2 gap-px border-y border-[#ff333a]/20 bg-[#ff333a]/10 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.k} className="flex items-center gap-3 bg-[#050505] px-4 py-5">
              <Seg text={f.k === "OK" ? "88" : "8"} seg={7} color={AMBER} className="text-3xl" ghost={false} />
              <div>
                <div className="text-[11px] uppercase tracking-widest text-white/80">{f.label}</div>
                <div className="text-[11px] text-white/40">{f.note}</div>
              </div>
            </div>
          ))}
        </section>

        {/* INSTRUMENT ROW */}
        <section className="grid grid-cols-2 gap-px border-b border-[#ff333a]/20 bg-[#ff333a]/10 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-2 bg-[#050505] py-6">
            <Clock />
            <span className="text-[10px] uppercase tracking-widest text-white/40">Local Time</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-[#050505] py-6">
            <Seg text={String(skillsFlat.length).padStart(2, "0")} seg={7} color={GREEN} className="text-4xl" />
            <span className="text-[10px] uppercase tracking-widest text-white/40" style={{ color: GREEN }}>Skills</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-[#050505] py-6">
            <Seg text="4.19" seg={7} color={AMBER} className="text-4xl" />
            <span className="text-[10px] uppercase tracking-widest text-white/40" style={{ color: AMBER }}>Years Building</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-[#050505] py-6">
            <Seg text="CALL" seg={14} color={RED} className="text-3xl" ghost={false} />
            <a href={`mailto:${profile.email}`} className="text-[10px] uppercase tracking-widest text-[#ff9a2d] hover:text-white">Queue Systems ›</a>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="px-4 py-12 sm:px-6">
          <div className="mb-6 flex items-baseline justify-between">
            <Seg text="DISPLAYS" seg={14} color={RED} className="text-2xl" ghost={false} />
            <span className="text-[11px] text-white/40">{projectsData.length} MODULES</span>
          </div>
          <div className="grid gap-px bg-[#ff333a]/20 sm:grid-cols-2">
            {projectsData.map((p, i) => {
              const href = p.liveLink && p.liveLink !== "#" ? p.liveLink : p.githubLink || "#";
              return (
                <a key={p.id} href={href} target="_blank" rel="noreferrer" className="group flex flex-col bg-[#050505] p-5 transition hover:bg-[#ff333a]/[0.06]">
                  <div className="flex items-center justify-between">
                    <Seg text={String(i + 1).padStart(2, "0")} seg={7} color={AMBER} className="text-2xl" />
                    {p.recognition && <span className="text-[10px] uppercase tracking-widest" style={{ color: AMBER, textShadow: `0 0 8px ${AMBER}` }}>★ {p.recognition}</span>}
                  </div>
                  <h3 className="mt-3 text-lg font-bold uppercase tracking-wide text-white transition group-hover:text-[#ff333a]" style={{ textShadow: "0 0 1px rgba(255,51,58,0.4)" }}>{p.title}</h3>
                  <p className="mt-1 text-[12px] text-white/45">{p.tagline}</p>
                  <p className="mt-2 flex-1 text-[12px] leading-relaxed text-white/60">{p.description.slice(0, 130)}…</p>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[10px] uppercase tracking-wider text-[#ff333a]/60">
                    {p.techStack.slice(0, 4).map((t) => <span key={t}>{t}</span>)}
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* SKILLS — price list */}
        <section id="skills" className="border-t border-[#ff333a]/20 px-4 py-12 sm:px-6">
          <Seg text="SIGNALS" seg={14} color={RED} className="mb-6 text-2xl" ghost={false} />
          <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {skillsFlat.map((s, i) => (
              <div key={s} className="flex items-baseline justify-between border-b border-white/5 py-1.5">
                <span className="text-[13px] uppercase tracking-wide text-white/70">{s}</span>
                <Seg text={String(70 + ((i * 7) % 30)).padStart(2, "0")} seg={7} color={i % 3 === 0 ? GREEN : RED} className="text-xl" ghost={false} />
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE — log */}
        <section id="exp" className="border-t border-[#ff333a]/20 px-4 py-12 sm:px-6">
          <Seg text="LOG" seg={14} color={RED} className="mb-6 text-2xl" ghost={false} />
          <div className="space-y-6">
            {experiences.map((e, i) => (
              <div key={i} className="border-l border-[#ff333a]/40 pl-4">
                <div className="flex flex-wrap items-baseline gap-3">
                  <Seg text={String(i + 1).padStart(2, "0")} seg={7} color={AMBER} className="text-xl" ghost={false} />
                  <h3 className="text-base font-bold uppercase tracking-wide text-white">{e.role}</h3>
                  <span className="text-[11px] text-white/40">{e.duration}</span>
                </div>
                <p className="mt-0.5 text-[12px]" style={{ color: RED }}>@ {e.company}</p>
                <ul className="mt-2 space-y-1 text-[12px] text-white/55">{e.description.map((d) => <li key={d}>› {d}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-px bg-[#ff333a]/20 sm:grid-cols-2">
            {awards.map((a) => (
              <a key={a.title} href={a.href} target="_blank" rel="noreferrer" className="bg-[#050505] p-5 transition hover:bg-[#ff333a]/[0.06]">
                <Seg text="★" seg={14} color={AMBER} className="text-2xl" ghost={false} />
                <h3 className="mt-2 text-base font-bold uppercase tracking-wide text-white">{a.title}</h3>
                <p className="text-[12px]" style={{ color: AMBER }}>{a.subtitle}</p>
              </a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="border-t border-[#ff333a]/30 px-4 py-16 text-center sm:px-6">
          <Seg text="ENGINEERED" seg={14} color={RED} className="text-[clamp(1.8rem,6vw,3.5rem)]" />
          <Seg text="FOR IMPACT" seg={14} color={RED} className="mt-2 text-[clamp(1.8rem,6vw,3.5rem)]" />
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-[12px] uppercase tracking-wider">
            <a href={`mailto:${profile.email}?subject=Freelance`} className="border border-[#ff333a]/60 bg-[#ff333a]/10 px-6 py-3 text-[#ff9a2d] transition hover:bg-[#ff333a] hover:text-black">{profile.email}</a>
            {socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="border border-white/15 px-5 py-3 text-white/60 transition hover:border-white/50">{s.label}</a>)}
          </div>
          <p className="mt-10 text-[10px] uppercase tracking-widest text-white/30">© {new Date().getFullYear()} {profile.name} · {profile.location} · this portfolio also runs on curl</p>
        </section>
      </div>
    </main>
  );
}
