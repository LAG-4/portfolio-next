"use client";

/*
 * DESIGN 3 — "CONSOLE"  (world: pop-culture elbow-panel-console / LCARS)
 * THESIS: The portfolio is a starship control panel. Refuses scrolling pages for
 *   color banks you travel between; the sweeping elbow frame IS the layout grid.
 * OWN-WORLD: Pure black ground, FLAT pastel blocks — lilac #b9a7f0, peach #f6a488,
 *   gold #f7c948, periwinkle #8ea6f0 — no gradients, no glow; condensed uppercase
 *   Saira set flush in each block, numeric code clusters as labels; the warmest
 *   gold marks the active segment; motion is instant color swaps.
 * STORY: Visitor taps banks (Overview→Work→Skills→Log→Awards→Comms), each press
 *   chirps and reshuffles the codes; proof reads as node status + system load.
 * FIRST VIEWPORT: elbow frame wraps a lilac headline, a live orbital radar, and
 *   status readouts; a gold DEPLOY pill sits under the statement.
 * FORM: bank navigation; :active flat color swap + chirp is the signature.
 */

import { useMemo, useRef, useState } from "react";
import { profile, socials, experiences, awards, skillGroups, projectsData, stats } from "@/lib/content";

const LILAC = "#b9a7f0", PEACH = "#f6a488", GOLD = "#f7c948", PERI = "#8ea6f0";
const BANKS = [
  { code: "07·001", label: "OVERVIEW", color: LILAC },
  { code: "88·302", label: "WORK", color: PEACH },
  { code: "45·773", label: "SKILLS", color: PERI },
  { code: "19·884", label: "LOG", color: LILAC },
  { code: "10·992", label: "AWARDS", color: GOLD },
  { code: "81·003", label: "COMMS", color: PEACH },
];

function useChirp() {
  const ctx = useRef<AudioContext | null>(null);
  return (freq = 660) => {
    try {
      if (!ctx.current) ctx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      const c = ctx.current, o = c.createOscillator(), g = c.createGain();
      o.type = "square"; o.frequency.value = freq;
      g.gain.setValueAtTime(0.05, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.12);
      o.connect(g); g.connect(c.destination); o.start(); o.stop(c.currentTime + 0.12);
    } catch { /* no audio */ }
  };
}

function Radar({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden>
      {[70, 52, 34, 16].map((r) => <circle key={r} cx="100" cy="100" r={r} fill="none" stroke={color} strokeOpacity="0.35" strokeWidth="1" strokeDasharray={r === 70 ? "2 4" : ""} />)}
      <line x1="100" y1="20" x2="100" y2="180" stroke={color} strokeOpacity="0.25" />
      <line x1="20" y1="100" x2="180" y2="100" stroke={color} strokeOpacity="0.25" />
      <g className="console-spin" style={{ transformOrigin: "100px 100px" }}>
        <line x1="100" y1="100" x2="100" y2="34" stroke={color} strokeWidth="1.5" />
        <circle cx="100" cy="34" r="3" fill={color} />
      </g>
      {[[132, 78], [70, 120], [120, 140], [80, 66]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i === 0 ? 4 : 2.5} fill={i === 0 ? GOLD : color} />)}
      <circle cx="100" cy="100" r="3" fill="#fff" />
    </svg>
  );
}

function Pill({ children, color, active, onClick, className = "" }: {
  children: React.ReactNode; color: string; active?: boolean; onClick?: () => void; className?: string;
}) {
  return (
    <button onClick={onClick}
      className={`console-pill flex items-center justify-between px-4 py-3 text-left text-[13px] font-bold uppercase leading-none tracking-wide [font-family:var(--f-saira-cond)] transition-none ${className}`}
      style={{ background: active ? GOLD : color, color: "#0a0a0a" }}>
      {children}
    </button>
  );
}

