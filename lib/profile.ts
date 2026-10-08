import { portfolioContent } from "@/content/portfolio";

export const profile = {
  name: portfolioContent.identity.name,
  shortName: portfolioContent.identity.shortName,
  role: portfolioContent.identity.role,
  education: portfolioContent.identity.education,
  positioning: portfolioContent.identity.positioning,
  description: portfolioContent.identity.description,
  keywords: portfolioContent.identity.keywords,
} as const;
