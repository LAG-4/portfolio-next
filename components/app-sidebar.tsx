"use client";
import { Home, Info, Code, Wrench, Mail, Briefcase, Award, File } from "lucide-react";
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
import { useHashScroll } from "@/components/hashScroll"; // <-- import

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/#about", icon: Info },
  { title: "Projects", url: "/#projects", icon: Code },
  { title: "Skills", url: "/#skills", icon: Wrench },
  { title: "Experience", url: "/#experience", icon: Briefcase },
  { title: "Awards", url: "/#award", icon: Award },
  { title: "Contact", url: "/#contact", icon: Mail },
  { title: "Blogs", url: "https://blog.lagaryan.click/", icon: File },
];

export function AppSidebar() {
  const handleHashNavigation = useHashScroll();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Aryan Gupta</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button
                      type="button"
                      onClick={() => handleHashNavigation(item.url)}
                      className="flex items-center gap-2 w-full"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
