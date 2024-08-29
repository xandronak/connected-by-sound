import { ReactNode } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import LogoLink from "@/components/logo-link"

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
      <header className="px-4 lg:px-6 w-full h-14 flex items-center">
        <LogoLink />

        <nav className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Discover
          </Button>
          <Button variant="ghost" size="sm">
            Library
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-avatar.jpg" alt="User avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </nav>
      </header>

      <section>
        {children}
      </section>
    </>
  );
}
