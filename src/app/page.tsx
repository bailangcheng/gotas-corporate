import { FigmaContactSection } from "@/components/sections/FigmaContactSection";
import { HeroBlock } from "@/components/sections/HeroBlock";
import { MagazinePreview } from "@/components/sections/MagazinePreview";
import { PromisesSection } from "@/components/sections/PromisesSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { getFacts } from "@/lib/cms/facts";

export default async function Home() {
  const facts = await getFacts();

  return (
    <>
      <HeroBlock />
      <MagazinePreview />
      <ServiceGrid />
      <PromisesSection facts={facts} />
      <FigmaContactSection />
    </>
  );
}
