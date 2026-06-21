import { createClient } from "microcms-js-sdk";
import type {
  CmsBusinessDetail,
  CmsBusinessFeature,
  CmsBusinessRelatedLink,
  CmsFact,
  CmsGroupCompany,
  CmsGroupCompanyType,
  CmsHistoryItem,
  CmsHistoryTrack,
  CmsLegalDocument,
  CmsNewsPin,
  CmsPost,
  CmsRecruitEmploymentType,
  CmsRecruitJob,
} from "./types";

interface MicroCMSImage {
  url: string;
}

interface MicroCMSMagazineItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title?: string;
  slug?: string;
  category?: string | { name?: string; slug?: string };
  tags?: Array<string | { name?: string }>;
  excerpt?: string;
  coverImage?: MicroCMSImage;
  body?: string;
  seoTitle?: string;
  seoDescription?: string;
  isPinned?: boolean;
}

interface MicroCMSFactItem {
  id: string;
  number?: string;
  title?: string;
  body?: string;
  order?: number;
}

interface MicroCMSNewsPinItem {
  id: string;
  label?: string;
  linkUrl?: string;
  displayFrom?: string;
  displayTo?: string;
  active?: boolean;
}

function getClient() {
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;
  if (!serviceDomain || !apiKey) return null;
  return createClient({ serviceDomain, apiKey });
}

function stripHtml(html: string): string {
  return html.replaceAll(/<[^>]+>/g, "").trim();
}

function normalizeCategory(value: MicroCMSMagazineItem["category"]): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value.name ?? value.slug ?? "";
}

function normalizeTags(value: MicroCMSMagazineItem["tags"]): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((tag) => (typeof tag === "string" ? tag : tag?.name ?? ""))
    .filter((tag): tag is string => Boolean(tag));
}

function toCmsPost(item: MicroCMSMagazineItem): CmsPost {
  const slug = (item.slug?.trim() || item.id).trim();
  const bodyHtml = item.body ?? "";
  const excerpt =
    item.excerpt?.trim() ||
    stripHtml(bodyHtml).slice(0, 160);

  return {
    slug,
    title: item.title ?? "Untitled",
    excerpt,
    category: normalizeCategory(item.category),
    tags: normalizeTags(item.tags),
    publishedAt: (item.publishedAt ?? item.createdAt ?? "").slice(0, 10),
    coverImage: item.coverImage?.url,
    body: [],
    bodyHtml,
  };
}

export async function getMagazinePostsFromMicroCMS(limit = 24): Promise<CmsPost[] | null> {
  const client = getClient();
  if (!client) return null;
  try {
    const data = await client.getList<MicroCMSMagazineItem>({
      endpoint: "magazine",
      queries: { limit, orders: "-publishedAt" },
    });
    if (!Array.isArray(data.contents) || data.contents.length === 0) return null;
    return data.contents.map(toCmsPost);
  } catch (error) {
    console.error("[microcms] getList magazine failed:", error);
    return null;
  }
}

export async function getMagazinePostBySlugFromMicroCMS(slug: string): Promise<CmsPost | null> {
  const client = getClient();
  if (!client) return null;
  try {
    const data = await client.getList<MicroCMSMagazineItem>({
      endpoint: "magazine",
      queries: { filters: `slug[equals]${slug}`, limit: 1 },
    });
    const hit = data.contents?.[0];
    if (hit) return toCmsPost(hit);

    // Fall back to treating the slug as a microCMS content ID.
    const byId = await client
      .getListDetail<MicroCMSMagazineItem>({ endpoint: "magazine", contentId: slug })
      .catch(() => null);
    return byId ? toCmsPost(byId) : null;
  } catch (error) {
    console.error("[microcms] getPostBySlug failed:", error);
    return null;
  }
}

function toCmsFact(item: MicroCMSFactItem): CmsFact {
  return {
    number: item.number ?? "",
    title: item.title ?? "",
    body: item.body ?? "",
    order: typeof item.order === "number" ? item.order : undefined,
  };
}

