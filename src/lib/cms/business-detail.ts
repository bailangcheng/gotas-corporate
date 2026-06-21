import {
  getBusinessDetailBySlugFromMicroCMS,
  getBusinessDetailsFromMicroCMS,
} from "./microcms";
import { mockBusinessDetails } from "./mock-business-details";
import type { CmsBusinessDetail } from "./types";

export async function getBusinessDetails(): Promise<CmsBusinessDetail[]> {
  const fromCms = await getBusinessDetailsFromMicroCMS();
  return fromCms ?? mockBusinessDetails;
}

export async function getBusinessDetailBySlug(slug: string): Promise<CmsBusinessDetail | null> {
  const fromCms = await getBusinessDetailBySlugFromMicroCMS(slug);
  if (fromCms) return fromCms;
  return mockBusinessDetails.find((item) => item.slug === slug) ?? null;
}
