import type { Metadata } from "next";
import "./globals.css";
import { ClientLayoutWrapper } from "@/components/client-layout";

export const metadata: Metadata = {
  title: "Aryan Gupta | Full-Stack Developer & AI Enthusiast",
  description: "Portfolio of Aryan Gupta - Full-Stack Developer, AI Enthusiast, and National Hackathon Winner. Building scalable applications and intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
