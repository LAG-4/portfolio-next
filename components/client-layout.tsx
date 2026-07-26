"use client";

import { usePathname } from "next/navigation";

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
  courierPrimeClass: string;
}

// Design-exploration routes (/1–/5 and the /designs index) own their full
// layout, so they bypass the site's shared cyber-grid chrome entirely.
const isDesignRoute = (path: string | null) =>
  !!path && (/^\/[1-5](\/|$)/.test(path) || path.startsWith("/designs"));

export function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  const pathname = usePathname();

  if (isDesignRoute(pathname)) {
    return <>{children}</>;
  }

  // Unified modern dark cyber-grid experience for the main site.
  return (
    <div className="min-h-screen bg-[#070709] text-[#f4f4f6] font-inter relative overflow-x-hidden selection:bg-indigo-600 selection:text-white pb-24">
      {/* Cyber Grid Lines backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#131316_1px,transparent_1px),linear-gradient(to_bottom,#131316_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Decorative premium ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/5 to-purple-500/0 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Primary content area */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        <main className="flex-1 w-full relative">{children}</main>
      </div>
    </div>
  );
}
