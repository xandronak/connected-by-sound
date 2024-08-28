import { ReactNode } from "react"
import Link from "next/link";
import { Music } from "lucide-react";

import LogoLink from "@/components/LogoLink";

export const metadata = {
  title: "Connected by Sound - Feed",
};

export default function FeedLayout({
 children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <LogoLink />
      </header>

      <section>
        Test
        {children}
      </section>
    </>
  );
}
