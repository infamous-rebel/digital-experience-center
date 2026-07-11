import { InfinityLEDCanyon } from '../components/scenes/InfinityLEDCanyon';
import { NavigationHub } from '../components/ui/NavigationHub';
import { AICreativeDirector } from '../components/concierge/AICreativeDirector';

export default function CanyonPage() {
  return (
    <main className="h-screen w-screen overflow-hidden relative">
      <InfinityLEDCanyon />
      <NavigationHub />
      <AICreativeDirector />
    </main>
  );
}