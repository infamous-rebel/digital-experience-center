'use client';

import Link from 'next/link';

export function NavigationHub() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 glass px-8 py-4 rounded-3xl flex gap-6 z-50">
      <Link href="/">Lobby</Link>
      <Link href="/hologram">Hologram Theatre</Link>
      <Link href="/canyon">LED Canyon</Link>
    </div>
  );
}