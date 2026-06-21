import type { CmsCompanyOverview } from "@/lib/cms/types";

/**
 * Local source of truth for `/company/overview`. Edit this file when the
 * official company information is finalized. Kept out of microCMS by design —
 * the data updates rarely and is simpler to keep alongside the code.
 */
export const companyOverview: CmsCompanyOverview = {
  companyName: "株式会社GO-TAs",
  founded: "2012年2月",
  address: "沖縄県浦添市仲西1丁目3番25 フロンテージ仲西703",
  mapUrl: "https://www.google.com/maps?cid=9702510033654537488",
  capital: "5,000,000円",
  employees: "80名（業務委託含む）",
  businessSummary: "飲食業・IT事業・人材紹介業・不動産業（宅地建物取引業及び不動産管理業）",
  extraRows: [
    { label: "免許証番号", value: "沖縄県知事 (1)第5860号" },
    { label: "役員構成", value: "代表取締役　五十嵐義典\n取締役　　　大宜味朝文\n取締役　　　荒川大晴" },
  ],
};
