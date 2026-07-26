"use client";

/*
 * DESIGN 5 — "GHOST PRESS"  (world: factory-silkscreen-loft)
 * THESIS: A portfolio as a silkscreen edition house — multiply the maker, not the
 *   copy. Refuses clean product cards for off-register prints on a drying line.
 * OWN-WORLD: Grimy near-black loft #0d0b0a + silver-foil bands #c9c6bd, one dense
 *   halftone pass as body ink, fluorescent pink #ff2d78 and marigold #f5a623 pulled
 *   per edition; heavy compressed Anton caps silkscreened slightly off-register,
 *   visible dot grain, layout as a drying rack of equal repeated frames.
 * STORY: Aryan's own portrait hangs multiplied in shifting colorways; each project
 *   is a numbered edition; hovering reprints it off-register — process over polish.
 * FIRST VIEWPORT: giant pink/marigold headline left, a drying line of tinted
 *   self-portraits right under a red bulb.
 * FORM: off-register reprint-on-hover + halftone grain is the signature.
 */

import { profile, socials, experiences, awards, skillsFlat, projectsData, stats } from "@/lib/content";

const PINK = "#ff2d78", MARIGOLD = "#f5a623", FOIL = "#c9c6bd", INK = "#eae6dd";
const HALFTONE = "radial-gradient(circle, rgba(0,0,0,0.55) 0.8px, transparent 1.3px)";

// SVG duotone filters: map shadows -> ink, highlights -> the edition colorway.
// Reliable regardless of the photo's own background, unlike blend modes.
const DUO = [
  { id: "duo-pink", r: [0.05, 1.0], g: [0.04, 0.18], b: [0.04, 0.47] },
  { id: "duo-marigold", r: [0.05, 0.96], g: [0.04, 0.65], b: [0.04, 0.14] },
  { id: "duo-cyan", r: [0.04, 0.39], g: [0.05, 0.79], b: [0.05, 0.79] },
  { id: "duo-white", r: [0.06, 0.92], g: [0.05, 0.9], b: [0.05, 0.87] },
];

function DuoDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        {DUO.map((d) => (
          <filter key={d.id} id={d.id} colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0" />
            <feComponentTransfer>
              <feFuncR type="table" tableValues={`${d.r[0]} ${d.r[1]}`} />
              <feFuncG type="table" tableValues={`${d.g[0]} ${d.g[1]}`} />
              <feFuncB type="table" tableValues={`${d.b[0]} ${d.b[1]}`} />
            </feComponentTransfer>
          </filter>
        ))}
      </defs>
    </svg>
  );
}

