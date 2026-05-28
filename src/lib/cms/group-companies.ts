import { getGroupCompaniesFromMicroCMS } from "./microcms";
import { mockGroupCompanies } from "./mock-group-companies";
import type { CmsGroupCompany, CmsGroupCompanyType } from "./types";

export async function getGroupCompanies(type?: CmsGroupCompanyType): Promise<CmsGroupCompany[]> {
  const fromCms = await getGroupCompaniesFromMicroCMS({ type });
  const source = fromCms ?? mockGroupCompanies;
  return type ? source.filter((item) => item.type === type) : source;
}
