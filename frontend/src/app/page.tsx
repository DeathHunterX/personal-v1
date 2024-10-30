import AboutSection from "./sections/about";
import IntroductionSection from "./sections/introduction";
import ProjectSection from "./sections/project";
import TechnologiesSection from "./sections/technologies";

export default function Home() {
  return (
    <div className="container-md">
      <IntroductionSection />
      <AboutSection />
      <ProjectSection />
      <TechnologiesSection />
    </div>
  );
}
