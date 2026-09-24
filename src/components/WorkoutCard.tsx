import Image from "next/image";

export default function WorkoutCard() {
    return (
        <article className="overflow-hidden rounded-xl border border-white/10 bg-[#15161a]">

            {/* Image */}
            <div className="aspect-[16/10] bg-white/5">
                <Image
                    src="/assets/banner.png"
                    alt="Bench Press"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4">

                {/* Category */}
                <span className="inline-flex rounded-full bg-[#ccff00]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#ccff00]">
                    Chest
                </span>

                {/* Workout Name */}
                <h3 className="mt-3 text-lg font-black uppercase tracking-[-0.02em] text-white">
                    Bench Press
                </h3>

                {/* Equipment */}
                <p className="mt-1 text-xs text-white/40">
                    Barbell
                </p>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-3 border-t border-white/10 pt-4">

                    <div>
                        <p className="text-[9px] uppercase tracking-wide text-white/30">
                            Duration
                        </p>

                        <p className="mt-1 text-xs font-bold text-white">
                            45 min
                        </p>
                    </div>

                    <div>
                        <p className="text-[9px] uppercase tracking-wide text-white/30">
                            Calories
                        </p>

                        <p className="mt-1 text-xs font-bold text-white">
                            320 kcal
                        </p>
                    </div>

                    <div>
                        <p className="text-[9px] uppercase tracking-wide text-white/30">
                            Rating
                        </p>

                        <p className="mt-1 text-xs font-bold text-white">
                            4.8
                        </p>
                    </div>

                </div>

            </div>

        </article>
    );
}