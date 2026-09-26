export default function Loading() {
    return (
        <main className="min-h-screen bg-[#0d0f12] px-5 py-12 text-white">
            <div className="fitlog-container">
                <div className="flex min-h-[60vh] items-center justify-center">
                    <div className="text-center">
                        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[#ccff00]" />

                        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                            Loading workouts...
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}