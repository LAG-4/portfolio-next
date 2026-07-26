"use client";

/*
 * DESIGN 4 — "INK BASIN"  (world: medium-native-fluid-ink-basin)
 * THESIS: The page is a shallow basin of suminagashi ink. Refuses decorative
 *   blobs for a real fluid the visitor stirs — the surface itself is the material.
 * OWN-WORLD: Paper-white water #f2f0ea, indigo→carbon sumi ink #141a34, dye thinning
 *   to gray as it spreads, the newest drop darkest; a quiet humanist sans (Manrope)
 *   held to still margins outside the basin; composition is only current and whorl.
 * STORY: Visitor drags a fingertip, ink writes chrysanthemums and feathered rain;
 *   the calm margins carry the work while the basin proves the maker's craft.
 * FIRST VIEWPORT: full-bleed living ink, a still headline pinned left, one CTA.
 * FORM: a GPU-light fluid dye solver answering the pointer at 60fps is the signature.
 */

import { useEffect, useRef } from "react";
import { profile, socials, experiences, awards, skillsFlat, projectsData, stats } from "@/lib/content";

function InkBasin() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const N = 200, M = 112, size = N * M;
    canvas.width = N; canvas.height = M;
    const u = new Float32Array(size), v = new Float32Array(size);
    const d = new Float32Array(size), d0 = new Float32Array(size);
    const u0 = new Float32Array(size), v0 = new Float32Array(size);
    const img = ctx.createImageData(N, M);
    const idx = (i: number, j: number) => i + j * N;

    const sample = (f: Float32Array, x: number, y: number) => {
      if (x < 0) x = 0; else if (x > N - 1.001) x = N - 1.001;
      if (y < 0) y = 0; else if (y > M - 1.001) y = M - 1.001;
      const i0 = x | 0, j0 = y | 0, i1 = i0 + 1, j1 = j0 + 1;
      const sx = x - i0, sy = y - j0;
      return (
        f[idx(i0, j0)] * (1 - sx) * (1 - sy) + f[idx(i1, j0)] * sx * (1 - sy) +
        f[idx(i0, j1)] * (1 - sx) * sy + f[idx(i1, j1)] * sx * sy
      );
    };
    const advect = (dst: Float32Array, src: Float32Array, dt: number, diss: number) => {
      for (let j = 0; j < M; j++) for (let i = 0; i < N; i++) {
        const c = idx(i, j);
        dst[c] = sample(src, i - dt * u[c], j - dt * v[c]) * diss;
      }
    };

    const drop = (cx: number, cy: number, du: number, dv: number, amt: number, rad: number) => {
      const r2 = rad * rad;
      for (let j = Math.max(0, cy - rad | 0); j < Math.min(M, cy + rad); j++)
        for (let i = Math.max(0, cx - rad | 0); i < Math.min(N, cx + rad); i++) {
          const dx = i - cx, dy = j - cy, dist2 = dx * dx + dy * dy;
          if (dist2 > r2) continue;
          const f = 1 - dist2 / r2, c = idx(i, j);
          u[c] += du * f; v[c] += dv * f;
          d[c] = Math.min(1, d[c] + amt * f);
        }
    };

    // seed a rich suminagashi pattern: a row of alternating drops, then a fan
    // sweep, so the basin reads as marbled ink even before it is stirred.
    for (let k = 0; k < 9; k++) {
      const x = N * (0.16 + 0.084 * k);
      const y = M * (0.5 + 0.16 * Math.sin(k * 0.9));
      drop(x, y, (k % 2 ? 1.4 : -1.4), (k % 3 ? 0.6 : -0.6), 1, 9 + (k % 3) * 5);
    }
    // fan/comb: alternating vertical currents feather the drops into rain
    for (let j = 0; j < M; j++)
      for (let i = 0; i < N; i++) {
        v[idx(i, j)] += Math.sin(i * 0.28) * 0.5;
        u[idx(i, j)] += Math.cos(j * 0.3) * 0.25;
      }

    // pointer stirring
    let px = -1, py = -1;
    const toGrid = (clientX: number, clientY: number) => {
      const r = canvas.getBoundingClientRect();
      return [((clientX - r.left) / r.width) * N, ((clientY - r.top) / r.height) * M];
    };
    const onMove = (e: PointerEvent) => {
      const [gx, gy] = toGrid(e.clientX, e.clientY);
      if (px >= 0) {
        const du = (gx - px) * 1.4, dv = (gy - py) * 1.4;
        drop(gx, gy, du, dv, 0.18 + Math.min(0.5, Math.hypot(du, dv) * 0.03), 8);
      }
      px = gx; py = gy;
    };
    const onLeave = () => { px = -1; py = -1; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    const onDown = (e: PointerEvent) => { const [gx, gy] = toGrid(e.clientX, e.clientY); drop(gx, gy, 0, 0, 1, 12); };
    window.addEventListener("pointerdown", onDown);

    let raf = 0;
    const render = () => {
      const data = img.data;
      for (let k = 0; k < size; k++) {
        const t = d[k] > 1 ? 1 : d[k];
        // paper -> indigo -> carbon; gray where thin
        const r = 242 - t * 222, g = 240 - t * 214, b = 234 - t * 176;
        const p = k * 4;
        data[p] = r; data[p + 1] = g; data[p + 2] = b; data[p + 3] = 255;
      }
      ctx.putImageData(img, 0, 0);
    };

    const step = () => {
      advect(u0, u, 1, 0.985); advect(v0, v, 1, 0.985);
      u.set(u0); v.set(v0);
      advect(d0, d, 1, 0.9992); d.set(d0); // ink lingers so the marbling holds
      render();
      raf = requestAnimationFrame(step);
    };
    if (reduced) { render(); } else { raf = requestAnimationFrame(step); }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 h-full w-full"
      style={{ filter: "blur(1.5px) contrast(1.35) saturate(1.1)", imageRendering: "auto" }}
      aria-hidden
    />
  );
}

