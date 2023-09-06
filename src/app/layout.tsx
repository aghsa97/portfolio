import './globals.css'
import type { Metadata } from 'next'

import { Poppins } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Mou Agha',
  description: `Hi, my name is Agha, I'm building serverless and open source solutions with NextJs and working on NiXTT at night.`,
}

const font = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={font.className} style={{
        backgroundImage: `url("/grainy.png")`
      }}>
        {children}
        {/* <footer className='absolute bottom-1 flex items-center border-4 border-neutral-950 rounded-full px-4 py-2 mb-2 max-w-screen-sm mx-auto gap-1'>
          <p className='text-neutral-400/80 text-sm font-semibold'>made with <span className='text-red-500'>♥</span> by
            <span className='mr-1'> <a href="https://www.linkedin.com/in/mohammed-agha/" target={'_blank'} className="underline text-neutral-300 hover:no-underline">@agha</a> </span>
            •
            <span className='mx-2'>See on <a href="https://github.com/aghsa97/portfolio" target={'_blank'} className="underline text-neutral-300 hover:no-underline">Github</a></span>
            ©2023
          </p>
        </footer> */}
      </body>
    </html>
  )
}
