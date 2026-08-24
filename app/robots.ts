import type { MetadataRoute } from "next";

/** Publishes crawler rules without falling through to the recruiter slug route. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.lagaryan.click/sitemap.xml",
  };
}
