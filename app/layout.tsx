import { ReactNode } from "react";
import Link from "next/link"
import { Music } from "lucide-react"
import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "@/components/ThemeProvider";

import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Connected by Sound - Find your community",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
    <body>
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <Music className="h-8 w-8"/>
        <span className="ml-2 text-lg font-semibold">Connected by Sound</span>
      </Link>
    </header>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <main className="min-h-screen flex flex-col items-center">
        {children}
      </main>
    </ThemeProvider>

    <footer className="px-4 lg:px-6 h-14 flex items-center">
      <span className="font-light">Copyright 2024 @ Connected by Sound</span>
    </footer>
    </body>
    </html>
  );
}
