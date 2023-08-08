import Image from "next/image";
import Link from "next/link";

import { Montserrat_Alternates } from 'next/font/google'

const font = Montserrat_Alternates({ weight: ['300', '500', '700'], subsets: ['latin'] })


export default function Home() {
  return (
    <div className="p-2 md:p-24">
      <div className="flex flex-col justify-center items-center gap-10">
        <header className="mb-10">
          <nav className="flex items-center justify-between flex-wrap w-60">
            <Link href={'/projects'} prefetch={false} className="text-zinc-400 md:text-zinc-950/75 hover:text-zinc-950 md:text-zinc-950 transition-colors duration-150 ease-in font-semibold">
              Projects
            </Link>
            <Link href={'/contact'} prefetch={false} className="text-zinc-400 md:text-zinc-950/75 hover:text-zinc-950 md:text-zinc-950 transition-colors duration-150 ease-in font-semibold">
              Contact
            </Link>
          </nav>
        </header>
        <h1 className="text-7xl lg:text-[7vw] 2xl:text-9xl font-bold tracking-tighter text-zinc-300 md:text-zinc-950" style={font.style}>AGHA</h1>
        <h5 className="text-center text-zinc-400 md:text-zinc-950 font-mono font-semibold">
          Hi, my name is Agha, I&apos;m building serverless and open source solutions
          <br />
          with NextJs and working on <a href="https://nixtt-beta.vercel.app/" target={'_blank'} className="underline decoration-2 underline-offset-2 hover:no-underline" >NiXTT</a> at night.
        </h5>
      </div>
    </div>
  )
}
