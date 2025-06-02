'use client'

import About from "@/components/about";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Hero/>
      <About/>
    </main>
  );
}