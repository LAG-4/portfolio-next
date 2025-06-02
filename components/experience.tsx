// app/experience/page.tsx (or wherever your Experience component is)
'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; // Import Button
import Link from 'next/link'; // Import Next.js Link for internal routing if needed
// Or import an icon for the button, e.g., from lucide-react
// import { ArrowUpRight } from 'lucide-react';

interface ImpactMetric {
  label: string;
  value: string;
}

interface ExperienceEntry {
  role: string;
  company: string;
  duration: string;
  subtitle: string;
  keyImpact: ImpactMetric[];
  learnings: string[];
  technologies: string[];
  projectLink?: string; // Optional: URL to the project(s)
  projectLinkText?: string; // Optional: Text for the button, e.g., "View Related Projects"
}

const experiences: ExperienceEntry[] = [
  {
    role: "Flutter Development Intern",
    company: "Persist Ventures",
    duration: "May 2024 - July 2024",
    subtitle: "Where I Scaled Mobile Excellence",
    keyImpact: [
      { label: "Users Served", value: "15,000+" },
      { label: "Latency Reduction", value: "30%" },
      { label: "Delivery Efficiency", value: "+25%" },
      { label: "User Satisfaction", value: "+40%" },
    ],
    learnings: [
      "Enterprise-level Flutter development",
      "Backend API integration at scale",
      "Agile development methodologies",
      "User-centric design principles",
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
      className="w-full min-h-screen snap-start flex flex-col items-center p-6 pt-16 md:p-12 md:pt-24 lg:p-16 lg:pt-28 xl:p-24 xl:pt-32"
    >
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
          Journey Through Innovation
        </h1>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-4 sm:gap-6">
              {/* Timeline Visual Column */}
              <div className="flex flex-col items-center w-6">
                <div className="w-3 h-3 rounded-full bg-primary mt-1"></div>
                {index < experiences.length - 1 && (
                  <div className="w-0.5 flex-grow bg-border my-2"></div>
                )}
              </div>

              {/* Content Card Column */}
              <div className="flex-1">
                <Card className="shadow-lg">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 mb-1">
                      <div>
                        <CardTitle className="text-xl md:text-2xl">{exp.role}</CardTitle>
                        <p className="text-sm">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="whitespace-nowrap mt-1 sm:mt-0">
                        {exp.duration}
                      </Badge>
                    </div>
                    <p className="text-md italic">
                      {exp.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Key Impact
                      </h3>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {exp.keyImpact.map((impact, i) => (
                          <div key={i} className="p-3 rounded-md border text-center">
                            <p className="text-xl sm:text-2xl font-bold">
                              {impact.value}
                            </p>
                            <p className="text-xs sm:text-sm">
                              {impact.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        What I Learned
                      </h3>
                      <ul className="list-disc list-outside space-y-1 pl-5 text-sm">
                        {exp.learnings.map((learning, i) => (
                          <li key={i}>{learning}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Link Button */}
                    {exp.projectLink && (
                      <div className="pt-4"> {/* Added padding-top for separation */}
                        <Button asChild variant="default" className="w-full sm:w-auto">
                          {/*
                            Use `asChild` if `Link` is a direct child for proper composition.
                            If projectLink is external, use <a> tag directly.
                            If projectLink is internal (like "/projects#some-id"), use Next.js Link.
                          */}
                          <Link href={exp.projectLink}>
                            {exp.projectLinkText || "View Project"}
                            {/* Optional: Add an icon like <ArrowUpRight className="ml-2 h-4 w-4" /> */}
                          </Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}