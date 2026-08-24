interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

/** Provides the shared visual shell without adding a client-side hydration boundary. */
export function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  // Completely remove legacy sidebar and film grain layouts for a unified, modern dark cyber-grid experience.
  return (
    <div className="min-h-screen bg-[#070709] text-[#f4f4f6] font-inter relative overflow-x-hidden selection:bg-indigo-600 selection:text-white pb-24">
      {/* Cyber Grid Lines backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#131316_1px,transparent_1px),linear-gradient(to_bottom,#131316_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Primary content area */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        <main className="flex-1 w-full relative">
          {children}
        </main>
      </div>


    </div>
  );
}
