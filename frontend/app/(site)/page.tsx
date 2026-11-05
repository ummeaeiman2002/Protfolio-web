import { About } from "@/components/home/about";
import { AgentArchitecture } from "@/components/home/agent-architecture";
import { Capabilities } from "@/components/home/capabilities";
import { CurrentlyBuilding } from "@/components/home/currently-building";
import { ExpertiseStrip } from "@/components/home/expertise-strip";
import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { Process } from "@/components/home/process";
import { ProblemSolver } from "@/components/home/problem-solver";
import { SelectedWork } from "@/components/home/selected-work";
import { Services } from "@/components/home/services";
import { TechnologyStack } from "@/components/home/technology-stack";
import { SITE_DESCRIPTION, SITE_TAGLINE } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: `${SITE_TAGLINE.replace(/\.$/, "")}`,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExpertiseStrip />
      <Capabilities />
      <SelectedWork />
      <ProblemSolver />
      <AgentArchitecture />
      <Services />
      <Process />
      <TechnologyStack />
      <About />
      <CurrentlyBuilding />
      <FinalCta />
    </>
  );
}
