import Link from 'next/link'
import React from 'react'
import { Icons } from './icons'

function Navigation() {
    return (
        <header>
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur md:backdrop-blur-0`}
            >
                <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
                    <div className="flex justify-between gap-8">
                        <Link
                            href="/projects"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            Contact
                        </Link>
                    </div>

                    <Link
                        href="/"
                    >
                        <Icons.arrowLeft className="w-10 h-10 text-zinc-400 hover:text-zinc-100 transition-colors duration-150 ease-in" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navigation