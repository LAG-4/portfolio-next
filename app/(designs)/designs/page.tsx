import Link from "next/link";
import { designRoutes, profile } from "@/lib/content";

export const metadata = { title: "Design Explorations — Aryan Gupta" };

const accents = ["#7c6cff", "#ff333a", "#f7c948", "#3a4795", "#ff2d78"];

export default function DesignsIndex() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] px-5 py-16 text-white [font-family:var(--f-manrope)]">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/40">Aryan Gupta · Portfolio</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight [font-family:var(--f-archivo)] sm:text-6xl">Five out-of-distribution worlds</h1>
        <p className="mt-4 max-w-xl text-white/60">
          Five complete, working takes on the same real content — each dealt from a distinct
          visual world with its own palette, typography, and one signature interaction. Pick the one that feels most you.
        </p>

        <div className="mt-12 grid gap-4">
          {designRoutes.map((d, i) => (
            <Link key={d.slug} href={`/${d.slug}`}
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/25 hover:bg-white/[0.06] sm:p-6">
              <span className="text-4xl font-black tabular-nums [font-family:var(--f-mono)] sm:text-6xl"
                    style={{ color: accents[i] }}>{d.slug}</span>
              <div className="flex-1">
                <h2 className="text-xl font-bold sm:text-2xl">{d.name}</h2>
                <p className="mt-0.5 text-sm text-white/55">{d.blurb}</p>
              </div>
              <span className="text-2xl text-white/30 transition group-hover:translate-x-1 group-hover:text-white">→</span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 text-sm text-white/50">
          <Link href="/" className="underline underline-offset-4 hover:text-white">← Back to the live site</Link>
          <a href={`mailto:${profile.email}`} className="underline underline-offset-4 hover:text-white">{profile.email}</a>
        </div>
      </div>
    </main>
  );
}
