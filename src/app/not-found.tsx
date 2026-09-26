import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0d0f12] px-5 text-white">
            <div className="w-full max-w-lg text-center">
                <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#ccff00]">
                    FitLog
                </p>

                <h1 className="mt-5 text-7xl font-black tracking-[-0.06em] md:text-8xl">
                    404
                </h1>

                <h2 className="mt-4 text-xl font-black uppercase">
                    Workout Not Found
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/40">
                    The page you are looking for does not exist or may have
                    been moved.
                </p>

                <Link
                    href="/"
                    className="fitlog-btn mt-7"
                >
                    <ArrowLeft size={14} />
                    Back to Library
                </Link>
            </div>
        </main>
    );
}