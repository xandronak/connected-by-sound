import React from "react";

import prisma from "@/lib/prisma";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {MusicProviderType, MusicProviderData} from "@/common/types"
import { ConnectMusicPlatformButton } from "./connect-music-platform-button";

const testEmail = "test@gmail.com";

const checkIfMusicProviderConnected = (musicProviders: Pick<MusicProviderData, "providerName">[]) => (providerName: MusicProviderType): boolean => (
  !!musicProviders.find((musicProvider) => musicProvider.providerName.toLowerCase() === providerName)
)

export default async function ConnectMusicPlatforms() {
  const data = await prisma.user.findUnique({
    where: {
      email: testEmail,
    },
    select: {
      musicProviders: {
        select: {
          providerName: true,
        },
      },
    }
  });

  const getIsProviderConnected = checkIfMusicProviderConnected(data?.musicProviders ?? []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connect Your Music Services</CardTitle>
        <CardDescription>Integrate your favorite music streaming platforms to enhance your experience</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          <ConnectMusicPlatformButton provider="spotify" isConnected={getIsProviderConnected("spotify")} />

          <ConnectMusicPlatformButton provider="appleMusic" isConnected={getIsProviderConnected("appleMusic")} />

          <ConnectMusicPlatformButton provider="deezer" isConnected={getIsProviderConnected("deezer")} />
        </div>
      </CardContent>
    </Card>
  )
}