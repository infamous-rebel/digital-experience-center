'use client';

import { useState } from 'react';
import { ThreeDNavigationLobby } from './components/scenes/ThreeDNavigationLobby';
import { NavigationHub } from './components/ui/NavigationHub';

export default function Home() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const handleRoomSelect = (room: string) => {
    window.location.href = `/${room}`;
  };

  return (
    <main className="h-screen w-screen bg-black overflow-hidden relative">
      <ThreeDNavigationLobby onSelectRoom={handleRoomSelect} />
      <NavigationHub />
    </main>
  );
}
