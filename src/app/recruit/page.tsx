/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";
import { RecruitPhotoMarquee } from "@/components/sections/RecruitPhotoMarquee";

export const metadata: Metadata = {
  title: "採用情報",
  description: "GO-TAsで働く魅力、募集職種、採用方針を紹介します。",
};

// Row 1: まだまだ / 仲間 / 楽しみ
// Row 2: 言い訳  / 誰か / 普通
// Row 3: (empty) / 仕事 / (empty)  ← centered via col-start-2
const traitsRow1 = [
  { text: "「まだまだできる」と思える人",            colors: ["#ff3f31", "#ffbe00", "#00ab41"] },
  { text: "仲間の活躍に「ステキング！！」と言える人",  colors: ["#ffbe00", "#0071eb", "#00ab41"] },
  { text: "楽しみながら成長したい人",               colors: ["#0071eb", "#ff3f31", "#00ab41"] },
];
const traitsRow2 = [
  { text: "言い訳より行動を選べる人",               colors: ["#0071eb", "#ffbe00", "#ffbe00"] },
  { text: "誰かのために頑張れる人",                colors: ["#ff3f31", "#ffbe00", "#00ab41"] },
  { text: "普通じゃ物足りない人",                  colors: ["#0071eb", "#ffbe00", "#ff3f31"] },
];
const traitRow3 =
  { text: "仕事を通じて\n人生を面白くしたい人",       colors: ["#0071eb", "#0071eb", "#ffbe00"] };

// SP order (single column, following Figma SP layout)
const allTraitsSP = [
  traitsRow2[2], traitsRow1[0], traitsRow1[1],
  traitsRow1[2], traitsRow2[1], traitRow3, traitsRow2[0],
];

function PersonSvg({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 14 20" fill="none" aria-hidden="true" className="h-4 w-2.75 shrink-0 lg:h-5 lg:w-3.5">
      <path d="M8.54136 10.2012H5.20706C2.79471 10.2012 0.76614 12.0047 0.474696 14.4011L0.0072309 18.2837C-0.0533664 18.7872 0.272705 19.2634 0.767583 19.3701C2.69371 19.7799 4.74392 19.9992 6.87493 19.9992C9.00594 19.9992 11.0561 19.7799 12.9808 19.3701C13.4757 19.2634 13.8032 18.7872 13.7412 18.2837L13.2737 14.4011C12.9895 12.0047 10.9537 10.2012 8.54136 10.2012Z" fill={color} />
      <path d="M2.38672 4.48853C2.38672 6.96725 4.39653 8.9785 6.87381 8.9785C9.35108 8.9785 11.3638 6.96869 11.3638 4.48853C11.3638 2.00837 9.35253 0 6.87381 0C4.39509 0 2.38672 2.01125 2.38672 4.48853Z" fill={color} />
    </svg>
  );
}

function TraitCard({ text, colors, className }: { text: string; colors: string[]; className?: string }) {
  return (
    <div className={`flex items-center gap-3.5 lg:gap-4.5 bg-white rounded-[10px] px-5 lg:px-7.5 py-2.5 lg:py-3.5 min-h-19.5 w-73.75 max-w-full lg:w-95 lg:max-w-none lg:shrink-0 ${className ?? ""}`}>
      <div className="flex items-center gap-[1.3px] lg:gap-[1.667px] shrink-0">
        {colors.map((c, i) => <PersonSvg key={i} color={c} />)}
      </div>
      <p className="font-sans text-sm lg:text-[17px] font-bold text-foreground whitespace-pre-line leading-snug">{text}</p>
    </div>
  );
}

