import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#0a0b0d]">
            <div className="fitlog-container py-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    {/* BRAND */}
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <Image
                            src="/assets/logo.png"
                            alt="FitLog"
                            width={24}
                            height={24}
                            className="h-6 w-6 object-contain"
                        />

                        <span className="text-xs font-black tracking-wide text-white">
                            FITLOG
                        </span>
                    </Link>

                    {/* NAVIGATION */}
                    <nav className="flex flex-wrap items-center gap-5 text-[10px] font-bold uppercase tracking-wide text-white/40">
                        <Link
                            href="/"
                            className="transition hover:text-[#ccff00]"
                        >
                            Workouts
                        </Link>

                        <Link
                            href="/my-plan"
                            className="transition hover:text-[#ccff00]"
                        >
                            My Plan
                        </Link>

                        <a
                            href="#library"
                            className="transition hover:text-[#ccff00]"
                        >
                            Library
                        </a>
                    </nav>

                    {/* COPYRIGHT */}
                    <p className="text-[9px] leading-5 text-white/30 md:text-right">
                        © 2026 FitLog — Workout Library.
                        <br className="sm:hidden" />
                        {" "}Train hard, log honest.
                    </p>
                </div>

                {/* BOTTOM LINE */}
                <div className="mt-7 border-t border-white/5 pt-5">
                    <p className="text-[8px] uppercase tracking-[0.18em] text-white/20">
                        Built for focused training.
                    </p>
                </div>
            </div>
        </footer>
    );
}