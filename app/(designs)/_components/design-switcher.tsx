"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { designRoutes } from "@/lib/content";

// Floating cross-design navigator, present on every /1–/5 route.
// Styled as neutral dark glass so it reads on both light and dark designs.
export function DesignSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = pathname?.split("/")[1] ?? "";

  return (
    <div className="fixed bottom-4 left-1/2 z-[9999] -translate-x-1/2 print:hidden">
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-black/70 p-1.5 pl-2.5 text-white shadow-2xl backdrop-blur-xl">
        <Link
          href="/designs"
          className="mr-1 hidden text-[11px] font-medium uppercase tracking-widest text-white/50 transition hover:text-white sm:block"
        >
          Designs
        </Link>
        {designRoutes.map((d) => {
          const active = current === d.slug;
          return (
            <Link
              key={d.slug}
              href={`/${d.slug}`}
              onMouseEnter={() => setOpen(true)}
              title={`${d.name} — ${d.blurb}`}
              className={`relative flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition ${
                active
                  ? "bg-white text-black"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {d.slug}
            </Link>
          );
        })}
        <span className="mx-1 h-4 w-px bg-white/15" />
        <Link
          href="/"
          className="flex h-8 items-center rounded-full px-3 text-[11px] font-medium uppercase tracking-widest text-white/50 transition hover:text-white"
          title="Back to the live site"
        >
          Site
        </Link>
      </div>
      {open && (
        <p className="pointer-events-none mt-2 text-center text-[11px] font-medium text-white/40">
          {designRoutes.find((d) => d.slug === current)?.name ?? "Pick a design"}
        </p>
      )}
    </div>
  );
}
