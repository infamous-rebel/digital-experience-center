'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

const environments = ['Ocean', 'Desert', 'Galaxy', 'Forest', 'City'];

function LEDWall({ position, color, index }: { position: [number, number, number]; color: string; index: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) ref.current.material.emissiveIntensity = 0.6 + Math.sin(state.clock.elapsedTime + index) * 0.4;
  });

  return (
    <mesh ref={ref} position={position}>
      <cylinderGeometry args={[28, 28, 90, 64, 1, true]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} side={THREE.DoubleSide} />
    </mesh>
  );
}

export function InfinityLEDCanyon() {
  const [envIndex, setEnvIndex] = useState(0);
  const colors = ['#1e40af', '#854d0e', '#312e81', '#166534', '#1f2937'];

  const changeEnv = () => setEnvIndex((prev) => (prev + 1) % environments.length);

  return (
    <div className="relative w-full h-full bg-black">
      <Canvas camera={{ position: [0, 10, 50], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 40, 0]} intensity={2} />

        <LEDWall position={[-20, 15, 0]} color={colors[envIndex]} index={envIndex} />
        <LEDWall position={[20, 15, 0]} color={colors[(envIndex + 1) % colors.length]} index={envIndex + 1} />

        {/* Reactive floor */}
        <mesh rotation={[-Math.PI * 0.5, 0, 0]} position={[0, -8, 0]}>
          <planeGeometry args={[100, 120]} />
          <meshStandardMaterial color="#111" metalness={0.9} />
        </mesh>

        <Environment preset="night" />
        <OrbitControls minDistance={15} maxDistance={80} />
      </Canvas>

      <div className="absolute top-8 left-8 glass p-8 rounded-3xl max-w-md">
        <div className="text-5xl font-bold tracking-tighter mb-2">INFINITY LED CANYON</div>
        <div className="text-3xl mb-6">{environments[envIndex]}</div>
        <button onClick={changeEnv} className="px-10 py-4 border border-white/40 rounded-2xl hover:bg-white/10">
          TRANSFORM ENVIRONMENT
        </button>
      </div>
    </div>
  );
}