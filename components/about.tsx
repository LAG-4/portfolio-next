'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator" // Assuming this is correctly imported from ./ui/separator
import { Progress } from "@/components/ui/progress"
import { 
    Code, 
    Video, 
    Palette, 
    Megaphone, 
    Rocket, 
    Brain, 
    Zap,
    Target,
    MapPin,
    GraduationCap,
    Sparkles
} from "lucide-react"

export default function About() {
    const capabilities = [
        {
            title: "Digital Creator",
            description: "Video editing, After Effects, Premiere Pro",
            icon: Video,
            skills: ["After Effects", "Premiere Pro", "Content Creation"]
        },
        {
            title: "3D Artist",
            description: "Blender, 3D modeling, visual design",
            icon: Palette,
            skills: ["Blender", "3D Modeling", "Visual Design"]
        },
        {
            title: "UI/UX Designer",
            description: "Figma, Photoshop, user-centered design",
            icon: Code, // Assuming Code icon is appropriate here, or use a specific design icon
            skills: ["Figma", "Photoshop", "UI/UX"]
        },
        {
            title: "Content Strategist",
            description: "Social media, content creation, storytelling",
            icon: Megaphone,
            skills: ["Social Media", "Storytelling", "Strategy"]
        }
    ]

    const currentFocus = [
        {
            title: "Exploring",
            description: "LangGraph, Advanced AI Agents",
            icon: Brain,
            progress: 75
        },
        {
            title: "Building",
            description: "Next-gen mobile experiences",
            icon: Rocket,
            progress: 60
        },
        {
            title: "Learning",
            description: "Cloud architecture at scale",
            icon: Sparkles,
            progress: 45
        }
    ]

    const quickFacts = [
        {
            icon: MapPin,
            label: "Location",
            value: "Based in India"
        },
        {
            icon: GraduationCap,
            label: "Education",
            value: "B.Tech CS at VIT"
        },
        {
            icon: Zap,
            label: "Superpower",
            value: "Fast learner, faster shipper"
        },
        {
            icon: Target,
            label: "Goal",
            value: "Work at Big Tech"
        }
    ]

    return (
        // Reduced overall padding, ensure min-h-screen is effective
        <section id="about" className="w-full min-h-screen snap-start flex flex-col p-4 md:p-8 lg:p-12 xl:p-16">
            <div className="max-w-6xl mx-auto w-full">
                
                {/* Main Title - Reduced bottom margin */}
                <div className="text-center mb-8 md:mb-10">
                    {/* Assuming your theme has primary/accent for gradients or use a single primary color */}
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        The Builder Behind the Code
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                </div>

                {/* About Me & What Drives Me - Reduced bottom margin */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                        <CardHeader className="pb-3"> {/* Reduced padding */}
                            <CardTitle className="flex items-center gap-2 text-primary text-lg md:text-xl">
                                <Code className="w-5 h-5" />
                                About Me
                            </CardTitle>
                            <CardDescription className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                Hey! I&apos;m Aryan, a Computer Science student who turns caffeine into 
                                code and ideas into reality. When I&apos;m not busy building the next big thing, 
                                you&apos;ll find me diving deep into the latest AI developments, creating content 
                                that bridges complex tech with everyday users, or just gaming with the boys. 
                                I believe in learning fast, shipping faster, and always staying curious about what&apos;s next in tech.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                        <CardHeader className="pb-3"> {/* Reduced padding */}
                            <CardTitle className="flex items-center gap-2 text-primary text-lg md:text-xl">
                                <Rocket className="w-5 h-5" />
                                What Drives Me
                            </CardTitle>
                            {/* Reduced padding for CardContent */}
                            <CardContent className="pt-2 px-0 text-sm md:text-base">
                                <ul className="space-y-2"> {/* Reduced space-y */}
                                    <li className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                        <span className="text-lg">🚀</span>
                                        <span>Obsessed with emerging AI technologies</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                        <span className="text-lg">🛠️</span>
                                        <span>Love turning ideas into functional products</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                        <span className="text-lg">📱</span>
                                        <span>Passionate about mobile-first experiences</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                        <span className="text-lg">🎨</span>
                                        <span>Believe great design makes great products</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                        <span className="text-lg">🌟</span>
                                        <span>Always learning, always building</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </CardHeader>
                    </Card>
                </div>

                {/* Beyond Code Section - Reduced bottom margin */}
                <div className="mb-8 md:mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-1 text-primary">Beyond Code</h2>
                    <p className="text-muted-foreground mb-6 text-base md:text-lg">
                        I&apos;m not just a developer - I&apos;m a digital creator who believes in being a Swiss Army knife in the tech world.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {capabilities.map((capability, index) => {
                            const IconComponent = capability.icon;
                            return (
                                <Card 
                                    key={index} 
                                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border overflow-hidden"
                                >
                                    <CardHeader className="text-center pb-2 pt-4"> {/* Adjusted padding */}
                                        <div className="mx-auto mb-3 p-2 bg-primary/10 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                                        </div>
                                        <CardTitle className="text-md md:text-lg text-primary group-hover:text-accent-foreground transition-colors">
                                            {capability.title}
                                        </CardTitle>
                                        <CardDescription className="text-muted-foreground text-xs md:text-sm">
                                            {capability.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-0 pb-3"> {/* Adjusted padding */}
                                        <div className="flex flex-wrap gap-1 justify-center">
                                            {capability.skills.map((skill, skillIndex) => (
                                                <Badge 
                                                    key={skillIndex} 
                                                    variant="outline" 
                                                    className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Current Focus Section - Reduced bottom margin */}
                <div className="mb-8 md:mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Currently Focused On</h2>
                    
                    <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                        {currentFocus.map((focus, index) => {
                            const IconComponent = focus.icon;
                            return (
                                <Card 
                                    key={index} 
                                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
                                >
                                    <CardHeader className="pb-2 pt-4"> {/* Adjusted padding */}
                                        <CardTitle className="flex items-center gap-2 text-primary text-md md:text-lg">
                                            <IconComponent className="w-5 h-5" />
                                            {focus.title}
                                        </CardTitle>
                                        <CardDescription className="text-muted-foreground text-sm md:text-base">
                                            {focus.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pb-4"> {/* Adjusted padding */}
                                        <div className="space-y-1"> {/* Reduced space-y */}
                                            <div className="flex justify-between text-xs md:text-sm">
                                                <span className="text-muted-foreground">Progress</span>
                                                <span className="text-primary">{focus.progress}%</span>
                                            </div>
                                            <Progress 
                                                value={focus.progress} 
                                                className="h-1.5 bg-secondary" // Use theme's secondary for progress track
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                <Separator className="mb-6 md:mb-8 bg-border" />

                {/* Quick Facts */}
                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">Quick Facts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                        {quickFacts.map((fact, index) => {
                            const IconComponent = fact.icon;
                            return (
                                <Card 
                                    key={index} 
                                    className="group hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-card border-border"
                                >
                                    <CardContent className="p-3 text-center"> {/* Reduced padding */}
                                        <div className="mx-auto mb-2 p-1.5 bg-primary/10 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                        </div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                                            {fact.label}
                                        </div>
                                        <div className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors">
                                            {fact.value}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Floating Tech Stack Visualization - Using theme colors */}
                <div className="fixed top-20 right-8 hidden xl:block opacity-[0.07] pointer-events-none">
                    <div className="relative w-32 h-32">
                        <div className="absolute top-0 left-0 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                        <div className="absolute top-4 right-0 w-6 h-6 bg-accent rounded-full animate-pulse animation-delay-200"></div>
                        <div className="absolute bottom-0 left-4 w-7 h-7 bg-secondary rounded-full animate-pulse animation-delay-400"></div>
                        <div className="absolute bottom-4 right-4 w-5 h-5 bg-primary/50 rounded-full animate-pulse animation-delay-600"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}