// app/[slug]/page.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type Props = { params: Promise<{ slug: string }> };

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;

  function formatCompany(slug: string) {
    return slug.charAt(0).toUpperCase() + slug.slice(1);
  }
  const company = formatCompany(slug);

  return (
    <div className="min-h-screen py-12 px-4 md:px-16 bg-background text-foreground">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-2 mb-12">
        <Avatar className="w-28 h-28 mb-3 shadow-lg ring-4 ring-primary/20 animate-fadeIn">
          <AvatarImage src="/images/Hero.png" alt="Aryan Gupta" />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Hey, I&#39;m <span className="text-primary">Aryan Gupta</span>
        </h1>
        <h2 className="md:text-2xl text-xl font-medium mt-2 mb-1">
          and I&#39;d love to be a Developer at <span className="text-primary">{company}!</span>
        </h2>
       
      </section>

      <Separator className="mb-10" />

      {/* Who is Aryan */}
      <section className="max-w-3xl mx-auto mb-14">
        <Card className="bg-card/80 shadow-lg backdrop-blur-lg">
          <CardHeader className="pb-1">
            <h3 className="text-2xl font-bold">Who is Aryan?</h3>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              I&#39;m a <span className="font-medium text-primary">creator at heart</span> &mdash; a developer from Hyderabad, passionate about technology, UX, and building real-world solutions. I thrive on building, iterating, and shipping software—from AI-powered analytics to mobile-first innovation. My passion for real-world impact drives me to work with talented teams, adopt best practices fast, and adapt to new tech stacks with ease.
              <br /><br />
              <span className="italic">Blend code, creativity, and vision to help {company} reach new heights.</span>
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Core Dev Highlights */}
      <section className="max-w-5xl mx-auto mb-16 grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="font-semibold text-lg">Core Skills</CardHeader>
          <CardContent>
            <ul className="space-y-1">
              <li>
                <Badge variant="secondary">COBOL</Badge>{" "}
                <Badge variant="secondary">JCL</Badge>{" "}
                <Badge variant="secondary">IBM z/OS</Badge>{" "}
                <Badge variant="secondary">DB2</Badge>
              </li>
              <li>
                <Badge variant="secondary">Java</Badge>{" "}
                <Badge variant="secondary">SQL</Badge>{" "}
                <Badge variant="secondary">Python</Badge>{" "}
                <Badge variant="secondary">Flutter</Badge>
              </li>
              <li>
                AI & Data: Gen AI, LangChain, RAG, OpenAI, API Integration
              </li>
              <li>DevTools: Git, Linux, Agile-Scrum, Jira</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="font-semibold text-lg">Projects</CardHeader>
          <CardContent>
            <ul className="space-y-1 text-base">
              <li>
                <span className="font-semibold">Gaia&#39;s Touch:</span> Flutter app connecting NGOs; 10,000+ engagements, increased donations by 50%
              </li>
              <li>
                <span className="font-semibold">SheSafe:</span> Campus safety Flutter app (5,000+ users), Aadhaar verification, AI + IoT chatbot for emergencies
              </li>
              <li>
                <span className="font-semibold">AI Insights Agent:</span> Streamlit &amp; LangChain analytics tool for real-time data
              </li>
              <li>
                <span className="font-semibold">Voice-Controlled Car:</span> RPi + Google Assistant, 90% voice command accuracy
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="font-semibold text-lg">Awards & Certifications</CardHeader>
          <CardContent>
            <ul className="space-y-1">
              <li>
                <span className="font-semibold">Winner:</span> Smart India Hackathon — Women&#39;s Safety App
              </li>
              <li>
                MERN Stack Developer,&nbsp; AWS Certified Cloud Practitioner, Google UX Design, HuggingFace Agents
              </li>
              <li>
                <span className="font-semibold">Semi-Finalist:</span> Amdocs Talent Tank (Top 10%, $50,000 award)
              </li>
              <li>
                Google Hackathon: Creative web-based sustainability tool
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Education */}
      <section className="max-w-3xl mx-auto mb-14">
        <Card>
          <CardHeader className="font-semibold text-lg">Education</CardHeader>
          <CardContent>
            <ul className="text-base space-y-1">
              <li>
                <span className="font-semibold">Vellore Institute of Technology</span> — B.Tech. Computer Science (2021–2025), GPA: 8.18/10
              </li>
              <li>
                Relevant coursework:{' '}
                Data Structures & Algorithms, Mobile App Development, DBMS, OOP, Discrete Math
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Experience */}
      <section className="max-w-3xl mx-auto mb-14">
        <Card>
          <CardHeader className="font-semibold text-lg">Professional Experience</CardHeader>
          <CardContent>
            <ul className="text-base space-y-6">
              <li>
                <span className="font-semibold">Systems Engineer (Mainframe Developer), Infosys</span> (Feb 2026–Present):
                <ul className="ml-4 list-disc space-y-1 mt-1">
                  <li>Specializing in mainframe application development, writing highly optimized COBOL and JCL scripts on IBM z/OS.</li>
                  <li>Completed comprehensive enterprise training in Java, SQL, and database management.</li>
                  <li>Maintaining, upgrading, and debugging mission-critical core database queries using DB2.</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Flutter Dev Intern, Persist Ventures</span> (May–July 2024):
                <ul className="ml-4 list-disc space-y-1 mt-1">
                  <li>Developed & shipped a Flutter app for 15,000+ users</li>
                  <li>Integrated Django backend, cut data latency by 30%</li>
                  <li>Improved UX, raised user satisfaction by 40%</li>
                  <li>Agile collaboration, 25% faster project delivery</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Application message */}
      <section className="max-w-2xl mx-auto mb-16">
        <Card className="bg-card/80 shadow-lg">
          <CardContent className="pt-6">
            <p className="text-lg md:text-xl mb-2">
              I am passionate about technology and believe my skills can make a strong impact at <span className="text-primary">{company}</span>.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              As a fast learner and problem solver, I am ready to contribute to your team&#39;s goals and drive innovation.
              <br />
              I would love to discuss how my background in software development, teamwork, and adaptability can benefit <span className="text-primary">{company}</span> and your mission.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Languages */}
      <section className="max-w-xl mx-auto mb-14">
        <Card>
          <CardHeader className="font-semibold text-lg">Languages</CardHeader>
          <CardContent>
            <ul className="text-base space-y-1">
              <li>English (Fluent)</li>
              <li>Hindi (Native)</li>
              <li>French (Basic)</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Contact & Links */}
      <footer className="flex flex-col items-center gap-2 mt-10 border-t border-border pt-4 text-sm text-muted-foreground">
        <div>
          <a href="mailto:aryangupta4feb@gmail.com" className="underline">aryangupta4feb@gmail.com</a> ·
          <a href="https://lagaryan.click" className="underline ml-2" target="_blank" rel="noopener noreferrer">Portfolio</a> · 
          <a href="https://github.com/LAG-4" className="underline ml-2" target="_blank" rel="noopener noreferrer">GitHub</a> · 
          <a href="https://www.linkedin.com/in/aryan-gupta4203/" className="underline ml-2" target="_blank" rel="noopener noreferrer">LinkedIn</a> .
          <a href="https://x.com/lag_aryan" className="underline ml-2" target="_blank" rel="noopener noreferrer">X</a>
        </div>
        <div>
          Hyderabad, TS | +91 9267913652
        </div>
        <div className="mt-3 text-center">
          This site is crafted exclusively for the <span className="font-medium text-primary">{company}</span> application. Thanks for considering my candidacy!
        </div>
      </footer>
    </div>
  );
}
