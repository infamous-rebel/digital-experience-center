'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function RoomPortal({ position, label, color, onClick }: { position: [number, number, number]; label: string; color: string; onClick: () => void }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position} onClick={onClick}>
      <mesh>
        <cylinderGeometry args={[4, 4, 12, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
      </mesh>
      <Text position={[0, 8, 0]} fontSize={1.8} color="white" anchorX="center">
        {label}
      </Text>
    </group>
  );
}

export function ThreeDNavigationLobby({ onSelectRoom }: { onSelectRoom: (room: string) => void }) {
  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 15, 60], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 40, 0]} intensity={2} color="#e0f2fe" />

        <RoomPortal position={[-25, 6, -10]} label="LED CANYON" color="#6366f1" onClick={() => onSelectRoom('canyon')} />
        <RoomPortal position={[25, 6, -10]} label="HOLOGRAM" color="#22d3ee" onClick={() => onSelectRoom('hologram')} />
        <RoomPortal position={[-12, 6, 25]} label="XR STUDIO" color="#a78bfa" onClick={() => onSelectRoom('xr')} />
        <RoomPortal position={[12, 6, 25]} label="SHOWREEL" color="#f472b6" onClick={() => onSelectRoom('showreel')} />
        <RoomPortal position={[0, 6, -35]} label="PROJECTION DOME" color="#fbbf24" onClick={() => onSelectRoom('dome')} />

        <Environment preset="night" />
        <OrbitControls enablePan={true} minDistance={20} maxDistance={90} />
      </Canvas>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
        <div className="text-5xl font-bold tracking-tighter mb-2">STUDIO Z</div>
        <div className="text-xl opacity-70">EXPLORE THE VENUE</div>
      </div>
    </div>
  );
}