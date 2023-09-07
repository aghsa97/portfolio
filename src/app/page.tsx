import Image from "next/image";

import { socials } from '@/configs/socials'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


function Badge(props: any) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}
const projects = [
  {
    title: 'PowerPace',
    role: 'Frontend developer',
    description: `I was involved building a fitness web app from scratch using the Scrum method. I designed almost all the interfaces in the front-end part, and worked hand-in-hand with the back-end developers to ensure a fully functional app. I primarily used JavaScript, HTML, CSS, and SQL.`,
    repository: 'https://github.com/aghsa97/Fitness-app',
    url: 'https://github.com/aghsa97/Fitness-app',
    techs: []
  },
  {
    title: 'Klikce',
    role: 'FullStack Engineer',
    description: `Worked on an independent project titled 'Klikce', collaborating only with a designer.
      Given that the project was more of a learning experience, I focused on understanding and implementing best practices for the technologies I was using. This focus allowed me to deepen my understanding of these tools and how they interact with one another.`,
    repository: 'https://github.com/aghsa97',
    url: 'https://spottz.vercel.app/',
    techs: []
  },
  {
    title: 'NiXTT',
    role: 'FullStack Engineer',
    description: 'NiXTT is an open source task management tool. It allows you to create, manage and share tasks. It’s built with productivity, privacy and speed in mind.',
    repository: 'https://github.com/aghsa97/NiXTT-beta',
    url: 'https://nixtt-beta.vercel.app/',
    techs: ['NextJs', 'TypeScript', 'Tailwind', 'Prisma', 'PlanetScale']
  },
]


export default function Home() {
  return (
    <main className="flex flex-col w-full max-w-screen-sm mx-auto justify-start mt-32 mb-12 gap-12 px-4 md:px-0">
      <div className="backdrop-blur-sm border border-zinc-200 flex items-center justify-start p-8 md:px-12 md:py-6 gap-12 rounded-xl">
        <div className="flex flex-col items-start justify-center gap-6">
          <h1 className="text-2xl font-medium">
            hi, I&apos; m Agha 👋
          </h1>
          <p className="">
            I&apos;m building serverless and open source solutions
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
            </Badge> and working on <a href="https://spottz.vercel.app/" target={'_blank'} className="underline decoration-2 underline-offset-2 hover:no-underline" >Klik<span className="text-green-600">ce</span></a> at night.
          </p>
        </div>
        <Image src={'/profile-pic.png'} alt="me" width={150} height={150} className="hidden md:flex rounded-full" />
      </div>
      <div className="flex flex-col items-center justify-start gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="backdrop-blur-sm rounded-xl">
            <CardHeader>
              {project.role}
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle>
                {project.title}
              </CardTitle>
              <CardDescription>
                {project.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <a href={project.url} target="_blank" className="text-sm">Check it here!</a>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="backdrop-blur-sm border border-zinc-200 flex flex-col items-center justify-center px-12 py-6 gap-4 rounded-xl">
        <p className="font-medium">Follow me here</p>
        <div className='flex items-center justify-center gap-6'>
          {socials.map((social, index) => (
            <a key={index} href={social.url} target={'_blank'}>
              <social.icon className="w-6 h-6 text-zinc-200 md:text-zinc-950 hover:-translate-y-1 hover:text-zinc-950 transition-all duration-150 ease-in" />
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
