// src/components/ProjectSection.tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define the structure of a project
interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  metrics: string[];
  techStack: string[];
  recognition?: string;
  impactFocus?: string;
  liveLink?: string;
  githubLink?: string;
  // previewUrl and image are no longer used for display
}

// Project data - previewUrl and image fields can be removed or kept for data purposes
const projectsData: Project[] = [
  {
  id: "shesafe",
  title: "SheSafe",
  tagline: "Safety Through Technology - Campus Security Reimagined", // Slightly enhanced tagline
  description:
    "SheSafe is a specialized safety application designed to enhance the security and well-being of female students and faculty on college campuses. It integrates advanced technologies like Firebase, IoT wearables, AI-based gender/emotion detection from CCTV, and Aadhaar API for robust security features, real-time tracking, secure chat, and automated emergency response mechanisms.",
  metrics: [
    "5K+ Users Engaged", // Kept existing, rephrased slightly
    "100% Authentication Accuracy (via Aadhaar)", // Kept existing, added context
    "Real-time Location Tracking",
    "AI-Powered Anomaly Detection",
    "IoT Wearable Integration",
  ],
  techStack: [
    "Flutter",        // Frontend
    "Dart",           // Frontend
    "Firebase",       // Backend (Real-time DB, Auth, FCM)
    "Python",         // Backend (AI model integration)
    "Aadhaar API",    // Backend (Verification)
    "Arduino",        // IoT
    "TensorFlow",     // AI
    "Keras",          // AI
    "Google Maps API",// Additional Tools
    // "FCM" is covered by Firebase
    // "IoT" and "AI" are general categories, specific tools are listed
  ],
  recognition: "Smart India Hackathon Winner",
  impactFocus: "Enhancing campus safety for women through integrated technology and proactive alerts.",
  liveLink: "#", // Replace if you have a live demo link
  githubLink: "https://github.com/LAG-4/sih",
},
  {
  id: "gaias-touch",
  title: "Gaia's Touch",
  tagline: "Connecting Hearts, Changing Lives - Bridging Volunteers & NGOs", // Enhanced tagline
  description:
    "Gaia's Touch is a comprehensive mobile platform developed using Flutter for the frontend and Spring Boot for the backend, designed to seamlessly connect volunteers with NGOs. It features intuitive user registration/login, dynamic NGO discovery via SDGs and location, efficient volunteer request matching, and secure in-app donations integrated with Google Pay. The platform underwent rigorous unit, integration, and API testing.",
  metrics: [
    "50% Donation Increase (from previous data)", // Kept from original if still relevant
    "Smooth User Registration & Login Flow",
    "Dynamic NGO Discovery (SDG & Location-based)",

  ],
  techStack: [
    "Flutter",        // Frontend
    "Dart",           // Frontend (implied by Flutter)
    "Spring Boot",    // Backend API
    "Java",           // Backend (implied by Spring Boot)
    "JPA (Hibernate)",// Backend ORM (implied by @Entity)
    "MySQL",          // Database
    "Google Pay API", // Donations
    "Postman",        // API Testing
    // "SDG Integration" is a feature, not a specific tech
  ],
  impactFocus: "Seamlessly connecting volunteers with NGOs to foster community engagement and support sustainable development goals.",
  liveLink: "#", // Replace if you have a live demo link
  githubLink: "https://github.com/LAG-4/gaias-new",
},
  {
  id: "quantum-finance-screener", // Changed ID to reflect the app's branding
  title: "Quantum Finance - AI Stock Screener", // Updated title
  tagline: "AI-Powered Market Analysis & Financial Insights", // Enhanced tagline
  description:
    "An advanced stock market analysis and financial insights platform built with Streamlit, featuring a modern glassmorphism UI. It leverages multiple AI agents (powered by Google Gemini and Groq's Llama models via the `agno` library) to provide comprehensive stock analysis, including fundamentals, analyst recommendations, technical indicators, recent news impact, and an interactive AI financial assistant. The tool integrates YFinance for financial data and DuckDuckGo for web searches, presenting all information in structured tables and interactive charts.",
  metrics: [


  ],
  techStack: [
    "Streamlit",      // Frontend Framework
    "Python",         // Core Language
    "agno library",   // AI Agent Framework
    "Google Gemini",  // LLM
    "Groq API (Llama)", // LLM
    "YFinanceTools",  // Financial Data
    "DuckDuckGoTools",// Web Search
    "Custom CSS",     // For Glassmorphism UI
    "dotenv",         // Environment Variables
  ],
  impactFocus: "Empowering investors with AI-driven, real-time financial data analysis and decision support.",
  liveLink: "https://finance-agent-three.vercel.app/", // Kept your existing live link
  githubLink: "https://github.com/LAG-4/finance_agent", // Kept your existing GitHub link
},
  {
  id: "ai-news-reporter",
  title: "AI News Reporter Agent",
  tagline: "Automated AI News, Delivered Daily",
  description:
    "A Python-based AI agent that automatically researches and compiles the top 10 latest news and breakthroughs in Artificial Intelligence. It leverages the `agno` library, Google's Gemini model for synthesis, and DuckDuckGo for comprehensive web and news searches. The agent generates a structured Markdown report daily, complete with citations.",
  metrics: [
    "Generates Top 10 AI News Items",
    "Daily Markdown Report Output",
    "Automated Research & Synthesis",
    "Proper Source Citation",
  ],
  techStack: [
    "Python",
    "agno library",
    "Google Gemini",
    "DuckDuckGo Tools",
    "Markdown",
    "dotenv",
  ],
  impactFocus: "Automated AI Trend Tracking & Reporting",
  // liveLink: "#", // Not applicable for a script that generates local files, unless output is hosted
  githubLink: "https://github.com/LAG-4/ai-newsletter-via-agent", // Replace with the actual GitHub repository link if you have one
},
{
  id: "health-trends-bot",
  title: "Health & Wellness Trends Discord Bot",
  tagline: "Your AI Assistant for Viral Health Content Ideas",
  description:
    "A Python-based Discord bot designed to identify trending health and wellness topics and generate engaging content ideas for Instagram Reels and YouTube Shorts. It uses the `phi-agent` library with Groq's Llama3 model for AI capabilities, DuckDuckGo for web research, and `discord.py` for bot functionality. Features include automated daily trend reports and on-demand content idea generation via commands.",
  metrics: [
    "Identifies Health/Wellness Trends",
    "Generates Instagram Reel/Short Ideas",
    "Automated Daily Discord Reports",
    "Interactive Bot Commands (`!trends`, `!video_idea`)",
    "Includes Hashtags & Source Links",
  ],
  techStack: [
    "Python",
    "discord.py",
    "phi-agent",
    "Groq API (Llama3)",
    "DuckDuckGo",
    "agno DiscordTools", // For agent's Discord interaction
    "dotenv",
  ],
  impactFocus: "Automating Health Content Creation & Trend Spotting",
  // liveLink: "#", // Not applicable unless there's a public server/invite link you want to share
  githubLink: "https://github.com/LAG-4/ai-agent-discord-bot", // Replace with the actual GitHub repository link if you have one
},
  {
    id: "voice-car",
    title: "Voice-Controlled Car",
    tagline: "The Future of Transportation",
    description:
      "Innovative project integrating Google Assistant for vehicle control via voice commands, showcasing hardware-software fusion.",
    metrics: ["90% voice command accuracy"],
    techStack: ["Raspberry Pi", "IoT", "Voice AI","IFTTT","Google Assistant","Relay Motors","RaspberryPI Car Kit"],
    impactFocus: "Hardware-software fusion",
    liveLink: "#",
    githubLink: "#",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen snap-start flex flex-col items-center justify-center p-6 pt-16 md:p-12 md:pt-24 lg:p-16 lg:pt-28 xl:p-24 xl:pt-32"
    >
      <h1 className="text-4xl font-extrabold mb-12 text-center">
        Projects That Matter
      </h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
      >
        <CarouselContent className="-ml-4">
          {projectsData.map((project) => (
            <CarouselItem
              key={project.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1 h-full">
                <Card className="flex flex-col h-full border-border/40 hover:border-border/80 transition-colors duration-300">
                  <CardHeader> {/* Restored default padding or adjust as needed */}
                    <CardTitle className="text-2xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-primary mt-1">
                      {project.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4"> {/* Default padding or adjust */}
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">
                        Key Highlights
                      </h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {project.metrics.map((metric) => (
                          <li key={metric}>{metric}</li>
                        ))}
                        {project.recognition && (
                          <li>{project.recognition}</li>
                        )}
                        {project.impactFocus && (
                          <li>Impact: {project.impactFocus}</li>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-3 pt-4 mt-auto"> {/* Default padding or adjust */}
                    {project.liveLink && project.liveLink !== "#" && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Live
                        </a>
                      </Button>
                    )}
                    {project.githubLink && project.githubLink !== "#" && (
                      <Button asChild variant="default" size="sm">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}