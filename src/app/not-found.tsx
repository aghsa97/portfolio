import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="fixed bg-[#F6F6F3] dark:bg-[#0C0C0C] top-0 right-0 bottom-0 left-0 z-10">
            <h1 className="font-mono md:text-[300px] text-[140px] font-medium text-center mt-20">
                404
            </h1>
            <div className="flex flex-col items-center justify-center gap-1.5">
                <p className="font-mono text-[20px] text-center mt-10">
                    Page Not Found
                </p>
                <Button asChild size={'sm'}>
                    <Link href="/" className="font-mono">
                        Go Home
                    </Link>
                </Button>
            </div>
        </div>
    );
}