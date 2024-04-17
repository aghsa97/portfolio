import React from 'react'

function Blog() {
    return (
        <div className='flex flex-col gap-12 px-4 lg:px-0'>
            <div className='flex flex-col items-start gap-6'>
                <h1 className='text-3xl lg:text-5xl font-bold tracking-tight text-zinc-800'>
                    Software development & personal growth.
                </h1>
                <p className='text-muted-foreground'>
                    I write about software development, personal growth, and my journey as a software engineer.
                    Sharing my experiences, thoughts, and what I learn along the way.
                </p>
            </div>
        </div>
    )
}

export default Blog