export default function InkBasinPage() {
  const paper = "bg-[#f2f0ea]/80 backdrop-blur-[2px]";
  return (
    <main className="relative min-h-screen bg-[#f2f0ea] text-[#141a34] [font-family:var(--f-manrope)] selection:bg-[#141a34] selection:text-[#f2f0ea]">
      <InkBasin />

      {/* still-margin content */}
      <div className="relative z-10">
        {/* NAV */}
        <header className="flex items-center justify-between px-5 py-5 sm:px-10">
          <div className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-[#141a34]/40">
              <span className="h-3 w-3 rounded-full bg-[#141a34]" />
            </span>
            <span className="text-lg font-semibold tracking-wide">Aryan Gupta</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#work" className="hidden text-[#141a34]/60 transition hover:text-[#141a34] sm:inline">Work</a>
            <a href="#about" className="hidden text-[#141a34]/60 transition hover:text-[#141a34] sm:inline">About</a>
            <a href={`mailto:${profile.email}`} className="rounded-full border border-[#141a34]/30 bg-[#f2f0ea]/70 px-4 py-1.5 backdrop-blur transition hover:bg-[#141a34] hover:text-[#f2f0ea]">Commission</a>
          </nav>
        </header>

        {/* HERO — held to a still left margin */}
        <section className="flex min-h-[82vh] items-center px-5 sm:px-10">
          <div className="max-w-lg">
            <h1 className="text-[clamp(2.6rem,7vw,5rem)] font-light leading-[1.02] tracking-tight">
              Ideas that flow.<br />Products that ship.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#141a34]/70">
              {profile.name} — a full-stack &amp; AI developer building with patience and precision.
              Drag across the water; the ink answers. Open to freelance work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-[#141a34] px-6 py-3 text-[#f2f0ea] transition hover:bg-[#242d55]">See the collection →</a>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="rounded-full border border-[#141a34]/30 bg-[#f2f0ea]/70 px-6 py-3 backdrop-blur transition hover:bg-white">Résumé</a>
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#141a34]/40">Stir the basin ✦ suminagashi</p>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="px-5 py-16 sm:px-10">
          <div className={`rounded-2xl border border-[#141a34]/10 p-6 sm:p-10 ${paper}`}>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-3xl font-light sm:text-4xl">Selected work</h2>
              <span className="text-sm text-[#141a34]/50">{projectsData.length} pieces</span>
            </div>
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {projectsData.map((p) => {
                const href = p.liveLink && p.liveLink !== "#" ? p.liveLink : p.githubLink || "#";
                return (
                  <a key={p.id} href={href} target="_blank" rel="noreferrer" className="group border-t border-[#141a34]/15 pt-4">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-xl font-medium transition group-hover:text-[#3a4795]">{p.title}</h3>
                      {p.recognition && <span className="text-xs text-[#3a4795]">★ {p.recognition}</span>}
                    </div>
                    <p className="mt-1 text-sm italic text-[#141a34]/55">{p.tagline}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#141a34]/70">{p.description.slice(0, 150)}…</p>
                    <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#141a34]/45">
                      {p.techStack.slice(0, 4).map((t) => <span key={t}>{t}</span>)}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ABOUT / EXPERIENCE / SKILLS */}
        <section id="about" className="px-5 py-4 sm:px-10">
          <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
            <div className={`rounded-2xl border border-[#141a34]/10 p-6 sm:p-10 ${paper}`}>
              <h2 className="mb-6 text-2xl font-light">The practice</h2>
              <div className="space-y-6">
                {experiences.map((e, i) => (
                  <div key={i} className="border-l border-[#141a34]/20 pl-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-medium">{e.role}</h3>
                      <span className="text-xs text-[#141a34]/45">{e.duration}</span>
                    </div>
                    <p className="text-sm text-[#3a4795]">{e.company}</p>
                    <ul className="mt-2 space-y-1 text-sm text-[#141a34]/65">{e.description.map((x) => <li key={x}>— {x}</li>)}</ul>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="mb-3 text-sm uppercase tracking-widest text-[#141a34]/40">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {skillsFlat.map((s) => <span key={s} className="rounded-full border border-[#141a34]/20 px-3 py-1 text-sm">{s}</span>)}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className={`grid grid-cols-2 gap-4 rounded-2xl border border-[#141a34]/10 p-6 ${paper}`}>
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-light">{s.value}</div>
                    <div className="text-xs text-[#141a34]/55">{s.label}</div>
                  </div>
                ))}
              </div>
              {awards.map((a) => (
                <a key={a.title} href={a.href} target="_blank" rel="noreferrer" className={`rounded-2xl border border-[#141a34]/10 p-6 transition hover:border-[#141a34]/30 ${paper}`}>
                  <div className="text-2xl">🏆</div>
                  <h3 className="mt-1 font-medium">{a.title}</h3>
                  <p className="text-sm text-[#141a34]/55">{a.subtitle}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="px-5 py-20 sm:px-10">
          <div className={`rounded-2xl border border-[#141a34]/10 p-8 text-center sm:p-16 ${paper}`}>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight">Made for the art of building well.</h2>
            <a href={`mailto:${profile.email}?subject=Commission`} className="mt-8 inline-block rounded-full bg-[#141a34] px-8 py-4 text-lg text-[#f2f0ea] transition hover:bg-[#242d55]">{profile.email}</a>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[#141a34]/60">
              {socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="transition hover:text-[#141a34]">{s.label}</a>)}
            </div>
            <p className="mt-10 text-xs text-[#141a34]/40">© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
