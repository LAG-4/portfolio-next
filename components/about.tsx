'use client';

import { motion } from 'motion/react';

export default function About() {
  const drivingForceItems = [
    {
      text: "Obsessed with emerging AI technologies and building intelligent systems",
    },
    {
      text: "Love turning ideas into functional, polished products",
    },
    {
      text: "Believe great design makes great products — form follows function",
    },
  ];

  const quickFacts = [
    { label: "Location", value: "India" },
    { label: "Education", value: "B.Tech CS @ VIT" },
    { label: "Focus", value: "Full-Stack & AI" },
    { label: "Projects", value: "10+ Shipped" },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-12 lg:p-16 xl:p-24 bg-card"
    >
      <div className="max-w-4xl w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            About Me
          </h2>
        </motion.div>

        {/* Noir Divider */}
        <div className="noir-divider">
          <span className="w-2 h-2 bg-accent rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* My Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="paper-card bg-background p-6 md:p-8 border border-border relative"
          >
            <div className="absolute -top-3 left-4 px-3 py-1 bg-foreground text-background text-xs tracking-widest uppercase">
              My Story
            </div>
            <p className="leading-relaxed text-foreground/80 mt-2">
              I'm Aryan, a Computer Science student who turns caffeine into code.
              I specialize in building full-stack applications and integrating AI agents
              to solve real-world problems. I'm passionate about creating seamless
              user experiences and shipping high-quality software that makes a difference.
            </p>
          </motion.div>

          {/* What Drives Me Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="paper-card bg-background p-6 md:p-8 border border-border relative"
          >
            <div className="absolute -top-3 left-4 px-3 py-1 bg-foreground text-background text-xs tracking-widest uppercase">
              What Drives Me
            </div>
            <ul className="space-y-4 mt-2">
              {drivingForceItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-foreground/80"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <p className="text-sm leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Quick Facts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickFacts.map((fact, index) => (
              <div 
                key={index} 
                className="text-center p-4 md:p-6 bg-muted/30 border border-border hover:border-accent/50 transition-colors"
              >
                <p className="text-muted-foreground text-xs uppercase tracking-widest mb-2">
                  {fact.label}
                </p>
                <p className="text-foreground font-semibold">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
