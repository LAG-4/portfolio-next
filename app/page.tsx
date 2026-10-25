import { Suspense } from "react";
import { Portrait } from "@/components/portrait";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/portfolio-content";
import { CopyCommand } from "@/components/copy-command";
import { GitHubActivity } from "@/components/github-activity";

export const revalidate = 3600;

const projects = [
  {
    id: "learnai",
    name: "LearnAI",
    description: "AI lessons, in your pocket.",
  },
  {
    id: "nailbar-by-kritika",
    name: "Nail Bar by Kritika",
    description: "A website for a local business.",
  },
  {
    id: "shesafe",
    name: "SheSafe",
    description: "Campus safety. SIH 2023 winner.",
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="intro" aria-labelledby="intro-title">
        <div className="profile-heading">
          <Portrait preload />
          <div>
            <h1 id="intro-title">
              Hey, I’m Aryan<span className="accent">.</span>
            </h1>
            <p className="profile-subtitle">Developer & systems engineer.</p>
            <span className="location">
              <span />
              Hyderabad, India
            </span>
          </div>
        </div>
        <div className="intro-copy">
          <p>
            I build web and mobile apps, tinker with AI, and run a little
            homelab. Currently at Infosys, working on the IKEA account.
            Sometimes, I <Link href="/editing">edit videos</Link>.
          </p>
        </div>
        <div className="intro-links">
          <a href="mailto:aryangupta4feb@gmail.com">
            Say hello
            <ArrowUpRight size={14} />
          </a>
          <a href="/resume.pdf" download="Aryan_Gupta_Resume.pdf">
            Résumé
            <ArrowUpRight size={14} />
          </a>
          <Link href="/about">
            More about me
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
      <Suspense
        fallback={
          <section
            className="github-activity activity-loading"
            aria-label="Loading GitHub activity"
          >
            <h2>On GitHub</h2>
            <p>Loading contributions…</p>
          </section>
        }
      >
        <GitHubActivity />
      </Suspense>
      <section className="compact-projects" id="projects">
        <SectionHeading
          title="Selected projects"
          href="/projects"
          link="View all"
        />
        <div>
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="compact-project"
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
      <section
        className="home-cli"
        id="terminal-cli"
        aria-labelledby="home-cli-title"
      >
        <div className="section-heading">
          <h2 id="home-cli-title">Prefer the terminal?</h2>
          <a className="quiet-link" href="/cli">
            View CLI <ArrowUpRight size={13} />
          </a>
        </div>
        <CopyCommand />
      </section>
      <Link className="now-teaser" href="/now">
        <span>In my corner of the internet</span>
        <span>
          Models, favourites & a few goals <ArrowUpRight size={13} />
        </span>
      </Link>
    </div>
  );
}
