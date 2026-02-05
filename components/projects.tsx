// src/components/ProjectSection.tsx
"use client";

import { motion } from 'motion/react';
import { projectsData } from "@/lib/data";
import Link from "next/link";
import { Github, ExternalLink, Award } from "lucide-react";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center p-6 pt-16 md:p-12 md:pt-24 lg:p-16 lg:pt-28 xl:p-24 xl:pt-32"
    >
      <div className="max-w-5xl w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-3">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Selected Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my journey in building scalable applications,
            AI agents, and solving real-world problems.
          </p>
        </motion.div>

        {/* Noir Divider */}
        <div className="noir-divider">
          <span className="w-2 h-2 bg-accent rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...projectsData].sort((a, b) => {
            const aHasLive = a.liveLink && a.liveLink !== "#";
            const bHasLive = b.liveLink && b.liveLink !== "#";
            if (aHasLive && !bHasLive) return -1;
            if (!aHasLive && bHasLive) return 1;
            return 0;
          }).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="paper-card"
            >
              <div className="bg-card p-6 border border-border relative group hover:border-accent/50 transition-colors">
                {/* Project Number Label */}
                <div className="absolute -top-3 left-4 px-3 py-1 bg-foreground text-background text-xs tracking-widest uppercase">
                  Project {String(index + 1).padStart(2, '0')}
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-4 mt-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      <Link href={`/projects/${project.id}`} className="hover:underline">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-sm italic mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 ml-4">
                    {project.githubLink && project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Recognition Badge */}
                {project.recognition && (
                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/30 text-accent text-xs">
                    <Award className="w-3 h-3" />
                    {project.recognition}
                  </div>
                )}

                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="border-t border-dashed border-border pt-4">
                  <p className="text-muted-foreground text-xs uppercase tracking-widest mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* View Details Link */}
                <div className="mt-4 pt-4 border-t border-border">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    View Details
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
