'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileText, Mail, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

const avatarImagePath = 'images/Hero.png';
const resumePath = "/resume.pdf";
const emailAddress = "aryangupta4feb@gmail.com";

// Typewriter effect hook
function useTypewriter(text: string, speed: number = 100) {
  const [displayed, setDisplayed] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);
    
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, isComplete };
}

export default function Hero() {
  const { displayed: heroText, isComplete } = useTypewriter("ARYAN GUPTA", 120);

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-12 md:px-12 lg:px-24 xl:px-32 overflow-hidden"
    >
      {/* Venetian blinds effect - subtle light stripes */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none dark:opacity-[0.08]">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-12 bg-gradient-to-b from-foreground/20 to-transparent"
            style={{ top: `${i * 7}%` }}
          />
        ))}
      </div>

      <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 max-w-6xl mx-auto">
        {/* Text Content */}
        <motion.div 
          className="text-center md:text-left flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <motion.p 
            className="text-muted-foreground text-sm tracking-[0.4em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full-Stack Developer & AI Enthusiast
          </motion.p>

          {/* Main Heading with Typewriter */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            {heroText}
            <span className={`text-accent ${isComplete ? 'animate-blink' : ''}`}>|</span>
          </h1>

          {/* Tagline */}
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg italic">
            “Building tomorrow’s tech today — shipping products that matter.”
          </p>

          {/* Key highlights */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-10 text-sm">
            <span className="flex items-center gap-2 text-foreground/80">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              National Hackathon Winner
            </span>
            <span className="flex items-center gap-2 text-foreground/80">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              10+ Projects Shipped
            </span>
            <span className="flex items-center gap-2 text-foreground/80">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              AI/ML Specialist
            </span>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href={resumePath} 
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all duration-200 group"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
            <a 
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-foreground/20 text-foreground hover:border-accent hover:text-accent transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Avatar */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Paper stack effect */}
          <div className="absolute inset-0 bg-card rounded-full transform rotate-3 scale-105 opacity-50" />
          <div className="absolute inset-0 bg-card rounded-full transform -rotate-2 scale-103 opacity-70" />
          
          <Avatar className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-accent/20 shadow-2xl relative z-10">
            <AvatarImage
              src={avatarImagePath}
              alt="Aryan Gupta"
              className="object-cover"
            />
            <AvatarFallback className="text-4xl font-bold bg-muted text-muted-foreground">AG</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
