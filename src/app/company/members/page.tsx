/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { MemberCard, type Member } from "@/components/sections/MemberCard";

export const metadata: Metadata = {
  title: "メンバー紹介",
  description: "GO-TAsの代表メッセージと、挑戦を楽しむメンバーを紹介します。",
};

// ─── 代表メッセージ ───────────────────────────────────────────────
const ceoTags = [
  { label: "熱くする", filled: true },
  { label: "スペイン語にする", filled: false },
  { label: "アイヌ語にする", filled: false },
];

const ceoHeadline = "もう一戦。\n仲間と家族の笑顔のために、\n沖縄一楽しい会社をつくります。";

const ceoBody = `本当はもう引退して東南アジアへの移住をしたいと思っていましたが、子供5人の末っ子が大学に入るまでまだ数年あり、さすがにその状況で移住は無理かと悩んでいた時に、今のGO-TAsの骨格を支える優秀な若者らと出会い、自分のためにも彼らのためにももう1回ビジネスをチャレンジしてみようと決意しました。

ここで書くのも恥ずかしいですが、毎年新聞で発表される沖縄県内企業売上高ランキングで100位に入ってみたい！！100位に入って売上100億とか行ったらどんな景色が見えるのか、それを仲間と一緒に見てみたい！！それくらいのことしか考えていません。

その中で自分やうちの会社を信じてついてきてくれる仲間とその家族が将来幸せになったら良いですかね。

ただランキング100位に入るなんて、それはそれは難しいことだと思っておりますよ。その為には関わってくれているメンバーや周りの協力してくださる方がGO-TAsはなんか楽しそうって思ってもらわないと実現できないと思います。沖縄で一番楽しい会社にする！！

2026年いよいよ自分が最前線に立っていく決意をしました。今まであまり顔出しもしませんでしたが、いよいよ次のステージがやってきました。合い言葉はステキング、みんなの人生をステキングしちゃいましょう。`;

// ─── 代表の歩み（Past → Future） ───────────────────────────────────
const timeline: { title: string; body: string }[] = [
  { title: "誕生", body: "北海道稚内市にて生誕、両親は小学校教師。" },
  { title: "小学校入学", body: "厚田村で小学校入学同学年は自分を含めて2名のみ。" },
  { title: "転校", body: "小学校2年生で空知郡岩見沢市に転校。" },
  { title: "高校卒業", body: "空知郡の名門「岩見沢東高校（通称：岩東）」を卒業。" },
  { title: "男3名の共同生活", body: "東京都多摩市聖蹟桜ヶ丘に男3名の共同生活。" },
  { title: "大学入学", body: "色々ありながら某Hosei大学へ入学。" },
  {
    title: "アメリカで農業研修",
    body: "大学在学中に国際農業者交流協会（JAEC）を通じてアメリカWA州、CA州で2年間の農業研修。",
  },
  {
    title: "南米援護ボランティア協会NPO活動",
    body: "帰国後南米援護ボランティア協会日本支部でNPO活動。",
  },
  {
    title: "ホンジュラス赴任",
    body: "沖縄県宮古島での農業研修を経て、青年海外協力隊で中米ホンジュラスへ野菜指導隊員として赴任。",
  },
  {
    title: "日本とホンジュラスでNPO法人(AUSOS)を設立",
    body: "日本とホンジュラスでNPO法人（AUSOS）を設立し、ホンジュラスの食料、教育問題に立ち向かう、経済的に自立をしたNPO法人を目指し日本の古着をホンジュラスで販売して活動費を捻出。",
  },
  {
    title: "ビジネス進出",
    body: "結婚を経て2人目の子供ができたタイミングで一度NPO法人を諦め、ビジネスの道に進むことを決意。子供と家族を経済的に養う決意。ビジネスを卒業した際には再度NPO分野へ復帰を狙っている。",
  },
  {
    title: "アフィリエイト事業展開",
    body: "ホンジュラス在住時よりSEO技術を活かしたアフィリエイト事業（ゴールドカード羅針盤など）を展開。",
  },
  { title: "帰国", body: "収益に目処が立ったためホンジュラスより港区西麻布へ帰国。" },
  {
    title: "沖縄移住",
    body: "西麻布の家賃・駐車場が高すぎて、以前より憧れだった沖縄への移住を決意。",
  },
  {
    title: "宿泊業スタート",
    body: "沖縄本島北部名護市・今帰仁村にて宿泊業（ゲストハウス：サボテンスマイル、今帰仁五邸）を始める。",
  },
  { title: "会社設立", body: "株式会社GO-TAsを設立。沖縄市で焼鳥鶏五郎、餃子五郎を展開。" },
  { title: "会社設立", body: "人材業を始めるために株式会社ゴータススタッフ（現GO-TAs）を設立。" },
  {
    title: "事業売却&新規事業スタート",
    body: "コロナの気配を感じて飲食店、宿泊施設、ボードゲームカフェ、レンタルオフィス等々数店舗・数事業を売却。 LEDサイネージ事業を始め、現在のGO-TAs事業へ続く。",
  },
  {
    title: "拠点を東南アジアに",
    body: "未来は東南アジアにあると感じ、ビジネスや生活の拠点を東南アジアへ移そうと奮闘中。もちろんビールには氷を入れて飲む。",
  },
];

