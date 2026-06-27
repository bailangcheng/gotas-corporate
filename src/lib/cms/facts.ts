import { mockFacts } from "./mock-facts";
import type { CmsFact } from "./types";

/**
 * 「10の約束」はほぼ更新されない静的コンテンツのため、microCMS ではなくローカル
 * (src/lib/cms/mock-facts.ts) を正とする。将来クライアントが自分で編集したくなったら
 * company-overview と同様に microCMS エンドポイントへ移行できる（CmsFact 形状は同じ）。
 */
export async function getFacts(): Promise<CmsFact[]> {
  return mockFacts;
}
