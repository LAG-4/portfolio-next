// app/skills/page.tsx (or wherever your Skills component is)
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

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
    { name: "Java", proficiency: 75, tags: ["Data Structures"] },
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
    { name: "Git & GitHub", proficiency: 95, tags: ["Version Control"] },
    { name: "Firebase", proficiency: 75, tags: ["BaaS"] },
    { name: "AWS (Basics)", proficiency: 70, tags: ["Cloud Practitioner"] },
    { name: "Linux", proficiency: 70, tags: ["CLI"] },
  ],
};

const formatCategoryName = (key: string): string => {
  switch (key) {
    case 'aiDataScience': return 'AI & Data Science';
    case 'toolsPlatforms': return 'Tools & Platforms';
    default: return key.charAt(0).toUpperCase() + key.slice(1);
  }
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center p-6 pt-16 md:p-12 md:pt-24 lg:p-16 lg:pt-28 xl:p-24 xl:pt-32"
    >
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
          Technical Skills
        </h1>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {(Object.entries(skillsData) as [keyof SkillsData, SkillItem[]][]).map(
            ([categoryKey, skillsInSection], categoryIndex) => (
              <AccordionItem value={`item-${categoryIndex}`} key={categoryKey} className="border rounded-lg last:border-b">
                <AccordionTrigger className="p-4 text-lg hover:no-underline">
                  {formatCategoryName(categoryKey)}
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0">
                  <div className="space-y-6">
                    {skillsInSection.map((skill: SkillItem, index: number) => (
                      <div key={index} className="flex flex-col gap-3 pt-3 border-t first:border-t-0 first:pt-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-md font-semibold">{skill.name}</h3>
                          <div className="flex flex-wrap gap-1.5">
                            {skill.tags && skill.tags.map((tag: string, tagIndex: number) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs px-1.5 py-0.5">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {skill.proficiency !== undefined && (
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Proficiency</span>
                              <span>{skill.proficiency}%</span>
                            </div>
                            <Progress value={skill.proficiency} className="w-full h-1.5" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </section>
  );
}