/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "キャリア採用 | 採用情報",
  description: "会社を選ぶより、会社を創ろう。GO-TAsのキャリア採用情報です。",
};

const qas = [
  {
    num: "Q.1",
    label: "入社のきっかけ",
    colorClass: "text-brand",
    body: "入社当初は異業種からのスタートだったので、分からないことばかりでした。毎日試行錯誤の連続でしたが、その経験を通して、自分自身の考え方や物事を見る視野、考える深さが大きく変わったと感じています。",
  },
  {
    num: "Q.2",
    label: "社風・人間関係",
    colorClass: "text-accent",
    body: "この会社の魅力は、成長できる環境だけではなく、「人の温かさ」にもあると思っています。仲間は、自分の苦手な部分も理解した上で、一緒により良くしようと本気で向き合ってくれます。上司も、言いづらいことをただ伝えるのではなく、「どうしたら自分に伝わるか」まで考えながら、真摯に向き合ってくれます。大人になると、本気で向き合って注意してくれる存在って少なくなると思うんです。だからこそ、この環境にはすごく温かさを感じています。",
  },
  {
    num: "Q.3",
    label: "現在の仕事とやりがい",
    colorClass: "text-yellow",
    body: "入社して1年ほどで久留米の新店舗立ち上げを任せてもらえたことも、自分の中では大きな経験でした。もちろん不安もありましたが、「信じて任せてもらえる環境」があったからこそ、自分自身も大きく成長できたと思っています。まだ入社して1年半ほどの自分に、ここまで大きな挑戦を任せてもらえていることに、本当に感謝しています。",
  },
  {
    num: "Q.4",
    label: "今後への期待",
    colorClass: "text-green",
    body: "変化が多く、スピード感のある会社だからこそ、柔軟性や問題解決力も自然と鍛えられていると感じます。今は、会社にも、自分自身にも、一緒に働く仲間にもすごく期待しています。毎日がただ仕事をこなす感覚ではなく、本気で向き合えていて、とても充実しています。だからこそ私は、この会社を「挑戦したい人が、本気で成長できる会社」だと感じています。",
  },
];

const knowMoreLinks = [
  { label: "企業情報",      href: "/#about" },
  { label: "会社沿革",      href: "/#about" },
  { label: "メンバー紹介",   href: "/#member" },
  { label: "マガジン",      href: "/magazine" },
  { label: "ニュース",      href: "/#news" },
  { label: "もっとGO-TAs", href: "/#gotas" },
];

