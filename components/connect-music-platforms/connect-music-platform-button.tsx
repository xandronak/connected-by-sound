import {cva, type VariantProps} from "class-variance-authority";
import React from "react";
import Image from 'next/image';
import {Button} from "@/components/ui/button";
import {cn} from "@/utils/cn";
import {Check} from "lucide-react";
import { MusicProviderType } from "@/common/types";
import { MUSIC_PROVIDER_NAME } from "@/common/constants";

const providerVariants: Record<MusicProviderType, string> = {
  spotify: "bg-[#1DB954] hover:bg-[#1ED760]",
  appleMusic: "bg-[#FA57C1] hover:bg-[#FB6CD0]",
  deezer: "bg-[#FEAA2D] hover:bg-[#FEB54D]"
};

const providerIconSrc: Record<MusicProviderType, string> = {
  spotify: "/images/spotify-logo.svg",
  appleMusic: "/images/apple-music-logo.svg",
  deezer: "/images/deezer-logo.svg"
}

const connectMusicPlatformButtonVariants = cva(
  "text-white",
  {
    variants: {
      provider: providerVariants,
    },
    defaultVariants: {
      provider: "spotify",
    },
  }
)

export interface ConnectMusicPlatformButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof connectMusicPlatformButtonVariants> {
  asChild?: boolean;
  isConnected?: boolean;
  provider: keyof typeof providerVariants;
}

export const ConnectMusicPlatformButton = React.forwardRef<HTMLButtonElement, ConnectMusicPlatformButtonProps>(({ className, provider, isConnected, asChild = false, ...props }, ref) => {
  const providerName = MUSIC_PROVIDER_NAME[provider];

  return (
    <Button ref={ref} className={cn(connectMusicPlatformButtonVariants({ provider }))} disabled={isConnected} asChild={asChild}>
      <Image className="mr-1" src={providerIconSrc[provider]} alt={providerName} width={24} height={24} />

      {isConnected ? (
        <span>
          {providerName} is connected
          <Check className="ml-1"/>
        </span>
      ) : (
        <span>
          Connect {providerName}
        </span>
      )}
    </Button>
  )
});