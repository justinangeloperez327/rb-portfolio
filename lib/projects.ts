import { portfolioContent } from "@/content/portfolio";

export type ProjectEntry = (typeof portfolioContent.projects.entries)[number];

export function getPublishedProjects() {
  return portfolioContent.projects.entries.filter((project) => project.status === "published");
}

export function getPublishedProjectBySlug(slug: string) {
  return getPublishedProjects().find((project) => project.slug === slug);
}
