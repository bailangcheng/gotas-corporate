import { staticPages } from "@/content/site";

export function getPageByPath(path: string) {
  const normalized = path === "" ? "/" : path;
  return staticPages.find((page) => page.href === normalized);
}

export function getSiblingPages(section: string) {
  return staticPages.filter((page) => page.section === section);
}

export function getStaticRouteParams() {
  return staticPages.map((page) => ({
    slug: page.href.split("/").filter(Boolean),
  }));
}

