import { projectsData } from "@/lib/data";
import Link from "next/link";
import { SiGithub as Github } from "@icons-pack/react-simple-icons";
import { ArrowLeft, ExternalLink, Cpu, Sparkles, Layers, Globe } from "lucide-react";

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
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-bold mb-4 font-mono">SYS_ERR // PROJECT_NOT_FOUND</h1>
        <Link 
          href="/" 
          className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold font-mono uppercase tracking-wider transition-all"
        >
          Return to Mainframe
        </Link>
      </div>
    );
  }

  const hasLiveLink = project.liveLink && project.liveLink !== "#";

  return (
    <div className="min-h-screen text-[#f4f4f6] font-inter py-12 px-6 md:px-12 relative overflow-x-hidden select-none">
      
      {/* Top Header & Navigation */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 z-10 relative">
        <Link 
          href="/#projects" 
          className="group inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors bg-zinc-950 px-4 py-2.5 border border-zinc-900 rounded-xl hover:border-zinc-800"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          Back to Mainframe
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-mono">
            SYS_ARCHIVES // PROJECT_ID_{project.id.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Main Core Section */}
      <main className="max-w-7xl mx-auto z-10 relative space-y-12 pb-32">
        
        {/* Title Area */}
        <div className="space-y-3 pb-8 border-b border-zinc-900">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-4xl md:text-5xl font-outfit font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
            {project.recognition && (
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded border border-indigo-500/20">
                {project.recognition}
              </span>
            )}
          </div>
          <p className="text-zinc-400 text-lg md:text-xl font-normal leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Splitted Cyber Deck Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Detailed Telemetry Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Overview */}
            <div className="bg-[#0c0c0f]/80 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-4 hover:border-zinc-850 transition-colors">
              <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-300 font-bold flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-indigo-400" />
                System Overview
              </h3>
              <p className="text-zinc-200 text-sm md:text-base leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Highlights (Metrics) */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="bg-[#0c0c0f]/80 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-4 hover:border-zinc-850 transition-colors">
                <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-300 font-bold flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  Key Metrics & Highlights
                </h3>
                <ul className="space-y-3 font-sans">
                  {project.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-zinc-300">
                      <span className="text-indigo-500 font-bold mt-1">-</span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="bg-[#0c0c0f]/80 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-4 hover:border-zinc-850 transition-colors">
              <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-300 font-bold flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-indigo-400" />
                Engine Specs
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs bg-zinc-950 border border-zinc-900 text-zinc-200 px-3 py-2 rounded-xl hover:border-zinc-700 transition-colors font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* External Links / Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              {project.githubLink && project.githubLink !== "#" && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 flex items-center justify-center gap-2 text-xs bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-3.5 border border-zinc-850 rounded-2xl font-bold font-mono uppercase tracking-wider transition-colors text-center"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              )}
              {hasLiveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 flex items-center justify-center gap-2 text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3.5 rounded-2xl font-bold font-mono uppercase tracking-wider transition-all shadow-md shadow-indigo-600/10 text-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Host
                </a>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: Styled Monitor Console */}
          <div className="lg:col-span-7 bg-zinc-950/60 border border-zinc-900 rounded-3xl p-4 md:p-6 space-y-4 hover:border-zinc-850 transition-colors">
            
            {/* Monitor Chrome Frame Bar */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 bg-zinc-950 px-4 py-1.5 border border-zinc-900 rounded-lg text-[10px] sm:text-xs font-mono text-zinc-500 max-w-[200px] sm:max-w-sm truncate select-all">
                <Globe className="w-3 h-3 text-indigo-400" />
                <span>{hasLiveLink ? project.liveLink : "Offline Sandbox Session"}</span>
              </div>
              <div className="w-12 text-right">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                  {hasLiveLink ? "ONLINE" : "SYS_LOG"}
                </span>
              </div>
            </div>

            {/* Sandbox Embed Sandbox Frame */}
            <div className="w-full h-[550px] bg-[#09090b] rounded-2xl overflow-hidden border border-zinc-900 relative">
              {hasLiveLink ? (
                <iframe
                  src={project.liveLink}
                  title={`Preview of ${project.title}`}
                  className="w-full h-full border-0 rounded-2xl bg-white"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              ) : (
                <div className="w-full h-full p-6 md:p-8 flex flex-col justify-between font-mono text-xs text-indigo-300">
                  <div className="space-y-4">
                    <span className="text-zinc-500 block text-[10px] font-bold border-b border-zinc-900 pb-2">
                      === OFFLINE TERMINAL REPORT ===
                    </span>
                    <div className="text-red-400 font-bold leading-normal">
                      [sys] live_deployment --id={project.id} --status=NO_DEPL_DETECTED
                    </div>
                    <div className="leading-relaxed text-zinc-400">
                      This repository exists primarily as a technical showcase or hardware command utility, running in private clusters or custom devices.
                    </div>
                    <div className="space-y-1.5 pt-2">
                      <div className="text-zinc-500">Available telemetry:</div>
                      <div>- Code complexity analysis: A+</div>
                      <div>- Containerization: Configured</div>
                      <div>- CI/CD trigger: Verified</div>
                    </div>
                  </div>
                  <div className="text-zinc-500 text-[10px] flex justify-between border-t border-zinc-900 pt-3">
                    <span>HOST: Local Host Cluster</span>
                    <span>READY FOR REVIEW</span>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}
