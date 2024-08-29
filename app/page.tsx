import { Headphones, Users, PlayCircle } from "lucide-react"

import LogoLink from "@/components/logo-link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ThemeSwitcher from "@/components/theme-switcher";
import { ConnectMusicPlatforms } from "@/components/connect-music-platforms";

export default function MainPage() {
  return (
    <>
      <header className="w-full px-4 lg:px-6 h-14 flex items-center justify-between">
        <LogoLink />
        <ThemeSwitcher />
      </header>

      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
        <div className="container px-4 md:px-6 space-y-2">
          <div className="flex flex-col items-center space-y-20 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Connect Through the Power of Music
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Share your passion, discover new sounds, and join a community of music lovers.
              </p>
            </div>

            <ConnectMusicPlatforms />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-black tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Headphones className="h-8 w-8 mb-2"/>
                <CardTitle>Personalized Playlists</CardTitle>
              </CardHeader>
              <CardContent>
                Create and share custom playlists tailored to your unique taste in music.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 mb-2"/>
                <CardTitle>Connect with Music Lovers</CardTitle>
              </CardHeader>
              <CardContent>
                Join discussions, share recommendations, and connect with like-minded music enthusiasts.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <PlayCircle className="h-8 w-8 mb-2"/>
                <CardTitle>Discover New Tracks</CardTitle>
              </CardHeader>
              <CardContent>
                Explore new genres, artists, and songs based on your listening habits and community recommendations.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/*Main Page*/}
      {/*<Button onClick={() => setTheme("light")}>*/}
      {/*  Light theme*/}
      {/*</Button>*/}
      {/*<Button onClick={() => setTheme('dark')}>*/}
      {/*  Dark theme*/}
      {/*</Button>*/}
    </>
  );
}
