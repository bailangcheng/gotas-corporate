export type SiteSection = "company" | "business" | "group" | "recruit" | "more";

export type SitePage = {
  href: string;
  title: string;
  eyebrow: string;
  section: SiteSection;
  summary: string;
};

export type NavGroup = {
  label: string;
  href: string;
  items?: SitePage[];
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
  url: "https://gotas.example.com",
  contactEmail: "info@example.com",
};

export const companyPages: SitePage[] = [
  {
    href: "/company/message",
    title: "代表メッセージ",
    eyebrow: "Message",
    section: "company",
    summary: "代表の想い、事業に向き合う姿勢、これからのGO-TAsの方向性を紹介します。",
  },
  {
    href: "/company/facts",
    title: "10の事実",
    eyebrow: "Facts",
    section: "company",
    summary: "GO-TAsを短時間で理解できる約束や考え方を整理します。",
  },
  {
    href: "/company/overview",
    title: "会社概要",
    eyebrow: "Company",
    section: "company",
    summary: "会社情報、所在地、役員、事業内容などの基本情報を掲載します。",
  },
  {
    href: "/company/gotas-history",
    title: "GO-TAsヒストリー",
    eyebrow: "History",
    section: "company",
    summary: "GO-TAsの歩みと事業展開の変遷を時系列で紹介します。",
  },
  {
    href: "/company/group",
    title: "GO-TAsグループ",
    eyebrow: "Group",
    section: "company",
    summary: "グループ全体の構成と各事業の関係性を紹介します。",
  },
  {
    href: "/company/igarashi-history",
    title: "五十嵐ヒストリー",
    eyebrow: "Founder Story",
    section: "company",
    summary: "五十嵐氏のこれまでの歩みや事業への想いを掲載します。",
  },
];

export const businessPages: SitePage[] = [
  {
    href: "/business",
    title: "事業案内",
    eyebrow: "Business",
    section: "business",
    summary: "GO-TAsが展開する各事業の全体像を紹介します。",
  },
  {
    href: "/business/digital-signage",
    title: "デジタルサイネージ事業",
    eyebrow: "Digital Signage",
    section: "business",
    summary: "店舗や施設向けのデジタルサイネージ導入・運用支援を紹介します。",
  },
  {
    href: "/business/website",
    title: "HP制作",
    eyebrow: "Website",
    section: "business",
    summary: "企業・店舗向けWebサイト制作の内容と進め方を紹介します。",
  },
  {
    href: "/business/video-production",
    title: "動画制作",
    eyebrow: "Video",
    section: "business",
    summary: "PR動画、SNS動画、店舗紹介動画などの制作支援を紹介します。",
  },
  {
    href: "/business/sns",
    title: "SNS事業",
    eyebrow: "SNS",
    section: "business",
    summary: "SNS運用、企画、投稿制作、集客支援の取り組みを紹介します。",
  },
  {
    href: "/business/recruitment-agency",
    title: "人材紹介業",
    eyebrow: "Recruitment",
    section: "business",
    summary: "企業と働き手をつなぐ人材紹介サービスを紹介します。",
  },
  {
    href: "/business/ran-ran-tei",
    title: "らんらん亭",
    eyebrow: "Food",
    section: "business",
    summary: "仕出し弁当・飲食関連事業としてのらんらん亭を紹介します。",
  },
  {
    href: "/business/awabar-okinawa",
    title: "awabar okinawa",
    eyebrow: "Food",
    section: "business",
    summary: "awabar okinawaの店舗・サービス概要を紹介します。",
  },
  {
    href: "/business/gushi-frozen-foods",
    title: "具志冷凍食品",
    eyebrow: "Food",
    section: "business",
    summary: "冷凍食品関連事業の概要を紹介します。",
  },
  {
    href: "/business/isunoki-souzaikan",
    title: "いすの木惣菜館",
    eyebrow: "Food",
    section: "business",
    summary: "惣菜・店舗事業としてのいすの木惣菜館を紹介します。",
  },
  {
    href: "/business/gosei",
    title: "五星",
    eyebrow: "Food",
    section: "business",
    summary: "五星の事業概要、特徴、今後の展開を紹介します。",
  },
];

export const groupPages: SitePage[] = [
  {
    href: "/group/companies",
    title: "グループ企業",
    eyebrow: "Group Companies",
    section: "group",
    summary: "GO-TAsグループに属する企業一覧と各社の役割を掲載します。",
  },
  {
    href: "/group/partners",
    title: "提携企業",
    eyebrow: "Partners",
    section: "group",
    summary: "提携企業・協力先との取り組みを紹介します。",
  },
];

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
  },
];

export const morePages: SitePage[] = [
  {
    href: "/more/quotes",
    title: "GO-TAs語録",
    eyebrow: "Words",
    section: "more",
    summary: "GO-TAsらしい言葉や価値観をまとめるコンテンツです。",
  },
];

export const staticPages = [
  ...companyPages,
  ...businessPages,
  ...groupPages,
  ...recruitPages,
  ...morePages,
];

export const navigation: NavGroup[] = [
  { label: "会社概要", href: "/company/message", items: companyPages },
  { label: "事業案内", href: "/business", items: businessPages },
  { label: "グループ", href: "/group/companies", items: groupPages },
  { label: "Magazine", href: "/magazine" },
  { label: "採用情報", href: "/recruit", items: recruitPages },
  { label: "GO-TAs+", href: "/more/quotes", items: morePages },
  { label: "お問い合わせ", href: "/contact" },
];

export const businessItems: BusinessItem[] = businessPages
  .filter((page) => page.href !== "/business")
  .map((page) => ({
    title: page.title,
    label: page.eyebrow,
    href: page.href,
    summary: page.summary,
  }));

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
