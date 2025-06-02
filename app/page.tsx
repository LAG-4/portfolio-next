'use client'

import About from "@/components/about";
import Hero from "@/components/hero";
import Poroject from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Hero/>
      <About/>
      <Poroject/>
      <Skills/>
    </main>
  );
}