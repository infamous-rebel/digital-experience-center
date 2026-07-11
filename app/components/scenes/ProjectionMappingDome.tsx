'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

export function ProjectionMappingDome() {
  return (
    <div className="relative w-full h-full bg-black">
      <Canvas camera={{ position: [0, 5, 25], fov: 55 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 30, 0]} intensity={3} color="#fef08c" />

        {/* Dome structure */}
        <mesh>
          <sphereGeometry args={[22, 64, 64, 0, Math.PI * 2, 0, Math.PI]} />
          <meshStandardMaterial color="#0f172a" emissive="#1e3a8a" side={2} wireframe />
        </mesh>

        <Environment preset="night" />
        <OrbitControls enablePan={true} minDistance={8} maxDistance={45} />
      </Canvas>

      <div className="absolute top-8 left-8 glass p-8 rounded-3xl max-w-lg">
        <h1 className="text-5xl font-bold tracking-tighter mb-6">PROJECTION MAPPING DOME</h1>
        <p className="text-lg leading-relaxed opacity-80">360° immersive storytelling. Watch buildings assemble, paint flow, and stories unfold around you.</p>
      </div>
    </div>
  );
}