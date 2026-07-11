'use client';

import { LobbyScene } from './components/scenes/Lobby';
import { NavigationHub } from './components/ui/NavigationHub';

export default function Home() {
  return (
    <main className="h-screen w-screen bg-black overflow-hidden relative">
      <LobbyScene />
      <NavigationHub />
    </main>
  );
}