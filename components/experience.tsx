// app/experience/page.tsx
'use client';

import { motion } from 'motion/react';
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
    role: "Systems Engineer (Mainframe Developer)",
    company: "Infosys",
    duration: "Feb 2026 - Present",
    description: [
      "Specializing in mainframe application development, writing highly optimized COBOL and JCL scripts on IBM z/OS.",
      "Completed comprehensive enterprise training in Java, SQL, and relational database systems.",
      "Maintaining, upgrading, and debugging mission-critical core database queries using DB2."
    ],
    technologies: ["COBOL", "JCL", "IBM z/OS", "DB2", "Java", "SQL"],
  },
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
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-3">
            Career Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional Experience
          </h2>
        </motion.div>

        {/* Noir Divider */}
        <div className="noir-divider">
          <span className="w-2 h-2 bg-accent rounded-full" />
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-accent"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-accent mt-1">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-3 py-1 w-fit">
                  {exp.duration}
                </span>
              </div>

              {/* Description */}
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-3 text-foreground/70 text-sm"
                  >
                    <span className="text-muted-foreground mt-1">—</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              {exp.projectLink && (
                <Link 
                  href={exp.projectLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-sm text-accent hover:underline group"
                >
                  {exp.projectLinkText || "View Project"}
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
