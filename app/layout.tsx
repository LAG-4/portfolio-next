import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Courier_Prime } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-courier-prime',
});

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Aryan Gupta | Developer Portfolio</title>
      </head>
      <body className={`${courierPrime.className} ${courierPrime.variable} film-grain`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
