import { cn } from '@/utils'
import React from 'react'
import { Icons } from './icons'

type CardProps = {
    className?: string
    role: string
    githubURL: string
    title: string
    description: string
    url: string
    techs: string[]
}

function Card({ className, role, githubURL, techs, title, description, url }: CardProps) {
    return (
        <div className={cn(`relative flex flex-col items-start p-4 md:p-8 border-4 border-zinc-950 rounded-3xl gap-4 max-w-lg`, className)}>
            <div className='w-full flex items-start justify-between'>
                <div>
                    <h5 className='text-zinc-400 md:text-zinc-950'>
                        {role}
                    </h5>
                    <h1 className='text-2xl font-semibold text-zinc-200 md:text-zinc-950'>{title}</h1>
                </div>
                <p>
                    see on <span><a href={githubURL} target={'_blank'}><Icons.github className='inline-block w-5 h-5 hover:-translate-y-0.5 transition-all duration-150 ease-in' /></a></span>
                </p>
            </div>
            <div className='h-full'>
                <p className='text text-zinc-200 md:text-zinc-950'>{description}</p>
            </div>
            <div className='w-full flex flex-col items-start justify-between gap-2'>
                {url !== '#' && <div className='w-full flex items-center justify-between text-orange-500 md:text-zinc-950'>
                    <a href={url} target={'_blank'} className='underline-offset-2 underline decoration-2 hover:no-underline text-orange-500'>Try it now! <span className='italic'>- its free</span></a>
                </div>}
                <div className='hidden md:flex w-full items-center justify-start gap-2 text-xs text-orange-500'>
                    {techs.map((tech, index) => (
                        <div key={index} className='flex items-center justify-center gap-2'>
                            <p className='text-xs'>{tech}</p>
                            {techs.length - 1 > index && <div className='w-1 h-1 rounded-full bg-black' />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card