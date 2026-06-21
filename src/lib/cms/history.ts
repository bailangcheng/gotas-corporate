import { getHistoryItemsFromMicroCMS } from "./microcms";
import { mockHistory } from "./mock-history";
import type { CmsHistoryItem, CmsHistoryTrack } from "./types";

export async function getHistoryItems(track?: CmsHistoryTrack): Promise<CmsHistoryItem[]> {
  const fromCms = await getHistoryItemsFromMicroCMS({ track });
  const source = fromCms ?? mockHistory;
  return track ? source.filter((item) => item.track === track) : source;
}
