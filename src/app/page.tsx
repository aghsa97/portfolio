import { socials } from '@/configs/socials'
import Header from '@/components/header';


function Badge(props: any) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}

export default function Home() {
  return (
    <main className="flex flex-col max-w-screen-sm mx-auto">
      <Header />
      <div className='flex flex-col gap-12'>
        <div className="flex items-center justify-start pt-24">
          <div className="flex flex-col items-start justify-center gap-3">
            <h1 className="text-5xl font-bold tracking-tight text-pretty">
              Programmer. Thinker. <br /> Traveller.
            </h1>
            <p className='text-zinc-950/75'>
              Hi, I&apos;m Mou, I&apos;m a software engineer building serverless solutions
              with <Badge href="https://nextjs.org">
                <svg
                  width="14"
                  height="14"
                  aria-label="Next.js logomark"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex mr-1"
                >
                  <mask
                    id="a"
                    style={{
                      maskType: 'alpha',
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={180}
                    height={180}
                  >
                    <circle cx={90} cy={90} r={90} fill="#000" />
                  </mask>
                  <g mask="url(#a)">
                    <circle
                      cx={90}
                      cy={90}
                      r={87}
                      fill="#000"
                      stroke="#fff"
                      strokeWidth={6}
                    />
                    <path
                      d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
                      fill="url(#paint0_linear_408_139)"
                    />
                    <path
                      fill="url(#paint1_linear_408_139)"
                      d="M115 54H127V126H115z"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_408_139"
                      x1={109}
                      y1={116.5}
                      x2={144.5}
                      y2={160.5}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_408_139"
                      x1={121}
                      y1={54}
                      x2={120.799}
                      y2={106.875}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
                Next.js
              </Badge>
              {' '} and many other technologies.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-3">
          <div className='flex items-center justify-center gap-6'>
            {socials.map((social, index) => (
              <a key={index} href={social.url} target={'_blank'}>
                <social.icon className="size-6 text-zinc-950 hover:-translate-y-1 transition-all duration-150 ease-in" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
