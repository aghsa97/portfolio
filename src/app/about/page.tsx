import React from 'react'

function About() {
    return (
        <div className='flex flex-col gap-12 px-4 lg:px-0'>
            <div className='flex flex-col items-start gap-6'>
                <h1 className='text-3xl lg:text-5xl font-bold tracking-tight text-zinc-800'>
                    A brief introduction to me, my background, and my interests.
                </h1>
                <p className='text-zinc-950/75'>
                    Hi 👋, I love building serverless solutions & products.
                    I like to work close to clients and understand their needs to solve their problems.
                    I like also to travel and discover new places, meet new people, and learn about different cultures.
                </p>
            </div>
        </div>

    )
}

export default About