'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

export function LobbyScene() {
  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 15, 40], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <OrbitControls />
        <Environment preset="night" />
      </Canvas>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 glass p-6 rounded-3xl">
        Holographic Concierge + Navigation
      </div>
    </div>
  );
}