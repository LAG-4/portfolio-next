'use client'

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const contactInfo = [
    { icon: Mail, label: "Email", value: "aryangupta4feb@gmail.com", href: "mailto:aryangupta4feb@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9267913652", href: "tel:+919267913652" },
    { icon: MapPin, label: "Location", value: "Hyderabad, India", href: null },
];

const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/LAG-4" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-gupta4203/" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/lag_aryan" },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-12"
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
                        Let's Connect
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        Open for opportunities, collaborations, and interesting conversations about tech.
                    </p>
                </motion.div>

                {/* Noir Divider */}
                <div className="noir-divider">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="paper-card"
                    >
                        <div className="bg-card p-6 border border-border relative">
                            <div className="absolute -top-3 left-4 px-3 py-1 bg-foreground text-background text-xs tracking-widest uppercase">
                                Contact Info
                            </div>

                            <div className="space-y-5 mt-4">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="p-2 bg-muted">
                                            <item.icon className="h-4 w-4 text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground uppercase tracking-widest">
                                                {item.label}
                                            </p>
                                            {item.href ? (
                                                <a 
                                                    href={item.href} 
                                                    className="text-foreground hover:text-accent transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className="text-foreground">{item.value}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Socials Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="paper-card"
                    >
                        <div className="bg-card p-6 border border-border relative">
                            <div className="absolute -top-3 left-4 px-3 py-1 bg-foreground text-background text-xs tracking-widest uppercase">
                                Socials
                            </div>

                            <div className="space-y-4 mt-4">
                                {socials.map((item, index) => (
                                    <a 
                                        key={index}
                                        href={item.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center justify-between p-3 bg-muted hover:bg-accent group transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon className="h-5 w-5 text-foreground group-hover:text-accent-foreground" />
                                            <span className="text-foreground group-hover:text-accent-foreground font-medium">
                                                {item.label}
                                            </span>
                                        </div>
                                        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-muted-foreground text-sm italic mb-6">
                        "I'm always looking for the next interesting problem to solve."
                    </p>
                    <a 
                        href="mailto:aryangupta4feb@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        Let's Work Together
                    </a>
                </motion.div>

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-border text-center">
                    <p className="text-muted-foreground text-sm">
                        © 2024 Aryan Gupta — Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </section>
    );
}
