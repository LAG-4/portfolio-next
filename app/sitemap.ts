import type { MetadataRoute } from "next";
import { projectsData } from "@/lib/data";

const canonicalOrigin = "https://www.lagaryan.click";

/** Lists stable public pages and project detail pages for search crawlers. */
export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projectsData.map((project) => ({
    url: `${canonicalOrigin}/projects/${project.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: canonicalOrigin, changeFrequency: "monthly", priority: 1 },
    {
      url: `${canonicalOrigin}/editing`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${canonicalOrigin}/linktree`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${canonicalOrigin}/projects`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${canonicalOrigin}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${canonicalOrigin}/about`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: `${canonicalOrigin}/now`, changeFrequency: "weekly", priority: 0.6 },
    {
      url: `${canonicalOrigin}/personal`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...projectPages,
  ];
}
