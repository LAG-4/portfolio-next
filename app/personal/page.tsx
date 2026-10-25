import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Portrait } from "@/components/portrait";
export const metadata = {
  title: "LAG, off the clock",
  description:
    "The personal side of Aryan Gupta, also known as LAG. Projects in progress, videos, models, and a few goals.",
};
export default function PersonalPage() {
  return (
    <div className="personal-home">
      <header className="profile-heading">
        <Portrait preload />
        <div>
          <span className="eyebrow">Off the clock</span>
          <h1>
            Call me LAG<span className="accent">.</span>
          </h1>
          <p className="profile-subtitle">The person behind the projects.</p>
        </div>
      </header>
      <div className="intro-copy">
        <p>
          I’m Aryan. I love tech, build things, and spend a fair amount of time
          trying out coding tools and models. This is where I share the stuff
          I’m into outside my day job.
        </p>
      </div>
      <section className="personal-building">
        <span className="eyebrow">Currently building</span>
        <h2>Doer</h2>
        <p>The project I’m spending time on right now.</p>
        <Link href="/now#building" className="quiet-link">
          What I’m up to <ArrowUpRight size={13} />
        </Link>
      </section>
      <div className="personal-doorways">
        <Link href="/now" className="project-row">
          <div className="project-row-top">
            <h2>What I’m into right now</h2>
            <ArrowUpRight size={17} />
          </div>
          <p>
            My model rotation, YouTube favourites, T3 Code, and the goals I’m
            working towards.
          </p>
        </Link>
        <Link href="/editing" className="project-row">
          <div className="project-row-top">
            <h2>Behind the cuts</h2>
            <ArrowUpRight size={17} />
          </div>
          <p>My video editing work. Another way I like to make things.</p>
        </Link>
      </div>
      <div className="personal-postscript">
        <p>
          On my wish list: a PS5 or a good gaming PC, and some time with GTA 6.
        </p>
        <a
          className="quiet-link"
          href="https://x.com/lag_aryan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find me talking tech on X <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  );
}
