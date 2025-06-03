import {Home,Info, Code, Wrench, Mail, Briefcase, Award } from "lucide-react"

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
} from "@/components/ui/sidebar"
import { ModeToggle } from "./toggle"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#home",
    icon: Home,
  },
  {
    title: "About",
    url: "#about",
    icon: Info,
  },
  {
    title: "Projects",
    url: "#projects",
    icon: Code,
  },
  {
    title: "Skills",
    url: "#skills",
    icon: Wrench,
  },
  {
    title: "Experience",
    url: "#experience",
    icon: Briefcase,
  },
    {
    title: "Awards",
    url: "#award",
    icon: Award,
  },
    {
    title: "Contact",
    url: "#contact",
    icon: Mail,
  },
]

export function AppSidebar() {
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
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle></ModeToggle>
      </SidebarFooter>
    </Sidebar>
  )
}