export async function getFactsFromMicroCMS(limit = 20): Promise<CmsFact[] | null> {
  const client = getClient();
  if (!client) return null;
  try {
    const data = await client.getList<MicroCMSFactItem>({
      endpoint: "facts",
      queries: { limit, orders: "order" },
    });
    if (!Array.isArray(data.contents) || data.contents.length === 0) return null;
    return data.contents.map(toCmsFact);
  } catch (error) {
    console.error("[microcms] getList facts failed:", error);
    return null;
  }
}

function toCmsNewsPin(item: MicroCMSNewsPinItem): CmsNewsPin | null {
  if (!item.label || !item.linkUrl) return null;
  return {
    label: item.label,
    linkUrl: item.linkUrl,
    displayFrom: item.displayFrom,
    displayTo: item.displayTo,
    active: item.active ?? true,
  };
}

export async function getNewsPinsFromMicroCMS(limit = 5): Promise<CmsNewsPin[] | null> {
  const client = getClient();
  if (!client) return null;
  try {
    const data = await client.getList<MicroCMSNewsPinItem>({
      endpoint: "news-pin",
      queries: { limit },
    });
    if (!Array.isArray(data.contents) || data.contents.length === 0) return null;
    const pins = data.contents.map(toCmsNewsPin).filter((pin): pin is CmsNewsPin => pin !== null);
    return pins.length > 0 ? pins : null;
  } catch (error) {
    console.error("[microcms] getList news-pin failed:", error);
    return null;
  }
}

interface MicroCMSHistoryItem {
  id: string;
  track?: CmsHistoryTrack | [CmsHistoryTrack];
  year?: string;
  title?: string;
  body?: string;
  photo?: MicroCMSImage;
  order?: number;
}

function unwrapSelect<T extends string>(value: T | T[] | undefined): T | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

function toCmsHistoryItem(item: MicroCMSHistoryItem): CmsHistoryItem | null {
  const track = unwrapSelect(item.track);
  if (!track || !item.year || !item.title) return null;
  return {
    id: item.id,
    track,
    year: item.year,
    title: item.title,
    body: item.body ?? "",
    photo: item.photo?.url,
    order: typeof item.order === "number" ? item.order : undefined,
  };
}

export async function getHistoryItemsFromMicroCMS(
  options: { track?: CmsHistoryTrack; limit?: number } = {},
): Promise<CmsHistoryItem[] | null> {
  const client = getClient();
  if (!client) return null;
  const queries: Record<string, unknown> = {
    limit: options.limit ?? 50,
    orders: "order,year",
  };
  if (options.track) queries.filters = `track[equals]${options.track}`;
  try {
    const data = await client.getList<MicroCMSHistoryItem>({ endpoint: "history", queries });
    if (!Array.isArray(data.contents) || data.contents.length === 0) return null;
    const items = data.contents.map(toCmsHistoryItem).filter((entry): entry is CmsHistoryItem => entry !== null);
    return items.length > 0 ? items : null;
  } catch (error) {
    console.error("[microcms] getList history failed:", error);
    return null;
  }
}

interface MicroCMSBusinessFeature {
  title?: string;
  description?: string;
}

interface MicroCMSBusinessRelatedLink {
  label?: string;
  url?: string;
}

interface MicroCMSBusinessDetailItem {
  id: string;
  slug?: string;
  title?: string;
  eyebrow?: string;
  lead?: string;
  body?: string;
  heroImage?: MicroCMSImage;
  gallery?: MicroCMSImage[];
  features?: MicroCMSBusinessFeature[];
  relatedLinks?: MicroCMSBusinessRelatedLink[];
}

