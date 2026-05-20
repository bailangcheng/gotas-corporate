import { ContactCta } from "@/components/sections/ContactCta";
import { Hero } from "@/components/sections/Hero";
import { NewsList } from "@/components/sections/NewsList";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { SitemapPreview } from "@/components/sections/SitemapPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <SitemapPreview />
      <NewsList />
      <ContactCta />
    </>
  );
}

