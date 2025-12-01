'use client'

import Image from 'next/image';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

export default function Award() {
    return (
        <section
            id="award"
            className="w-full min-h-screen flex flex-col p-6 pt-16 md:p-12 md:pt-24 lg:p-16 lg:pt-28 xl:p-24 xl:pt-32"
        >
            <h1 className="text-3xl md:text-4xl font-bold mb-12">
                Awards & Certifications
            </h1>

            <div className="space-y-12">
                {/* Smart India Hackathon */}
                <div>
                    <h2 className="text-2xl font-semibold">Smart India Hackathon 2023</h2>
                    <Separator className="my-4" />
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="w-full md:w-1/3 relative h-[200px]">
                            <Image
                                src="/images/sih.jpeg"
                                alt="SIH 2023"
                                fill
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <Card className="w-full md:flex-1">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-2">Winner</h3>
                                <p className="text-muted-foreground mb-4">
                                    Led team &quot;HUSTLERS&quot; to victory by developing &quot;SheSafe&quot;, an AI-powered safety solution.
                                    Integrated IoT, Flutter, and ML to address women&apos;s safety on campuses.
                                </p>
                                <Button variant="outline" asChild>
                                    <a href="https://czm1cc74dv.ufs.sh/f/8kIHA8Et9mP5cOfjKTCQm7Ynx3kjXLgI9ap28fRtuEGNHVbq" target="_blank">
                                        View Certificate
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* AWS Certification */}
                <div>
                    <h2 className="text-2xl font-semibold">AWS Certified Cloud Practitioner</h2>
                    <Separator className="my-4" />
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="w-full md:w-1/3 relative h-[200px]">
                            <Image
                                src="/images/aws.png"
                                alt="AWS Certified"
                                fill
                                className="object-contain rounded-lg shadow-lg border"
                            />
                        </div>
                        <Card className="w-full md:flex-1">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-2">Certified Practitioner</h3>
                                <p className="text-muted-foreground mb-4">
                                    Validated expertise in AWS Cloud platform, covering core services, security, and architecture.
                                </p>
                                <Button variant="outline" asChild>
                                    <a href="https://czm1cc74dv.ufs.sh/f/8kIHA8Et9mP52ZMTwKNYjuVOZdQqw4bvYzyEST8xFpCmPRgA" target="_blank">
                                        View Certificate
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}