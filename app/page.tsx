'use client'
import { useEffect } from "react";
import About from "@/components/about";
import Award from "@/components/awards";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Poroject from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import CliShowcase from "@/components/cli-showcase";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    // On mount, check for pending hash and scroll
    if (typeof window !== "undefined") {
      const pending = window.localStorage.getItem("pendingHash");
      if (pending) {
        const el = document.getElementById(pending);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
            window.localStorage.removeItem("pendingHash");
          }, 100); // Delay to ensure DOM is ready
        }
      }
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Button
        className="fixed top-4 right-4 z-50"
        onClick={() => {
          window.location.href = "https://blog.lagaryan.click";
        }}
      >
        Read My Blogs
      </Button>
      <Hero />
      <CliShowcase />
      <About />
      <Poroject />
      <Skills />
      <Experience />
      <Award />
      <Contact />
    </main>
  );
}