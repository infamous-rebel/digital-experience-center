import { ShowreelTheater } from '../components/scenes/ShowreelTheater';
import { NavigationHub } from '../components/ui/NavigationHub';
import { AICreativeDirector } from '../components/concierge/AICreativeDirector';

export default function ShowreelPage() {
  return (
    <main className="h-screen w-screen overflow-hidden relative">
      <ShowreelTheater />
      <NavigationHub />
      <AICreativeDirector />
    </main>
  );
}