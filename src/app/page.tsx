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
    title: 'Klickce - Up on walls AB',
    role: 'FullStack Engineer',
    data: 'Apr 2023 - PRESENT',
    description: `At Klickce, as a Fullstack Engineer, I led the software architecture design and technology stack selection. My primary achievement was enhancing app efficiency, cutting load times from 1.5 seconds to 500 milliseconds through optimizing API calls, SQL queries, and database tables.`,
    repository: 'https://github.com/aghsa97',
    url: 'https://klickce.se/',
    techs: []
  },
  {
    title: 'PowerPace',
    role: 'Frontend Engineer',
    data: 'Aug 2021 - Jan 2022',
    description: `As a Front-end Engineer at PowerPace, I collaborated closely with customers to define necessary features, leading the team as a Scrum master for a week. My role involved translating backlogs and user stories into implementable features, primarily focusing on front-end coding while coordinating with back-end developers.`,
    repository: 'https://github.com/aghsa97/Fitness-app',
    techs: []
  },
]


export default function Home() {
  return (
    <main className="flex flex-col w-full max-w-screen-sm mx-auto mt-32 mb-12 gap-12 px-4 md:px-0">
      <div className="backdrop-blur-[2px] border border-zinc-200 flex items-center justify-start p-6 md:px-6 md:py-6 gap-12 rounded-xl">
        <div className="flex flex-col items-start justify-center gap-3">
          <h1 className="text-2xl font-bold">
            Hi, I&apos;m Agha 👋
          </h1>
          <p className='text-sm'>
            I&apos;m a software engineer building serverless solutions
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
            {' '}🚀
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="backdrop-blur-[2px] rounded-xl">
            <CardHeader className='flex flex-row items-center justify-between text-sm'>
              <p>
                {project.role}
              </p>
              <p className='text-xs font-normal text-zinc-500'>{project.data}</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle className='font-bold'>
                {project.title}
              </CardTitle>
              <CardDescription>
                {project.description}
              </CardDescription>
            </CardContent>
            <CardFooter className='flex justify-end'>
              <a href={project.url ? project.url : project.repository} target="_blank" className="text-sm px-5 py-2.5 rounded-[10px] bg-zinc-900 hover:bg-zinc-950 text-white">I&apos;m curious</a>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="backdrop-blur-[2px] border border-zinc-200 flex flex-col items-center justify-center px-12 py-6 gap-4 rounded-xl">
        <p className="font-medium">Follow me here</p>
        <div className='flex items-center justify-center gap-6'>
          {socials.map((social, index) => (
            <a key={index} href={social.url} target={'_blank'}>
              <social.icon className="w-6 h-6 text-zinc-950 hover:-translate-y-1 transition-all duration-150 ease-in" />
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
