import { getNewsPinsFromMicroCMS } from "./microcms";
import { mockNewsPins } from "./mock-news-pin";
import type { CmsNewsPin } from "./types";

function isWithinWindow(pin: CmsNewsPin, now = new Date()): boolean {
  if (!pin.active) return false;
  if (pin.displayFrom && new Date(pin.displayFrom) > now) return false;
  if (pin.displayTo && new Date(pin.displayTo) < now) return false;
  return true;
}

export async function getActiveNewsPins(): Promise<CmsNewsPin[]> {
  const fromCms = await getNewsPinsFromMicroCMS();
  const source = fromCms ?? mockNewsPins;
  const now = new Date();
  return source.filter((pin) => isWithinWindow(pin, now));
}

export async function getPrimaryNewsPin(): Promise<CmsNewsPin | null> {
  const pins = await getActiveNewsPins();
  return pins[0] ?? null;
}
