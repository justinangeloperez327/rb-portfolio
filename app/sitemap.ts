import type { MetadataRoute } from "next";

import { getPublishedProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

  if (!publicSiteUrl) {
    return [];
  }

  return [
    {
      url: publicSiteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...getPublishedProjects().map((project) => ({
      url: `${publicSiteUrl}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
