import { projectsData } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

type Props = { params: Promise<{ id: string }> };
export function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}
export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  return {
    title: project?.title ?? "Project not found",
    description: project?.description,
  };
}
export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  if (!project) notFound();
  const hasLiveLink = project.liveLink && project.liveLink !== "#";
  const hasSource = project.githubLink && project.githubLink !== "#";
  return (
    <article>
      <Link href="/projects" className="back-link">
        <ArrowLeft size={14} />
        All projects
      </Link>
      <header className="page-heading">
        {project.recognition && (
          <span className="eyebrow">{project.recognition}</span>
        )}
        <h1>{project.title}</h1>
        <p>{project.impactFocus ?? project.tagline}</p>
        <div className="project-actions">
          {hasLiveLink && (
            <a
              className="text-button primary"
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.id === "learnai"
                ? "Get it on Google Play"
                : "Visit project"}
              <ArrowUpRight size={15} />
            </a>
          )}
          {hasSource && (
            <a
              className="text-button"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source on GitHub
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </header>
      <section className="detail-section">
        <h2>About the project</h2>
        <p>{project.description}</p>
      </section>
      {project.metrics.length > 0 && (
        <section className="detail-section">
          <h2>Highlights</h2>
          <ul>
            {project.metrics.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        </section>
      )}
      <section className="detail-section">
        <h2>Built with</h2>
        <div className="tag-list">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>
      {!hasLiveLink && (
        <p className="detail-end quiet-link">
          {hasSource
            ? "This project is available as source code."
            : "A hardware experiment; no public demo is available."}
        </p>
      )}
      <div className="detail-end">
        <Link className="quiet-link" href="/projects">
          <ArrowLeft size={14} />
          Explore more projects
        </Link>
      </div>
    </article>
  );
}
