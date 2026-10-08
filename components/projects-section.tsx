import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Code2, ShieldCheck } from "lucide-react";

import { portfolioContent, type ProjectIconKey } from "@/content/portfolio";
import { getPublishedProjects } from "@/lib/projects";

const projectIcons: Record<ProjectIconKey, typeof BriefcaseBusiness> = {
  professional: BriefcaseBusiness,
  technical: Code2,
};

export function ProjectsSection() {
  const { projects } = portfolioContent;
  const publishedProjects = getPublishedProjects();

  return (
    <section id="projects" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-16 lg:py-40">
        <div data-reveal className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label">{projects.eyebrow}</p>
          </div>

          <div className="lg:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue-300">
              Selected work / two tracks
            </p>
            <h2 className="mt-6 max-w-4xl text-4xl leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              {projects.headingLead}
              <span className="text-muted-foreground"> {projects.headingMuted}</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {projects.introduction}
            </p>
          </div>
        </div>

        <div data-reveal data-reveal-delay="1" className="mt-16 grid border-t border-border lg:grid-cols-2">
          {projects.tracks.map((track, position) => {
            const Icon = projectIcons[track.icon];

            return (
              <article
                key={track.title}
                className={`relative overflow-hidden py-10 lg:min-h-[430px] lg:py-12 ${
                  position === 1 ? "border-t border-border lg:border-l lg:border-t-0 lg:pl-10" : "lg:pr-10"
                }`}
              >
                <div className="pointer-events-none absolute right-0 top-8 font-mono text-[7rem] leading-none tracking-[-0.08em] text-foreground/[0.025] sm:text-[9rem]">
                  {track.index}
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between gap-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                      {track.index} / {track.label}
                    </p>
                    <Icon className="size-5 text-blue-300" aria-hidden="true" />
                  </div>

                  <h3 className="mt-12 max-w-md text-3xl tracking-[-0.04em] sm:text-4xl">
                    {track.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                    {track.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {track.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 border-t border-border pt-5">
                    <div className="flex items-center justify-between gap-5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        Publication status
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-blue-300">
                        {track.status}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {publishedProjects.length > 0 && (
          <div className="border-t border-border py-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  Published case studies
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="border-t border-border">
                  {publishedProjects.map((project, index) => {
                    const Icon = projectIcons[project.track];

                    return (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group grid gap-5 border-b border-border py-7 transition-colors hover:bg-primary/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:grid-cols-[44px_1fr_auto] sm:items-center"
                      >
                        <span className="font-mono text-[10px] tracking-[0.16em] text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="flex min-w-0 items-start gap-4">
                          <Icon className="mt-1 size-4 shrink-0 text-blue-300" aria-hidden="true" />
                          <div className="min-w-0">
                            <h3 className="text-xl tracking-[-0.03em] text-foreground sm:text-2xl">
                              {project.title}
                            </h3>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                              {project.subtitle}
                            </p>
                          </div>
                        </div>

                        <ArrowUpRight className="ml-11 size-4 text-muted-foreground transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300 sm:ml-0" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid border-t border-border py-10 lg:grid-cols-12 lg:py-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
              Case study format
            </p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              Each published project should be concise, evidence-based, and easy to scan.
            </p>
          </div>

          <div className="mt-8 lg:col-span-8 lg:mt-0">
            <div className="border-t border-border">
              {projects.caseStudyStructure.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-3 border-b border-border py-6 sm:grid-cols-[44px_130px_1fr] sm:items-start"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] text-primary">{item.index}</span>
                  <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                  <p className="max-w-xl text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-10">
          <div className="grid gap-8 bg-card px-5 py-7 sm:px-7 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-8">
            <div className="grid size-11 place-items-center border border-border bg-background">
              <ShieldCheck className="size-5 text-blue-300" aria-hidden="true" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                Confidentiality first
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                {projects.confidentialityNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
