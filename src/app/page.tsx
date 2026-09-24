import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorkoutLibrary from "@/components/WorkoutLibrary";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--fitlog-bg)] text-white">
      <Navbar />
      <Hero></Hero>
      <WorkoutLibrary></WorkoutLibrary>

    
    </main>
  );
}