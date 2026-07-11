'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export function HologramTheatre() {
  return (
    <div className="w-full h-full relative">
      <Canvas>
        <ambientLight />
        <OrbitControls />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl">HOLOGRAM THEATRE - Drag to Interact</div>
      </div>
    </div>
  );
}