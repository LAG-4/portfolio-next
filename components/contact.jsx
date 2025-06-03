'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <section 
            id="contact" 
            className="w-full min-h-screen snap-start flex flex-col p-6 pt-16 md:p-12 md:pt-24 lg:p-16 lg:pt-28 xl:p-24 xl:pt-32"
        >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg text-muted-foreground mb-8">
                Let's connect and discuss opportunities, projects, or just have a chat!
            </p>

            <div className="space-y-8">
                {/* Contact Information and Social Links - Row Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl">Contact Information</CardTitle>
                            <CardDescription>
                                Feel free to reach out through any of these channels.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <Mail className="h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p className="font-medium">Email</p>
                                    <a 
                                        href="mailto:aryangupta4feb@gmail.com"
                                        className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                    >
                                        aryangupta4feb@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <Phone className="h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <a 
                                        href="tel:+919267913652"
                                        className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                    >
                                        +91 9267913652
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <MapPin className="h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p className="font-medium">Location</p>
                                    <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Social Links */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-xl">Connect With Me</CardTitle>
                            <CardDescription>
                                Find me on these platforms for professional networking and updates.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col space-y-4">
                                <a 
                                    href="https://github.com/LAG-4" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 p-3 rounded-lg border transition-colors hover:bg-muted"
                                >
                                    <Github className="h-5 w-5" />
                                    <span className="font-medium">GitHub</span>
                                </a>
                                
                                <a 
                                    href="https://www.linkedin.com/in/aryan-gupta4203/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 p-3 rounded-lg border transition-colors hover:bg-muted"
                                >
                                    <Linkedin className="h-5 w-5" />
                                    <span className="font-medium">LinkedIn</span>
                                </a>
                                
                                <a 
                                    href="https://x.com/lag_aryan" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 p-3 rounded-lg border transition-colors hover:bg-muted"
                                >
                                    <Twitter className="h-5 w-5" />
                                    <span className="font-medium">Twitter</span>
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Response Time - Below the row */}
                <Card className="shadow-lg">
                    <CardContent className="pt-6">
                        <div className="text-center space-y-2">
                            <h3 className="font-semibold text-lg">Quick Response</h3>
                            <p className="text-muted-foreground text-sm">
                                I typically respond within 24 hours during weekdays.
                            </p>
                            <Separator className="my-4" />
                            <p className="text-xs text-muted-foreground">
                                Available for freelance projects and full-time opportunities
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}