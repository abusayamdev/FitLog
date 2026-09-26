import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--fitlog-bg)] text-white">
      <Navbar />
      <Hero />
      <WorkoutLibrary />
      <Footer />
    </main>
  );
}