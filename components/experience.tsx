// app/experience/page.tsx (or wherever your Experience component is)
'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";

interface ExperienceEntry {
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
  projectLink?: string;
  projectLinkText?: string;
}

const experiences: ExperienceEntry[] = [
  {
    role: "Flutter Development Intern",
    company: "Persist Ventures",
    duration: "May 2024 - July 2024",
    description: [
      "Scaled mobile excellence by serving 15,000+ users.",
      "Achieved a 30% reduction in latency through optimization.",
      "Gained expertise in enterprise-level Flutter development and backend API integration."
    ],
    technologies: ["Flutter", "Django APIs", "Git", "Agile"],
    projectLink: "https://neighborgood.io/",
    projectLinkText: "View Project",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-20 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-left tracking-tight">
          Work Experience
        </h2>

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold leading-none">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-muted-foreground mt-1">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                  {exp.duration}
                </span>
              </div>

              <div className="space-y-4">
                <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {exp.projectLink && (
                  <div className="pt-2">
                    <Button asChild variant="link" className="p-0 h-auto font-medium text-primary hover:no-underline group">
                      <Link href={exp.projectLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        {exp.projectLinkText || "View Project"}
                        <ArrowUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}