"use client";
import { Home, Info, Code, Wrench, Mail, Briefcase, Award, FileText } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./toggle";
import { useHashScroll } from "@/components/hashScroll";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/#about", icon: Info },
  { title: "Projects", url: "/#projects", icon: Code },
  { title: "Skills", url: "/#skills", icon: Wrench },
  { title: "Experience", url: "/#experience", icon: Briefcase },
  { title: "Awards", url: "/#award", icon: Award },
  { title: "Contact", url: "/#contact", icon: Mail },
  { title: "Blogs", url: "https://blog.lagaryan.click/", icon: FileText },
];

export function AppSidebar() {
  const handleHashNavigation = useHashScroll();

  return (
    <Sidebar className="border-r border-border bg-sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs tracking-[0.2em] uppercase text-muted-foreground px-4 py-3">
            Aryan Gupta
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button
                      type="button"
                      onClick={() => handleHashNavigation(item.url)}
                      className="flex items-center gap-3 w-full px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-muted transition-colors group"
                    >
                      <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-border p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Theme
          </span>
          <ModeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
