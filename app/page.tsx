'use client';

import { LobbyScene } from './components/scenes/Lobby';
import { NavigationHub } from './components/ui/NavigationHub';
import { AICreativeDirector } from './components/concierge/AICreativeDirector';

export default function Home() {
  return (
    <main className="h-screen w-screen bg-black overflow-hidden relative">
      <LobbyScene />
      <NavigationHub />
      <AICreativeDirector />
    </main>
  );
}