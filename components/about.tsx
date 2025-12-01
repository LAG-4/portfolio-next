'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      icon: "🎨",
      text: "Believe great design makes great products",
    },
  ];

  const quickFacts = [
    { icon: "📍", text: "Based in India" },
    { icon: "🎓", text: "B.Tech Computer Science at VIT" },
    { icon: "⚡", text: "Fast learner, faster shipper" },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-12 lg:p-16 xl:p-24"
    >
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-center md:text-left">
          About Me
        </h1>

        {/* Introductory Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">
                My Story
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                I&apos;m Aryan, a Computer Science student who turns caffeine into code.
                I specialize in building full-stack applications and integrating AI agents
                to solve real-world problems. I&apos;m passionate about creating seamless
                user experiences and shipping high-quality software.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">
                What Drives Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {drivingForceItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-sm">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Quick Facts Section */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-center md:text-left">
            At a Glance
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {quickFacts.map((fact, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm px-4 py-2"
              >
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