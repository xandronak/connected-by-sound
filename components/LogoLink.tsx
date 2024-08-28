import {Music} from "lucide-react";
import Link from "next/link";

export default function LogoLink() {
  return (
    <Link className="flex items-center justify-center" href="/">
      <Music className="h-8 w-8"/>
      <span className="ml-2 text-lg font-semibold">Connected by Sound</span>
    </Link>
  )
}
