'use client'
import {
    Card,
    // CardAction, // Removed as it's not used in the provided snippet
    // CardContent, // Removed as it's not used in the provided snippet
    CardDescription,
    // CardFooter, // Removed as it's not used in the provided snippet
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function About() {
    return (
        <section id="about" className="w-full h-screen snap-start flex flex-col p-6 md:p-12 lg:p-16 xl:p-24">
            <div className="max-w-3xl">
                {" "}
                {/* Constrain width of content */}
                <h2 className="text-3xl font-extrabold mb-8">
                    The Builder Behind the Code
                </h2>
                <div className="flex flex-row gap-4 md:gap-6 lg:gap-8">
                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle>About Me</CardTitle>
                        <CardDescription className="">Hey! I&apos;m Aryan, a Computer Science student who turns caffeine into {/* Fix here */}
                            code and ideas into reality. When I&apos;m not busy building, you&apos;ll find {/* Fix here */}
                            me diving deep into the latest AI developments or creating content
                            that bridges the gap between complex tech and everyday users. Or
                            just gaming with the boys.</CardDescription>
                    </CardHeader>
                </Card>
                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle>About Me</CardTitle>
                        <CardDescription className="">Hey! I&apos;m Aryan, a Computer Science student who turns caffeine into {/* Fix here */}
                            code and ideas into reality. When I&apos;m not busy building, you&apos;ll find {/* Fix here */}
                            me diving deep into the latest AI developments or creating content
                            that bridges the gap between complex tech and everyday users. Or
                            just gaming with the boys.</CardDescription>
                    </CardHeader>
                </Card>
                </div>
            </div>
        </section>
    );
}