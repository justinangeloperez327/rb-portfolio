import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, Code2 } from "lucide-react";
import { notFound } from "next/navigation";

import { portfolioContent } from "@/content/portfolio";
import {
  getPublishedProjectBySlug,
  getPublishedProjects,
} from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export function generateStaticParams() {
  return getPublishedProjects().map((project) => ({
    slug: project.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPublishedProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const canonicalUrl = publicSiteUrl
    ? `${publicSiteUrl}/projects/${project.slug}`
    : undefined;

  return {
    title: project.title,
    description: project.subtitle,
    ...(canonicalUrl
      ? {
          alternates: {
            canonical: canonicalUrl,
          },
        }
      : {}),
    openGraph: {
      type: "article",
      title: project.title,
      description: project.subtitle,
      ...(canonicalUrl ? { url: canonicalUrl } : {}),
    },
    twitter: {
      card: "summary",
      title: project.title,
      description: project.subtitle,
    },
  };
}

const sections = [
  { key: "context", index: "01", label: "Context" },
  { key: "role", index: "02", label: "Role" },
  { key: "approach", index: "03", label: "Approach" },
  { key: "outcome", index: "04", label: "Outcome" },
] as const;

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPublishedProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const isProfessional = project.track === "professional";
  const TrackIcon = isProfessional ? BriefcaseBusiness : Code2;
  const trackLabel = isProfessional ? "Professional" : "Technical";
  const projectUrl = publicSiteUrl
    ? `${publicSiteUrl}/projects/${project.slug}`
    : undefined;

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.subtitle,
    author: {
      "@type": "Person",
      name: portfolioContent.identity.name,
    },
    keywords: project.tags.join(", "),
    ...(projectUrl ? { url: projectUrl } : {}),
  };

  return (
    <main className="min-h-svh bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      <header className="border-b border-border">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-16">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ArrowLeft className="size-4" />
            Back to portfolio
          </Link>

          <Link
            href="/"
            className="grid size-9 place-items-center border border-border font-mono text-[10px] tracking-[0.16em] text-foreground transition-colors hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`${portfolioContent.identity.name} — home`}
          >
            {portfolioContent.identity.shortName}
          </Link>
        </div>
      </header>

      <article>
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-16 lg:py-28">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <TrackIcon className="size-4 text-blue-300" aria-hidden="true" />
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  {trackLabel} / Case study
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h1 className="max-w-5xl text-5xl font-medium leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                {project.title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {project.subtitle}
              </p>

              <div className="mt-9 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
            <div className="border-t border-border">
              {sections.map((section) => (
                <div
                  key={section.key}
                  className="grid gap-7 border-b border-border py-10 lg:grid-cols-12 lg:py-14"
                >
                  <div className="lg:col-span-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] tracking-[0.16em] text-primary">
                        {section.index}
                      </span>
                      <h2 className="text-xl tracking-[-0.025em]">{section.label}</h2>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                      {project[section.key]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {portfolioContent.identity.name} / {trackLabel} work
              </p>
              <Link
                href="/#projects"
                className="inline-flex min-h-11 w-fit items-center gap-3 border border-border px-4 text-sm text-foreground transition-colors hover:border-primary/60 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                View all work
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
