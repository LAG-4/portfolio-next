import type { Metadata } from "next";
import "./globals.css";
import { Courier_Prime, Inter, Outfit, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { ClientLayoutWrapper } from "@/components/client-layout";

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-courier-prime',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
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
      <body className={`${courierPrime.variable} ${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayoutWrapper courierPrimeClass={courierPrime.className}>
            {children}
          </ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

