
import { projectsData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = projectsData.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                <Button asChild>
                    <Link href="/">Go Home</Link>
                </Button>
            </div>
        );
    }

    return (
        <main className="min-h-screen p-6 md:p-12 lg:p-24 max-w-5xl mx-auto">
            <Button asChild variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
                <Link href="/#projects" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Projects
                </Link>
            </Button>

            <div className="space-y-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{project.title}</h1>
                    <p className="text-xl md:text-2xl text-muted-foreground">{project.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-4">
                    {project.liveLink && project.liveLink !== "#" && (
                        <Button asChild size="lg">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <ExternalLink className="w-4 h-4" />
                                View Live
                            </a>
                        </Button>
                    )}
                    {project.githubLink && project.githubLink !== "#" && (
                        <Button asChild variant="outline" size="lg">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Github className="w-4 h-4" />
                                View Code
                            </a>
                        </Button>
                    )}
                </div>

                {project.liveLink && project.liveLink !== "#" && (
                    <section className="w-full">
                        <h2 className="text-2xl font-bold mb-4">Live Preview</h2>
                        <div className="w-full h-[500px] border rounded-xl overflow-hidden shadow-sm bg-muted/20">
                            <iframe
                                src={project.liveLink}
                                title={`Preview of ${project.title}`}
                                className="w-full h-full border-0"
                                loading="lazy"
                                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                            />
                        </div>
                    </section>
                )}

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    <div className="md:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Overview</h2>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                {project.description}
                            </p>
                        </section>

                        {project.metrics.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {project.metrics.map((metric, index) => (
                                        <li key={index} className="bg-card border rounded-lg p-4 text-card-foreground shadow-sm">
                                            {metric}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <Badge key={tech} variant="secondary" className="text-sm py-1">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </section>

                        {(project.recognition || project.impactFocus) && (
                            <section className="space-y-6">
                                {project.recognition && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Recognition</h3>
                                        <p className="text-muted-foreground">{project.recognition}</p>
                                    </div>
                                )}
                                {project.impactFocus && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Impact</h3>
                                        <p className="text-muted-foreground">{project.impactFocus}</p>
                                    </div>
                                )}
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
