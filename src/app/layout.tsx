import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Mou Agha',
  description: `Hi, my name is Agha, I'm building serverless and open source solutions with NextJs and working on NiXTT at night.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#151515] font-mono relative min-h-screen md:h-screen flex flex-col justify-center items-center'>
        <div className="absolute -z-10 left-0 top-0 w-full h-full">
          <svg className="w-full h-full" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_2_17)">
              <path d="M1100.2 413.4C1132 450 1161.4 478.2 1182.4 519.6C1202.8 560.4 1214.2 614.4 1195.6 656.4C1177.6 697.8 1129.6 727.2 1085.2 726C1041.4 724.2 1000.6 691.2 953.8 674.4C907 658.2 853.6 657.6 816.4 630C779.8 602.4 758.8 547.8 778.6 511.8C798.4 475.8 859 458.4 903.4 424.2C947.8 390 975.4 338.4 1006 334.8C1036 331.8 1069 376.8 1100.2 413.4Z" fill="url(#paint0_linear_2_17)" />
            </g>
            <g filter="url(#filter1_f_2_17)">
              <path d="M783.2 344.6C821 367.4 848.6 405.2 847.4 445.4C845.6 485.6 815 528.8 818.6 574.4C822.8 619.4 861.2 666.8 861.2 704.6C861.2 742.4 822.8 770.6 781.4 785.6C740.6 800 696.8 801.2 663.2 783.8C629 766.4 605.6 731 567.2 714.8C529.4 698.6 476.6 701 455.6 680.6C434.6 660.2 444.8 615.8 462.8 582.2C480.8 548.6 506.6 525.8 528.2 506C549.8 486.2 567.2 470 587.6 437.6C607.4 404.6 630.2 355.4 665 334.4C699.8 314 746 321.8 783.2 344.6Z" fill="url(#paint1_linear_2_17)" />
            </g>
            <g filter="url(#filter2_f_2_17)">
              <path d="M1363.6 418.619C1382.8 439.619 1393.6 466.019 1405.6 490.619C1418.2 514.619 1431.4 537.419 1442.2 565.619C1452.4 593.819 1459.6 628.619 1450.6 658.019C1441.6 688.019 1416.4 713.819 1387 736.619C1357 760.019 1322.8 781.619 1282 792.419C1241.2 803.219 1194.4 803.219 1162.6 780.419C1131.4 758.219 1115.2 713.219 1115.8 673.019C1116.4 632.219 1133.8 596.219 1135 560.219C1136.8 524.819 1122.4 490.619 1121.8 449.819C1121.2 409.619 1134.4 363.419 1164.4 347.819C1194.4 332.219 1241.2 347.819 1278.4 364.019C1316.2 380.219 1344.4 397.019 1363.6 418.619Z" fill="url(#paint2_linear_2_17)" />
            </g>
            <defs>
              <filter id="filter0_f_2_17" x="203" y="-260" width="1600" height="1600" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_2_17" />
              </filter>
              <filter id="filter1_f_2_17" x="-147" y="-228" width="1600" height="1600" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_2_17" />
              </filter>
              <filter id="filter2_f_2_17" x="487.996" y="-240.381" width="1600" height="1600" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_2_17" />
              </filter>
              <linearGradient id="paint0_linear_2_17" x1="770.986" y1="726.035" x2="1160.28" y2="294.325" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9333EA" />
                <stop offset="1" stopColor="#9333EA" />
              </linearGradient>
              <linearGradient id="paint1_linear_2_17" x1="443.877" y1="796.626" x2="914.072" y2="382.666" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DC2626" />
                <stop offset="1" stopColor="#DC2626" />
              </linearGradient>
              <linearGradient id="paint2_linear_2_17" x1="1115.78" y1="799.429" x2="1553.81" y2="475.335" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EA580C" />
                <stop offset="1" stopColor="#EA580C" />
              </linearGradient>
            </defs>
          </svg>
          <Image src={'/noise.png'} fill alt="image" className="image" />
        </div>
        <div className='h-full flex items-center justify-center pt-24 pb-16 md:pt-0 md:pb-0'>
          {children}
        </div>
        <footer className='absolute bottom-1 flex items-center border-4 border-neutral-950 rounded-full px-4 py-2 mb-2 max-w-screen-sm mx-auto gap-1'>
          <p className='text-neutral-400/80 text-sm font-semibold'>made with <span className='text-red-500'>♥</span> by
            <span className='mr-1'> <a href="https://www.linkedin.com/in/mohammed-agha/" target={'_blank'} className="underline text-neutral-300 hover:no-underline">@agha</a> </span>
            •
            <span className='mx-2'>See on <a href="https://github.com/aghsa97/portfolio" target={'_blank'} className="underline text-neutral-300 hover:no-underline">Github</a></span>
            ©2023
          </p>
        </footer>
      </body>
    </html>
  )
}
