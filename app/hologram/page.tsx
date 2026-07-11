import { HologramTheatre } from '../components/scenes/HologramTheatre';
import { NavigationHub } from '../components/ui/NavigationHub';
import { AICreativeDirector } from '../components/concierge/AICreativeDirector';

export default function HologramPage() {
  return (
    <main className="h-screen w-screen overflow-hidden relative">
      <HologramTheatre />
      <NavigationHub />
      <AICreativeDirector />
    </main>
  );
}