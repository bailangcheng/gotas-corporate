import type { CmsBusinessDetail } from "./types";

export const mockBusinessDetails: CmsBusinessDetail[] = [
  {
    slug: "digital-signage",
    title: "デジタルサイネージ事業",
    eyebrow: "Digital Signage",
    lead: "店舗や施設向けのデジタルサイネージ導入・運用支援を行います。",
    bodyHtml:
      "<p>サイネージの選定からコンテンツ制作、運用までを一貫してサポートします。Figmaおよびクライアント提供の素材が確定次第、本文を差し替えます。</p>",
    gallery: [],
    features: [
      { title: "導入支援", description: "業態と店舗環境に合わせた機種選定と設置を行います。" },
      { title: "コンテンツ制作", description: "目的に応じた表示クリエイティブを継続的に更新します。" },
      { title: "運用保守", description: "故障対応と表示スケジュール管理を担います。" },
    ],
    relatedLinks: [],
  },
  {
    slug: "website",
    title: "Web制作事業",
    eyebrow: "Website",
    lead: "コーポレートサイトやキャンペーンサイトを企画から運用まで担います。",
    bodyHtml:
      "<p>サイト設計、デザイン、実装、運用保守まで一気通貫で対応します。本文はクライアント提供の素材で差し替えます。</p>",
    gallery: [],
    features: [
      { title: "サイト企画", description: "目的とターゲットに沿った情報設計を行います。" },
      { title: "実装", description: "Next.jsをはじめとした静的サイト中心の堅牢な実装。" },
      { title: "運用", description: "CMS連携や定期更新のオペレーションを設計します。" },
    ],
    relatedLinks: [],
  },
];
