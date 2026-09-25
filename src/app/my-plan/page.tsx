"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Trash2 } from "lucide-react";

import Navbar from "@/components/Navbar";
import type { Workout } from "@/types/workout";

const PLAN_STORAGE_KEY = "fitlog-plan";
const SAVED_STORAGE_KEY = "fitlog-saved";
const COMPLETED_STORAGE_KEY = "fitlog-completed";

export default function MyPlanPage() {
    
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);
    const [completedIds, setCompletedIds] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

    useEffect(() => {

        const storedPlan = localStorage.getItem(PLAN_STORAGE_KEY);
        const storedSaved = localStorage.getItem(SAVED_STORAGE_KEY);
        const storedCompleted = localStorage.getItem(
            COMPLETED_STORAGE_KEY
        );

        const plan: Workout[] = storedPlan
            ? JSON.parse(storedPlan)
            : [];

        const saved: Workout[] = storedSaved
            ? JSON.parse(storedSaved)
            : [];

        const completed: string[] = storedCompleted
            ? JSON.parse(storedCompleted)
            : [];

        setWorkouts(plan);
        setSavedWorkouts(saved);
        setCompletedIds(completed);
    }, []);

    const markAsDone = (id: string) => {
        if (completedIds.includes(id)) {
            return;
        }

        const updatedCompleted = [...completedIds, id];

        setCompletedIds(updatedCompleted);

        localStorage.setItem(
            COMPLETED_STORAGE_KEY,
            JSON.stringify(updatedCompleted)
        );
    };

    const removeWorkout = (id: string) => {
        const updatedPlan = workouts.filter(
            (workout) => workout.id !== id
        );

        setWorkouts(updatedPlan);

        localStorage.setItem(
            PLAN_STORAGE_KEY,
            JSON.stringify(updatedPlan)
        );

        const updatedCompleted = completedIds.filter(
            (completedId) => completedId !== id
        );

        setCompletedIds(updatedCompleted);

        localStorage.setItem(
            COMPLETED_STORAGE_KEY,
            JSON.stringify(updatedCompleted)
        );
    };

    const removeSavedWorkout = (id: string) => {
        const updatedSaved = savedWorkouts.filter(
            (workout) => workout.id !== id
        );

        setSavedWorkouts(updatedSaved);

        localStorage.setItem(
            SAVED_STORAGE_KEY,
            JSON.stringify(updatedSaved)
        );
    };

    const totalMinutes = workouts.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = workouts.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    const activeWorkouts =
        activeTab === "today"
            ? workouts
            : savedWorkouts;

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#0d0f12] text-white">

                {/* HEADER */}
                <section className="border-b border-white/5">
                    <div className="fitlog-container py-10">

                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ccff00]">
                            Your Workout Plan
                        </p>

                        <h1 className="mt-3 text-4xl font-black uppercase tracking-[-0.04em] md:text-5xl">
                            My Plan
                        </h1>

                        <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
                            Cap of five lifts for today. Finish them, then load more.
                        </p>

                    </div>
                </section>

                <div className="fitlog-container py-8">

                    {/* METRICS */}
                    <div className="grid grid-cols-3 gap-3">

                        <Metric
                            label="Exercises"
                            value={workouts.length}
                        />

                        <Metric
                            label="Minutes"
                            value={totalMinutes}
                        />

                        <Metric
                            label="Calories"
                            value={totalCalories}
                        />

                    </div>

                    {/* TABS */}
                    <div className="mt-8 flex w-fit rounded-lg border border-white/10 bg-[#15161a] p-1">

                        <button
                            type="button"
                            onClick={() => setActiveTab("today")}
                            className={`rounded-md px-4 py-2 text-[9px] font-bold uppercase transition ${activeTab === "today"
                                    ? "bg-[#ccff00] text-black"
                                    : "text-white/40 hover:text-white"
                                }`}
                        >
                            Today&apos;s Plan
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab("saved")}
                            className={`rounded-md px-4 py-2 text-[9px] font-bold uppercase transition ${activeTab === "saved"
                                    ? "bg-[#ccff00] text-black"
                                    : "text-white/40 hover:text-white"
                                }`}
                        >
                            Saved
                        </button>

                    </div>

                    {/* EMPTY STATE */}
                    {activeWorkouts.length === 0 ? (
                        <div className="mt-8 rounded-xl border border-white/10 bg-[#15161a] px-6 py-16 text-center">

                            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ccff00]">
                                Nothing Here Yet
                            </p>

                            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/40">
                                {activeTab === "today"
                                    ? "Browse the library and add a lift to get today moving."
                                    : "Save a workout from the library to see it here."}
                            </p>

                            <Link
                                href="/#library"
                                className="fitlog-btn mt-6"
                            >
                                Go to workouts
                                <ArrowRight size={14} />
                            </Link>

                        </div>
                    ) : (
                        /* WORKOUT LIST */
                        <div className="mt-8 space-y-3">

                            {activeWorkouts.map((workout) => {
                                const isCompleted = completedIds.includes(
                                    workout.id
                                );

                                return (
                                    <article
                                        key={workout.id}
                                        className={`flex flex-col gap-4 rounded-xl border bg-[#15161a] p-4 transition sm:flex-row sm:items-center ${isCompleted
                                                ? "border-[#ccff00]/20 opacity-70"
                                                : "border-white/10"
                                            }`}
                                    >

                                        {/* IMAGE */}
                                        <img
                                            src={workout.image}
                                            alt={workout.name}
                                            className="h-24 w-full rounded-lg object-cover sm:h-20 sm:w-28"
                                        />

                                        {/* INFO */}
                                        <div className="min-w-0 flex-1">

                                            <div className="flex items-center gap-2">

                                                <h2
                                                    className={`truncate text-sm font-black uppercase ${isCompleted
                                                            ? "text-white/50 line-through"
                                                            : "text-white"
                                                        }`}
                                                >
                                                    {workout.name}
                                                </h2>

                                                {isCompleted && (
                                                    <span className="shrink-0 rounded-full bg-[#ccff00]/10 px-2 py-1 text-[8px] font-bold uppercase text-[#ccff00]">
                                                        Done
                                                    </span>
                                                )}

                                            </div>

                                            <p className="mt-1 text-[11px] text-white/35">
                                                {workout.equipment}
                                            </p>

                                            <div className="mt-3 flex flex-wrap gap-4 text-[9px] uppercase tracking-wide text-white/35">

                                                <span>
                                                    {workout.duration} min
                                                </span>

                                                <span>
                                                    {workout.caloriesBurned} kcal
                                                </span>

                                                <span>
                                                    {workout.sets} sets
                                                </span>

                                            </div>

                                        </div>

                                        {/* ACTIONS */}
                                        <div className="flex flex-wrap items-center gap-2">

                                            <Link
                                                href={`/workouts/${workout.id}`}
                                                className="rounded-lg border border-white/10 px-3 py-2 text-[9px] font-bold uppercase text-white/60 transition hover:bg-white/5 hover:text-white"
                                            >
                                                View Details
                                            </Link>

                                            {activeTab === "today" && (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        markAsDone(workout.id)
                                                    }
                                                    disabled={isCompleted}
                                                    className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-[9px] font-bold uppercase transition ${isCompleted
                                                            ? "border-[#ccff00]/20 bg-[#ccff00]/10 text-[#ccff00]"
                                                            : "border-white/10 text-white/60 hover:bg-white/5 hover:text-white"
                                                        }`}
                                                >
                                                    <Check size={12} />

                                                    {isCompleted
                                                        ? "Done"
                                                        : "Mark as Done"}
                                                </button>
                                            )}

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    activeTab === "today"
                                                        ? removeWorkout(workout.id)
                                                        : removeSavedWorkout(workout.id)
                                                }
                                                className="rounded-lg border border-white/10 p-2 text-white/35 transition hover:border-red-500/30 hover:text-red-400"
                                                aria-label={`Remove ${workout.name}`}
                                            >
                                                <Trash2 size={14} />
                                            </button>

                                        </div>

                                    </article>
                                );
                            })}

                        </div>
                    )}

                </div>
            </main>
        </>
    );
}

/* -------------------------------- */
/* METRIC */
/* -------------------------------- */

function Metric({
    label,
    value,
}: {
    label: string;
    value: number;
}) {
    return (
        <div className="rounded-xl border border-white/10 bg-[#15161a] p-4">

            <p className="text-[9px] font-bold uppercase tracking-wide text-white/30">
                {label}
            </p>

            <p className="mt-2 text-2xl font-black text-white">
                {value}
            </p>

        </div>
    );
}