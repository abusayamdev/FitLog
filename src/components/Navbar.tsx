"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <div className="navbar min-h-0 h-16 border-b border-white/10 bg-[#0a0b0d] px-4 shadow-none md:px-8">

            {/* LEFT - LOGO */}
            <div className="navbar-start">

                {/* Mobile Menu */}
                <div className="dropdown md:hidden">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-sm btn-circle text-white"
                    >
                        <Menu size={18} />
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content z-50 mt-3 w-44 rounded-box border border-white/10 bg-[#15161a] p-2 text-white shadow-xl"
                    >
                        <li >
                            <Link href="/#library" >
                                Workouts
                            </Link>
                        </li>

                        <li>
                            <Link href="/my-plan">
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Logo */}
                <Link
                    href="/"
                    className="ml-1 flex items-center gap-2 md:ml-0"
                >
                    <Image
                        src="/assets/logo.png"
                        alt="FitLog"
                        width={25}
                        height={25}
                        priority
                        className="h-[25px] w-[25px] object-contain"
                    />

                    <span className="text-[13px] font-black tracking-tight text-white">
                        FITLOG
                    </span>
                </Link>

            </div>

            {/* CENTER - NAVIGATION */}
            <div className="navbar-center">

                <nav className="hidden items-center gap-2 md:flex">

                    {/* Active */}
                    <Link
                        href="/#library"
                        className="rounded-full bg-[#ccff00] px-4 py-1.5 text-[10px] font-bold text-black transition hover:bg-[#b8e600]"
                    >
                        Workouts
                    </Link>

                    {/* Normal */}
                    <Link
                        href="/my-plan"
                        className="rounded-full px-3 py-1.5 text-[10px] font-medium text-white/50 transition hover:bg-white/5 hover:text-white"
                    >
                        My Plan
                    </Link>

                </nav>

            </div>

            {/* RIGHT - COUNTERS */}
            <div className="navbar-end gap-3 md:gap-5">

                {/* Plan */}
                <Link
                    href="/my-plan"
                    className="flex items-center gap-1.5 text-[18px] text-white/70 transition hover:text-white"
                >
                    <span>Plan</span>

                    <span className="badge badge-xs border-0 bg-[#ccff00] px-1.5 text-[12px] font-bold text-black">
                        0
                    </span>
                </Link>

                {/* Saved */}
                <Link
                    href="/my-plan"
                    className="flex items-center gap-1.5 text-[18px] text-white/50 transition hover:text-white"
                >
                    <span>Saved</span>

                    <span className="badge badge-xs border border-white/15 bg-transparent px-1.5 text-[18px] text-white/60">
                        0
                    </span>
                </Link>

            </div>

        </div>
    );
}