// ─── メンバー一覧 ─────────────────────────────────────────────────
const members: Member[] = [
  {
    title: "取締役／人事責任者",
    name: "荒川大晴",
    romaji: "Arakawa Taisei",
    photo: "/images/members/members-02.png",
    career:
      "湖の都（滋賀県）生まれ。2022年に沖縄県に移住しました。理学療法士として医療業界でキャリアをスタートした後、「もっと多くの人や地域に価値を届けたい」という想いから沖縄へ移住し、経営の世界へ飛び込みました。現在は、飲食事業、人材紹介事業、IT事業、不動産事業、食品卸売事業など、多岐にわたる事業の立ち上げや運営に携わっています。また、M&Aによる事業承継にも積極的に取り組み、地域に必要とされる企業やサービスを次世代へ繋ぐことを大切にしています。",
    episode: `「なんか面白そう。」

僕の人生はその繰り返しです。笑
理学療法士から個人事業主、経営者になってみたり。
泳げないけど沖縄県に移住してみたり。
お酒は苦手だけどバーの店長になってみたり。
見た目怪しい代表（五十嵐）と会社を始めてみたり。笑
1年で4つの事業承継をしてみたり。

病院で働いていた時はなんとなく生きてました。リハビリをするととても感謝されますし、やりがいもありました。ただ、なんとなくこのままじゃダメな気がしたんです。だから周りから見ればよく分からないことも、「おもしろそう、やった方がよさそう。」と思ったことはとりあえず挑戦してきました。その結果、GO-TAsは飲食、人材紹介、IT、不動産、食品卸売など、多くの事業を展開する会社へ成長し、2年でスタッフは30倍近く増えました。僕自身もたくさんの新しい景色を見れるようになりましたし、1年で3年分くらいの経験ができている気がします。もちろん失敗もたくさんあります。それでも挑戦を続ける理由は、新しい景色を見てみたいからです。

僕が大切にしている考え方は、「誰かに合わせるのではなく、その人に合った働き方を大切に。」です。昭和の働き方も、令和の働き方も、どちらが正しいということではありません。一人ひとりが自分らしく力を発揮し、成長できる環境をつくることが重要だと考えています。GO-TAsはまだ発展途上の会社です。だからこそ挑戦できることがたくさんあります。社員一人ひとりが成長し、その成長が会社の成長に繋がる。そんな組織を目指しています。もしあなたも「なんか面白そう」と思ったなら、ぜひ一度お話ししましょう！！`,
  },
  {
    title: "肩書き",
    name: "名前名前",
    romaji: "Name Name",
    career:
      "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。",
    episode:
      "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。",
  },
];

// ─── 共通: セクションラベル（英 + 日） ──────────────────────────────
function SectionLabel({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-display text-[16px] font-bold text-black">{en}</span>
      <span className="text-[32px] font-bold text-black">{ja}</span>
    </div>
  );
}

function CeoPhoto({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[20px] bg-white aspect-[7/10] lg:aspect-auto lg:h-[800px] lg:w-[560px] lg:shrink-0 ${className}`}
    >
      <Image
        src="/images/members/members-01.png"
        alt="代表 五十嵐"
        fill
        sizes="(max-width: 1024px) 100vw, 560px"
        className="object-cover object-center"
      />
    </div>
  );
}

function CeoTags() {
  return (
    <div className="flex flex-wrap gap-2.5">
      {ceoTags.map((tag) => (
        <span
          key={tag.label}
          className={`inline-flex h-7 items-center rounded-[30px] border border-black px-4 text-[14px] font-bold ${
            tag.filled ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
}

export default function MembersPage() {
  return (
    <div className="bg-accent">
      {/* ── タイトル（赤背景 + ペイントスプラッシュ） ── */}
      <section className="relative overflow-hidden">
        <img
          src="/svg/members/bg-1.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 w-full select-none"
        />
        <div className="relative z-10">
          <PageHero eyebrow="Members" title="メンバー紹介" />
        </div>
      </section>

      {/* ── 代表メッセージ（黄背景） ── */}
      {/* pb を厚めに取り、下の白セクションが食い込んでも角丸から黄色が覗くようにする */}
      <section className="rounded-tr-[40px] bg-yellow px-[clamp(20px,5.56vw,80px)] pt-16 pb-32 lg:rounded-tr-[120px] lg:pt-[120px] lg:pb-[220px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 lg:gap-[100px]">
          <SectionLabel en="CEO Message" ja="代表メッセージ" />

          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-[80px]">
            {/* PC: 写真は左カラム */}
            <CeoPhoto className="hidden lg:block" />

            <div className="flex flex-1 flex-col gap-8 lg:gap-[60px]">
              <CeoTags />
              <h2 className="whitespace-pre-line text-justify text-[26px] font-bold leading-[1.8] text-black lg:text-[36px]">
                {ceoHeadline}
              </h2>
              <p className="whitespace-pre-line text-justify text-[15px] font-bold leading-[2] text-black lg:text-[16px]">
                {ceoBody}
              </p>
              {/* SP: 写真は本文と署名の間 */}
              <CeoPhoto className="lg:hidden" />
              <p className="text-[22px] font-bold text-black lg:text-[25px]">五十嵐</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 代表の歩み（白背景・Past → Future） ── */}
      {/* 負のマージンで黄色セクションへ食い込ませ、左上の角丸から黄色を覗かせる */}
      <section className="relative -mt-14 rounded-tl-[40px] rounded-bl-[40px] bg-white px-[clamp(20px,5.56vw,80px)] pt-20 pb-16 lg:-mt-[130px] lg:rounded-tl-[120px] lg:rounded-bl-[120px] lg:pt-[150px] lg:pb-[120px]">
        <div className="mx-auto flex max-w-[1280px] items-stretch justify-between gap-6 lg:gap-[80px]">
          {/* Past / Future の縦ラベル（PCのみ） */}
          <div className="hidden shrink-0 flex-col justify-between lg:flex">
            <span className="font-display text-[180px] font-bold leading-none text-surface [text-orientation:sideways] [writing-mode:vertical-rl]">
              Past
            </span>
            <span className="font-display text-[180px] font-bold leading-none text-[#ffe4e2] [text-orientation:sideways] [writing-mode:vertical-rl]">
              Future
            </span>
          </div>

          {/* タイムライン */}
          <div className="relative flex-1 lg:max-w-[1000px]">
            <div className="flex flex-col gap-[18px] lg:gap-[30px]">
              {timeline.map((entry, i) => {
                const isFirst = i === 0;
                const isLast = i === timeline.length - 1;
                return (
                  <div key={`${entry.title}-${i}`} className="relative flex items-center gap-4 lg:gap-[30px]">
                    {/* 縦線（このノードの分）— 赤・太め。両端ノードはドット中心で止める */}
                    <span
                      className={`absolute left-[5px] w-[3px] rounded-full bg-accent ${
                        isFirst ? "top-1/2" : "-top-[18px] lg:-top-[30px]"
                      } ${isLast ? "bottom-1/2" : "bottom-0"}`}
                      aria-hidden="true"
                    />
                    {/* ノード（右側ボックスの上下中央に揃う） */}
                    <span className="relative z-10 size-[14px] shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <div
                      className={`flex flex-1 flex-col gap-2 rounded-[20px] px-6 py-5 lg:px-10 ${
                        i % 2 === 0 ? "bg-surface" : "bg-[#ffe4e2]"
                      }`}
                    >
                      <p className="text-[20px] font-bold leading-[1.5] text-black lg:text-[28px]">{entry.title}</p>
                      <p className="text-[14px] font-bold leading-[1.5] text-black lg:text-[16px]">{entry.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Member ウォーターマーク（赤背景の隙間に全文字を表示） ── */}
      <div className="relative flex justify-center overflow-x-clip">
        {/* Member 文字は最背面。スプラッシュ(bg-02)を前面に重ねる */}
        <span
          className="pointer-events-none select-none whitespace-nowrap py-[clamp(1.5rem,4vw,4.5rem)] font-display text-[clamp(64px,22vw,324px)] font-black uppercase leading-[0.85] tracking-tight text-[#ff1100]"
          aria-hidden="true"
        >
          Member
        </span>
        <img
          src="/svg/members/bg-2.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 z-10 w-full -translate-y-1/2 select-none"
        />
      </div>

      {/* ── メンバー一覧（黄背景） ── */}
      <section className="rounded-tr-[40px] bg-yellow px-[clamp(20px,5.56vw,80px)] py-16 lg:rounded-tr-[120px] lg:py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-[80px]">
          <div className="lg:shrink-0">
            <SectionLabel en="Members" ja="メンバー一覧" />
          </div>
          <div className="flex flex-1 flex-col gap-10 lg:gap-[80px]">
            {members.map((member, i) => (
              <MemberCard key={`${member.name}-${i}`} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
