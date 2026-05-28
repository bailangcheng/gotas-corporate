export type CmsBlock = {
  type: "paragraph" | "heading" | "list";
  text: string;
};

export type CmsPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  coverImage?: string;
  /** Structured blocks used by the mock adapter. */
  body: CmsBlock[];
  /** Rich HTML from microCMS. When present the detail page renders this instead of `body`. */
  bodyHtml?: string;
};

export type CmsCategory = {
  name: string;
  slug: string;
  description?: string;
};

export type CmsFact = {
  number: string;
  title: string;
  body: string;
  order?: number;
};

export type CmsCompanyOverviewRow = {
  label: string;
  value: string;
};

export type CmsCompanyOverview = {
  companyName: string;
  address: string;
  founded?: string;
  representative?: string;
  capital?: string;
  employees?: string;
  businessSummary: string;
  mapImage?: string;
  extraRows: CmsCompanyOverviewRow[];
};

export type CmsNewsPin = {
  label: string;
  linkUrl: string;
  displayFrom?: string;
  displayTo?: string;
  active: boolean;
};

export type CmsHistoryTrack = "gotas" | "igarashi";

export type CmsHistoryItem = {
  id: string;
  track: CmsHistoryTrack;
  year: string;
  title: string;
  body: string;
  photo?: string;
  order?: number;
};

export type CmsBusinessFeature = {
  title: string;
  description: string;
};

export type CmsBusinessRelatedLink = {
  label: string;
  url: string;
};

export type CmsBusinessDetail = {
  slug: string;
  title: string;
  eyebrow?: string;
  lead?: string;
  bodyHtml: string;
  heroImage?: string;
  gallery: string[];
  features: CmsBusinessFeature[];
  relatedLinks: CmsBusinessRelatedLink[];
};

export type CmsGroupCompanyType = "group" | "partner";

export type CmsGroupCompany = {
  id: string;
  name: string;
  type: CmsGroupCompanyType;
  logo?: string;
  summary?: string;
  url?: string;
  order?: number;
};

export type CmsRecruitEmploymentType = "mid-career" | "part-time";

export type CmsRecruitJob = {
  id: string;
  title: string;
  employmentType: CmsRecruitEmploymentType;
  location?: string;
  descriptionHtml: string;
  requirements?: string;
  salary?: string;
  published: boolean;
};

export type CmsLegalDocument = {
  title: string;
  bodyHtml: string;
  updatedAt?: string;
};
