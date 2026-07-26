"use client";

/*
 * DESIGN 1 — "TYPE LAB"  (world: variable-font-specimen)
 * THESIS: The portfolio IS a type specimen. Refuses the hero+cards deck for a
 *   living variable-font laboratory where dragging an axis remaps every glyph.
 * OWN-WORLD: Near-black #0b0b0d, off-white ink #ededef, ONE violet accent #7c6cff,
 *   Roboto Flex as the specimen face at enormous scale against tiny JetBrains-Mono
 *   UI labels, strict baseline grid, flat surfaces, hierarchy by scale contrast alone.
 * STORY: Visitor drags Weight/Width/Slant, the giant glyph and the whole page
 *   thicken and lean under their hand — "form follows function" made literal —
 *   then reads the work rendered as specimen and hits Résumé / hire.
 * FIRST VIEWPORT: left statement + violet CTA, a rule, a screen-filling glyph,
 *   right AXIS panel with live sliders + coordinate readouts.
 * FORM: interactive specimen; the axis sliders driving font-variation-settings
 *   across the entire page are the signature.
 */

import { useState } from "react";
import { profile, socials, experiences, awards, skillsFlat, projectsData, stats } from "@/lib/content";

const AXES = [
  { key: "wght", label: "Weight", min: 100, max: 900, def: 500 },
  { key: "wdth", label: "Width", min: 25, max: 151, def: 100 },
  { key: "opsz", label: "Optical", min: 8, max: 144, def: 40 },
  { key: "slnt", label: "Slant", min: -10, max: 0, def: 0 },
  { key: "GRAD", label: "Grade", min: -200, max: 150, def: 0 },
] as const;

type AxisState = Record<string, number>;
const initial: AxisState = Object.fromEntries(AXES.map((a) => [a.key, a.def]));

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;!?&@#*".split("");

