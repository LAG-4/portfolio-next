// Shared, real portfolio content for the /1–/5 design explorations.
// Single source of truth so every design shows identical, accurate facts.

import { projectsData, type Project } from "@/lib/data";

export { projectsData };
export type { Project };

export const profile = {
  name: "Aryan Gupta",
  handle: "LAG-4",
  role: "Full-Stack & AI Developer",
  roleLong: "Full-Stack Developer, AI Engineer & Freelancer",
  location: "Hyderabad, India",
  education: "B.Tech Computer Science @ VIT",
  email: "aryangupta4feb@gmail.com",
  phone: "+91 9267913652",
  resume: "/resume.pdf",
  available: true,
  availabilityLabel: "Available for freelance work",
  // Short, honest positioning lines reused across designs.
  tagline: "I build shipped products — full-stack apps, AI agents, and mobile.",
  intro:
    "I'm a computer-science engineer who turns ideas into shipped products. I build full-stack web and mobile apps, wire up autonomous AI agents, and — by day — engineer resilient transactional logic on IBM z/OS mainframes at Infosys. Open to freelance builds.",
  bio: [
    "Obsessed with emerging AI and building intelligent systems that actually ship.",
    "Love turning ideas into functional, polished products end-to-end.",
    "Believe great design makes great products — form follows function.",
  ],
} as const;

export const socials = [
  { label: "GitHub", handle: "LAG-4", href: "https://github.com/LAG-4" },
  { label: "LinkedIn", handle: "aryan-gupta4203", href: "https://www.linkedin.com/in/aryan-gupta4203/" },
  { label: "Twitter", handle: "@lag_aryan", href: "https://x.com/lag_aryan" },
] as const;

export const experiences = [
  {
    role: "Systems Engineer (Mainframe Developer)",
    company: "Infosys",
    duration: "Feb 2026 — Present",
    location: "India",
    description: [
      "Writing highly optimized COBOL and JCL on IBM z/OS for mission-critical enterprise systems.",
      "Completed comprehensive enterprise training in Java, SQL, and relational database systems.",
      "Maintaining, upgrading, and debugging core DB2 database queries.",
    ],
    technologies: ["COBOL", "JCL", "IBM z/OS", "DB2", "Java", "SQL"],
  },
  {
    role: "Flutter Development Intern",
    company: "Persist Ventures",
    duration: "May 2024 — July 2024",
    location: "Remote",
    description: [
      "Scaled mobile app experiences serving 15,000+ users.",
      "Achieved a 30% reduction in latency through state & render optimization.",
      "Built enterprise Flutter features with Django REST API integration.",
    ],
    technologies: ["Flutter", "Dart", "Django APIs", "Git", "Agile"],
    projectLink: "https://neighborgood.io/",
    projectLinkText: "neighborgood.io",
  },
] as const;

export const awards = [
  {
    title: "Smart India Hackathon 2023",
    subtitle: "National Winner — 1st Place",
    description:
      'Led team "HUSTLERS" to victory building "SheSafe", an AI-powered campus-safety system integrating IoT wearables, Flutter, ML, and Aadhaar verification.',
    href: "https://czm1cc74dv.ufs.sh/f/8kIHA8Et9mP5cOfjKTCQm7Ynx3kjXLgI9ap28fRtuEGNHVbq",
    image: "/images/sih.jpeg",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    subtitle: "Certified",
    description:
      "Validated expertise across AWS core services, security, and cloud architecture fundamentals.",
    href: "https://czm1cc74dv.ufs.sh/f/8kIHA8Et9mP52ZMTwKNYjuVOZdQqw4bvYzyEST8xFpCmPRgA",
    image: "/images/aws.png",
  },
] as const;

export const skillGroups = [
  {
    title: "AI & Intelligent Systems",
    skills: [
      { name: "AI Agents", level: 95 },
      { name: "LangChain", level: 85 },
      { name: "Google Gemini", level: 92 },
      { name: "OpenAI API", level: 90 },
      { name: "RAG Systems", level: 90 },
    ],
  },
  {
    title: "Full-Stack Development",
    skills: [
      { name: "Flutter & Dart", level: 95 },
      { name: "Python", level: 90 },
      { name: "Next.js / React", level: 82 },
      { name: "TypeScript", level: 80 },
      { name: "MERN Stack", level: 72 },
    ],
  },
  {
    title: "Mainframe & Data",
    skills: [
      { name: "COBOL / JCL", level: 80 },
      { name: "IBM z/OS", level: 78 },
      { name: "DB2 / SQL", level: 80 },
      { name: "Java", level: 80 },
    ],
  },
  {
    title: "Infra & Tools",
    skills: [
      { name: "Firebase", level: 78 },
      { name: "AWS", level: 72 },
      { name: "Linux", level: 72 },
      { name: "Git & GitHub", level: 95 },
    ],
  },
] as const;

// Flat skill list for marquees / chips.
export const skillsFlat = skillGroups.flatMap((g) => g.skills.map((s) => s.name));

export const stats = [
  { value: "10+", label: "Shipped projects" },
  { value: "1st", label: "Smart India Hackathon '23" },
  { value: "15K+", label: "Users reached" },
  { value: "2", label: "Cloud & mainframe stacks" },
] as const;

// The five design routes, for the switcher / index.
// Out-of-distribution worlds dealt by Impeccable's concept-seed engine.
export const designRoutes = [
  { slug: "1", name: "Type Lab", blurb: "An interactive variable-font specimen — drag the axes, every glyph morphs live." },
  { slug: "2", name: "Signal", blurb: "Seven-segment LED signage — clocks, scoreboards and price totems, readable at any distance." },
  { slug: "3", name: "Console", blurb: "A starship control panel — pastel elbow frames, code clusters, banks you travel between." },
  { slug: "4", name: "Ink Basin", blurb: "A basin of suminagashi ink — stir marbled currents across the page with your cursor." },
  { slug: "5", name: "Ghost Press", blurb: "A silkscreen edition house — off-register repeats, halftone grain, silver foil." },
] as const;
