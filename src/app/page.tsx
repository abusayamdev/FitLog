import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--fitlog-bg)] text-white">
      <Navbar />

      <div className="fitlog-container py-20">
        <h1 className="text-4xl font-black">
          FITLOG
        </h1>

        <p className="mt-3 text-white/50">
          Workout Library
        </p>
      </div>
    </main>
  );
}