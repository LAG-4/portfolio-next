"use client";

import React, { use } from "react";
import { motion } from "motion/react";
import { 
  Award, GraduationCap, Globe, MapPin
} from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export default function DynamicPage({ params }: Props) {
  const { slug } = use(params);

  function formatCompany(slug: string) {
    return slug.charAt(0).toUpperCase() + slug.slice(1);
  }
  const company = formatCompany(slug);

  const skillCategories = [
    {
      title: "Observability & Incident Operations",
      skills: [
        { name: "Grafana", details: "Dashboard Monitoring" },
        { name: "Splunk", details: "Log Monitoring" },
        { name: "Incident Ticketing", details: "Issue & Downtime Reports" },
        { name: "Team Escalation", details: "Incident Coordination" }
      ]
    },
    {
      title: "AI & Intelligent Systems",
      skills: [
        { name: "LangChain", details: "LLM Agent Apps" },
        { name: "OpenAI API", details: "GPT Models" },
        { name: "Google Gemini", details: "Multimodal AI" },
        { name: "RAG Systems", details: "Vector Retrieval" },
        { name: "AI Agents", details: "Autonomous Flows" }
      ]
    },
    {
      title: "Full-Stack Development",
      skills: [
        { name: "Flutter & Dart", details: "Mobile Core" },
        { name: "Python", details: "AI & Backend" },
        { name: "Next.js & React", details: "Web Apps" },
        { name: "TypeScript", details: "Type Safety" },
        { name: "MERN Stack", details: "Full-Stack Nodes" }
      ]
    },
    {
      title: "Infrastructure & Tools",
      skills: [
        { name: "Firebase", details: "BaaS & Firestore" },
        { name: "AWS Cloud", details: "Services Integration" },
        { name: "Linux Homelab", details: "Self-hosting" },
        { name: "n8n Automation", details: "Workflow Pipelines" },
        { name: "Git & GitHub", details: "Version Control" }
      ]
    }
  ];

  return (
    <div className="min-h-screen text-[#f4f4f6] font-inter py-12 px-6 md:px-12 relative overflow-x-hidden select-none">
      
      {/* Header bar */}
      <div className="max-w-5xl mx-auto mb-16 flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-sm font-bold uppercase tracking-widest text-zinc-300 font-mono">
            ARYAN.GUPTA // RECRUITER ARCHIVES
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-zinc-400 font-mono">SECURE INTERFACE</span>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto z-10 relative space-y-16 pb-32">
        
        {/* Hero Pitch */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm md:text-base font-mono uppercase text-indigo-400 tracking-[0.25em] font-bold block mb-4">
              EXCLUSIVE CANDIDACY PITCH
            </span>
            <h1 className="text-4xl md:text-6xl font-outfit font-extrabold tracking-tight text-white leading-none">
              Hey, I’m Aryan Gupta
            </h1>
            <h2 className="text-xl md:text-3xl font-medium mt-3 text-zinc-300 font-sans">
              and I’d love to build the future of technology at <span className="text-indigo-400 font-bold underline decoration-indigo-500 decoration-2">{company}!</span>
            </h2>
          </motion.div>

          {/* Dynamic Cover Letter Pitch Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0c0c0f]/80 border border-zinc-900 rounded-3xl p-6 md:p-8 hover:border-zinc-800 transition-all shadow-xl"
          >
            <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-300 font-bold flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Who is Aryan? // Recruiter Synopsis
            </h3>
            <p className="text-zinc-200 text-base md:text-lg leading-relaxed font-normal">
              I am a <span className="font-semibold text-white">developer and systems engineer</span> from Hyderabad who enjoys technology, UX, and practical software. At Infosys, I monitor Grafana and Splunk dashboards for IKEA web, app, and in-store systems, raise incident tickets, and report issues or downtime to the responsible teams.
              <br /><br />
              Alongside production monitoring and incident coordination, I build full-stack, mobile, and AI projects. I would bring that mix of operational awareness and product development experience to <span className="text-white font-bold">{company}</span>.
            </p>
          </motion.div>
        </section>

        {/* Education & Personal Metrics Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0c0c0f]/80 border border-zinc-900 p-6 md:p-8 rounded-3xl space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-300 font-bold flex items-center gap-2.5">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              Education
            </h3>
            <div className="space-y-3 font-sans">
              <div>
                <h4 className="text-white font-bold text-base md:text-lg">Vellore Institute of Technology</h4>
                <p className="text-zinc-400 text-sm font-mono mt-0.5">B.Tech. Computer Science (2021–2025)</p>
                <div className="inline-block mt-2 bg-indigo-950/40 border border-indigo-900/60 rounded-lg px-3 py-1 text-xs text-indigo-300 font-mono font-bold">
                  GPA: 8.18 / 10
                </div>
              </div>
              <div className="pt-2 border-t border-zinc-900">
                <span className="text-xs font-mono uppercase text-zinc-500 font-bold tracking-wider">Relevant Coursework:</span>
                <p className="text-zinc-300 text-sm mt-1">
                  Data Structures & Algorithms, Mobile App Development, DBMS, OOP, Discrete Math
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0c0c0f]/80 border border-zinc-900 p-6 md:p-8 rounded-3xl space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-300 font-bold flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-indigo-400" />
              Candidate Profile Summary
            </h3>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono uppercase text-zinc-500 font-bold tracking-wider">Primary Location:</span>
                <span className="text-zinc-200 text-sm font-bold flex items-center gap-1.5 mt-1">
                  <MapPin className="w-4 h-4 text-indigo-400" /> Hyderabad, TS, India
                </span>
              </div>
              <div className="border-t border-zinc-900 pt-3">
                <span className="text-xs font-mono uppercase text-zinc-500 font-bold tracking-wider">Languages Spoken:</span>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  <span className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-xl">English (Fluent)</span>
                  <span className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-xl">Hindi (Native)</span>
                  <span className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-xl">French (Basic)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Stack matrix */}
        <section className="space-y-6">
          <div>
            <h3 className="text-2xl font-outfit font-extrabold text-white">Technical Skill Matrix</h3>
            <p className="text-zinc-400 text-sm mt-1">Production operations, application development, AI, and infrastructure tools.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, index) => (
              <div key={index} className="bg-[#0c0c0f]/80 border border-zinc-900 p-6 rounded-3xl space-y-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-300 font-bold flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="text-sm bg-zinc-950 border border-zinc-900 text-zinc-200 px-3.5 py-2.5 rounded-2xl hover:border-zinc-700 transition-colors font-medium flex flex-col items-start gap-0.5"
                    >
                      <span className="font-bold text-white">{skill.name}</span>
                      <span className="text-[10px] font-mono text-zinc-500 font-medium uppercase tracking-wider">{skill.details}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Milestones Timeline */}
        <section className="space-y-8">
          <div>
            <h3 className="text-2xl font-outfit font-extrabold text-white">Professional Experience</h3>
            <p className="text-zinc-400 text-sm mt-1">Previous industry contributions and production engineering achievements.</p>
          </div>
          <div className="space-y-8 font-sans">
            
            {/* Experience Card 1 */}
            <div className="bg-[#0c0c0f]/80 border border-zinc-900 p-6 md:p-8 rounded-3xl space-y-4 relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-zinc-900 pb-4">
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">
                    Systems Engineer - IKEA Account
                  </h4>
                  <p className="text-zinc-400 text-xs font-mono uppercase mt-1">Infosys</p>
                </div>
                <div className="text-indigo-400 font-mono text-xs md:text-sm font-bold uppercase tracking-wider">
                  Feb 2026 - Present
                </div>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-zinc-200">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 font-bold mt-1.5">-</span>
                  <span>Monitor Grafana and Splunk dashboards for IKEA web, app, and in-store systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 font-bold mt-1.5">-</span>
                  <span>Raise incident tickets when monitoring reveals an issue or service downtime.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 font-bold mt-1.5">-</span>
                  <span>Report incidents and relevant monitoring details to the responsible teams for investigation.</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="text-[10px] font-mono font-semibold uppercase bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-xl">Grafana</span>
                <span className="text-[10px] font-mono font-semibold uppercase bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-xl">Splunk</span>
                <span className="text-[10px] font-mono font-semibold uppercase bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-xl">Monitoring</span>
                <span className="text-[10px] font-mono font-semibold uppercase bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-xl">Incident Ticketing</span>
              </div>
            </div>

            {/* Experience Card 2 */}
            <div className="bg-[#0c0c0f]/80 border border-zinc-900 p-6 md:p-8 rounded-3xl space-y-4 relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-zinc-900 pb-4">
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">
                    Flutter Development Intern
                  </h4>
                  <p className="text-zinc-400 text-xs font-mono uppercase mt-1">Persist Ventures</p>
                </div>
                <div className="text-indigo-400 font-mono text-xs md:text-sm font-bold uppercase tracking-wider">
                  May 2024 - July 2024
                </div>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-zinc-200">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 font-bold mt-1.5">-</span>
                  <span>Developed and shipped a Flutter application for 15,000+ active users.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 font-bold mt-1.5">-</span>
                  <span>Integrated Django backend APIs and cut client data latency by 30%.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 font-bold mt-1.5">-</span>
                  <span>Improved general UX flows, resulting in a 40% rise in user satisfaction.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 font-bold mt-1.5">-</span>
                  <span>Collaborated inside agile structures, delivering projects 25% ahead of standard schedules.</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="text-[10px] font-mono font-semibold uppercase bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-xl">Flutter</span>
                <span className="text-[10px] font-mono font-semibold uppercase bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-xl">Dart</span>
                <span className="text-[10px] font-mono font-semibold uppercase bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-xl">Django</span>
                <span className="text-[10px] font-mono font-semibold uppercase bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-xl">Agile</span>
              </div>
            </div>

          </div>
        </section>

        {/* Selected Projects */}
        <section className="space-y-6">
          <div>
            <h3 className="text-2xl font-outfit font-extrabold text-white">Selected Project Portfolios</h3>
            <p className="text-zinc-400 text-sm mt-1">Key applications shipped with measurable performance metrics.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Nail Bar by Kritika */}
            <div className="bg-[#0c0c0f]/80 border border-zinc-900 p-6 rounded-3xl space-y-4 hover:border-zinc-800 transition-colors">
              <div className="flex justify-between items-start gap-3">
                <span className="text-xs font-mono text-zinc-500 font-semibold tracking-wider">PROJECT_01 // CLIENT_WEB</span>
                <span className="text-[9px] font-mono font-bold uppercase bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/20">
                  Client Project
                </span>
              </div>
              <h4 className="text-lg font-bold text-white">Nail Bar by Kritika</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Built and maintain a full-stack website for a Karnal nail salon and academy. The work includes service pages, original guides, WhatsApp booking, structured data, local SEO, and Google Business Profile management.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-zinc-900">
                <span className="text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 px-3 py-1 rounded-xl">Next.js 16</span>
                <span className="text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 px-3 py-1 rounded-xl">Local SEO</span>
                <span className="text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 px-3 py-1 rounded-xl">Google Business</span>
                <a
                  href="https://nailbar-black.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:text-white px-3 py-1 rounded-xl transition-colors"
                >
                  View live site
                </a>
              </div>
            </div>
            
            {/* Gaia's Touch */}
            <div className="bg-[#0c0c0f]/80 border border-zinc-900 p-6 rounded-3xl space-y-4 hover:border-zinc-800 transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-zinc-500 font-semibold tracking-wider">PROJECT_02 // GAIA</span>
              </div>
              <h4 className="text-lg font-bold text-white">Gaia’s Touch</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Integrated Flutter application designed to connect local NGOs. Drove 10,000+ client engagements and successfully increased overall donations by 50% through high-impact UX.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-zinc-900">
                <span className="text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 px-3 py-1 rounded-xl">Flutter</span>
                <span className="text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 px-3 py-1 rounded-xl">UX Design</span>
              </div>
            </div>

            {/* SheSafe */}
            <div className="bg-[#0c0c0f]/80 border border-zinc-900 p-6 rounded-3xl space-y-4 hover:border-zinc-800 transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-zinc-500 font-semibold tracking-wider">PROJECT_03 // SHESAFE</span>
                <span className="text-[9px] font-mono font-bold uppercase bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/20">
                  SIH Champion
                </span>
              </div>
              <h4 className="text-lg font-bold text-white">SheSafe App</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Campus-focused safety ecosystem serving 5,000+ active devices. Features secure Aadhaar verification, real-time emergency services, and integrated AI chatbot telemetry with custom IoT wrist nodes.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-zinc-900">
                <span className="text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 px-3 py-1 rounded-xl">Flutter</span>
                <span className="text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 px-3 py-1 rounded-xl">IoT</span>
                <span className="text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 px-3 py-1 rounded-xl">Aadhaar API</span>
              </div>
            </div>

            {/* AI Insights Agent */}
            <div className="bg-[#0c0c0f]/80 border border-zinc-900 p-6 rounded-3xl space-y-4 hover:border-zinc-800 transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-zinc-500 font-semibold tracking-wider">PROJECT_04 // DATA_AI</span>
              </div>
              <h4 className="text-lg font-bold text-white">AI Insights Agent</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Streamlit & LangChain intelligence broker designed for real-time unstructured database queries. Integrates highly secure vector storage and automated reporting.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-zinc-900">
                <span className="text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 px-3 py-1 rounded-xl">LangChain</span>
                <span className="text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 px-3 py-1 rounded-xl">Streamlit</span>
                <span className="text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 px-3 py-1 rounded-xl">Vector DB</span>
              </div>
            </div>

            {/* Voice-Controlled Car */}
            <div className="bg-[#0c0c0f]/80 border border-zinc-900 p-6 rounded-3xl space-y-4 hover:border-zinc-800 transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-zinc-500 font-semibold tracking-wider">PROJECT_05 // HARDWARE</span>
              </div>
              <h4 className="text-lg font-bold text-white">Voice-Controlled IoT Vehicle</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Raspberry Pi powered hardware module with local Google Assistant hooks. Delivers a 90% real-time voice recognition latency response.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-zinc-900">
                <span className="text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 px-3 py-1 rounded-xl">Raspberry Pi</span>
                <span className="text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 px-3 py-1 rounded-xl">Google Assistant</span>
              </div>
            </div>

          </div>
        </section>

        {/* Awards & Certifications */}
        <section className="space-y-6">
          <div>
            <h3 className="text-2xl font-outfit font-extrabold text-white">Awards & Certifications</h3>
            <p className="text-zinc-400 text-sm mt-1">Honors and technical credentials achieved.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0c0c0f]/80 border border-zinc-900 p-6 rounded-3xl space-y-3">
              <Award className="w-5 h-5 text-indigo-400" />
              <h4 className="font-bold text-white text-sm md:text-base">SIH 2023 National Champion</h4>
              <p className="text-zinc-300 text-xs md:text-sm">
                First Place Winner of the Smart India Hackathon 2023 under the Women’s Safety App theme.
              </p>
            </div>
            <div className="bg-[#0c0c0f]/80 border border-zinc-900 p-6 rounded-3xl space-y-3">
              <Award className="w-5 h-5 text-indigo-400" />
              <h4 className="font-bold text-white text-sm md:text-base">Amdocs Talent Tank Semi-Finalist</h4>
              <p className="text-zinc-300 text-xs md:text-sm">
                Finished in the Top 10% globally among thousands of entrants with a $50,000 corporate prototype award recommendation.
              </p>
            </div>
            <div className="bg-[#0c0c0f]/80 border border-zinc-900 p-6 rounded-3xl space-y-3">
              <Award className="w-5 h-5 text-indigo-400" />
              <h4 className="font-bold text-white text-sm md:text-base">Technical Certifications</h4>
              <p className="text-zinc-300 text-xs md:text-sm">
                MERN Stack Developer, AWS Certified Cloud Practitioner, Google UX Design, HuggingFace AI Agents.
              </p>
            </div>
          </div>
        </section>

        {/* Application pitch */}
        <section className="max-w-3xl mx-auto text-center space-y-4 pt-10">
          <p className="text-lg md:text-xl font-sans text-zinc-200">
            I am highly passionate about technology and believe my skills can make an immediate, strong impact at <span className="text-indigo-400 font-bold">{company}</span>.
          </p>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
            As an adaptable, relentless developer, I am ready to contribute to your core missions. I would love to discuss how my background in enterprise systems, agile collaboration, and software development can benefit <span className="text-white font-semibold">{company}</span>.
          </p>
        </section>

      </main>



    </div>
  );
}
