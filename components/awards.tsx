'use client'

// Import the Image component from Next.js
import Image from 'next/image';

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card"; // Assuming these are Shadcn UI components
import { Separator } from "./ui/separator";   // Assuming this is a Shadcn UI component

export default function Award() {
    return (
        <section
            id="award"
            className="w-full min-h-screen snap-start flex flex-col p-6 pt-16 md:p-12 md:pt-24 lg:p-16 lg:pt-28 xl:p-24 xl:pt-32"
        >
            <h1 className="text-3xl md:text-4xl font-bold">
                Awards and Certifications
            </h1>

            {/* Smart India Hackathon */}
            <div className="mt-10 md:mt-12">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Smart India Hackathon 2023
                </h2>
                <Separator className="my-4 bg-gray-200" />
                <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-8">
                    <div className="w-full md:w-2/5 lg:w-1/3 flex-shrink-0 relative h-[200px] md:h-[250px] lg:h-[300px]">
                        {/* Use Next.js Image component */}
                        <Image
                            src="/images/sih.jpeg"
                            alt="Smart India Hackathon 2023"
                            fill // Makes the image fill its parent container
                            className="object-cover rounded-lg shadow-lg"
                            priority // Prioritize loading for LCP
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw" // Responsive sizing
                        />
                    </div>

                    <Card className="w-full md:flex-1 bg-white dark:bg-gray-800 shadow-md rounded-lg">
                        <CardContent className="p-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-2">
                                Achievement: Winner, Smart India Hackathon.
                            </h3>
                            <p className="text-base leading-relaxed text-muted-foreground">
                                Our team, &quot;HUSTLERS,&quot; had the honor of representing Vellore Institute of Technology at the Smart India Hackathon 2023. We developed a cutting-edge solution addressing the critical problem statement &quot;Women Safety in College Campuses,&quot; in collaboration with the Government of Jharkhand. This prestigious national competition provided a platform to showcase our technical proficiency in Flutter development, Artificial Intelligence, Machine Learning, Internet of Things (IoT), as well as our strengths in collaboration and teamwork. Our innovative solution focused on enhancing the safety and security of women on college campuses by delivering a robust suite of emergency services, contributing meaningfully to societal well-being.
                            </p>
                            <Button variant="outline" asChild>
                                <a
                                    href="https://czm1cc74dv.ufs.sh/f/8kIHA8Et9mP5cOfjKTCQm7Ynx3kjXLgI9ap28fRtuEGNHVbq"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block hover:underline font-medium"
                                >
                                    View Certificate
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* AWS Certified Cloud Practitioner */}
            <div className="mt-12 md:mt-16">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    AWS Certified Cloud Practitioner
                </h2>
                <Separator className="my-4" />
                <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-8">
                    {/* Use Next.js Image component */}
                    <div className="w-full md:w-2/5 lg:w-1/3 flex-shrink-0 relative h-[200px] md:h-[250px] lg:h-[300px]">
                        <Image
                            src="/images/aws.png"
                            alt="AWS Certified Cloud Practitioner"
                            fill // Makes the image fill its parent container
                            className="object-contain rounded-lg shadow-lg border border-gray-200 dark:border-gray-700" // Use 'contain' if logo aspect ratio is important
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw" // Responsive sizing
                        />
                    </div>
                    <Card className="w-full md:flex-1 bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-lg">
                        <CardContent className="p-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-2">
                                Certification: AWS Certified Cloud Practitioner.
                            </h3>
                            <p className="text-base leading-relaxed text-muted-foreground">
                                I pursued and successfully attained the AWS Certified Cloud Practitioner certification. This accomplishment demonstrates my foundational understanding of the AWS Cloud platform, including its core services, architecture, security, pricing, and support. This certification validates my capability to articulate the value proposition of AWS and effectively navigate its comprehensive ecosystem.
                            </p>
                            <Button variant="outline" asChild>
                                <a
                                    href="https://czm1cc74dv.ufs.sh/f/8kIHA8Et9mP52ZMTwKNYjuVOZdQqw4bvYzyEST8xFpCmPRgA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block hover:underline font-medium"
                                >
                                    View Certificate
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* MERN Stack Certification */}
            <div className="mt-12 md:mt-16">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    MERN Stack Certification
                </h2>
                <Separator className="my-4" />
                <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-8">
                    {/* Use Next.js Image component */}
                    <div className="w-full md:w-2/5 lg:w-1/3 flex-shrink-0 relative h-[200px] md:h-[250px] lg:h-[300px]">
                        <Image
                            src="/images/mern.png"
                            alt="MERN Stack Certification"
                            fill // Makes the image fill its parent container
                            className="object-contain rounded-lg shadow-lg border border-gray-200 dark:border-gray-700" // Use 'contain' if logo aspect ratio is important
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw" // Responsive sizing
                        />
                    </div>
                    <Card className="w-full md:flex-1 bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-lg">
                        <CardContent className="p-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-2">
                                Certification: MERN Stack by Ethnus.
                            </h3>
                            <p className="text-base leading-relaxed text-muted-foreground">
                                I successfully completed the MERN Stack Certification program from Ethnus, where I gained comprehensive expertise in building full-stack web applications. This hands-on training solidified my proficiency in MongoDB, Express.js, React.js, and Node.js, covering everything from database management and API development to responsive front-end design. The certification signifies my capability to develop scalable, efficient, and dynamic web solutions using the MERN ecosystem.
                            </p>
                            <Button variant="outline" asChild>
                                <a
                                    href="https://czm1cc74dv.ufs.sh/f/8kIHA8Et9mP5YM6x4UaSXTPjFUdx032Q4LrBVRNhsuHobc8I"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block hover:underline font-medium"
                                >
                                    View Certificate
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}