function toCmsBusinessDetail(item: MicroCMSBusinessDetailItem): CmsBusinessDetail | null {
  const slug = item.slug?.trim();
  if (!slug || !item.title) return null;
  const features: CmsBusinessFeature[] = Array.isArray(item.features)
    ? item.features
        .filter((f): f is Required<MicroCMSBusinessFeature> => Boolean(f?.title && f?.description))
        .map((f) => ({ title: f.title, description: f.description }))
    : [];
  const relatedLinks: CmsBusinessRelatedLink[] = Array.isArray(item.relatedLinks)
    ? item.relatedLinks
        .filter((l): l is Required<MicroCMSBusinessRelatedLink> => Boolean(l?.label && l?.url))
        .map((l) => ({ label: l.label, url: l.url }))
    : [];
  return {
    slug,
    title: item.title,
    eyebrow: item.eyebrow,
    lead: item.lead,
    bodyHtml: item.body ?? "",
    heroImage: item.heroImage?.url,
    gallery: Array.isArray(item.gallery) ? item.gallery.map((g) => g.url) : [],
    features,
    relatedLinks,
  };
}

export async function getBusinessDetailsFromMicroCMS(limit = 30): Promise<CmsBusinessDetail[] | null> {
  const client = getClient();
  if (!client) return null;
  try {
    const data = await client.getList<MicroCMSBusinessDetailItem>({
      endpoint: "business-detail",
      queries: { limit },
    });
    if (!Array.isArray(data.contents) || data.contents.length === 0) return null;
    const items = data.contents.map(toCmsBusinessDetail).filter((entry): entry is CmsBusinessDetail => entry !== null);
    return items.length > 0 ? items : null;
  } catch (error) {
    console.error("[microcms] getList business-detail failed:", error);
    return null;
  }
}

export async function getBusinessDetailBySlugFromMicroCMS(slug: string): Promise<CmsBusinessDetail | null> {
  const client = getClient();
  if (!client) return null;
  try {
    const data = await client.getList<MicroCMSBusinessDetailItem>({
      endpoint: "business-detail",
      queries: { filters: `slug[equals]${slug}`, limit: 1 },
    });
    const hit = data.contents?.[0];
    return hit ? toCmsBusinessDetail(hit) : null;
  } catch (error) {
    console.error("[microcms] getList business-detail by slug failed:", error);
    return null;
  }
}

interface MicroCMSGroupCompanyItem {
  id: string;
  name?: string;
  type?: CmsGroupCompanyType | [CmsGroupCompanyType];
  logo?: MicroCMSImage;
  summary?: string;
  url?: string;
  order?: number;
}

function toCmsGroupCompany(item: MicroCMSGroupCompanyItem): CmsGroupCompany | null {
  const type = unwrapSelect(item.type);
  if (!item.name || !type) return null;
  return {
    id: item.id,
    name: item.name,
    type,
    logo: item.logo?.url,
    summary: item.summary,
    url: item.url,
    order: typeof item.order === "number" ? item.order : undefined,
  };
}

export async function getGroupCompaniesFromMicroCMS(
  options: { type?: CmsGroupCompanyType; limit?: number } = {},
): Promise<CmsGroupCompany[] | null> {
  const client = getClient();
  if (!client) return null;
  const queries: Record<string, unknown> = {
    limit: options.limit ?? 50,
    orders: "order",
  };
  if (options.type) queries.filters = `type[equals]${options.type}`;
  try {
    const data = await client.getList<MicroCMSGroupCompanyItem>({ endpoint: "group-companies", queries });
    if (!Array.isArray(data.contents) || data.contents.length === 0) return null;
    const items = data.contents.map(toCmsGroupCompany).filter((entry): entry is CmsGroupCompany => entry !== null);
    return items.length > 0 ? items : null;
  } catch (error) {
    console.error("[microcms] getList group-companies failed:", error);
    return null;
  }
}

interface MicroCMSRecruitJobItem {
  id: string;
  title?: string;
  employmentType?: CmsRecruitEmploymentType | [CmsRecruitEmploymentType];
  location?: string;
  description?: string;
  requirements?: string;
  salary?: string;
  published?: boolean;
}

function toCmsRecruitJob(item: MicroCMSRecruitJobItem): CmsRecruitJob | null {
  const employmentType = unwrapSelect(item.employmentType);
  if (!item.title || !employmentType) return null;
  return {
    id: item.id,
    title: item.title,
    employmentType,
    location: item.location,
    descriptionHtml: item.description ?? "",
    requirements: item.requirements,
    salary: item.salary,
    published: item.published ?? false,
  };
}

