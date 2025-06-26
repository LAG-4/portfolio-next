'use client'

import About from "@/components/about";
import Award from "@/components/awards";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Poroject from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Button
        className="fixed top-4 right-4 z-50"
        onClick={() => {
          window.location.href = "https://blog.lagaryan.click";
        }}
      >
        Read My Blogs
      </Button>
      <Hero />
      <About />
      <Poroject />
      <Skills />
      <Experience />
      <Award />
      <Contact />
    </main>
  );
}