import { getPosts } from "@/lib/cms/posts";
import { BannerStrip } from "./BannerStrip";
import { Hero } from "./Hero";
import { NewsList } from "./NewsList";

export async function HeroBlock() {
  const posts = await getPosts();

  return (
    // bg-accent covers the whole block; Hero and BannerStrip sit at z-20
    // so they always paint above NewsList (z-10) even in the -mt-16 overlap zone.
    <div className="relative bg-accent">
      <div className="relative z-20">
        <Hero />
      </div>
      <div className="relative z-20">
        <BannerStrip posts={posts} />
      </div>
      {/* SVG lives inside NewsList where it can be layered between
          the marquees (z-0) and the news box (z-10). */}
      <NewsList />
    </div>
  );
}