function Portrait({ duo, fringe, className = "" }: { duo: string; fringe?: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#0d0b0a] ${className}`}>
      {fringe && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/images/Hero.png" alt="" aria-hidden
          className="absolute inset-0 h-full w-full object-cover mix-blend-screen"
          style={{ filter: `contrast(1.15) url(#${fringe})`, transform: "translate(3px,-3px)", opacity: 0.55 }} />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/Hero.png" alt={`${profile.name}, silkscreened`}
        className="relative h-full w-full object-cover"
        style={{ filter: `contrast(1.25) url(#${duo})` }} />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-60" style={{ backgroundImage: HALFTONE, backgroundSize: "3px 3px" }} />
    </div>
  );
}

export default function GhostPress() {
  return (
    <main className="min-h-screen bg-[#0d0b0a] text-[#eae6dd] [font-family:var(--f-archivo)] selection:bg-[#ff2d78] selection:text-black">
      <DuoDefs />
      {/* global grain */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.22] mix-blend-overlay" style={{ backgroundImage: HALFTONE, backgroundSize: "3.5px 3.5px" }} aria-hidden />

      {/* NAV */}
      <header className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-8">
        <span className="text-xl font-black uppercase tracking-tight [font-family:var(--f-anton)]">Ghost<span style={{ color: PINK }}>press</span></span>
        <nav className="flex items-center gap-5 text-[12px] uppercase tracking-widest text-white/55 [font-family:var(--f-mono)]">
          <a href="#work" className="hidden transition hover:text-white sm:inline">Editions</a>
          <a href="#process" className="hidden transition hover:text-white sm:inline">Process</a>
          <a href={`mailto:${profile.email}`} className="transition hover:text-white">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="grid gap-8 px-5 py-12 lg:grid-cols-[1.1fr_1fr] lg:gap-4 sm:px-8 sm:py-16">
        <div className="flex flex-col justify-center">
          <h1 className="text-[clamp(3rem,10vw,7rem)] font-black uppercase leading-[0.82] tracking-tight [font-family:var(--f-anton)]">
            <span style={{ color: PINK }}>Multiply</span><br />
            <span style={{ color: INK }}>the work,</span><br />
            <span style={{ color: MARIGOLD }}>not the noise.</span>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60 [font-family:var(--f-mono)]">
            {profile.name} is a full-stack &amp; AI developer and freelance builder for people who value
            process over perfection. Ten-plus editions, printed in code.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-[12px] font-bold uppercase tracking-widest [font-family:var(--f-mono)]">
            <a href="#work" className="flex items-center gap-3 border border-white/25 pl-5 transition hover:border-white/60">
              Explore editions <span className="bg-[#ff2d78] px-4 py-3 text-black">→</span>
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="border border-white/20 px-5 py-3 text-white/60 transition hover:border-white/50">Résumé</a>
          </div>
        </div>

        {/* drying line */}
        <div className="relative">
          <div className="absolute left-0 right-0 top-0 z-10 h-px bg-white/25" />
          {/* red bulb */}
          <div className="absolute right-8 top-2 z-20 h-3 w-3 rounded-full" style={{ background: PINK, boxShadow: `0 0 24px 6px ${PINK}` }} />
          <div className="flex gap-3 overflow-x-auto pt-3 pb-2">
            {[
              { duo: "duo-pink", fringe: "duo-cyan" },
              { duo: "duo-marigold", fringe: "duo-pink" },
              { duo: "duo-cyan", fringe: "duo-marigold" },
              { duo: "duo-white", fringe: "duo-pink" },
            ].map((cw, i) => (
              <div key={i} className="relative shrink-0" style={{ transform: `rotate(${(i % 2 ? 1 : -1) * 1.2}deg)` }}>
                <span className="absolute left-1/2 top-0 z-20 h-3 w-2 -translate-x-1/2 -translate-y-1/2 bg-white/70" />
                <Portrait duo={cw.duo} fringe={cw.fringe} className="h-56 w-40 sm:h-72 sm:w-52" />
                <span className="absolute bottom-1 left-1 z-10 bg-black/50 px-1 text-[9px] font-bold uppercase text-white/80 [font-family:var(--f-mono)]">ED. {String(i + 1).padStart(2, "0")}/30</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[11px] uppercase tracking-widest text-white/35 [font-family:var(--f-mono)]">The maker, multiplied — each pull deliberately different</p>
        </div>
      </section>

      {/* MARQUEE STRIP (foil) */}
      <div className="overflow-hidden border-y-2 border-black py-2.5" style={{ background: FOIL }}>
        <div className="ghost-marquee flex whitespace-nowrap text-lg font-black uppercase text-black [font-family:var(--f-anton)]">
          {[...stats, ...stats].map((s, i) => <span key={i} className="mx-5">{s.value} {s.label} <span style={{ color: PINK }}>✦</span></span>)}
        </div>
      </div>

      {/* WORK — editions */}
      <section id="work" className="px-5 py-14 sm:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-4xl font-black uppercase [font-family:var(--f-anton)] sm:text-6xl">The Editions</h2>
          <span className="text-[12px] uppercase tracking-widest text-white/45 [font-family:var(--f-mono)]">{projectsData.length} prints</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((p, i) => {
            const cw = [PINK, MARIGOLD, INK][i % 3];
            const href = p.liveLink && p.liveLink !== "#" ? p.liveLink : p.githubLink || "#";
            return (
              <a key={p.id} href={href} target="_blank" rel="noreferrer"
                 className="ghost-print group relative flex flex-col border-2 border-black p-5"
                 style={{ background: "#141110" }}>
                <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: HALFTONE, backgroundSize: "3px 3px" }} />
                <div className="relative flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/40 [font-family:var(--f-mono)]">
                  <span>Edition {String(i + 1).padStart(2, "0")} / 30</span>
                  {p.recognition && <span style={{ color: MARIGOLD }}>★ {p.recognition}</span>}
                </div>
                {/* off-register title */}
                <div className="relative mt-3">
                  <h3 aria-hidden className="ghost-ghost absolute left-0 top-0 text-2xl font-black uppercase leading-none [font-family:var(--f-anton)]" style={{ color: PINK }}>{p.title}</h3>
                  <h3 className="relative text-2xl font-black uppercase leading-none [font-family:var(--f-anton)]" style={{ color: cw }}>{p.title}</h3>
                </div>
                <p className="relative mt-2 text-[12px] italic text-white/50 [font-family:var(--f-mono)]">{p.tagline}</p>
                <p className="relative mt-3 flex-1 text-[13px] leading-relaxed text-white/70">{p.description.slice(0, 120)}…</p>
                <div className="relative mt-4 flex flex-wrap gap-x-3 gap-y-1 border-t border-white/10 pt-3 text-[10px] uppercase tracking-wider text-white/40 [font-family:var(--f-mono)]">
                  {p.techStack.slice(0, 4).map((t) => <span key={t}>{t}</span>)}
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* PROCESS — foil section */}
      <section id="process" className="border-y-2 border-black px-5 py-14 text-black sm:px-8" style={{ background: FOIL }}>
        <div className="pointer-events-none absolute" />
        <h2 className="mb-8 text-4xl font-black uppercase [font-family:var(--f-anton)] sm:text-6xl">Process Notes</h2>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            {experiences.map((e, i) => (
              <div key={i} className="border-t-2 border-black pt-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-black uppercase [font-family:var(--f-anton)]">{e.role}</h3>
                  <span className="text-[11px] font-bold uppercase [font-family:var(--f-mono)]">{e.duration}</span>
                </div>
                <p className="text-sm font-bold" style={{ color: "#a01e52" }}>@ {e.company}</p>
                <ul className="mt-2 space-y-1 text-[13px] text-black/75">{e.description.map((d) => <li key={d}>— {d}</li>)}</ul>
              </div>
            ))}
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest [font-family:var(--f-mono)]">Ink colors on hand</h3>
            <div className="flex flex-wrap gap-2">
              {skillsFlat.map((s) => <span key={s} className="border-2 border-black bg-white/40 px-2.5 py-1 text-[12px] font-bold uppercase [font-family:var(--f-mono)]">{s}</span>)}
            </div>
            <div className="mt-6 space-y-2">
              {awards.map((a) => (
                <a key={a.title} href={a.href} target="_blank" rel="noreferrer" className="block border-2 border-black bg-white/30 p-4 transition hover:bg-white/60">
                  <h4 className="font-black uppercase [font-family:var(--f-anton)]">{a.title}</h4>
                  <p className="text-[12px] font-bold" style={{ color: "#a01e52" }}>{a.subtitle}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-5 py-20 text-center sm:px-8">
        <h2 className="mx-auto max-w-4xl text-[clamp(2.4rem,8vw,6rem)] font-black uppercase leading-[0.85] [font-family:var(--f-anton)]">
          <span style={{ color: INK }}>Commission the </span><span style={{ color: PINK }}>next edition.</span>
        </h2>
        <a href={`mailto:${profile.email}?subject=Commission`} className="mt-8 inline-flex items-center gap-3 border-2 border-white/30 pl-6 text-[13px] font-bold uppercase tracking-widest [font-family:var(--f-mono)] transition hover:border-white/70">
          {profile.email} <span className="bg-[#ff2d78] px-5 py-4 text-black">↗</span>
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-5 text-[12px] uppercase tracking-widest text-white/50 [font-family:var(--f-mono)]">
          {socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="transition hover:text-white">{s.label}</a>)}
        </div>
        <p className="mt-12 text-[11px] uppercase tracking-widest text-white/30 [font-family:var(--f-mono)]">© {new Date().getFullYear()} {profile.name} · every print deliberately different · {profile.location}</p>
      </section>

      <style jsx global>{`
        .ghost-marquee { animation: ghostM 30s linear infinite; }
        @keyframes ghostM { to { transform: translateX(-50%); } }
        .ghost-ghost { transform: translate(0,0); transition: transform .18s steps(2); }
        .ghost-print:hover .ghost-ghost { transform: translate(4px, -4px); }
        .ghost-print { transition: transform .15s; }
        .ghost-print:hover { transform: translate(-2px, -2px); }
        @media (prefers-reduced-motion: reduce) { .ghost-marquee { animation: none; } .ghost-print:hover .ghost-ghost { transform: none; } }
      `}</style>
    </main>
  );
}
