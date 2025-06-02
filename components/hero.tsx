import TypewriterText from '@/components/typewriter';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button';

const avatarImagePath = 'images/Hero.png'
const resumePath = "/resume.pdf"; 
const emailAddress = "aryangupta4feb@gmail.com";

export default function Hero(){
    return (
        <section id="home">
        <h1 className="text-4xl font-extrabold mb-8">
          Building Tomorrow's Tech Today <br />
          <div className='text-2xl mb-0'>Full-Stack Developer & AI Enthusiast</div><br />
          <TypewriterText />
        </h1>
        <div className='flex flex-col justify-center'>
          <h1 className="text-3xl font-extrabold mt-20 mb-8">
            Quick Stats:
          </h1>
          <ul className="text-xl font-extrabold mb-8" itemType='disc'>
            <li>- National Hackathon Winner</li>
            <li>- 4+ Years Coding</li>
            <li>- 10+ Projects Shipped</li>
            <li>- Familiar with multiple technologies</li>
          </ul>
        </div>
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 transform pr-16 z-0">
          <Avatar className="w-[min(40vw,400px)] h-[min(40vw,400px)] lg:w-[400px] lg:h-[400px]">
            <AvatarImage src={avatarImagePath} alt="Aryan Gupta's profile picture" />
            <AvatarFallback>AG</AvatarFallback>
          </Avatar>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <Button className="w-full sm:w-auto flex-1 sm:flex-initial" asChild>
            <a href={resumePath} download={"AryanGupta"}>Download Resume</a>
        </Button>
        <Button className="w-full sm:w-auto flex-1 sm:flex-initial" asChild>
            <a href={`mailto:${emailAddress}`}>Let's Connect</a>
        </Button>
      </div>
      </section>
    );
}