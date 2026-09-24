import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="bg-[#0a0b0d]">
            <div className="fitlog-container py-8">

                {/* Hero Card */}
                <div className="grid items-center gap-8 overflow-hidden rounded-xl border border-white/10 bg-[#15161a] p-8 md:p-10 lg:grid-cols-2">

                    {/* LEFT CONTENT */}
                    <div>

                        {/* Small Title */}
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#ccff00]">
                            Workout Library
                        </p>

                        {/* Main Heading */}
                        <h1 className="mt-4 max-w-xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-5xl lg:text-[52px]">
                            Train With Intent.
                            <br />
                            Log Every Set.
                        </h1>

                        {/* Description */}
                        <p className="mt-5 max-w-lg text-sm leading-6 text-white/50">
                            FitLog is a dark, no-nonsense gym companion: pick a lift,
                            lock it into today&apos;s plan, and watch the week&apos;s work
                            add up.
                        </p>

                        {/* Button */}
                        <Link
                            href="#library"
                            className="btn mt-7 min-h-0 h-auto rounded-md border-0 bg-[#ccff00] px-5 py-3 text-[10px] font-black uppercase tracking-wide text-black shadow-none hover:bg-[#b8e600]"
                        >
                            Browse Workouts

                            <ArrowDownRight size={14} />
                        </Link>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <Image
                            src="/assets/banner.png"
                            alt="FitLog workout"
                            width={550}
                            height={450}
                            priority
                            className="h-auto w-full max-w-[420px] object-contain"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}