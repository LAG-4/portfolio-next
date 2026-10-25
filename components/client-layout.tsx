import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";

export function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-footer">
          <span>
            Aryan Gupta <span className="footer-dot">·</span> Hyderabad, India
          </span>
          <div>
            <a
              href="https://blog.lagaryan.click"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog ↗
            </a>
            <Link href="/privacy-policy">Privacy</Link>
            <a href="/cli">CLI ↗</a>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
