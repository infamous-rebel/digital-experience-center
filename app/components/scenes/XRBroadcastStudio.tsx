'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useState } from 'react';

export function XRBroadcastStudio() {
  const [background, setBackground] = useState('mars');

  const backgrounds = ['mars', 'tokyo', 'ocean', 'dhaka', 'fantasy'];

  return (
    <div className="relative w-full h-full bg-black">
      <Canvas camera={{ position: [0, 10, 30] }}>
        <ambientLight intensity={0.6} />
        <Environment preset="night" />
        <OrbitControls />
        {/* Virtual stage placeholder */}
        <mesh>
          <planeGeometry args={[40, 20]} />
          <meshStandardMaterial color="#1e2937" />
        </mesh>
      </Canvas>

      <div className="absolute top-8 left-8 glass p-6 rounded-3xl">
        <h2 className="text-4xl font-bold mb-4">XR BROADCAST STUDIO</h2>
        <p className="mb-6">Instant background switching</p>
        
        <div className="flex flex-wrap gap-3">
          {backgrounds.map(bg => (
            <button
              key={bg}
              onClick={() => setBackground(bg)}
              className="px-6 py-3 border border-white/30 rounded-xl hover:bg-white/10 capitalize"
            >
              {bg}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}