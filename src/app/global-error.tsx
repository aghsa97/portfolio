'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>
                <Button size={'sm'} onClick={() => reset()}>Try again</Button>
                <pre>{error.message}</pre>

                <Button size={'sm'} asChild>
                    <Link href="/">Go Home</Link>
                </Button>
            </body>
        </html>
    )
}