export default function Console() {
  const [bank, setBank] = useState(0);
  const chirp = useChirp();
  const accent = BANKS[bank].color;
  const go = (i: number) => { setBank(i); chirp(560 + i * 40); };

  const codes = useMemo(() => BANKS.map((b, i) => b.code.split("·")[0]).sort(() => (bank % 2 ? 1 : -1)), [bank]);

  return (
    <main className="min-h-screen bg-black p-2 text-white/85 [font-family:var(--f-saira)] selection:bg-[#f7c948] selection:text-black sm:p-4">
      <div className="grid gap-2 lg:grid-cols-[180px_1fr] lg:gap-3">
        {/* LEFT RAIL (elbow) */}
        <div className="flex flex-col gap-2">
          <div className="h-10 rounded-tl-[38px] rounded-tr-lg lg:h-16" style={{ background: accent }} />
          <div className="flex flex-row flex-wrap gap-2 lg:flex-col">
            {BANKS.map((b, i) => (
              <Pill key={b.label} color={b.color} active={bank === i} onClick={() => go(i)} className="flex-1 rounded-lg lg:flex-none">
                <span>{b.label}</span>
                <span className="text-[10px] [font-family:var(--f-mono)] opacity-70">{String(i + 1).padStart(2, "0")}</span>
              </Pill>
            ))}
          </div>
          <div className="hidden flex-1 rounded-bl-[38px] rounded-br-lg lg:block" style={{ background: PEACH, minHeight: 40 }} />
          <div className="hidden items-end justify-center rounded-lg p-3 text-[10px] font-bold uppercase [font-family:var(--f-mono)] text-black lg:flex" style={{ background: PERI }}>
            LINK · GRID · ACTIVE
          </div>
        </div>

        {/* MAIN */}
        <div className="flex flex-col gap-2 lg:gap-3">
          {/* TOP BAR */}
          <div className="flex items-stretch gap-2">
            <div className="flex flex-1 items-center gap-3 rounded-lg rounded-tr-[38px] px-4 py-3" style={{ background: accent }}>
              <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-black">
                <span className="h-2.5 w-2.5 rounded-full bg-black" />
              </span>
              <span className="text-lg font-extrabold uppercase leading-none tracking-wide text-black [font-family:var(--f-saira-cond)]">Aryan Gupta</span>
              <span className="hidden text-[11px] uppercase leading-tight text-black/70 sm:block">Full-Stack /<br />AI Systems</span>
              <span className="ml-auto hidden gap-4 text-[11px] font-bold uppercase text-black/80 md:flex [font-family:var(--f-saira-cond)]">
                <a href={profile.resume} target="_blank" rel="noreferrer" className="hover:text-black">Résumé</a>
                <a href={`mailto:${profile.email}`} className="hover:text-black">Contact</a>
              </span>
            </div>
            <div className="flex items-center rounded-lg px-4 font-bold [font-family:var(--f-mono)] text-black" style={{ background: GOLD }}>
              {BANKS[bank].code}
            </div>
          </div>

          {/* BODY */}
          <div className="grid flex-1 gap-2 lg:grid-cols-[1fr_300px] lg:gap-3">
            {/* content bank */}
            <div className="min-h-[62vh] rounded-lg border-2 p-5 sm:p-8" style={{ borderColor: accent + "40" }}>
              <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase [font-family:var(--f-mono)]" style={{ color: accent }}>
                <span className="rounded px-2 py-0.5" style={{ background: accent, color: "#000" }}>SYS·0{bank + 1}</span>
                {BANKS[bank].label}
              </div>

              {bank === 0 && (
                <div>
                  <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-tight [font-family:var(--f-saira-cond)]" style={{ color: accent }}>
                    Systems,<br />shipped.
                  </h1>
                  <p className="mt-4 max-w-md text-white/60">{profile.intro}</p>
                  <button onClick={() => go(5)} className="console-pill mt-6 flex items-center gap-3 rounded-lg px-5 py-3 text-black [font-family:var(--f-saira-cond)] font-bold uppercase tracking-wide" style={{ background: GOLD }}>
                    <span className="grid h-5 w-5 place-items-center rounded-full border-2 border-black"><span className="h-2 w-2 rounded-full bg-black" /></span>
                    Deploy contact <span className="text-[11px] [font-family:var(--f-mono)] opacity-70">| 07·001</span>
                  </button>
                  <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {stats.map((s) => (
                      <div key={s.label} className="rounded-lg border-2 p-3" style={{ borderColor: accent + "40" }}>
                        <div className="text-2xl font-extrabold [font-family:var(--f-saira-cond)]" style={{ color: accent }}>{s.value}</div>
                        <div className="text-[10px] uppercase leading-tight text-white/45">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {bank === 1 && (
                <div className="space-y-2">
                  {projectsData.map((p, i) => {
                    const href = p.liveLink && p.liveLink !== "#" ? p.liveLink : p.githubLink || "#";
                    const c = [LILAC, PEACH, PERI, GOLD][i % 4];
                    return (
                      <a key={p.id} href={href} target="_blank" rel="noreferrer" className="console-pill flex items-center gap-4 rounded-lg px-4 py-3" style={{ background: c }}>
                        <span className="[font-family:var(--f-mono)] text-xs font-bold text-black/60">{String(i + 1).padStart(2, "0")}</span>
                        <span className="flex-1">
                          <span className="block text-base font-extrabold uppercase leading-tight text-black [font-family:var(--f-saira-cond)]">{p.title}</span>
                          <span className="block text-[11px] leading-tight text-black/60">{p.techStack.slice(0, 3).join(" · ")}</span>
                        </span>
                        {p.recognition && <span className="rounded bg-black/20 px-1.5 py-0.5 text-[9px] font-bold uppercase text-black">★</span>}
                        <span className="text-black/70">›</span>
                      </a>
                    );
                  })}
                </div>
              )}

              {bank === 2 && (
                <div className="grid gap-2 sm:grid-cols-2">
                  {skillGroups.map((g, gi) => {
                    const c = [LILAC, PEACH, PERI, GOLD][gi % 4];
                    return (
                      <div key={g.title} className="rounded-lg border-2 p-4" style={{ borderColor: c + "55" }}>
                        <h3 className="mb-2 text-sm font-extrabold uppercase tracking-wide [font-family:var(--f-saira-cond)]" style={{ color: c }}>{g.title}</h3>
                        <div className="flex flex-wrap gap-1.5">
                          {g.skills.map((s) => <span key={s.name} className="rounded px-2 py-1 text-[11px] font-bold uppercase text-black [font-family:var(--f-saira-cond)]" style={{ background: c }}>{s.name}</span>)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {bank === 3 && (
                <div className="space-y-5">
                  {experiences.map((e, i) => (
                    <div key={i} className="rounded-lg border-2 p-4" style={{ borderColor: accent + "55" }}>
                      <div className="flex flex-wrap items-baseline gap-3">
                        <h3 className="text-lg font-extrabold uppercase [font-family:var(--f-saira-cond)]" style={{ color: accent }}>{e.role}</h3>
                        <span className="text-[11px] [font-family:var(--f-mono)] text-white/40">{e.duration}</span>
                      </div>
                      <p className="text-sm font-bold text-white/70">@ {e.company}</p>
                      <ul className="mt-2 space-y-1 text-sm text-white/55">{e.description.map((d) => <li key={d}>▸ {d}</li>)}</ul>
                    </div>
                  ))}
                </div>
              )}

              {bank === 4 && (
                <div className="grid gap-2 sm:grid-cols-2">
                  {awards.map((a) => (
                    <a key={a.title} href={a.href} target="_blank" rel="noreferrer" className="console-pill rounded-lg p-5 text-black" style={{ background: GOLD }}>
                      <div className="text-3xl">★</div>
                      <h3 className="mt-1 text-base font-extrabold uppercase leading-tight [font-family:var(--f-saira-cond)]">{a.title}</h3>
                      <p className="text-[12px] font-bold text-black/60">{a.subtitle}</p>
                    </a>
                  ))}
                </div>
              )}

              {bank === 5 && (
                <div>
                  <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase leading-[0.9] [font-family:var(--f-saira-cond)]" style={{ color: accent }}>Open channel.</h2>
                  <p className="mt-3 text-white/60">Available for freelance builds. Send a signal.</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <a href={`mailto:${profile.email}?subject=Freelance`} className="console-pill rounded-lg px-6 py-3 font-bold uppercase text-black [font-family:var(--f-saira-cond)]" style={{ background: GOLD }}>{profile.email}</a>
                    {socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="console-pill rounded-lg px-5 py-3 font-bold uppercase text-black [font-family:var(--f-saira-cond)]" style={{ background: [LILAC, PEACH, PERI][socials.indexOf(s) % 3] }}>{s.label}</a>)}
                  </div>
                </div>
              )}
            </div>

            {/* readout column */}
            <div className="flex flex-col gap-2">
              <div className="aspect-square rounded-lg border-2 p-3" style={{ borderColor: accent + "40" }}>
                <Radar color={accent} />
              </div>
              <div className="rounded-lg border-2 p-3" style={{ borderColor: accent + "40" }}>
                <div className="text-[10px] uppercase [font-family:var(--f-mono)] text-white/40">Node Status</div>
                <div className="text-2xl font-extrabold [font-family:var(--f-saira-cond)]" style={{ color: accent }}>98.7%</div>
                <div className="mt-2 text-[10px] uppercase [font-family:var(--f-mono)] text-white/40">Network ID</div>
                <div className="text-sm font-bold [font-family:var(--f-mono)]">NX·7A · SECTOR 12</div>
              </div>
              <div className="flex-1 rounded-lg p-3 [font-family:var(--f-mono)] text-[11px] text-black" style={{ background: accent }}>
                <div className="mb-1 font-bold">COM · MSK</div>
                {codes.map((c, i) => <div key={i} className="border-t border-black/15 py-0.5">— {c}·{String((i * 137) % 900).padStart(3, "0")}</div>)}
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="flex items-center gap-2">
            <div className="flex-1 rounded-lg rounded-bl-[38px] px-4 py-2.5 text-[11px] font-bold uppercase text-black [font-family:var(--f-saira-cond)]" style={{ background: accent }}>
              Built for complex systems · © {new Date().getFullYear()} {profile.name}
            </div>
            <div className="rounded-lg px-4 py-2.5 text-[11px] font-bold [font-family:var(--f-mono)] text-black" style={{ background: GOLD }}>{BANKS[bank].code}</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .console-pill:active { filter: brightness(1.25); }
        .console-spin { animation: consoleSpin 8s linear infinite; }
        @keyframes consoleSpin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { .console-spin { animation: none; } }
      `}</style>
    </main>
  );
}
