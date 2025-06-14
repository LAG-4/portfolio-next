import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"



const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap', // Recommended for better performance and user experience
  variable: '--font-jetbrains-mono', // Define a CSS variable for Tailwind CSS or global use
});
export const metadata: Metadata = {
  title: "Aryan Gupta | Developer Portfolio",
  description: "This is a portfolio website of Aryan Gupta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Aryan Gupta</title>
        </head>  
        
      <body
        className={`${jetbrainsMono.className} ${jetbrainsMono.variable}`}
      ><ThemeProvider
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
