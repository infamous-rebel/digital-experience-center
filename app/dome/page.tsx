import { ProjectionMappingDome } from '../components/scenes/ProjectionMappingDome';
import { NavigationHub } from '../components/ui/NavigationHub';
import { AICreativeDirector } from '../components/concierge/AICreativeDirector';

export default function DomePage() {
  return (
    <main className="h-screen w-screen overflow-hidden relative">
      <ProjectionMappingDome />
      <NavigationHub />
      <AICreativeDirector />
    </main>
  );
}