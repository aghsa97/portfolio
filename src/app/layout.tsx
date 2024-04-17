import './globals.css'
import type { Metadata } from 'next'

import { Montserrat } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Mou Agha',
  description: `Hi, my name is Agha, I'm building serverless and open source solutions with NextJs and working on NiXTT at night.`,
}

const font = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700',] })


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
        {children}
      </body>
    </html>
  )
}
