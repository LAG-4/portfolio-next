import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Experience, SectionHeading } from "@/components/portfolio-content";
import { CopyCommand } from "@/components/copy-command";
export const metadata = { title: "About" };
export default function AboutPage() {
  return (
    <>
      <header className="page-heading">
        <span className="eyebrow">A little more about me</span>
        <h1>Hi again.</h1>
        <p>
          I’m Aryan, a developer and systems engineer in Hyderabad. I enjoy
          building useful software, figuring out how systems work, and
          occasionally making a video out of it all.
        </p>
      </header>
      <section className="home-section" id="experience">
        <SectionHeading title="Where I’ve worked" />
        <Experience />
      </section>
      <section className="home-section" id="skills">
        <SectionHeading title="Tools I reach for" />
        <p className="tools-copy">
          TypeScript, React & Next.js for the web. Flutter & Dart for mobile.
          Python for AI and automation. Firebase, AWS, Linux, and a homelab for
          everything in between.
        </p>
      </section>
      <section className="home-section" id="education">
        <SectionHeading title="Education & a highlight" />
        <div className="prose">
          <p>
            B.Tech in Computer Science from Vellore Institute of Technology,
            2021–2025. GPA: 8.18/10.
          </p>
          <p>
            Our team won <strong>Smart India Hackathon 2023</strong> with{" "}
            <Link href="/projects/shesafe">SheSafe</Link>, a campus safety
            system connecting a mobile app, IoT wearables, and real-time alerts.
          </p>
        </div>
      </section>
      <section className="home-section">
        <SectionHeading title="Away from work" />
        <p className="tools-copy">
          I experiment with AI, self-host services on my Linux homelab, and{" "}
          <Link className="quiet-link" href="/editing">
            edit videos ↗
          </Link>
          . You can find more of what I’m doing on{" "}
          <Link className="quiet-link" href="/linktree">
            my other corners of the internet ↗
          </Link>
          .
        </p>
      </section>
      <section className="home-section terminal-note" id="terminal-cli">
        <SectionHeading title="More of a terminal person?" />
        <p>There’s a version of this portfolio for that, too.</p>
        <CopyCommand />
        <a className="quiet-link" href="/cli">
          View the CLI output
          <ArrowUpRight size={13} />
        </a>
      </section>
    </>
  );
}
