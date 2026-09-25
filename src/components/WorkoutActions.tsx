"use client";

import { Bookmark, CalendarPlus } from "lucide-react";
import { toast } from "react-toastify";

import type { Workout } from "@/types/workout";

type WorkoutActionsProps = {
    workout: Workout;
};

const PLAN_STORAGE_KEY = "fitlog-plan";
const SAVED_STORAGE_KEY = "fitlog-saved";
const STORAGE_UPDATE_EVENT = "fitlog-storage-update";

export default function WorkoutActions({
    workout,
}: WorkoutActionsProps) {
    const handleAddToPlan = () => {
        const storedPlan = localStorage.getItem(PLAN_STORAGE_KEY);

        const plan: Workout[] = storedPlan
            ? JSON.parse(storedPlan)
            : [];

        if (plan.length >= 5) {
            toast.warning(
                "Today's plan is full. Maximum 5 workouts allowed."
            );
            return;
        }

        const alreadyAdded = plan.some(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            toast.info(
                "This workout is already in today's plan."
            );
            return;
        }

        const updatedPlan = [...plan, workout];

        localStorage.setItem(
            PLAN_STORAGE_KEY,
            JSON.stringify(updatedPlan)
        );

        window.dispatchEvent(
            new Event(STORAGE_UPDATE_EVENT)
        );

        toast.success(
            `${workout.name} added to today's plan.`
        );
    };

    const handleSave = () => {
        const storedSaved = localStorage.getItem(
            SAVED_STORAGE_KEY
        );

        const saved: Workout[] = storedSaved
            ? JSON.parse(storedSaved)
            : [];

        const alreadySaved = saved.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            toast.info("This workout is already saved.");
            return;
        }

        const updatedSaved = [...saved, workout];

        localStorage.setItem(
            SAVED_STORAGE_KEY,
            JSON.stringify(updatedSaved)
        );

        window.dispatchEvent(
            new Event(STORAGE_UPDATE_EVENT)
        );

        toast.success(
            `${workout.name} saved for later.`
        );
    };

    return (
        <div className="mt-7 flex flex-wrap gap-3">
            {/* ADD TO PLAN */}
            <button
                type="button"
                onClick={handleAddToPlan}
                className="fitlog-btn rounded-lg px-4 py-2.5 text-[10px]"
            >
                <CalendarPlus size={13} />

                Add to today&apos;s plan
            </button>

            {/* SAVE */}
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