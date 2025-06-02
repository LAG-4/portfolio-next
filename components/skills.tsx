// app/skills/page.tsx (or wherever your Skills component is)
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Import Accordion components
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface SkillItem {
  name: string;
  proficiency?: number;
  experience?: string;
  tags?: string[];
  description?: string;
}

interface SkillsData {
  development: SkillItem[];
  aiDataScience: SkillItem[];
  designMultimedia: SkillItem[];
  toolsPlatforms: SkillItem[];
  softSkills: SkillItem[];
}

const skillsData: SkillsData = {
  development: [
    { name: "Java", proficiency: 75, experience: "2+ Years", tags: ["Data Structures"] },
    { name: "Dart & Flutter", proficiency: 95, experience: "3+ Years", tags: ["Mobile Dev", "Cross-Platform"] },
    { name: "Python", proficiency: 90, experience: "3+ Years", tags: ["Scripting", "AI/ML", "Backend","Streamlit","AI Agents"] },
    { name: "JavaScript", proficiency: 70, experience: "1 Year", tags: ["Frontend", "Node.js"] },
    { name: "MERN Stack", proficiency: 70, experience: "1 Year", tags: ["Full-Stack", "MongoDB", "Express", "React", "Node"] },
    { name: "HTML & CSS", proficiency: 90, experience: "4+ Years", tags: ["Web Design", "Responsive"] },
  ],
  aiDataScience: [
    { name: "LangChain", proficiency: 85, experience: "1+ Year", tags: ["LLM Apps", "Agents"] },
    { name: "OpenAI API", proficiency: 100, experience: "1+ Year", tags: ["GPT Models", "Embeddings","Realtime"] },
    { name: "AI Agents", proficiency: 95, experience: "Conceptual & Projects", tags: ["Autonomous Systems"] },
    { name: "RAG Systems", proficiency: 90, experience: "Projects", tags: ["Information Retrieval"] },
    { name: "Data Analysis (Python)", proficiency: 50, experience: "2+ Years", tags: ["Pandas", "NumPy"] },
    { name: "Google Gemini", proficiency: 100, experience: "Exploratory", tags: ["Multimodal AI"] },
  ],
  designMultimedia: [
    { name: "Adobe After Effects", proficiency: 80, experience: "3+ Years", tags: ["Motion Graphics", "VFX"] },
    { name: "Adobe Photoshop", proficiency: 80, experience: "3+ Years", tags: ["Photo Editing", "Graphics"] },
    { name: "Figma", proficiency: 100, experience: "3+ Years", tags: ["UI/UX Design", "Prototyping"] },
    { name: "Blender 3D", proficiency: 40, experience: "Hobbyist", tags: ["Modeling", "Animation Basics"] },
    { name: "Video Editing (Premiere Pro)", proficiency: 100, experience: "Content Creation", tags: ["Storytelling"] },
  ],
  toolsPlatforms: [
    { name: "Git & GitHub", proficiency: 95, experience: "4+ Years", tags: ["Version Control", "Collaboration"] },
    { name: "Firebase", proficiency: 75, experience: "3+ Years", tags: ["BaaS", "Realtime DB"] },
    { name: "AWS (Basics)", proficiency: 70, experience: "Certified", tags: ["Cloud Practitioner", "EC2", "S3"] },
    { name: "Linux", proficiency: 70, experience: "Daily Driver", tags: ["CLI", "Servers"] },
    { name: "Agile & Scrum", proficiency: 80, experience: "Projects", tags: ["Methodologies", "Jira"] },
  ],
  softSkills: [
    { name: "Fast Learning", proficiency: 100, description: "Quickly grasp new technologies and concepts." },
    { name: "Problem Solving", proficiency: 100, description: "Analytical approach to dissect and resolve challenges." },
    { name: "Team Collaboration & Leadership", proficiency: 100, description: "Effective in team environments, can take initiative." },
    { name: "Communication", proficiency: 80, description: "Clearly articulate ideas and technical details." },
    { name: "Adaptability", proficiency: 90, description: "Thrive in dynamic and evolving project requirements." },
  ],
};

// Helper to format category keys into displayable names
const formatCategoryName = (key: string): string => {
  switch (key) {
    case 'aiDataScience': return 'AI & Data Science';
    case 'designMultimedia': return 'Design & Multimedia';
    case 'toolsPlatforms': return 'Tools & Platforms';
    case 'softSkills': return 'Soft Skills';
    default: return key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter
  }
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen snap-start flex flex-col items-center p-6 pt-16 md:p-12 md:pt-24 lg:p-16 lg:pt-28 xl:p-24 xl:pt-32"
    >
      <div className="w-full max-w-3xl"> {/* Adjusted max-width for accordion layout */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
          My Arsenal of Technologies
        </h1>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {/*
            type="single" collapsible: Only one item can be open at a time.
            type="multiple": Multiple items can be open.
            Consider which behavior you prefer.
          */}
          {(Object.entries(skillsData) as [keyof SkillsData, SkillItem[]][]).map(
            ([categoryKey, skillsInSection], categoryIndex) => (
            <AccordionItem value={`item-${categoryIndex}`} key={categoryKey} className="border rounded-lg">
              <AccordionTrigger className="p-4 text-lg hover:no-underline">
                {formatCategoryName(categoryKey)}
              </AccordionTrigger>
              <AccordionContent className="p-4 pt-0"> {/* pt-0 to remove extra padding from trigger */}
                <div className="space-y-6"> {/* Increased space between skill items */}
                  {skillsInSection.map((skill: SkillItem, index: number) => (
                    <div key={index} className="flex flex-col gap-3 pt-3 border-t first:border-t-0 first:pt-0"> {/* Add border-t for separation, remove for first */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="text-md font-semibold">{skill.name}</h3> {/* Slightly smaller skill name */}
                        <div className="flex flex-wrap gap-1.5"> {/* Slightly smaller gap for badges */}
                          {skill.experience && (
                            <Badge variant="secondary" className="text-xs px-1.5 py-0.5">{skill.experience}</Badge>
                          )}
                          {skill.tags && skill.tags.map((tag: string, tagIndex: number) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs px-1.5 py-0.5">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {skill.proficiency !== undefined && (
                          <div>
                              <div className="flex justify-between text-xs mb-1"> {/* Smaller proficiency text */}
                                  <span>Proficiency</span>
                                  <span>{skill.proficiency}%</span>
                              </div>
                              <Progress value={skill.proficiency} className="w-full h-1.5" /> {/* Slightly thinner progress bar */}
                          </div>
                      )}
                      {skill.description && (
                        <p className="text-xs mt-1">{skill.description}</p> 
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