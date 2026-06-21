import { getLegalDocumentFromMicroCMS } from "./microcms";
import { mockPrivacyPolicy, mockTermsOfService } from "./mock-legal";
import type { CmsLegalDocument } from "./types";

export async function getPrivacyPolicy(): Promise<CmsLegalDocument> {
  const fromCms = await getLegalDocumentFromMicroCMS("privacy-policy", "プライバシーポリシー");
  return fromCms ?? mockPrivacyPolicy;
}

export async function getTermsOfService(): Promise<CmsLegalDocument> {
  const fromCms = await getLegalDocumentFromMicroCMS("terms", "利用規約");
  return fromCms ?? mockTermsOfService;
}
