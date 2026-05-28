import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="overflow-hidden bg-[var(--color-accent)] py-5">
      <Container size="wide">
        <div className="relative min-h-[min(700px,calc(100vh-var(--layout-header-height)-40px))] overflow-hidden rounded-[var(--radius-lg)] bg-[#d5d5d5]">
          <Image src="/figma/home-hero.png" alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[var(--color-brand)]/20" />
          <div className="relative flex min-h-[min(700px,calc(100vh-var(--layout-header-height)-40px))] flex-col justify-center px-8 py-14 sm:px-16">
            <div>
              <h1 className="text-5xl font-black leading-[1.12] tracking-normal text-white sm:text-7xl lg:text-[104px] xl:text-[120px]">
                未来をつなぐ、
                <br />
                価値を創る。
              </h1>
              <p className="mt-7 max-w-2xl text-base font-bold leading-8 text-white sm:text-lg">
                沖縄を拠点に、デジタルサイネージ、Web制作、動画制作、SNS、人材紹介、飲食事業を横断して展開しています。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
