import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className='flex items-center justify-between py-6 '>
            <Link href='/'>
                <Image src="/me.jpeg" width={100} height={100} alt="Hi" className='size-16 rounded-full object-cover antialiased' />
            </Link>
            <div className='flex items-center justify-center text-sm gap-6 px-6 py-2.5 border shadow-lg rounded-full'>
                <Link href="/about" className='hover:text-muted-foreground transition-all duration-150'>
                    About
                </Link>
                <Link href="/about" className='hover:text-muted-foreground transition-all duration-150'>
                    Projects
                </Link>
                <Link href="/about" className='hover:text-muted-foreground transition-all duration-150'>
                    Blog
                </Link>
            </div>
        </header>
    )
}

export default Header