export default function RecruitPage() {
  return (
    <>
      {/* ── Hero + Who we are looking for: shared red bg, colorful SVG spans both ── */}
      <div className="relative bg-accent overflow-y-clip pt-px">
        {/* Colorful paint splash — spans hero section and into "Who we are looking for" */}
        <img
          src="/svg/recruit/bg.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-[30%] left-1/2 -translate-x-1/2 translate-y-[-26%]"
        />
        {/* Top-layer frame — covers container corners above content */}
        <img
          src="/svg/recruit/bg-covered.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-[30%] left-1/2 -translate-x-1/2 translate-y-[-26%] z-20"
        />

      {/* ── Hero (red) ── */}
      <section className="relative">
        {/* "Recruit" watermark — 1473px wide at 1440px viewport, centered */}
        <div className="pointer-events-none select-none absolute top-0 inset-x-0 overflow-hidden flex justify-center" aria-hidden="true">
          <span className="shrink-0 font-display font-black leading-none text-[#FF1100] text-[clamp(90px,34.8vw,501px)] tracking-tight whitespace-nowrap">
            Recruit
          </span>
        </div>

        <Container size="wide" className="relative z-10">
   

          {/* Headline */}
          <div className="mt-34 md:mt-20 pb-[clamp(3rem,6vw,7rem)]">
            <h1 className="font-sans font-bold text-white leading-[1.14] text-[clamp(66px,9vw,130px)] tracking-tight">
              人生、<br />もっと欲張っていい
            </h1>
            <p className="mt-6 font-sans font-semibold text-white text-left md:text-center leading-[1.6] text-[5vw] md:text-[clamp(20px,6.7vw,50px)]">
              {'「なんか面白そう」'}<br className="md:hidden" />{'その気持ちから始まってもいい'}
            </p>
          </div>

          {/* Philosophy card */}
          <div className="pb-[clamp(4rem,8vw,7.5rem)]">
            <div className="mx-auto max-w-[1080px] rounded-[20px] bg-green py-15 md:py-25 px-5 md:px-[clamp(2rem,4vw,5rem)] [box-shadow:6px_8px_0_0_#000]">
              <div className="text-white font-sans text-[18px] font-bold leading-[2] [&>p]:m-0">
                <p>株式会社GO-TAsは、飲食、人材紹介、IT、不動産、食品卸売など、さまざまな事業を展開しています。正直、一言では説明できない会社です。</p>
                <p>でも、一つだけ言えることがあります。</p>
                <p>それは、GO-TAsには挑戦を楽しむ人が集まっているということです。</p>
                <p>&nbsp;</p>
                <p>もっと成長したい。もっと稼ぎたい。もっと面白いことがしたい。もっと誰かの役に立ちたい。</p>
                <p>そんな欲張りな気持ちを、私たちは歓迎します。</p>
                <p>私たちは「こう働くべき」という考え方を押し付けません。たくさん働いて挑戦したい人も、効率よく成果を出したい人も、どちらも正解です。</p>
                <p>大切なのは、誰かに合わせることではなく、<span className="text-yellow">「その人に合った働き方で結果を出すこと。」</span></p>
                <p>ただ、一つだけ共通してほしい価値観があります。</p>
                <p>それは、<span className="text-yellow">「まだまだできる。」</span>という気持ちです。</p>
                <p>&nbsp;</p>
                <p>現状に満足せず、もっと良いサービスを。もっと良いチームを。もっと良い未来を。</p>
                <p>そんな前向きな挑戦を続けられる人と一緒に働きたいと思っています。</p>
                <p>そして、GO-TAsにはこんな文化があります。</p>
                <p>仲間の活躍を本気で喜ぶこと。</p>
                <p>誰かが良い仕事をしたら、大きな声で、<span className="text-yellow">「ステキング！！」</span></p>
                <p>&nbsp;</p>
                <p>人の成功を称賛し、応援できるチームでありたいと考えています。私たちはまだまだ発展途上です。</p>
                <p>だからこそ面白い。会社も、人も、事業も、これからもっと成長していきます。</p>
                <p><span className="text-yellow">人生、もっと欲張っていい。</span>その想いに共感できる方と、一緒に未来をつくりたいと思っています。</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Who we are looking for ── */}
      <section className="relative overflow-hidden pt-25 pb-(--space-section-y) lg:py-(--space-section-y)">
        {/* SP: wide white background — 400vw width makes dome arc ~24px flat at viewport edges */}
        <div className="lg:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[200vw] bg-white rounded-t-[1000px]" />
        {/* PC: ellipse bg SVG */}
        <img
          src="/svg/recruit/bg-2.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-0 left-0 w-full hidden lg:block"
        />
        <Container size="wide" className="relative z-10">
          <div className="text-center mb-[60px]">
            <h2 className="font-display font-bold text-[clamp(28px,9.6vw,64px)]">Who we are looking for</h2>
            <p className="mt-1.5 font-sans font-bold text-[24px] lg:text-[28px] text-foreground">求める人材</p>
          </div>
          {/* Grid container */}
          <div className="mx-auto max-w-[1280px] rounded-[20px] bg-surface px-5 py-15 lg:px-12.5">
            {/* SP: single column */}
            <div className="flex flex-col items-center gap-2.5 lg:hidden">
              {allTraitsSP.map((t, i) => <TraitCard key={i} {...t} />)}
            </div>
            {/* PC: fixed-width cards in flex-wrap (cards never shrink, wrap naturally) */}
            <div className="hidden lg:flex lg:flex-wrap lg:justify-center lg:gap-x-4.5 lg:gap-y-5">
              {traitsRow1.map((t, i) => <TraitCard key={i} {...t} />)}
              {traitsRow2.map((t, i) => <TraitCard key={i + 3} {...t} />)}
              <TraitCard {...traitRow3} />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Photo gallery — inside red wrapper so no red bleeds between sections ── */}
      <RecruitPhotoMarquee />
      </div>{/* end shared bg wrapper */}

      {/* ── CTA section ── */}
      <section className="relative overflow-hidden bg-brand py-[clamp(4rem,7vw,8rem)]">
        {/* Background SVG */}
        <img
          src="/svg/recruit/bg-1.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover"
        />


        <Container size="wide" className="relative z-10">
          <div className="flex flex-wrap justify-center gap-10 lg:gap-20">
            {/* Career */}
            <div className="flex w-88.75 h-43 px-5 items-center justify-between overflow-clip bg-white rounded-[20px] shadow-card transition-opacity hover:opacity-90 lg:w-160 lg:h-auto lg:shrink-0 lg:px-12.5 lg:py-21.5">
              <div className="flex flex-col gap-3 items-start">
                <span className="font-display font-bold text-sm lg:text-[16px] capitalize text-foreground leading-normal">experienced hire</span>
                <span className="font-sans font-bold text-base lg:text-[24px] leading-normal">
                  <span className="text-accent">キャリア</span>採用はこちら
                </span>
              </div>
              <Link href="/recruit/mid-career">
                <span className="lg:hidden grid shrink-0 place-items-center size-10 rounded-full bg-green drop-shadow-[1.25px_1.25px_0_black]" aria-hidden="true">
                  <Image src="/icons/arrow.svg" width={17} height={17} alt="" />
                </span>
                <span className="hidden lg:block">
                  <IconButton size="lg" tone="green" shape="circle" />
                </span>
              </Link>
            </div>

            {/* Part-time */}
            <div className="flex w-88.75 h-43 px-5 items-center justify-between overflow-clip bg-white rounded-[20px] shadow-card transition-opacity hover:opacity-90 lg:w-160 lg:h-auto lg:shrink-0 lg:px-12.5 lg:py-21.5">
              <div className="flex flex-col gap-3 items-start">
                <span className="font-display font-bold text-sm lg:text-[16px] capitalize text-foreground leading-normal">Part-time Recruitment</span>
                <span className="font-sans font-bold text-base lg:text-[24px] leading-normal">
                  <span className="text-brand">パート・アルバイト</span>採用はこちら
                </span>
              </div>
              <Link href="/recruit/part-time">
                <span className="lg:hidden grid shrink-0 place-items-center size-10 rounded-full bg-green drop-shadow-[1.25px_1.25px_0_black]" aria-hidden="true">
                  <Image src="/icons/external-link.svg" width={17} height={17} alt="" />
                </span>
                <span className="hidden lg:block">
                  <IconButton size="lg" tone="green" shape="circle" icon="external" />
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