export default function MidCareerPage() {
  return (
    <>
      {/* ── Shared red bg: hero + member messages ── */}
      <div className="relative bg-accent overflow-y-clip pt-px">
        {/* Colorful paint splash */}
        <img
          src="/svg/recruit/bg.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-[40%] left-1/2 -translate-x-1/2 translate-y-[207px] lg:translate-y-0"
        />

        {/* ── Hero ── */}
        <section className="relative">
          {/* "Recruit" watermark */}
          <div
            className="pointer-events-none select-none absolute top-0 inset-x-0 overflow-hidden flex justify-center"
            aria-hidden="true"
          >
            <span className="shrink-0 font-display font-black leading-none text-[#FF1100] text-[clamp(90px,34.8vw,501px)] tracking-tight whitespace-nowrap">
              Recruit
            </span>
          </div>

          <Container size="wide" className="relative z-10">
            {/* Page title */}
            <div className="mt-25 md:mt-20 pb-[clamp(2rem,4vw,4rem)] text-center">
              <p className="font-display font-bold text-white uppercase leading-tight tracking-tight text-[60px] lg:text-[clamp(36px,6.9vw,80px)]">
                EXPERIENCED HIRE
              </p>
              <p className="mt-10 lg:mt-3 font-sans font-bold text-white text-[28px] lg:text-[clamp(18px,2.2vw,28px)]">
                キャリア採用
              </p>
            </div>

            {/* Headline + body */}
            <div className="pb-[165px] lg:pb-[clamp(4rem,8vw,7.5rem)] flex flex-col items-center gap-10 lg:gap-[clamp(2rem,4vw,5rem)]">
              <h1 className="w-full lg:w-auto font-sans font-black text-white leading-[1.8] text-left lg:text-center text-[32px] lg:text-[clamp(24px,3.75vw,48px)]">
                会社を選ぶより、<br className="lg:hidden" />会社を創ろう。
              </h1>
              <div className="w-full lg:w-auto mx-auto max-w-[960px] text-white font-sans text-[16px] lg:text-[clamp(14px,1.25vw,18px)] font-medium leading-[2] text-left lg:text-center [&>p]:m-0">
                <p>株式会社GO-TAsは、飲食、食品卸、人材紹介、ITソリューション、不動産など、多様な事業を展開するベンチャー企業です。</p>
                <p>{`私たちは現状維持を選びません。新しい事業への挑戦やM&Aによる事業承継を通じて、地域に必要とされる価値を創り続けています。`}</p>
                <p>だからこそ、GO-TAsで活躍するのは「指示を待つ人」ではなく、「自ら考え、行動する人」です。</p>
                <p>年齢や経験に関係なく、挑戦する人にチャンスがあります。</p>
                <p>まだ完成された会社ではないからこそ、自分の成長が会社の成長に直結する面白さがあります。</p>
                <p>&nbsp;</p>
                <p>会社を選ぶのではなく、会社を創る。</p>
                <p>そんな想いを持つ仲間との出会いを楽しみにしています。</p>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Member Messages (white dome transitioning from red) ── */}
        <section className="relative overflow-hidden pt-25 pb-(--space-section-y) lg:py-(--space-section-y)">
          {/* SP: dome arc */}
          <div className="lg:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[200vw] bg-white rounded-t-[1000px]" />
          {/* PC: ellipse SVG */}
          <img
            src="/svg/recruit/bg-2.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute top-0 left-0 w-full hidden lg:block"
          />

          <Container size="wide" className="relative z-10">
            {/* Heading */}
            <div className="text-center mb-[60px]">
              <h2 className="font-display font-bold text-[clamp(28px,6.4vw,64px)]">Member Messages</h2>
              <p className="mt-1.5 font-sans font-bold text-[24px] lg:text-[28px] text-foreground">働くひとの声</p>
            </div>

            {/* Member card */}
            <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row items-center gap-10 lg:gap-[80px]">
              {/* Circular photo */}
              <div className="shrink-0 size-[200px] lg:size-[380px] rounded-full overflow-hidden relative">
                <Image
                  src="/svg/recruit/photo-01.png"
                  alt="齋藤陽子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 200px, 380px"
                />
              </div>

              {/* Quote card */}
              <div className="relative flex-1 bg-surface rounded-[20px] p-10 lg:p-[48px] flex flex-col gap-12">
                {/* Speech-bubble tail: up toward photo on SP, left toward photo on PC */}
                <span
                  aria-hidden="true"
                  className="absolute size-6 rounded-[3px] bg-surface rotate-45 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:top-1/2"
                />
                <div className="font-sans font-bold text-foreground leading-[2] text-[clamp(18px,2.2vw,28px)] text-justify">
                  <p>「挑戦したい人が、本気で成長できる会社」</p>
                  <p>私は、この会社をそういう場所だと感じています。</p>
                </div>
                <div className="flex items-center justify-end gap-3.5">
                  <span className="font-sans font-bold text-[clamp(18px,1.875vw,24px)] text-foreground">齋藤陽子</span>
                  <span className="font-sans font-bold text-[clamp(12px,1.25vw,16px)] text-brand">マネージャー</span>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>{/* end shared red bg wrapper */}

      {/* ── Q&A section (green bg) ── */}
      <section className="bg-[#00ab41] py-[clamp(4rem,6.25vw,5rem)]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
            {qas.map((qa) => (
              <div
                key={qa.num}
                className="bg-surface rounded-[20px] p-[clamp(1.5rem,3.75vw,3.75rem)] flex flex-col gap-8"
              >
                <div className="flex items-center gap-5">
                  <span className={`font-display font-bold text-[28px] lg:text-[32px] ${qa.colorClass}`}>
                    {qa.num}
                  </span>
                  <span className="font-sans font-bold text-[clamp(18px,2.2vw,28px)] text-foreground">
                    {qa.label}
                  </span>
                </div>
                <p className="font-sans font-bold text-[clamp(14px,1.25vw,16px)] text-foreground text-justify leading-[2]">
                  {qa.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── "GO-TAsのことをもっと知る" section ── */}
      <section className="bg-white py-[clamp(4rem,6.25vw,5rem)]">
        <Container size="wide">
          <div className="flex flex-col items-center gap-[clamp(3rem,4.5vw,5rem)]">
            <h2 className="font-sans font-bold text-[clamp(20px,2.5vw,32px)] text-foreground text-center">
              GO-TAsのことをもっと知る
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[80px] gap-y-0 w-full">
              {knowMoreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between py-5 border-b border-line-subtle hover:opacity-70 transition-opacity"
                >
                  <span className="font-sans font-bold text-[16px] text-foreground">{link.label}</span>
                  <IconButton size="md" tone="white" />
                </Link>
              ))}
            </div>
            <Link
              href="/recruit"
              className="relative inline-flex h-20 w-[300px] items-center justify-center rounded-full border border-black bg-[#00ab41] px-7 text-[16px] font-bold text-black transition hover:-translate-y-0.5 md:text-[18px]"
            >
              <IconButton tone="white" size="md" direction="left" className="absolute left-5" />
              採用情報に戻る
            </Link>
          </div>
        </Container>
      </section>

      {/* ── CTA section (blue bg) ── */}
      <section className="relative overflow-hidden bg-brand py-[clamp(4rem,7vw,8rem)]">
        <img
          src="/svg/recruit/bg-1.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover"
        />
        <Container size="wide" className="relative z-10">
          <div className="flex justify-center">
            <div className="flex w-88.75 h-43 px-5 items-center justify-between overflow-clip bg-white rounded-[20px] shadow-card transition-opacity hover:opacity-90 lg:w-160 lg:h-auto lg:shrink-0 lg:px-12.5 lg:py-21.5">
              <div className="flex flex-col gap-3 items-start">
                <span className="font-display font-bold text-sm lg:text-[16px] capitalize text-foreground leading-normal">
                  Recruitment Information
                </span>
                <span className="font-sans font-bold text-base lg:text-[24px] leading-normal">
                  <span className="text-accent">キャリア</span>採用の募集情報はこちら
                </span>
              </div>
              <Link
                href="https://jp.indeed.com/cmp/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BEgo-Tas/jobs/l-%E9%82%A3%E8%A6%87%E5%B8%82-%E6%B3%89%E5%B4%8E"
                target="_blank"
                rel="noopener noreferrer"
              >
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
