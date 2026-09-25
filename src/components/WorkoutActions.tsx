"use client";

import { CalendarPlus, Bookmark } from "lucide-react";

import type { Workout } from "@/types/workout";

type WorkoutActionsProps = {
    workout: Workout;
};

const PLAN_STORAGE_KEY = "fitlog-plan";
const SAVED_STORAGE_KEY = "fitlog-saved";

export default function WorkoutActions({
    workout,
}: WorkoutActionsProps) {
    const handleAddToPlan = () => {
        const storedPlan = localStorage.getItem(PLAN_STORAGE_KEY);

        const plan: Workout[] = storedPlan
            ? JSON.parse(storedPlan)
            : [];

        // Maximum 5 workouts
        if (plan.length >= 5) {
            console.log("Today's plan is full.");
            return;
        }

        // Prevent duplicate workout
        const alreadyAdded = plan.some(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            console.log("Workout is already in today's plan.");
            return;
        }

        const updatedPlan = [...plan, workout];

        localStorage.setItem(
            PLAN_STORAGE_KEY,
            JSON.stringify(updatedPlan)
        );

        console.log("Workout added to today's plan.");
    };

    const handleSave = () => {
        const storedSaved = localStorage.getItem(SAVED_STORAGE_KEY);

        const saved: Workout[] = storedSaved
            ? JSON.parse(storedSaved)
            : [];

        // Prevent duplicate saved workout
        const alreadySaved = saved.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            console.log("Workout is already saved.");
            return;
        }

        const updatedSaved = [...saved, workout];

        localStorage.setItem(
            SAVED_STORAGE_KEY,
            JSON.stringify(updatedSaved)
        );

        console.log("Workout saved for later.");
    };

    return (
        <div className="mt-7 flex flex-wrap gap-3">
            <button
                type="button"
                onClick={handleAddToPlan}
                className="fitlog-btn rounded-lg px-4 py-2.5 text-[10px]"
            >
                <CalendarPlus size={13} />
                Add to today&apos;s plan
            </button>

            <button
                type="button"
                onClick={handleSave}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-[10px] font-bold text-white transition hover:border-white/30 hover:bg-white/5"
            >
                <Bookmark size={13} />
                Save for later
            </button>
        </div>
    );
}