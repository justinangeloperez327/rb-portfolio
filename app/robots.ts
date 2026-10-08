import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(publicSiteUrl ? { sitemap: `${publicSiteUrl}/sitemap.xml` } : {}),
  };
}
