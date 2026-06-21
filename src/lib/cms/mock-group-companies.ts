import type { CmsGroupCompany } from "./types";

export const mockGroupCompanies: CmsGroupCompany[] = [
  {
    id: "ranrantei",
    name: "嵐々亭",
    type: "group",
    summary: "沖縄県を中心に展開する飲食ブランド。",
    order: 1,
  },
  {
    id: "awabar-okinawa",
    name: "Awabar Okinawa",
    type: "group",
    summary: "観光客と地元のクロスポイントになるバー業態。",
    order: 2,
  },
  {
    id: "partner-placeholder",
    name: "提携企業（プレースホルダー）",
    type: "partner",
    summary: "提携企業の情報はクライアントから提供され次第更新します。",
    order: 1,
  },
];
