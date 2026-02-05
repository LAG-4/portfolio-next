'use client'

import { motion } from 'motion/react';
import Image from 'next/image';
import { Award, ExternalLink } from "lucide-react";

const awardsData = [
  {
    title: "Smart India Hackathon 2023",
    subtitle: "Winner",
    description: 'Led team "HUSTLERS" to victory by developing "SheSafe", an AI-powered safety solution. Integrated IoT, Flutter, and ML to address women\'s safety on campuses.',
    image: "/images/sih.jpeg",
    certificateLink: "https://czm1cc74dv.ufs.sh/f/8kIHA8Et9mP5cOfjKTCQm7Ynx3kjXLgI9ap28fRtuEGNHVbq",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    subtitle: "Certified Practitioner",
    description: "Validated expertise in AWS Cloud platform, covering core services, security, and architecture.",
    image: "/images/aws.png",
    certificateLink: "https://czm1cc74dv.ufs.sh/f/8kIHA8Et9mP52ZMTwKNYjuVOZdQqw4bvYzyEST8xFpCmPRgA",
  },
];

export default function Awards() {
  return (
    <section
      id="award"
      className="w-full min-h-screen flex flex-col p-6 pt-16 md:p-12 md:pt-24 lg:p-16 lg:pt-28 xl:p-24 xl:pt-32 bg-card"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-3">
            Recognition
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Awards & Certifications
          </h2>
        </motion.div>

        {/* Noir Divider */}
        <div className="noir-divider">
          <span className="w-2 h-2 bg-accent rounded-full" />
        </div>

        {/* Awards List */}
        <div className="space-y-12">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="paper-card"
            >
              <div className="bg-background border border-border p-6 relative">
                {/* Award Label */}
                <div className="absolute -top-3 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs tracking-widest uppercase flex items-center gap-2">
                  <Award className="w-3 h-3" />
                  Achievement
                </div>

                <div className="flex flex-col md:flex-row gap-6 mt-2">
                  {/* Image */}
                  <div className="w-full md:w-1/3 relative h-[180px] bg-muted overflow-hidden">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {award.title}
                    </h3>
                    <p className="text-accent text-sm mb-3">
                      {award.subtitle}
                    </p>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      {award.description}
                    </p>
                    <a
                      href={award.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-accent hover:text-accent-foreground transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
