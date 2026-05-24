import { BannerStrip } from "@/components/sections/BannerStrip";
import { FigmaContactSection } from "@/components/sections/FigmaContactSection";
import { Hero } from "@/components/sections/Hero";
import { MagazinePreview } from "@/components/sections/MagazinePreview";
import { MarqueeBand } from "@/components/sections/MarqueeBand";
import { NewsList } from "@/components/sections/NewsList";
import { PageTopStrip } from "@/components/sections/PageTopStrip";
import { PromisesSection } from "@/components/sections/PromisesSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <BannerStrip />
      <MarqueeBand />
      <NewsList />
      <MarqueeBand />
      <MagazinePreview />
      <ServiceGrid />
      <PromisesSection />
      <FigmaContactSection />
      <PageTopStrip />
    </>
  );
}
