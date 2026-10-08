import type { MetadataRoute } from "next";

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
  ];
}
