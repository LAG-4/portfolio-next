// app/about/page.jsx (or wherever your About component is)
'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
// Optional: Import Lucide icons if you prefer them over emojis
// import { Rocket, Wrench, Smartphone, Palette, Star } from 'lucide-react';

export default function About() {
  const drivingForceItems = [
    {
      icon: "🚀",
      text: "Obsessed with emerging AI technologies",
    },
    {
      icon: "🛠️",
      text: "Love turning ideas into functional products",
    },
    {
      icon: "📱",
      text: "Passionate about mobile-first experiences",
    },
    {
      icon: "🎨",
      text: "Believe great design makes great products",
    },
    {
      icon: "🌟",
      text: "Always learning, always building",
    },
  ];

  const creativeSkillsBadges = [
    { icon: "🎨", text: "Pixel-Perfect UIs" },
    { icon: "🎬", text: "Cinematic Videos" },
    { icon: "🧊", text: "3D Modeling" },
    { icon: "🤖", text: "AI Agents" },
  ];

  const quickFacts = [
    { icon: "📍", text: "Based in India" },
    { icon: "🎓", text: "B.Tech Computer Science at VIT" },
    { icon: "⚡", text: "Fast learner, faster shipper" },
    { icon: "🎯", text: "Goal: Work at Big Tech" },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen snap-start flex flex-col items-center justify-center p-6 md:p-12 lg:p-16 xl:p-24" // Removed bg-gray-950 text-gray-50
    >
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-center md:text-left">
          {/* Removed text-cyan-400. Color will come from theme for h1. */}
          The Builder Behind the Code
        </h1>

        {/* Introductory Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          <Card className="shadow-lg">
            {/* Removed bg-gray-900/70 border-cyan-500/20. Card will use theme defaults. */}
            <CardHeader>
              <CardTitle className="text-xl">
                {/* Removed text-cyan-300. Title color from theme. */}
                My Story
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                {/* Removed text-gray-300. Paragraph color from theme. */}
                Hey! I&apos;m Aryan, a Computer Science student who turns
                caffeine into code and ideas into reality. When I&apos;m not
                busy building, you&apos;ll find me diving deep into the latest
                AI developments or creating content that bridges the gap
                between complex tech and everyday users. Or just gaming with
                the boys.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            {/* Removed bg-gray-900/70 border-cyan-500/20. */}
            <CardHeader>
              <CardTitle className="text-xl">
                {/* Removed text-cyan-300. */}
                My Driving Force
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {drivingForceItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 transition-colors rounded-lg hover:bg-accent" // Using hover:bg-accent for themed hover
                  >
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <p className="text-sm leading-snug">
                      {/* Removed text-gray-300. */}
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* More Than Just Code Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {/* Removed text-cyan-400. */}
            More Than Just Code
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            {/* Removed text-gray-300. */}
            I am not just a developer - I am a digital creator. From crafting
            pixel-perfect UIs to editing cinematic videos, from designing 3D
            models to building AI agents, I believe in being a Swiss Army
            knife in the tech world.
          </p>
          <div className="flex flex-wrap gap-3 justify-start">
            {creativeSkillsBadges.map((skill, index) => (
              <Badge
                key={index}
                variant="outline" // Outline variant will use theme colors for border and text
                className="text-sm px-3 py-1.5 transition-colors hover:bg-accent" // Using hover:bg-accent
              >
                {/* Removed border-cyan-500/50 text-cyan-300 */}
                <span className="mr-1.5">{skill.icon}</span>
                {skill.text}
              </Badge>
            ))}
          </div>
        </div>

        {/* Quick Facts Section */}
        <div>
          <Separator className="my-8" /> {/* Removed border-gray-700. Separator uses theme. */}
          <h3 className="text-xl font-semibold mb-5 text-center md:text-left">
            {/* Removed text-gray-400. */}
            At a Glance
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {quickFacts.map((fact, index) => (
              <Badge
                key={index}
                variant="secondary" // Secondary variant will use theme colors
                className="text-sm px-4 py-2 transition-colors cursor-default hover:bg-accent" // Using hover:bg-accent
              >
                {/* Removed bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 */}
                <span className="mr-1.5">{fact.icon}</span>
                {fact.text}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}