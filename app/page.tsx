'use client'
import { useEffect } from "react";
import About from "@/components/about";
import Awards from "@/components/awards";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import ProjectSection from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import CliShowcase from "@/components/cli-showcase";
import { FileText } from "lucide-react";

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
          }, 100);
        }
      }
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Floating Blog Button */}
      <a
        href="https://blog.lagaryan.click"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 z-50 inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors shadow-lg"
      >
        <FileText className="w-4 h-4" />
        Read My Blogs
      </a>

      <Hero />
      <CliShowcase />
      <About />
      <ProjectSection />
      <Skills />
      <Experience />
      <Awards />
      <Contact />
    </main>
  );
}
