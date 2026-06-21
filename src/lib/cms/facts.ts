import { getFactsFromMicroCMS } from "./microcms";
import { mockFacts } from "./mock-facts";
import type { CmsFact } from "./types";

export async function getFacts(): Promise<CmsFact[]> {
  const fromCms = await getFactsFromMicroCMS();
  return fromCms ?? mockFacts;
}
