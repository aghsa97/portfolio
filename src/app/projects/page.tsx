'use client'

import { Link as LinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const projects = [
    {
        icon: '/klickce32x32.png',
        title: 'Klickce',
        description: `A platform that helps to creating interactive maps for businesses.`,
        url: 'https://klickce.se/',
        urlName: 'Klickce.se',
    },
    {
        icon: '/sehtie32x32.png',
        title: 'Sehtie',
        description: `A hackathon project that helps people to conect to doctors & browse medical Records.`,
        url: 'https://github.com/aghsa97/sehtie',
        urlName: 'Repository',
    },
    {
        icon: '/power32x32.png',
        title: 'PowerPace',
        description: `Gym management software that helps gym owners manage their business.`,
        url: 'https://github.com/aghsa97/Fitness-app',
        urlName: 'Repository',
        className: 'rounded-full',
    },
]

function Projects() {
    return (
        <div className='flex flex-col gap-12 px-4 lg:px-0 pb-24'>
            <div className='flex flex-col items-start gap-6'>
                <h1 className='text-3xl lg:text-5xl font-bold tracking-tight text-zinc-800'>
                    Here are some of the projects I have worked on.
                </h1>
            </div>
            <div className='grid grid-flow-row lg:grid-cols-2 gap-6 lg:gap-y-12'>
                {projects.map((project, index) => (
                    <Link href={project.url} key={index} target='_blank'>
                        <Card className='bg-transparent shadow-none flex flex-col gap-6 group p-6 lg:p-0 lg:border-none'>
                            <CardHeader className='p-0'>
                                <Image src={project.icon} width={100} height={100} alt="icon" className={cn('size-8 object-cover antialiased', project.className)} />
                            </CardHeader>
                            <CardContent className='p-0 text-sm'>
                                <div className='flex flex-col gap-3'>
                                    <h2 className='text-base font-semibold tracking-tight text-zinc-800'>
                                        {project.title}
                                    </h2>
                                    <p className='text-zinc-600'>
                                        {project.description}
                                    </p>
                                </div>
                                <div className='flex items-center justify-start gap-1.5 font-medium text-muted-foreground pt-6 group-hover:text-emerald-600'>
                                    <LinkIcon className='size-4 stroke-[3]' />
                                    {project.urlName}
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Projects