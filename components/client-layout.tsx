"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
  courierPrimeClass: string;
}

export function ClientLayoutWrapper({ children, courierPrimeClass }: ClientLayoutWrapperProps) {
  const pathname = usePathname();
  
  // Identify if we are on one of the new high-density premium routed portfolio pages
  const isRedesignedRoute = pathname === "/";

  if (isRedesignedRoute) {
    // For redesigned pages: no sidebar, no film grain, no forced Courier Prime font at root level.
    // We will apply our premium modern typography (Outfit / Inter) inside those pages.
    return (
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {children}
      </div>
    );
  }

  // Legacy pages behavior (remains exactly as it was)
  return (
    <div className={`${courierPrimeClass} film-grain min-h-screen flex`}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <main className="flex-1 w-full relative">
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
