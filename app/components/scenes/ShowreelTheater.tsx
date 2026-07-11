'use client';

export function ShowreelTheater() {
  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center">
      <div className="relative w-[88%] max-w-6xl aspect-[16/9] bg-black rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
        <video 
          className="w-full h-full object-cover" 
          controls 
          autoPlay 
          loop 
          muted
          src="https://assets.mixkit.co/videos/preview/12345/12345-large.mp4" // Replace with real Studio Z reel
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        <div className="absolute bottom-12 left-12 text-4xl font-bold tracking-tighter drop-shadow-2xl">STUDIO Z — IMMERSIVE REEL</div>
      </div>
    </div>
  );
}