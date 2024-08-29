import React, { ReactNode } from "react";
import {Check} from "lucide-react";
import {cva, type VariantProps} from "class-variance-authority";

import prisma from "@/lib/prisma";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {cn} from "@/utils/cn";

const testEmail = "test@gmail.com";

const connectMusicPlatformButtonVariants = cva(
  "text-white",
  {
    variants: {
      provider: {
        spotify: "bg-[#1DB954] hover:bg-[#1ED760]",
        appleMusic: "bg-[#FA57C1] hover:bg-[#FB6CD0]",
        deezer: "bg-[#FEAA2D] hover:bg-[#FEB54D]"
      },
    },
    defaultVariants: {
      provider: "spotify",
    },
  }
)

type ProviderType = keyof typeof connectMusicPlatformButtonVariants;

export interface ConnectMusicPlatformButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof connectMusicPlatformButtonVariants> {
  asChild?: boolean;
  isConnected?: boolean;
}

const ConnectMusicPlatformButton = React.forwardRef<HTMLButtonElement, ConnectMusicPlatformButtonProps>(({ className, provider, isConnected, asChild = false, ...props }, ref) => {
  return (
    <Button ref={ref} className={cn()} disabled={isConnected} asChild={asChild}>
      <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
        <path
          d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
      {isConnected ? (
        <>
          Spotify connected
          <Check className="ml-1"/>
        </>
      ) : (
        <>
          Connect Spotify
        </>
      )}
    </Button>
  )
});

export default async function ConnectMusicPlatforms() {
  const userData = await prisma.user.findUnique({
    where: {
      email: testEmail,
    },
    select: {
      spotifyAccount: true,
      appleMusicAccount: true,
      deezerAccount: true
    }
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connect Your Music Services</CardTitle>
        <CardDescription>Integrate your favorite music streaming platforms to enhance your experience</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-[#1DB954] hover:bg-[#1ED760] text-white" disabled={!!userData?.spotifyAccount}>
            <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
              <path
                d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            {userData?.spotifyAccount ? (
              <>
                Spotify connected
                <Check className="ml-1"/>
              </>
            ) : (
              <>
                Connect Spotify
              </>
            )}
          </Button>

          <Button className="bg-[#FA57C1] hover:bg-[#FB6CD0] text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
              <path
                d="M23.97 6.21c0-.05.01-.11.01-.16V6c-.01-.17-.04-.33-.11-.49-.04-.09-.09-.18-.15-.26a1.347 1.347 0 00-.44-.45c-.12-.08-.26-.14-.4-.19-.13-.04-.26-.07-.39-.08-.09-.01-.17-.01-.26-.01h-3.24c-.09 0-.18.01-.27.02-.14.02-.28.05-.42.1-.14.05-.27.11-.39.19a1.722 1.722 0 00-.35.32c-.1.11-.18.23-.24.37-.06.13-.1.26-.13.4 0 .03-.01.06-.01.09v12.29c0 .14.02.28.06.41.04.13.09.25.16.36.07.12.16.22.26.31.1.09.22.17.34.23.12.06.25.11.39.14.13.03.26.05.39.05h3.24c.14 0 .27-.01.4-.04.13-.03.26-.08.38-.14.12-.06.23-.14.33-.23.1-.09.19-.2.26-.31.07-.12.12-.24.16-.37.04-.13.06-.27.06-.41V6.42c0-.07-.01-.14-.02-.21zM10.56 4.88c-.14-.03-.29-.05-.43-.05H6.88c-.14 0-.28.02-.42.05-.13.03-.26.08-.38.14-.12.06-.23.14-.33.23-.1.09-.19.2-.26.32-.07.12-.13.25-.16.38-.04.13-.06.27-.06.41v12.29c0 .14.02.28.06.41.04.13.09.25.16.37.07.12.16.22.26.31.1.09.21.17.33.23.12.06.25.11.38.14.13.03.27.05.41.05h3.25c.14 0 .28-.01.41-.05.13-.03.26-.08.38-.14.12-.06.23-.14.33-.23.1-.09.19-.2.26-.31.07-.12.12-.24.16-.37.04-.13.06-.27.06-.41V6.36c0-.14-.02-.28-.06-.41-.04-.13-.09-.26-.16-.38-.07-.12-.16-.23-.26-.32-.1-.09-.21-.17-.33-.23-.12-.06-.25-.11-.38-.14zm-7.5 0c-.14-.03-.28-.05-.42-.05H.78c-.1 0-.2.01-.3.03-.14.02-.28.06-.41.11-.13.05-.25.12-.36.2-.11.09-.21.19-.29.31-.08.11-.14.24-.19.37-.05.13-.08.27-.09.41 0 .05-.01.09-.01.14v11.74c0 .14.02.28.06.41.04.13.09.25.16.37.07.12.16.22.26.31.1.09.22.17.34.23.12.06.25.11.39.14.13.03.26.05.39.05h1.83c.14 0 .28-.01.41-.05.13-.03.26-.08.38-.14.12-.06.23-.14.33-.23.1-.09.19-.2.26-.31.07-.12.12-.24.16-.37.04-.13.06-.27.06-.41V6.42c0-.14-.02-.28-.06-.41-.04-.13-.09-.26-.16-.38-.07-.12-.16-.23-.26-.32-.1-.09-.21-.17-.33-.23-.12-.06-.25-.11-.38-.14z"/>
            </svg>
            Connect Apple Music
          </Button>
          <Button className="bg-[#FEAA2D] hover:bg-[#FEB54D] text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
              <path
                d="M17.68 6.862A115.383 115.383 0 0 0 12.413 0h-.003c-1.258 1.602-3.229 4.9-5.26 6.862-4.747 4.585-6.126 14.084-.417 15.89 1.012.321 3.067-.82 5.26-2.507a.473.473 0 0 1 .582.002c1.987 1.592 4.118 2.897 5.267 2.508 5.712-1.805 4.335-11.307-.415-15.893Zm-5.26 15.64c-.904-1.346-1.472-2.11-1.472-2.11s-.57.767-1.474 2.113c-.905 1.346-1.609 2.137-2.187 2.4-.577.261-1.257.227-1.775-.2a1.692 1.692 0 0 1-.682-1.345c-.057-2.656 1.236-7.215 4.816-10.675 1.464-1.416 2.738-2.284 3.3-2.76.56.473 1.833 1.34 3.297 2.756 3.58 3.463 4.873 8.022 4.816 10.675a1.692 1.692 0 0 1-.682 1.345c-.518.427-1.198.461-1.775.2-.577-.263-1.281-1.054-2.186-2.4l-.002.001h.006Z"/>
            </svg>
            Connect Deezer
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}