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
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center p-6 pt-16 md:p-12 md:pt-24 lg:p-16 lg:pt-28 xl:p-24 xl:pt-32"
    >
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-extrabold mb-4 text-center">
          Selected Works
        </h1>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A collection of projects showcasing my journey in building scalable applications,
          AI agents, and solving real-world problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...projectsData].sort((a, b) => {
            const aHasLive = a.liveLink && a.liveLink !== "#";
            const bHasLive = b.liveLink && b.liveLink !== "#";
            if (aHasLive && !bHasLive) return -1;
            if (!aHasLive && bHasLive) return 1;
            return 0;
          }).map((project) => (
            <Card key={project.id} className="flex flex-col h-full border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  <Link href={`/projects/${project.id}`} className="hover:underline focus:underline outline-none">
                    {project.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-2 mt-2">
                  {project.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.techStack.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between gap-2 pt-0 mt-auto">
                <Link href={`/projects/${project.id}`} className="text-sm text-muted-foreground group-hover:text-foreground transition-colors hover:underline">
                  View Details
                </Link>
                <div className="flex gap-2">
                  {project.githubLink && project.githubLink !== "#" && (
                    <div className="p-2 rounded-full hover:bg-muted transition-colors">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </a>
                    </div>
                  )}
                  {project.liveLink && project.liveLink !== "#" && (
                    <div className="p-2 rounded-full hover:bg-muted transition-colors">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </a>
                    </div>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}