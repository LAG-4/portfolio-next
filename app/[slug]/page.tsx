import { Portrait } from "@/components/portrait";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Experience,
  ProjectList,
  SectionHeading,
  selectedProjects,
} from "@/components/portfolio-content";
type Props = { params: Promise<{ slug: string }> };
function companyName(slug: string) {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return {
    title: `Hello, ${companyName(slug)}`,
    robots: { index: false, follow: true },
  };
}
export default async function RecruiterPage({ params }: Props) {
  const { slug } = await params;
  const company = companyName(slug);
  return (
    <>
      <header className="page-heading">
        <span className="eyebrow">A note for {company}</span>
        <div className="profile-heading">
          <Portrait />
          <div>
            <h1>Hey, I’m Aryan.</h1>
            <p className="profile-subtitle">
              I’d love to build something with {company}.
            </p>
          </div>
        </div>
      </header>
      <div className="intro-copy">
        <p>
          I’m a developer and systems engineer based in Hyderabad. I work at
          Infosys on the IKEA account, monitoring production systems and
          coordinating incidents.
        </p>
        <p>
          Outside of that, I build web and mobile apps, explore AI, and run a
          Linux homelab. I’d bring that mix of hands-on development and
          operational awareness to {company}.
        </p>
      </div>
      <div className="project-actions">
        <a
          className="text-button primary"
          href="mailto:aryangupta4feb@gmail.com"
        >
          Let’s talk
          <ArrowUpRight size={14} />
        </a>
        <a
          className="text-button"
          href="/resume.pdf"
          download="Aryan_Gupta_Resume.pdf"
        >
          Download résumé
          <ArrowUpRight size={14} />
        </a>
      </div>
      <section className="home-section">
        <SectionHeading title="Experience" />
        <Experience />
      </section>
      <section className="home-section">
        <SectionHeading
          title="A few things I’ve built"
          href="/projects"
          link="All projects"
        />
        <ProjectList projects={selectedProjects} />
      </section>
      <section className="home-section">
        <SectionHeading title="Education & background" />
        <div className="prose">
          <p>
            <strong>Vellore Institute of Technology</strong>
            <br />
            B.Tech in Computer Science, 2021–2025 · GPA 8.18/10
          </p>
          <p>
            Coursework in data structures, algorithms, mobile development,
            databases, and object-oriented programming. National winner at Smart
            India Hackathon 2023 with{" "}
            <Link href="/projects/shesafe">SheSafe</Link>.
          </p>
          <p>English (fluent), Hindi (native), and French (basic).</p>
        </div>
      </section>
      <section className="home-section">
        <SectionHeading title="My toolkit" />
        <p className="tools-copy">
          React, Next.js, TypeScript, Flutter, Dart, Python, LangChain,
          Firebase, AWS, Linux, n8n, Git, Grafana, and Splunk.
        </p>
      </section>
    </>
  );
}
