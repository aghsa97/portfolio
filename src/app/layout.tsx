import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'

import { Poppins } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Mou Agha',
  description: `Hi, my name is Agha, I'm building serverless and open source solutions with NextJs and working on NiXTT at night.`,
}

const font = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700',] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={font.className} style={{
        backgroundColor: '#fafafa',
      }}>
        <main className=" min-h-dvh flex flex-col max-w-screen-md mx-auto gap-24">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
