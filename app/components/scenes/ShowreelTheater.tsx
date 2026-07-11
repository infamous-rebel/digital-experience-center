'use client';

export function ShowreelTheater() {
  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center">
      <div className="relative w-[85%] max-w-6xl aspect-video bg-zinc-950 rounded-3xl overflow-hidden border border-white/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-bold tracking-tighter mb-4">STUDIO Z SHOWREEL</div>
            <p className="text-xl opacity-70">5-minute cinematic journey through our work</p>
          </div>
        </div>
        {/* Video placeholder */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
          <button className="glass px-8 py-4 rounded-2xl">◀ PREV</button>
          <button className="glass px-12 py-4 rounded-2xl">PLAY / PAUSE</button>
          <button className="glass px-8 py-4 rounded-2xl">NEXT ▶</button>
        </div>
      </div>
    </div>
  );
}