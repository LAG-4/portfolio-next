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
    { url: `${canonicalOrigin}/editing`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${canonicalOrigin}/linktree`, changeFrequency: "monthly", priority: 0.5 },
    ...projectPages,
  ];
}
