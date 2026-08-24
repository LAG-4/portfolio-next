import type { Metadata } from "next";
import "./globals.css";
import { ClientLayoutWrapper } from "@/components/client-layout";

export const metadata: Metadata = {
  title: "Aryan Gupta | Systems Engineer & Full-Stack Developer",
  description: "Portfolio of Aryan Gupta, a Systems Engineer at Infosys working on production monitoring and incident coordination for the IKEA account.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      style={{ backgroundColor: "#070709", color: "#f4f4f6" }}
    >
      <body
        className="antialiased"
        style={{ margin: 0, backgroundColor: "#070709", color: "#f4f4f6" }}
      >
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
