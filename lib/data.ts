
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

export const projectsData: Project[] = [
    {
        id: "shesafe",
        title: "SheSafe",
        tagline: "Safety Through Technology - Campus Security Reimagined",
        description:
            "SheSafe is a specialized safety application designed to enhance the security and well-being of female students and faculty on college campuses. It integrates advanced technologies like Firebase, IoT wearables, AI-based gender/emotion detection from CCTV, and Aadhaar API for robust security features, real-time tracking, secure chat, and automated emergency response mechanisms.",
        metrics: [
            "5K+ Users Engaged",
            "100% Authentication Accuracy (via Aadhaar)",
            "Real-time Location Tracking",
            "AI-Powered Anomaly Detection",
            "IoT Wearable Integration",
        ],
        techStack: [
            "Flutter",
            "Dart",
            "Firebase",
            "Python",
            "Aadhaar API",
            "Arduino",
            "TensorFlow",
            "Keras",
            "Google Maps API",
        ],
        recognition: "Smart India Hackathon Winner",
        impactFocus: "Enhancing campus safety for women through integrated technology and proactive alerts.",
        liveLink: "#",
        githubLink: "https://github.com/LAG-4/sih",
    },
    {
        id: "gaias-touch",
        title: "Gaia's Touch",
        tagline: "Connecting Hearts, Changing Lives - Bridging Volunteers & NGOs",
        description:
            "Gaia's Touch is a comprehensive mobile platform developed using Flutter for the frontend and Spring Boot for the backend, designed to seamlessly connect volunteers with NGOs. It features intuitive user registration/login, dynamic NGO discovery via SDGs and location, efficient volunteer request matching, and secure in-app donations integrated with Google Pay. The platform underwent rigorous unit, integration, and API testing.",
        metrics: [
            "50% Donation Increase",
            "Smooth User Registration & Login Flow",
            "Dynamic NGO Discovery (SDG & Location-based)",
        ],
        techStack: [
            "Flutter",
            "Dart",
            "Spring Boot",
            "Java",
            "JPA (Hibernate)",
            "MySQL",
            "Google Pay API",
            "Postman",
        ],
        impactFocus: "Seamlessly connecting volunteers with NGOs to foster community engagement and support sustainable development goals.",
        liveLink: "#",
        githubLink: "https://github.com/LAG-4/gaias-new",
    },
    {
        id: "quantum-finance-screener",
        title: "Quantum Finance - AI Stock Screener",
        tagline: "AI-Powered Market Analysis & Financial Insights",
        description:
            "An advanced stock market analysis and financial insights platform built with Streamlit, featuring a modern glassmorphism UI. It leverages multiple AI agents (powered by Google Gemini and Groq's Llama models via the `agno` library) to provide comprehensive stock analysis, including fundamentals, analyst recommendations, technical indicators, recent news impact, and an interactive AI financial assistant. The tool integrates YFinance for financial data and DuckDuckGo for web searches, presenting all information in structured tables and interactive charts.",
        metrics: [],
        techStack: [
            "Streamlit",
            "Python",
            "agno library",
            "Google Gemini",
            "Groq API (Llama)",
            "YFinanceTools",
            "DuckDuckGoTools",
            "Custom CSS",
            "dotenv",
        ],
        impactFocus: "Empowering investors with AI-driven, real-time financial data analysis and decision support.",
        liveLink: "https://finance-agent-three.vercel.app/",
        githubLink: "https://github.com/LAG-4/finance_agent",
    },
    {
        id: "ai-news-reporter",
        title: "AI News Reporter Agent",
        tagline: "Automated AI News, Delivered Daily",
        description:
            "A Python-based AI agent that automatically researches and compiles the top 10 latest news and breakthroughs in Artificial Intelligence. It leverages the `agno` library, Google's Gemini model for synthesis, and DuckDuckGo for comprehensive web and news searches. The agent generates a structured Markdown report daily, complete with citations.",
        metrics: [
            "Generates Top 10 AI News Items",
            "Daily Markdown Report Output",
            "Automated Research & Synthesis",
            "Proper Source Citation",
        ],
        techStack: [
            "Python",
            "agno library",
            "Google Gemini",
            "DuckDuckGo Tools",
            "Markdown",
            "dotenv",
        ],
        impactFocus: "Automated AI Trend Tracking & Reporting",
        githubLink: "https://github.com/LAG-4/ai-newsletter-via-agent",
    },
    {
        id: "health-trends-bot",
        title: "Health & Wellness Trends Discord Bot",
        tagline: "Your AI Assistant for Viral Health Content Ideas",
        description:
            "A Python-based Discord bot designed to identify trending health and wellness topics and generate engaging content ideas for Instagram Reels and YouTube Shorts. It uses the `phi-agent` library with Groq's Llama3 model for AI capabilities, DuckDuckGo for web research, and `discord.py` for bot functionality. Features include automated daily trend reports and on-demand content idea generation via commands.",
        metrics: [
            "Identifies Health/Wellness Trends",
            "Generates Instagram Reel/Short Ideas",
            "Automated Daily Discord Reports",
            "Interactive Bot Commands (`!trends`, `!video_idea`)",
            "Includes Hashtags & Source Links",
        ],
        techStack: [
            "Python",
            "discord.py",
            "phi-agent",
            "Groq API (Llama3)",
            "DuckDuckGo",
            "agno DiscordTools",
            "dotenv",
        ],
        impactFocus: "Automating Health Content Creation & Trend Spotting",
        githubLink: "https://github.com/LAG-4/ai-agent-discord-bot",
    },
    {
        id: "voice-car",
        title: "Voice-Controlled Car",
        tagline: "The Future of Transportation",
        description:
            "Innovative project integrating Google Assistant for vehicle control via voice commands, showcasing hardware-software fusion.",
        metrics: ["90% voice command accuracy"],
        techStack: ["Raspberry Pi", "IoT", "Voice AI", "IFTTT", "Google Assistant", "Relay Motors", "RaspberryPI Car Kit"],
        impactFocus: "Hardware-software fusion",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: "ai-assistant-hub",
        title: "AI Assistant Hub",
        tagline: "Multi-purpose AI Interface: Finance, SQL, & Advisory",
        description:
            "A Streamlit-based multi-modal AI application integrating Gemini 2.5 Flash. Features include a real-time financial analyst with stock screening, a natural language SQL query engine for database interaction, and an 'AI Advisors Council' where 6 distinct personas provide simultaneous life advice.",
        metrics: [
            "3 Distinct AI Modes",
            "Real-time Stock Analysis",
            "Natural Language to SQL",
            "Parallel Persona Querying",
        ],
        techStack: [
            "Streamlit",
            "Python",
            "Google Gemini 2.5",
            "LangChain",
            "Agno (Phidata)",
            "SQLAlchemy",
            "Asyncio",
        ],
        impactFocus: "Unifying diverse AI capabilities into a single, accessible interface for finance, data, and personal guidance.",
        liveLink: "https://multipurpose-ai.streamlit.app/",
        githubLink: "https://github.com/LAG-4/chat-sql.git",
    },
    {
        id: "hyd-cafe-finder",
        title: "Hyd Cafe Finder",
        tagline: "Data-Driven Venue Discovery & Real-Time Offers",
        description:
            "A 'NomadList-style' discovery platform for Hyderabad's best cafes and bars. Built with Next.js 15 and Convex, it features a curated ranking system based on WiFi, safety, and work-friendliness. Includes a custom 'Trivago-style' scraper that aggregates real-time food delivery offers from Zomato/Swiggy.",
        metrics: [
            "100+ Curated Venues",
            "Real-time Offer Aggregation",
            "Multi-dimensional Ranking System",
            "Custom Anti-blocking Scraper",
        ],
        techStack: [
            "Next.js 15",
            "React 19",
            "Tailwind CSS v4",
            "Convex DB",
            "TypeScript",
            "Cheerio",
        ],
        impactFocus: "Helping remote workers and foodies find the perfect venue with data-backed insights and real-time savings.",
        liveLink: "https://cafefinder-hyd.vercel.app/",
        githubLink: "https://github.com/LAG-4/cafefinder.git",
    },
    {
        id: "ecoroom",
        title: "EcoRoom",
        tagline: "Sustainable Living Marketplace & Renovation Wizard",
        description:
            "A modern marketplace connecting homeowners with eco-friendly interior designers and sustainable home goods. Features a complex multi-step renovation wizard for lead generation and a fully functional client-side e-commerce shop for green home upgrades.",
        metrics: [
            "Multi-step Renovation Wizard",
            "Full E-commerce Flow",
            "Sustainable Vendor Matching",
            "Modern 'Bleeding-edge' UI",
        ],
        techStack: [
            "Next.js 15.4",
            "React 19",
            "Tailwind CSS v4",
            "Shadcn/UI",
            "TypeScript",
            "Lucide React",
        ],
        impactFocus: "Making sustainable home living accessible through a streamlined digital renovation and shopping experience.",
        liveLink: "https://ecoroom.vercel.app",
        githubLink: "https://github.com/LAG-4/ecoroom.git",
    },
];
