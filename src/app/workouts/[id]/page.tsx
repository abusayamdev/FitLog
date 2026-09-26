import Image from "next/image";

import Navbar from "@/components/Navbar";
import WorkoutActions from "@/components/WorkoutActions";
import { getWorkoutById } from "@/lib/api";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";

type WorkoutDetailsPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function WorkoutDetailsPage({
    params,
}: WorkoutDetailsPageProps) {
    const { id } = await params;

    let workout;

    try {
        workout = await getWorkoutById(id);
    } catch {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0d0f12] text-white">
            <Navbar />

            <section className="border-b border-white/5">
                <div className="mx-auto max-w-[980px] px-5 py-9 md:px-0">
                    <div className="grid gap-8 lg:grid-cols-[468px_1fr] lg:gap-11">
                        {/* IMAGE */}
                        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#15161a]">
                            <Image
                                src={workout.image}
                                alt={workout.name}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 468px"
                                className="object-cover"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="flex flex-col">
                            {/* TITLE */}
                            <h1 className="text-[32px] font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-[34px]">
                                {workout.name}
                            </h1>

                            {/* DESCRIPTION */}
                            <p className="mt-3 max-w-[460px] text-[13px] leading-[1.45] text-white/50">
                                {workout.description}
                            </p>

                            {/* MUSCLE GROUPS */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {workout.muscleGroups.map((muscle) => (
                                    <span
                                        key={muscle}
                                        className="rounded-full bg-[#ccff00] px-3 py-1 text-[9px] font-bold text-black"
                                    >
                                        {muscle}
                                    </span>
                                ))}
                            </div>

                            {/* SPECS */}
                            <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#15181e]">
                                <SpecRow
                                    label="Equipment"
                                    value={workout.equipment}
                                />

                                <SpecRow
                                    label="Difficulty"
                                    value={workout.difficulty}
                                />

                                <SpecRow
                                    label="Sets"
                                    value={String(workout.sets)}
                                />

                                <SpecRow
                                    label="Reps"
                                    value={workout.reps}
                                />

                                <SpecRow
                                    label="Duration"
                                    value={`${workout.duration} min`}
                                />

                                <SpecRow
                                    label="Calories"
                                    value={`${workout.caloriesBurned} kcal`}
                                />

                                <SpecRow
                                    label="Rating"
                                    value={String(workout.rating)}
                                    last
                                />
                            </div>

                            {/* INSTRUCTIONS */}
                            <div className="mt-6">
                                <h2 className="text-[13px] font-black uppercase tracking-wide">
                                    Instructions
                                </h2>

                                <ol className="mt-4 space-y-3">
                                    {workout.instructions
                                        .slice(0, 4)
                                        .map((instruction, index) => (
                                            <li
                                                key={instruction}
                                                className="flex gap-3 text-[12px] leading-5 text-white/55"
                                            >
                                                <span className="shrink-0 text-white/70">
                                                    {index + 1}.
                                                </span>

                                                <span>{instruction}</span>
                                            </li>
                                        ))}
                                </ol>
                            </div>

                            {/* ACTIONS */}
                            <WorkoutActions workout={workout} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </main>
    );
}

function SpecRow({
    label,
    value,
    last = false,
}: {
    label: string;
    value: string;
    last?: boolean;
}) {
    return (
        <div
            className={`flex items-center justify-between px-5 py-3 ${!last ? "border-b border-white/5" : ""
                }`}
        >
            <span className="text-[9px] font-bold uppercase tracking-wide text-white/45">
                {label}
            </span>

            <span className="text-[11px] font-medium text-white/80">
                {value}
            </span>
        </div>
    );
}