// Portfolio Data - Aryan Gupta

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  metrics: string[];
  techStack: string[];
  recognition?: string;
  impactFocus?: string;
  liveLink?: string;
  githubLink?: string;
}

export const personalInfo = {
  name: "Aryan Gupta",
  title: "Full-Stack Developer & AI Enthusiast",
  tagline: "Building Tomorrow's Tech Today",
  location: "India",
  education: "B.Tech Computer Science at VIT",
  email: "aryangupta4feb@gmail.com",
  resumePath: "/resume.pdf",
  avatarPath: "/images/Hero.png",
  github: "https://github.com/LAG-4",
  linkedin: "https://linkedin.com/in/aryan-gupta",
  blog: "https://blog.lagaryan.click",
  highlights: [
    "National Hackathon Winner",
    "10+ Projects Shipped",
    "Full Stack & AI/ML Expert",
    "Active OpenCode Contributor",
  ],
  quickFacts: [
    "Based in India",
    "B.Tech Computer Science at VIT",
    "Fast learner, faster shipper",
    "Active OpenCode Contributor",
  ],
  about: `I'm Aryan, a Computer Science student who turns caffeine into code. I specialize in building full-stack applications and integrating AI agents to solve real-world problems. I'm passionate about creating seamless user experiences and shipping high-quality software.`,
  drivingForce: [
    "Obsessed with emerging AI technologies",
    "Love turning ideas into functional products",
    "Believe great design makes great products",
  ],
};

export const projectsData: Project[] = [
  {
    id: "learnai",
    title: "LearnAI",
    tagline: "Live on Play Store | Master AI Concepts & Stay Updated",
    description:
      "Flutter application designed to demystify AI for general users. Combines structured, offline-capable learning with real-time industry updates. Features gamified progression and Firebase-powered feeds.",
    metrics: [
      "Structured Learning Path",
      "Real-time AI Updates",
      "Offline-capable",
      "Deployed on Play Store",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Riverpod"],
    impactFocus: "Making AI education accessible to everyone",
    liveLink: "https://play.google.com/store/apps/details?id=com.lagaryan.learnai",
  },
  {
    id: "hyd-cafe-finder",
    title: "Hyd Cafe Finder",
    tagline: "Data-Driven Venue Discovery & Real-Time Offers",
    description:
      "NomadList-style discovery platform for Hyderabad's best cafes. Features curated rankings and real-time food delivery offer aggregation from Zomato/Swiggy.",
    metrics: ["100+ Venues", "Real-time Offers", "Multi-dimensional Ranking"],
    techStack: ["Next.js 15", "React 19", "Tailwind", "Convex DB"],
    impactFocus: "Helping remote workers find the perfect venue",
    liveLink: "https://cafefinder-hyd.vercel.app/",
    githubLink: "https://github.com/LAG-4/cafefinder.git",
  },
  {
    id: "quantum-finance",
    title: "Quantum Finance",
    tagline: "AI-Powered Market Analysis & Financial Insights",
    description:
      "Advanced stock market analysis platform with glassmorphism UI. Leverages multiple AI agents for comprehensive stock analysis including fundamentals, technical indicators, and news impact.",
    metrics: ["Multi-agent Analysis", "Real-time Data", "Interactive Charts"],
    techStack: ["Streamlit", "Python", "Google Gemini", "Groq API"],
    impactFocus: "Empowering investors with AI-driven analysis",
    liveLink: "https://finance-agent-three.vercel.app/",
    githubLink: "https://github.com/LAG-4/finance_agent",
  },
  {
    id: "ecoroom",
    title: "EcoRoom",
    tagline: "Sustainable Living Marketplace",
    description:
      "Modern marketplace connecting homeowners with eco-friendly interior designers. Features multi-step renovation wizard and full e-commerce functionality.",
    metrics: ["Multi-step Wizard", "Full E-commerce", "Modern UI"],
    techStack: ["Next.js 15", "React 19", "Tailwind CSS", "TypeScript"],
    impactFocus: "Making sustainable home living accessible",
    liveLink: "https://ecoroom.vercel.app",
    githubLink: "https://github.com/LAG-4/ecoroom.git",
  },
  {
    id: "shesafe",
    title: "SheSafe",
    tagline: "Safety Through Technology - Campus Security Reimagined",
    description:
      "Specialized safety application for female students and faculty on college campuses. Integrates IoT wearables, AI-based detection, and Aadhaar API for robust security.",
    metrics: ["5K+ Users", "100% Auth Accuracy", "Real-time Tracking", "AI Detection"],
    techStack: ["Flutter", "Firebase", "Python", "TensorFlow", "Arduino"],
    recognition: "Smart India Hackathon Winner",
    impactFocus: "Enhancing campus safety for women",
    githubLink: "https://github.com/LAG-4/sih",
  },
  {
    id: "gaias-touch",
    title: "Gaia's Touch",
    tagline: "Connecting Hearts, Changing Lives",
    description:
      "Comprehensive mobile platform connecting volunteers with NGOs. Features intuitive discovery via SDGs, volunteer matching, and secure in-app donations.",
    metrics: ["50% Donation Increase", "SDG-based Discovery", "Secure Payments"],
    techStack: ["Flutter", "Spring Boot", "MySQL", "Google Pay API"],
    impactFocus: "Fostering community engagement",
    githubLink: "https://github.com/LAG-4/gaias-new",
  },
];

export const skillsData = {
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
    { name: "AWS", proficiency: 70, tags: ["Cloud Practitioner"] },
    { name: "Linux", proficiency: 70, tags: ["CLI"] },
  ],
};

export const experiences = [
  {
    role: "Flutter Development Intern",
    company: "Persist Ventures",
    duration: "May 2024 - July 2024",
    description: [
      "Scaled mobile excellence by serving 15,000+ users.",
      "Achieved a 30% reduction in latency through optimization.",
      "Gained expertise in enterprise-level Flutter development.",
    ],
    technologies: ["Flutter", "Django APIs", "Git", "Agile"],
    projectLink: "https://neighborgood.io/",
  },
];

export const awards = [
  {
    title: "Smart India Hackathon 2023",
    subtitle: "Winner",
    description:
      'Led team "HUSTLERS" to victory by developing "SheSafe", an AI-powered safety solution integrating IoT, Flutter, and ML.',
    certificateLink: "https://czm1cc74dv.ufs.sh/f/8kIHA8Et9mP5cOfjKTCQm7Ynx3kjXLgI9ap28fRtuEGNHVbq",
    image: "/images/sih.jpeg",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    subtitle: "Certified Practitioner",
    description:
      "Validated expertise in AWS Cloud platform, covering core services, security, and architecture.",
    certificateLink: "https://czm1cc74dv.ufs.sh/f/8kIHA8Et9mP52ZMTwKNYjuVOZdQqw4bvYzyEST8xFpCmPRgA",
    image: "/images/aws.png",
  },
];
