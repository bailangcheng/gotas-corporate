import type { CmsCompanyOverview } from "@/lib/cms/types";

/**
 * Local source of truth for `/company/overview`. Edit this file when the
 * official company information is finalized. Kept out of microCMS by design —
 * the data updates rarely and is simpler to keep alongside the code.
 */
export const companyOverview: CmsCompanyOverview = {
  companyName: "株式会社GO-TAs",
  address: "沖縄県内",
  businessSummary:
    "Web制作、動画制作、SNS運用、デジタルサイネージ、人材紹介、飲食事業",
  extraRows: [
    {
      label: "備考",
      value: "正式情報はクライアント提供資料の確定後に更新",
    },
  ],
};
