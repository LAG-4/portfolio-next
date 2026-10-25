import { Portrait } from "@/components/portrait";
import { ArrowUpRight, Mail } from "lucide-react";
import {
  SiGithub,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
export const metadata = { title: "Links & contact" };
const links = [
  {
    name: "Email",
    href: "mailto:aryangupta4feb@gmail.com",
    description: "For a project, an opportunity, or just a hello.",
    icon: Mail,
  },
  {
    name: "GitHub",
    href: "https://github.com/lag-4",
    description: "Projects, experiments, and source code.",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aryan-gupta4203/",
    description: "The professional side of things.",
    icon: LinkedInIcon,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@lag_aryan4",
    description: "Videos and edits I’ve put out into the world.",
    icon: SiYoutube,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/lag_aryan",
    description: "Life, in pictures.",
    icon: SiInstagram,
  },
  {
    name: "X / Twitter",
    href: "https://x.com/lag_aryan",
    description: "Occasional thoughts on tech and everything else.",
    icon: SiX,
  },
];
export default function LinksPage() {
  return (
    <>
      <header className="profile-heading">
        <Portrait />
        <div>
          <h1>Let’s connect.</h1>
          <p className="profile-subtitle">Find me around the internet.</p>
        </div>
      </header>
      <div className="social-list">
        {links.map(({ name, href, description, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="social-row"
          >
            <Icon size={20} aria-hidden="true" />
            <div>
              <strong>{name}</strong>
              <p>{description}</p>
            </div>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        ))}
      </div>
    </>
  );
}
