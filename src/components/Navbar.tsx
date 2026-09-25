"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const PLAN_STORAGE_KEY = "fitlog-plan";
const SAVED_STORAGE_KEY = "fitlog-saved";
const STORAGE_UPDATE_EVENT = "fitlog-storage-update";

export default function Navbar() {
    const [planCount, setPlanCount] = useState(0);
    const [savedCount, setSavedCount] = useState(0);

    useEffect(() => {
        const updateCounts = () => {
            const storedPlan = localStorage.getItem(PLAN_STORAGE_KEY);
            const storedSaved = localStorage.getItem(SAVED_STORAGE_KEY);

            const planItems = storedPlan ? JSON.parse(storedPlan) : [];
            const savedItems = storedSaved ? JSON.parse(storedSaved) : [];

            setPlanCount(planItems.length);
            setSavedCount(savedItems.length);
        };

        updateCounts();

        window.addEventListener(
            STORAGE_UPDATE_EVENT,
            updateCounts
        );

        window.addEventListener("storage", updateCounts);

        return () => {
            window.removeEventListener(
                STORAGE_UPDATE_EVENT,
                updateCounts
            );

            window.removeEventListener(
                "storage",
                updateCounts
            );
        };
    }, []);

    return (
        <div className="navbar min-h-0 h-16 border-b border-white/10 bg-[#0a0b0d] px-4 shadow-none md:px-8">
            {/* LEFT */}
            <div className="navbar-start">
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
                        <li>
                            <Link href="/#library">Workouts</Link>
                        </li>

                        <li>
                            <Link href="/my-plan">My Plan</Link>
                        </li>
                    </ul>
                </div>

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

            {/* CENTER */}
            <div className="navbar-center">
                <nav className="hidden items-center gap-2 md:flex">
                    <Link
                        href="/#library"
                        className="rounded-full bg-[#ccff00] px-4 py-1.5 text-[10px] font-bold text-black transition hover:bg-[#b8e600]"
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className="rounded-full px-3 py-1.5 text-[10px] font-medium text-white/50 transition hover:bg-white/5 hover:text-white"
                    >
                        My Plan
                    </Link>
                </nav>
            </div>

            {/* RIGHT */}
            <div className="navbar-end gap-3 md:gap-5">
                <Link
                    href="/my-plan"
                    className="flex items-center gap-1.5 text-[10px] text-white/70 transition hover:text-white"
                >
                    <span>Plan</span>

                    <span className="badge badge-xs border-0 bg-[#ccff00] px-1.5 text-[8px] font-bold text-black">
                        {planCount}
                    </span>
                </Link>

                <Link
                    href="/my-plan"
                    className="flex items-center gap-1.5 text-[10px] text-white/50 transition hover:text-white"
                >
                    <span>Saved</span>

                    <span className="badge badge-xs border border-white/15 bg-transparent px-1.5 text-[8px] text-white/60">
                        {savedCount}
                    </span>
                </Link>
            </div>
        </div>
    );
}