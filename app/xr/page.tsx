import { XRBroadcastStudio } from '../components/scenes/XRBroadcastStudio';
import { NavigationHub } from '../components/ui/NavigationHub';
import { AICreativeDirector } from '../components/concierge/AICreativeDirector';

export default function XRPage() {
  return (
    <main className="h-screen w-screen overflow-hidden relative">
      <XRBroadcastStudio />
      <NavigationHub />
      <AICreativeDirector />
    </main>
  );
}