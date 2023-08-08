import React from 'react'

import Card from '@/components/card'
import Navigation from '@/components/nav-bar'
import { cn } from '@/utils'

function ProjectsPage() {
    const projects = [
        {
            title: 'NiXTT',
            role: 'FullStack Engineer',
            description: 'NiXTT is an open source task management tool.It allows you to create, manage and share tasks.It’s built with productivity, privacy and speed in mind.',
            repository: 'https://github.com/aghsa97/NiXTT-beta',
            url: 'https://nixtt-beta.vercel.app/',
            techs: ['NextJs', 'TypeScript', 'Tailwind', 'Prisma', 'PlanetScale']
        },
        {
            title: 'MapSpot',
            role: 'FullStack Engineer',
            description: 'MapSpot is a web app that allows you to find the best places to visit in your city. It’s built with the T3 stack and uses the Google Maps API and Mapbox.',
            repository: 'https://github.com/aghsa97',
            url: '#',
            techs: []
        },
        {
            title: 'PowerPace',
            role: 'Frontend developer',
            description: 'I was involved building a fitness web app from scratch using the Agile method.I designed some of the interfaces in the front- end part, and worked hand -in -hand with the back - end developers to ensure a fully functional app.',
            repository: 'https://github.com/aghsa97/Fitness-app',
            url: '#',
            techs: []
        },
    ]
    return (
        <div className='pb-16 lg:p-16 overflow-hidden'>
            <Navigation />
            <div className='flex flex-col items-start max-w-screen-lg mx-auto gap-16 md:gap-24'>
                <div className='border-b border-zinc-950 pb-6 md:pb-10 w-full space-y-2 px-4 md:px-0'>
                    <h1 className='text-3xl font-semibold text-zinc-200 md:text-zinc-950'>Projects</h1>
                    <p className='text-xl text-zinc-400 md:text-zinc-950 font-semibold'>Here are some of my projects that I have worked on.
                    </p>
                </div>
                <div className='flex flex-col items-center lg:items-stretch lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-2 gap-4 w-full h-full'>
                    {projects.map((project, index) => (
                        <Card key={index} className={cn('col-span-1 w-full max-w-sm md:max-w-lg',
                            index === 0 ? 'row-span-2' : 'row-span-1',
                        )} role={project.role} githubURL={project.repository} title={project.title} description={project.description} url={project.url} techs={project.techs} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage