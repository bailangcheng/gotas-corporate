export type SiteSection = "company" | "business" | "group" | "recruit" | "more" | "legal";

export type SitePage = {
  href: string;
  title: string;
  eyebrow: string;
  category?: string;
  section: SiteSection;
  summary: string;
  /** ナビゲーションで外部URL（別タブ）へ飛ばす場合に指定。href はルーティング／sitemap 用に維持。 */
  externalHref?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  eyebrow?: string;
  items?: SitePage[];
};

/** Flat link used in the footer (no SitePage dependency). */
export type FooterLink = {
  title: string;
  href: string;
  external?: boolean;
  muted?: boolean;
};

/** A named section in the footer with optional sub-links. */
export type FooterNavGroup = {
  label: string;
  href: string;
  headingless?: boolean;
  items?: FooterLink[];
};

export type BusinessItem = {
  title: string;
  label: string;
  href: string;
  summary: string;
};

export type FactItem = {
  number: string;
  title: string;
  body: string;
};

export const siteConfig = {
  name: "GO-TAs",
  title: "GO-TAs コーポレートサイト",
  description:
    "沖縄を拠点に、デジタルサイネージ、Web制作、動画制作、SNS、人材紹介、飲食事業を横断して展開するGO-TAsのコーポレートサイトです。",
  // 本番ドメインは NEXT_PUBLIC_SITE_URL で上書きする（canonical / sitemap / OGP が参照）。
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gotas.example.com",
  contactEmail: "info@example.com",
};

// ─── 企業情報 ────────────────────────────────────────────────────────────────
export const companyPages: SitePage[] = [
  {
    href: "/company",
    title: "企業情報",
    eyebrow: "Company",
    section: "company",
    summary: "GO-TAsの会社概要を紹介します。",
  },
  {
    href: "/company/members",
    title: "メンバー紹介",
    eyebrow: "Members",
    section: "company",
    summary: "GO-TAsのメンバーを紹介します。",
  },
  {
    href: "/company/gotas-history",
    title: "会社沿革",
    eyebrow: "History",
    section: "company",
    summary: "GO-TAsの歩みと事業展開の変遷を時系列で紹介します。",
  },
  {
    href: "/company/group",
    title: "グループ＆連携企業",
    eyebrow: "Group",
    section: "company",
    summary: "グループ全体の構成と各事業の関係性を紹介します。",
  },
  {
    href: "/legal/tokushoho",
    title: "特定商取引法に基づく表記",
    eyebrow: "Legal",
    section: "legal",
    summary: "特定商取引法に基づく表記を掲載します。",
  },
];

// ─── 事業案内 ─────────────────────────────────────────────────────────────────
export const businessPages: SitePage[] = [
  {
    href: "/business",
    title: "事業案内",
    eyebrow: "Business",
    section: "business",
    summary: "GO-TAsが展開する各事業の全体像を紹介します。",
  },
  {
    href: "/business/ranrantei",
    title: "嵐々亭",
    eyebrow: "Ranrantei",
    category: "高級配達弁当事業",
    section: "business",
    summary: "医療機関を中心とした法人向けに高品質な配達弁当を提供する事業です。",
  },
  {
    href: "/business/gushi",
    title: "具志冷凍食品",
    eyebrow: "Gushi Foods",
    category: "精肉・食品卸事業",
    section: "business",
    summary: "創業47年の歴史を持つ精肉・食品卸の老舗企業です。",
  },
  {
    href: "/business/isunoki",
    title: "いすの木惣菜館",
    eyebrow: "Isunoki",
    category: "惣菜・弁当事業",
    section: "business",
    summary: "宜野湾市普天間に店舗を構える創業36年の地域密着型惣菜店です。",
  },
  {
    href: "/business/okinawa-specialty",
    title: "有限会社すばる商事",
    eyebrow: "Subaru Trading",
    category: "沖縄特産品卸売事業",
    section: "business",
    summary: "沖縄特産品の卸売事業を展開する企業です。",
  },
  {
    href: "/business/food-beverage",
    title: "海鮮丼専門店 五星",
    eyebrow: "Gosei",
    category: "飲食事業",
    section: "business",
    summary: "沖縄の海の幸と北海道の海産物を融合させた海鮮丼専門店です。",
  },
  {
    href: "/business/real-estate",
    title: "不動産仲介・投資支援",
    eyebrow: "Real Estate",
    category: "不動産事業",
    section: "business",
    summary: "沖縄県を中心に不動産仲介・投資支援事業を展開しています。",
  },
  {
    href: "/business/it",
    title: "デジタルマーケティング支援",
    eyebrow: "Digital Marketing",
    category: "デジタルマーケティング事業",
    section: "business",
    summary: "企業のデジタル活用を支援するマーケティング支援事業を展開しています。",
  },
  {
    href: "/business/digital-signage",
    title: "デジタルサイネージ事業",
    eyebrow: "Digital Signage",
    category: "デジタルサイネージ事業",
    section: "business",
    summary: "企業や商業施設向けのサイネージ導入・運用・コンテンツ配信を行っています。",
  },
  {
    href: "/business/recruitment-school",
    title: "医療人材紹介・キャリア支援",
    eyebrow: "Medical Recruit",
    category: "人材紹介・キャリア支援事業",
    section: "business",
    summary: "医療従事者を中心とした転職支援・キャリア支援サービスを展開しています。",
  },
];

// ─── グループ ─────────────────────────────────────────────────────────────────
export const groupPages: SitePage[] = [
  {
    href: "/company/group",
    title: "グループ＆連携企業",
    eyebrow: "Group & Collaboration",
    section: "group",
    summary: "グループ全体の構成と各事業の関係性を紹介します。",
  },
];

// ─── 採用情報 ─────────────────────────────────────────────────────────────────
export const recruitPages: SitePage[] = [
  {
    href: "/recruit",
    title: "採用情報",
    eyebrow: "Recruit",
    section: "recruit",
    summary: "GO-TAsで働く魅力、募集職種、採用方針を紹介します。",
  },
  {
    href: "/recruit/mid-career",
    title: "中途採用",
    eyebrow: "Career",
    section: "recruit",
    summary: "中途採用の募集要項、選考フロー、働き方を掲載します。",
  },
  {
    href: "/recruit/part-time",
    title: "パート・アルバイト採用",
    eyebrow: "Part-time",
    section: "recruit",
    summary: "パート・アルバイト採用の募集要項を掲載します。",
    externalHref:
      "https://jp.indeed.com/cmp/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BEgo-Tas/jobs/l-%E9%82%A3%E8%A6%87%E5%B8%82-%E6%B3%89%E5%B4%8E",
  },
];

// ─── GO-TAs+ / もっとGO-TAs ───────────────────────────────────────────────────
export const morePages: SitePage[] = [
  {
    href: "/gotas-plus",
    title: "もっとGO-TAs",
    eyebrow: "GO-TAs+",
    section: "more",
    summary: "GO-TAsの10の約束と語録をまとめたコンテンツです。",
  },
];

// ─── 旧ページ（後方互換・静的ルート維持用） ───────────────────────────────────
const legacyPages: SitePage[] = [
  {
    href: "/company/message",
    title: "代表メッセージ",
    eyebrow: "Message",
    section: "company",
    summary: "代表の想い、事業に向き合う姿勢、これからのGO-TAsの方向性を紹介します。",
  },
  {
    href: "/company/group",
    title: "GO-TAsグループ",
    eyebrow: "Group",
    section: "company",
    summary: "グループ全体の構成と各事業の関係性を紹介します。",
  },
  {
    href: "/group/partners",
    title: "提携企業",
    eyebrow: "Partners",
    section: "group",
    summary: "提携企業・協力先との取り組みを紹介します。",
  },
];

export const staticPages = [
  ...companyPages,
  ...businessPages,
  ...recruitPages,
  ...morePages,
  ...legacyPages,
];

// ─── ヘッダーナビゲーション ───────────────────────────────────────────────────
/** Header navigation — GO-TAs+ appears before 事業案内 per design. */
export const navigation: NavGroup[] = [
  { label: "企業情報", href: "/company", eyebrow: "Company", items: companyPages },
  { label: "GO-TAs+", href: "/gotas-plus", eyebrow: "GO-TAs+" },
  { label: "事業案内", href: "/business", eyebrow: "Services", items: businessPages },
  { label: "Magazine", href: "/magazine" },
  { label: "採用情報", href: "/recruit", eyebrow: "Recruit", items: recruitPages },
  { label: "お問い合わせ", href: "/contact" },
];

// ─── フッターナビゲーション ───────────────────────────────────────────────────
export const footerColumns: FooterNavGroup[][] = [
  // Column 1: 企業情報 + GO-TAs+
  [
    {
      label: "企業情報",
      href: "/company",
      items: [
        { title: "代表メッセージ", href: "/company/message" },
        { title: "会社沿革", href: "/company/gotas-history" },
        { title: "グループ＆連携企業", href: "/company/group" },
      ],
    },
    {
      label: "GO-TAs+",
      href: "/gotas-plus",
      items: [
        { title: "10の約束", href: "/gotas-plus" },
        { title: "GO-TAs語録", href: "/gotas-plus" },
      ],
    },
  ],
  // Column 2: 事業案内
  [
    {
      label: "事業案内",
      href: "/business",
      items: businessPages
        .filter((p) => p.href !== "/business")
        .map((p) => ({ title: p.title, href: p.href })),
    },
  ],
  // Column 3: Magazine / 採用情報 / ニュース / 外部リンク + プライバシーポリシー
  [
    { label: "Magazine", href: "/magazine" },
    {
      label: "採用情報",
      href: "/recruit",
      items: [
        { title: "中途採用", href: "/recruit/mid-career" },
        { title: "パート・アルバイト採用", href: "/recruit/part-time" },
      ],
    },
    { label: "ニュース", href: "/magazine" },
    {
      label: "",
      href: "",
      headingless: true,
      items: [
        { title: "会社説明資料", href: "#", external: true },
        { title: "異業種M＆Aでのビジネス展開・挑戦", href: "#", external: true },
        { title: "プライバシーポリシー", href: "/privacy", muted: true },
      ],
    },
  ],
];

// ─── ビジネスアイテム（ホームページ用） ───────────────────────────────────────
export const businessItems: BusinessItem[] = businessPages
  .filter((page) => page.href !== "/business")
  .map((page) => ({
    title: page.title,
    label: page.eyebrow,
    href: page.href,
    summary: page.summary,
  }));

// ─── 10の約束 ─────────────────────────────────────────────────────────────────
export const facts: FactItem[] = [
  {
    number: "01",
    title: "全ては社会と家族のために。",
    body: "GO-TAsは社会のために存在し、社員とその家族のために動く組織であり続けます。",
  },
  {
    number: "02",
    title: "フェアであるべき。",
    body: "お客さま、取引先、メンバーに対して、すべての場面でフェアであることを大切にします。",
  },
  {
    number: "03",
    title: "地域に根ざして挑戦する。",
    body: "沖縄を拠点に、デジタルとリアルの両面から地域の可能性を広げます。",
  },
  {
    number: "04",
    title: "事業を横断して価値をつくる。",
    body: "制作、運用、人材、飲食の知見を組み合わせ、現場に合う解決策を提案します。",
  },
];

export const companyOverview = [
  ["会社名", "株式会社GO-TAs"],
  ["所在地", "沖縄県内"],
  ["事業内容", "Web制作、動画制作、SNS運用、デジタルサイネージ、人材紹介、飲食事業"],
  ["備考", "正式情報はクライアント提供資料の確定後に更新"],
];
