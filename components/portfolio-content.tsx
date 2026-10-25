import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projectsData, type Project } from "@/lib/data";

const summaries: Record<string, string> = {
  learnai:
    "Bite-sized AI lessons, a learning path, and daily updates. Built with Flutter, available on Android.",
  "hyd-cafe-finder":
    "A guide to Hyderabad’s cafés, with the details that matter: Wi-Fi, a place to work, and good offers.",
  "nailbar-by-kritika":
    "A website and local search presence for a nail salon and academy in Karnal.",
  shesafe:
    "A campus safety app connecting real-time alerts, IoT wearables, and location tracking.",
};
export const selectedProjects = [
  "learnai",
  "nailbar-by-kritika",
  "hyd-cafe-finder",
  "shesafe",
].map((id) => projectsData.find((p) => p.id === id)!);

export function ProjectList({
  projects = projectsData,
}: {
  projects?: Project[];
}) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <Link
          href={`/projects/${project.id}`}
          className="project-row"
          key={project.id}
        >
          <div className="project-row-top">
            <h3>{project.title}</h3>
            <ArrowUpRight size={17} aria-hidden="true" />
          </div>
          <p>
            {summaries[project.id] ?? project.impactFocus ?? project.tagline}
          </p>
          <span className="project-stack">
            {project.techStack.slice(0, 3).join(" / ")}
            {project.id === "shesafe" ? " · SIH 2023 winner" : ""}
          </span>
        </Link>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <div className="experience-list">
      <div className="experience-row">
        <span className="date">2026 — now</span>
        <div>
          <h3>
            Systems Engineer <span>at Infosys</span>
          </h3>
          <p>
            Monitoring IKEA’s web, app, and in-store systems with Grafana and
            Splunk. Raising incident tickets and helping the right teams
            respond.
          </p>
        </div>
      </div>
      <div className="experience-row">
        <span className="date">May — Jul 2024</span>
        <div>
          <h3>
            Flutter Intern <span>at Persist Ventures</span>
          </h3>
          <p>
            Worked on a production app serving 15,000+ devices, integrated
            Django APIs, and improved client performance.
          </p>
          <a
            className="quiet-link"
            href="https://neighborgood.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neighborgood <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function SectionHeading({
  title,
  href,
  link,
}: {
  title: string;
  href?: string;
  link?: string;
}) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {href && (
        <Link className="quiet-link" href={href}>
          {link}
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
