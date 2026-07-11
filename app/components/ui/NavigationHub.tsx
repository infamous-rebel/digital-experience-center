'use client';

import Link from 'next/link';

const rooms = [
  { path: '/', label: 'Lobby' },
  { path: '/canyon', label: 'LED Canyon' },
  { path: '/hologram', label: 'Hologram' },
  { path: '/xr', label: 'XR Studio' },
  { path: '/showreel', label: 'Showreel' },
  { path: '/dome', label: 'Projection Dome' }
];

export function NavigationHub() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass px-6 py-5 rounded-3xl flex flex-wrap gap-3 justify-center max-w-4xl">
      {rooms.map((room, i) => (
        <Link key={i} href={room.path} className="px-5 py-3 hover:bg-white/10 rounded-2xl transition text-sm tracking-wider border border-white/10">
          {room.label}
        </Link>
      ))}
    </div>
  );
}