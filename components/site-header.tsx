"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/toggle";

const workLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/linktree", label: "Links" },
];
const personalLinks = [
  { href: "/personal", label: "Home" },
  { href: "/now", label: "Now" },
  { href: "/editing", label: "Films" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const personal =
    pathname === "/personal" ||
    pathname === "/now" ||
    pathname.startsWith("/editing");
  const links = personal ? personalLinks : workLinks;
  return (
    <header className="site-header">
      <div className="header-top">
        <Link
          className="wordmark"
          href={personal ? "/personal" : "/"}
          aria-label="LAG, home"
        >
          LAG
        </Link>
        <nav className="mode-switch" aria-label="Site mode">
          <Link href="/personal" aria-current={personal ? "true" : undefined}>
            Personal
          </Link>
          <Link href="/" aria-current={!personal ? "true" : undefined}>
            Work
          </Link>
        </nav>
        <ModeToggle />
      </div>
      <nav className="page-nav" aria-label="Main navigation">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={
              (href === "/" ? pathname === href : pathname.startsWith(href))
                ? "page"
                : undefined
            }
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
