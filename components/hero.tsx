import TypewriterText from '@/components/typewriter';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button';

const avatarImagePath = 'images/Hero.png'
const resumePath = "/resume.pdf";
const emailAddress = "aryangupta4feb@gmail.com";

export default function Hero(){
    return (
        <section id="home" className='relative w-full h-screen snap-start flex items-center justify-center md:justify-start px-6 py-12 md:px-12 lg:px-24 xl:px-32'>
        <div className="z-10 text-center md:text-left md:mr-[calc(min(40vw,400px)+6rem)]">
        {" "}
        {/* Adjusted margin-right */}
        <h1 className="text-4xl font-extrabold mb-8">
          Building Tomorrow&apos;s Tech Today <br /> {/* Fix here */}
          <div className="text-2xl mb-0">
            Full-Stack Developer & AI Enthusiast
          </div>
          <br />
          <TypewriterText />
        </h1>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-extrabold mt-10 md:mt-12 mb-8">
            Quick Stats:
          </h1>
          <ul className="text-xl font-extrabold mb-8 list-disc pl-5 text-left">
            <li>National Hackathon Winner</li>
            <li>4+ Years Coding</li>
            <li>10+ Projects Shipped</li>
            <li>Familiar with multiple technologies</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start">
          <Button
            asChild
            className="w-full sm:w-auto flex-1 sm:flex-initial"
          >
            <a href={resumePath} download>
              Download Resume
            </a>
          </Button>
          <Button
            asChild
            className="w-full sm:w-auto flex-1 sm:flex-initial"
          >
            <a href={`mailto:${emailAddress}`}>Let&apos;s Connect</a>
          </Button>
        </div>
      </div>

      {/* Avatar - absolutely positioned */}
      {/* pr-16 means the avatar image is 4rem from the right edge of this div */}
      {/* This div is right-0 relative to the section */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 transform pr-16 z-0">
        <Avatar className="w-[min(40vw,400px)] h-[min(40vw,400px)] lg:w-[400px] lg:h-[400px]">
          <AvatarImage
            src={avatarImagePath}
            alt="Aryan Gupta&apos;s profile picture" // Fix here
          />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>
      </div>
      </section>
    );
}