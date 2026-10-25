import type { Metadata } from "next";
import "./globals.css";
import { ClientLayoutWrapper } from "@/components/client-layout";

export const metadata: Metadata = {
  title: {
    default: "Aryan Gupta — Developer & Systems Engineer",
    template: "%s — Aryan Gupta",
  },
  description:
    "Developer and systems engineer in Hyderabad. I build web and mobile apps, experiment with AI, and run a homelab. Currently at Infosys.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
