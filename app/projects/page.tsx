import { ProjectList } from "@/components/portfolio-content";
export const metadata = { title: "Projects" };
export default function ProjectsPage() {
  return (
    <>
      <header className="page-heading">
        <span className="eyebrow">Selected work & experiments</span>
        <h1>Things I’ve built.</h1>
        <p>
          Client websites, mobile apps, AI experiments, and a little hardware. A
          collection of work I’ve learned from.
        </p>
      </header>
      <ProjectList />
    </>
  );
}
