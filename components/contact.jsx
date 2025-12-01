'use client'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-12"
        >
            <div className="max-w-4xl w-full">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h1>
                <p className="text-lg text-muted-foreground mb-12 text-center">
                    Open for opportunities and collaborations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle>Contact Info</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-muted-foreground" />
                                <a href="mailto:aryangupta4feb@gmail.com" className="hover:text-primary transition-colors">
                                    aryangupta4feb@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-muted-foreground" />
                                <a href="tel:+919267913652" className="hover:text-primary transition-colors">
                                    +91 9267913652
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-muted-foreground" />
                                <span>Hyderabad, India</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle>Socials</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4">
                            <a href="https://github.com/LAG-4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                                <span>GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/aryan-gupta4203/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://x.com/lag_aryan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span>Twitter</span>
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}