export default function TypeLab() {
  const [ax, setAx] = useState<AxisState>(initial);
  const [big, setBig] = useState("A");
  const [tab, setTab] = useState<"glyphs" | "words" | "text" | "waterfall">("glyphs");

  const fvs = `"wght" ${ax.wght}, "wdth" ${ax.wdth}, "opsz" ${ax.opsz}, "slnt" ${ax.slnt}, "GRAD" ${ax.GRAD}`;
  const spec = { fontFamily: "var(--f-flex)", fontVariationSettings: fvs } as React.CSSProperties;

  return (
    <main className="min-h-screen bg-[#0b0b0d] text-[#ededef] [font-family:var(--f-mono)] selection:bg-[#7c6cff] selection:text-white">
      {/* NAV */}
      <header className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 text-[13px] sm:px-8">
        <div className="flex items-baseline gap-3">
          <span className="text-lg font-bold tracking-tight" style={spec}>Aryan Gupta</span>
          <span className="hidden text-white/35 sm:inline">/ TYPE LAB</span>
        </div>
        <nav className="flex items-center gap-5 text-white/50">
          <a href="#work" className="hidden transition hover:text-white sm:inline">Work</a>
          <a href="#specimen" className="hidden transition hover:text-white sm:inline">Specimen</a>
          <a href={`mailto:${profile.email}`} className="hidden transition hover:text-white sm:inline">Contact</a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="border border-white/25 px-3.5 py-1.5 transition hover:border-white/60 hover:bg-white/5">Résumé ↗</a>
        </nav>
      </header>

      {/* HERO SPLIT */}
      <section className="grid lg:grid-cols-[1fr_minmax(320px,1.15fr)_320px]">
        {/* statement */}
        <div className="flex flex-col justify-center border-b border-white/10 px-5 py-14 lg:border-b-0 lg:border-r lg:px-10">
          <p className="mb-6 text-[11px] uppercase tracking-[0.25em] text-[#7c6cff]">Variable Portfolio · v1.0</p>
          <h1 className="text-[clamp(2.6rem,6vw,4.6rem)] leading-[0.98]" style={{ ...spec, fontWeight: 400 }}>
            Shape every<br />character.
          </h1>
          <p className="mt-6 max-w-sm text-[13px] leading-relaxed text-white/55">
            {profile.name} is a full-stack &amp; AI developer who ships products end to end.
            This page is a live type specimen — pull the axes and watch it respond.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-[13px]">
            <a href="#work" className="bg-[#7c6cff] px-5 py-3 font-semibold text-white transition hover:bg-[#6a58f0]">Open the work →</a>
            <a href={`mailto:${profile.email}?subject=Freelance`} className="border border-white/25 px-5 py-3 transition hover:border-white/60">Available for freelance</a>
          </div>
        </div>

        {/* giant glyph */}
        <button
          onClick={() => setBig(GLYPHS[(GLYPHS.indexOf(big) + 1) % 26])}
          title="click to cycle"
          className="relative flex items-center justify-center overflow-hidden border-b border-white/10 bg-[#0e0e11] py-10 lg:border-b-0 lg:border-r"
        >
          <span className="pointer-events-none absolute left-3 top-3 text-[10px] text-white/25">GLYPH · U+00{big.charCodeAt(0).toString(16).toUpperCase()}</span>
          <span className="leading-none text-[clamp(9rem,26vw,20rem)] text-[#f4f4f6]" style={spec}>{big}</span>
        </button>

        {/* AXIS panel */}
        <aside className="px-5 py-8 lg:px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">Axis</p>
          <div className="mt-4 space-y-5">
            {AXES.map((a) => (
              <div key={a.key}>
                <div className="flex items-baseline justify-between">
                  <label className="text-sm text-white/80">{a.label}</label>
                  <span className="text-sm tabular-nums text-[#7c6cff]">{ax[a.key]}</span>
                </div>
                <input
                  type="range" min={a.min} max={a.max} value={ax[a.key]}
                  onChange={(e) => setAx((s) => ({ ...s, [a.key]: +e.target.value }))}
                  aria-label={a.label}
                  className="lab-range mt-2 w-full"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-2 border-t border-white/10 pt-4 text-[11px]">
            {[
              { n: "Hairline", v: { wght: 100, wdth: 75, slnt: 0, GRAD: -150, opsz: 12 } },
              { n: "Text", v: initial },
              { n: "Display", v: { wght: 900, wdth: 130, slnt: 0, GRAD: 120, opsz: 144 } },
              { n: "Italic", v: { wght: 600, wdth: 100, slnt: -10, GRAD: 0, opsz: 40 } },
            ].map((p) => (
              <button key={p.n} onClick={() => setAx(p.v as AxisState)} className="border border-white/15 px-2.5 py-1.5 text-white/60 transition hover:border-[#7c6cff] hover:text-white">{p.n}</button>
            ))}
          </div>
        </aside>
      </section>

      {/* live readout row */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-1 border-y border-white/10 px-5 py-2.5 text-[11px] text-white/45 sm:px-8">
        <span className="h-1.5 w-1.5 rounded-full bg-[#7c6cff]" />
        {AXES.map((a) => <span key={a.key}>{a.label} <span className="tabular-nums text-white/80">{ax[a.key]}</span></span>)}
        <span className="ml-auto hidden sm:inline">282 / 282 glyphs</span>
      </div>

      {/* SPECIMEN */}
      <section id="specimen" className="px-5 py-8 sm:px-8">
        <div className="mb-5 flex flex-wrap gap-1 text-[12px]">
          {(["glyphs", "words", "text", "waterfall"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-3.5 py-1.5 uppercase tracking-wider transition ${tab === t ? "bg-white text-black" : "text-white/45 hover:text-white"}`}>{t}</button>
          ))}
        </div>

        {tab === "glyphs" && (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(64px,1fr))] gap-px bg-white/10">
            {GLYPHS.map((g) => (
              <button key={g} onClick={() => setBig(g)}
                className="flex aspect-square items-center justify-center bg-[#0b0b0d] text-3xl transition hover:bg-[#7c6cff]/15" style={spec}>{g}</button>
            ))}
          </div>
        )}
        {tab === "words" && (
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
            {skillsFlat.map((w, i) => (
              <span key={w} className="text-[clamp(1.4rem,4vw,3rem)] leading-tight" style={{ ...spec, opacity: 0.55 + (i % 3) * 0.22 }}>{w}</span>
            ))}
          </div>
        )}
        {tab === "text" && (
          <p className="max-w-3xl text-[clamp(1.1rem,2.4vw,1.9rem)] leading-[1.35]" style={spec}>{profile.intro}</p>
        )}
        {tab === "waterfall" && (
          <div className="space-y-1">
            {[16, 24, 34, 48, 68, 94].map((s) => (
              <p key={s} className="truncate leading-none" style={{ ...spec, fontSize: s }}>Aryan Gupta — building things that ship.</p>
            ))}
          </div>
        )}
      </section>

      {/* WORK — projects as specimens */}
      <section id="work" className="border-t border-white/10 px-5 py-12 sm:px-8">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="text-2xl" style={{ ...spec, fontWeight: 700 }}>Selected work</h2>
          <span className="text-[11px] text-white/40">{projectsData.length} editions</span>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {projectsData.map((p, i) => {
            const href = p.liveLink && p.liveLink !== "#" ? p.liveLink : p.githubLink || "#";
            return (
              <a key={p.id} href={href} target="_blank" rel="noreferrer" className="group grid gap-3 py-6 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-8">
                <span className="text-[11px] tabular-nums text-white/30">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] leading-none transition group-hover:text-[#7c6cff]" style={spec}>{p.title}</h3>
                  <p className="mt-2 text-[12px] text-white/45">{p.tagline}</p>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-white/35">
                    {p.techStack.slice(0, 5).map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
                <span className="flex items-center gap-2 text-[12px] text-white/40">
                  {p.recognition && <span className="text-[#7c6cff]">★ {p.recognition}</span>}
                  <span className="transition group-hover:translate-x-1 group-hover:text-white">↗</span>
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCE + STATS + AWARDS */}
      <section className="grid border-t border-white/10 lg:grid-cols-[1.4fr_1fr]">
        <div className="border-b border-white/10 px-5 py-12 lg:border-b-0 lg:border-r sm:px-8">
          <h2 className="mb-8 text-2xl" style={{ ...spec, fontWeight: 700 }}>Experience</h2>
          <div className="space-y-8">
            {experiences.map((e, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl" style={{ ...spec, fontWeight: 600 }}>{e.role}</h3>
                  <span className="text-[11px] text-white/40">{e.duration}</span>
                </div>
                <p className="text-[13px] text-[#7c6cff]">{e.company}</p>
                <ul className="mt-2 space-y-1 text-[13px] text-white/55">
                  {e.description.map((d) => <li key={d}>— {d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="px-5 py-12 sm:px-8">
          <h2 className="mb-8 text-2xl" style={{ ...spec, fontWeight: 700 }}>Index</h2>
          <div className="mb-8 grid grid-cols-2 gap-px bg-white/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#0b0b0d] p-4">
                <div className="text-3xl" style={{ ...spec, fontWeight: 800 }}>{s.value}</div>
                <div className="mt-1 text-[11px] text-white/45">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {awards.map((a) => (
              <a key={a.title} href={a.href} target="_blank" rel="noreferrer" className="block border-l border-[#7c6cff] pl-3 transition hover:pl-4">
                <p className="text-[15px]" style={{ ...spec, fontWeight: 600 }}>{a.title}</p>
                <p className="text-[11px] text-white/45">{a.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <footer className="border-t border-white/10 px-5 py-16 sm:px-8">
        <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">Fine control for curious minds</p>
        <h2 className="mt-3 max-w-4xl text-[clamp(2rem,7vw,5rem)] leading-[0.95]" style={{ ...spec, fontWeight: 800 }}>
          Let&apos;s build something with real weight.
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px]">
          <a href={`mailto:${profile.email}?subject=Freelance`} className="bg-[#7c6cff] px-6 py-3 font-semibold text-white transition hover:bg-[#6a58f0]">{profile.email}</a>
          {socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-white/50 transition hover:text-white">{s.label}</a>)}
        </div>
        <p className="mt-12 text-[11px] text-white/30">© {new Date().getFullYear()} {profile.name} · Roboto Flex specimen · {profile.location}</p>
      </footer>

      <style jsx global>{`
        .lab-range { -webkit-appearance: none; appearance: none; height: 2px; background: rgba(255,255,255,0.18); outline: none; }
        .lab-range::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 14px; height: 14px; border-radius: 999px; background: #7c6cff; cursor: pointer; }
        .lab-range::-moz-range-thumb { width: 14px; height: 14px; border: none; border-radius: 999px; background: #7c6cff; cursor: pointer; }
      `}</style>
    </main>
  );
}
