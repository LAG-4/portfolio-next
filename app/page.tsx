'use client'

import About from "@/components/about";
import Award from "@/components/awards";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Poroject from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"



export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
      <Hero/>
      <About/>
      <Poroject/>
      <Skills/>
      <Experience/>
      <Award/>
      <Contact/>
      </SidebarProvider>
    </main>
  );
}