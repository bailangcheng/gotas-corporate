import { companyOverview } from "@/content/company-overview";
import type { CmsCompanyOverview, CmsCompanyOverviewRow } from "./types";

export async function getCompanyOverview(): Promise<CmsCompanyOverview> {
  return companyOverview;
}

/** Flatten the structured overview to `[label, value]` rows for tabular display. */
export function toOverviewRows(overview: CmsCompanyOverview): CmsCompanyOverviewRow[] {
  const rows: CmsCompanyOverviewRow[] = [
    { label: "会社名", value: overview.companyName },
    { label: "所在地", value: overview.address },
  ];
  if (overview.founded) rows.push({ label: "設立", value: overview.founded });
  if (overview.representative) rows.push({ label: "代表者", value: overview.representative });
  if (overview.capital) rows.push({ label: "資本金", value: overview.capital });
  if (overview.employees) rows.push({ label: "従業員数", value: overview.employees });
  rows.push({ label: "事業内容", value: overview.businessSummary });
  return rows.concat(overview.extraRows);
}
