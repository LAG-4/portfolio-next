'use client'

import About from "@/components/about";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 md:p-12 lg:p-16 xl:p-24">
      <Hero/>
      <About/>
    </main>
  );
}