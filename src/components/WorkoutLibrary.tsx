"use client";

import { useEffect } from "react";
import WorkoutCard from "./WorkoutCard";
import { getWorkouts } from "@/lib/api";

const WorkoutLibrary = () => {
    useEffect(() => {
        getWorkouts().then((data) => {
            console.log(data);
        });
    }, []);

    return (
        <section id="library">
            <div className="fitlog-container py-12">

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ccff00]">
                    The Library
                </p>

                <h2 className="mt-3 font-black uppercase tracking-[0.03em] text-white md:text-4xl">
                    The Library
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-white">
                    Twelve lifts covering every major muscle group.
                </p>

                {/* Workout Grid */}
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <WorkoutCard />
                </div>

            </div>
        </section>
    );
};

export default WorkoutLibrary;