export async function getRecruitJobsFromMicroCMS(
  options: { employmentType?: CmsRecruitEmploymentType; publishedOnly?: boolean; limit?: number } = {},
): Promise<CmsRecruitJob[] | null> {
  const client = getClient();
  if (!client) return null;
  const filters: string[] = [];
  if (options.employmentType) filters.push(`employmentType[equals]${options.employmentType}`);
  if (options.publishedOnly) filters.push("published[equals]true");
  const queries: Record<string, unknown> = { limit: options.limit ?? 50 };
  if (filters.length > 0) queries.filters = filters.join("[and]");
  try {
    const data = await client.getList<MicroCMSRecruitJobItem>({ endpoint: "recruit-job", queries });
    if (!Array.isArray(data.contents) || data.contents.length === 0) return null;
    const items = data.contents.map(toCmsRecruitJob).filter((entry): entry is CmsRecruitJob => entry !== null);
    return items.length > 0 ? items : null;
  } catch (error) {
    console.error("[microcms] getList recruit-job failed:", error);
    return null;
  }
}

interface MicroCMSNewsItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title?: string;
  slug?: string;
  body?: string;
  excerpt?: string;
}

function toCmsNewsPost(item: MicroCMSNewsItem): CmsPost {
  const slug = (item.slug?.trim() || item.id).trim();
  const bodyHtml = item.body ?? "";
  const excerpt = item.excerpt?.trim() || stripHtml(bodyHtml).slice(0, 160);
  return {
    slug,
    title: item.title ?? "Untitled",
    excerpt,
    category: "ニュース",
    tags: [],
    publishedAt: (item.publishedAt ?? item.createdAt ?? "").slice(0, 10),
    body: [],
    bodyHtml,
  };
}

export async function getNewsArticlesFromMicroCMS(limit = 24): Promise<CmsPost[] | null> {
  const client = getClient();
  if (!client) return null;
  try {
    const data = await client.getList<MicroCMSNewsItem>({
      endpoint: "news",
      queries: { limit, orders: "-publishedAt" },
    });
    if (!Array.isArray(data.contents) || data.contents.length === 0) return null;
    return data.contents.map(toCmsNewsPost);
  } catch (error) {
    console.error("[microcms] getList news failed:", error);
    return null;
  }
}

export async function getNewsArticleBySlugFromMicroCMS(slug: string): Promise<CmsPost | null> {
  const client = getClient();
  if (!client) return null;
  try {
    const data = await client.getList<MicroCMSNewsItem>({
      endpoint: "news",
      queries: { filters: `slug[equals]${slug}`, limit: 1 },
    });
    const hit = data.contents?.[0];
    if (hit) return toCmsNewsPost(hit);
    const byId = await client
      .getListDetail<MicroCMSNewsItem>({ endpoint: "news", contentId: slug })
      .catch(() => null);
    return byId ? toCmsNewsPost(byId) : null;
  } catch (error) {
    console.error("[microcms] getNewsArticleBySlug failed:", error);
    return null;
  }
}

interface MicroCMSLegalDocument {
  title?: string;
  body?: string;
  updatedAt?: string;
}

function toCmsLegalDocument(item: MicroCMSLegalDocument, fallbackTitle: string): CmsLegalDocument | null {
  const bodyHtml = item.body?.trim();
  if (!bodyHtml) return null;
  return {
    title: item.title?.trim() || fallbackTitle,
    bodyHtml,
    updatedAt: item.updatedAt,
  };
}

export async function getLegalDocumentFromMicroCMS(
  endpoint: "privacy-policy" | "terms",
  fallbackTitle: string,
): Promise<CmsLegalDocument | null> {
  const client = getClient();
  if (!client) return null;
  try {
    const item = await client.get<MicroCMSLegalDocument>({ endpoint });
    return toCmsLegalDocument(item, fallbackTitle);
  } catch (error) {
    console.error(`[microcms] get ${endpoint} failed:`, error);
    return null;
  }
}
