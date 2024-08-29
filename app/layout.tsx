import { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "@/components/theme-provider";

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
