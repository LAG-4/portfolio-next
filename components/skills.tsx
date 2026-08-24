// app/skills/page.tsx
'use client';

import { motion } from 'motion/react';

interface SkillItem {
  name: string;
  proficiency?: number;
  tags?: string[];
}

interface SkillsData {
  development: SkillItem[];
  aiDataScience: SkillItem[];
  toolsPlatforms: SkillItem[];
}

const skillsData: SkillsData = {
  development: [
    { name: "Production Monitoring", proficiency: 90, tags: ["Web", "Apps", "In-store"] },
    { name: "Java", proficiency: 80, tags: ["OOP", "Enterprise"] },
    { name: "Dart & Flutter", proficiency: 95, tags: ["Mobile Dev"] },
    { name: "Python", proficiency: 90, tags: ["AI/ML", "Backend"] },
    { name: "JavaScript", proficiency: 70, tags: ["Frontend", "Node.js"] },
    { name: "MERN Stack", proficiency: 70, tags: ["Full-Stack"] },
    { name: "HTML & CSS", proficiency: 90, tags: ["Web Design"] },
  ],
  aiDataScience: [
    { name: "LangChain", proficiency: 85, tags: ["LLM Apps"] },
    { name: "OpenAI API", proficiency: 100, tags: ["GPT Models"] },
    { name: "AI Agents", proficiency: 95, tags: ["Autonomous Systems"] },
    { name: "RAG Systems", proficiency: 90, tags: ["Information Retrieval"] },
    { name: "Google Gemini", proficiency: 100, tags: ["Multimodal AI"] },
  ],
  toolsPlatforms: [
    { name: "Grafana & Splunk", proficiency: 90, tags: ["Dashboards", "Logs"] },
    { name: "Incident Operations", proficiency: 85, tags: ["Ticketing", "Reporting"] },
    { name: "Git & GitHub", proficiency: 95, tags: ["Version Control"] },
    { name: "Firebase", proficiency: 75, tags: ["BaaS"] },
    { name: "AWS (Basics)", proficiency: 70, tags: ["Cloud Practitioner"] },
    { name: "Linux", proficiency: 70, tags: ["CLI"] },
  ],
};

const categoryConfig = {
  development: { label: "Development", icon: "01" },
  aiDataScience: { label: "AI & Data Science", icon: "02" },
  toolsPlatforms: { label: "Tools & Platforms", icon: "03" },
};

// Skill meter bar component
function SkillMeter({ name, value, tags }: { name: string; value: number; tags?: string[] }) {
  const bars = 10;
  const filledBars = Math.floor(value / 10);

  return (
    <div className="flex items-center gap-4 py-3 border-b border-dashed border-border last:border-b-0">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-foreground text-sm font-medium">{name}</span>
          <span className="text-muted-foreground text-xs">{value}%</span>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex gap-1 mt-1">
            {tags.map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground italic">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex gap-0.5">
        {[...Array(bars)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-5 transition-colors ${
              i < filledBars 
                ? 'bg-accent' 
                : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center p-6 pt-16 md:p-12 md:pt-24 lg:p-16 lg:pt-28 xl:p-24 xl:pt-32 bg-card"
    >
      <div className="w-full max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-3">
            Technical Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Noir Divider */}
        <div className="noir-divider">
          <span className="w-2 h-2 bg-accent rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(Object.entries(skillsData) as [keyof SkillsData, SkillItem[]][]).map(
            ([categoryKey, skillsInSection], categoryIndex) => (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="paper-card"
              >
                <div className="bg-background p-6 border border-border relative">
                  {/* Category Label */}
                  <div className="absolute -top-3 left-4 px-3 py-1 bg-foreground text-background text-xs tracking-widest uppercase">
                    {categoryConfig[categoryKey].label}
                  </div>

                  {/* Category Number */}
                  <div className="absolute -top-3 right-4 px-2 py-1 text-accent text-xs font-bold">
                    {categoryConfig[categoryKey].icon}
                  </div>

                  {/* Skills List */}
                  <div className="mt-4">
                    {skillsInSection.map((skill: SkillItem) => (
                      <SkillMeter
                        key={skill.name}
                        name={skill.name}
                        value={skill.proficiency || 0}
                        tags={skill.tags}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
