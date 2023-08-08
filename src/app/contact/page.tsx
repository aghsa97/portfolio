import Navigation from '@/components/nav-bar'
import React from 'react'

import { socials } from '@/configs/socials'

function ContactPage() {
    return (
        <div className='relative flex items-center justify-center max-w-screen-md mx-auto'>
            <Navigation />
            <div className='flex flex-col items-center justify-between gap-6 p-16 md:p-24 border-4 rounded-3xl border-zinc-950'>
                <div className='flex items-center justify-center gap-6'>
                    {socials.map((social, index) => (
                        <a key={index} href={social.url} target={'_blank'}>
                            <social.icon className="w-8 h-8 text-zinc-200 md:text-zinc-950 hover:-translate-y-1 hover:text-zinc-950 transition-all duration-150 ease-in" />
                        </a>
                    ))}
                </div>
                <p className='text-xl text-zinc-200 md:text-zinc-950 font-semibold'>contact@mou-agha.se</p>
            </div>
        </div>
    )
}

export default ContactPage
