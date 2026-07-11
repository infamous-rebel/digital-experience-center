'use client';

import Link from 'next/link';

const rooms = [
  { path: '/', label: 'Lobby' },
  { path: '/canyon', label: 'LED Canyon' },
  { path: '/hologram', label: 'Hologram Theatre' },
  { path: '/xr', label: 'XR Studio' }
];

export function NavigationHub() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass px-8 py-5 rounded-3xl flex gap-4">
      {rooms.map((room, i) => (
        <Link key={i} href={room.path} className="px-6 py-3 hover:bg-white/10 rounded-2xl transition text-sm tracking-wider">
          {room.label}
        </Link>
      ))}
    </div>
  );
}