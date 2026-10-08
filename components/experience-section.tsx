import { portfolioContent } from "@/content/portfolio";

export function ExperienceSection() {
  const { experience } = portfolioContent;

  return (
    <section id="experience" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-16 lg:py-40">
        <div data-reveal className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label">{experience.eyebrow}</p>
          </div>

          <div className="lg:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue-300">
              Current professional focus
            </p>
            <h2 className="mt-6 max-w-4xl text-4xl leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              {experience.headingLead}
              <span className="text-muted-foreground"> {experience.headingMuted}</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {experience.introduction}
            </p>
          </div>
        </div>

        <div data-reveal data-reveal-delay="1" className="mt-16 border-t border-border">
          <article className="grid gap-8 py-10 lg:grid-cols-12 lg:py-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="size-2 bg-primary" aria-hidden="true" />
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  {experience.currentRole.period}
                </p>
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {experience.currentRole.category}
              </p>
            </div>

            <div className="lg:col-span-8">
              <h3 className="text-3xl tracking-[-0.035em] sm:text-4xl">
                {experience.currentRole.title}
              </h3>
              <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
                {experience.currentRole.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {experience.currentRole.tags.map((item) => (
                  <span
                    key={item}
                    className="border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>

        <div className="grid border-t border-border lg:grid-cols-2">
          {experience.responsibilityGroups.map((group, index) => (
            <article
              key={group.title}
              className={`border-border py-10 ${
                index % 2 === 1 ? "lg:border-l lg:pl-10" : "lg:pr-10"
              } ${index >= 2 ? "border-t" : index === 1 ? "border-t lg:border-t-0" : ""}`}
            >
              <p className="font-mono text-[10px] tracking-[0.18em] text-primary">{group.index}</p>
              <h3 className="mt-8 text-2xl tracking-[-0.03em]">{group.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
                {group.description}
              </p>

              <ul className="mt-7 border-t border-border">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex min-h-12 items-center justify-between border-b border-border text-sm text-foreground/85"
                  >
                    <span>{item}</span>
                    <span className="font-mono text-[10px] text-primary" aria-hidden="true">/</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="grid border-t border-border py-10 lg:grid-cols-12 lg:py-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
              Working principles
            </p>
          </div>

          <div className="mt-8 lg:col-span-8 lg:mt-0">
            <div className="border-t border-border">
              {experience.workingPrinciples.map((principle, index) => (
                <div
                  key={principle.title}
                  className="grid gap-3 border-b border-border py-6 sm:grid-cols-[44px_170px_1fr] sm:items-start"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] text-primary">
                    0{index + 1}
                  </span>
                  <h3 className="text-sm font-medium text-foreground">{principle.title}</h3>
                  <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid border-t border-border py-10 lg:grid-cols-12 lg:py-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
              Impact / evidence
            </p>
          </div>

          <div className="mt-8 lg:col-span-8 lg:mt-0">
            <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
              {experience.impact.map((item) => (
                <div key={item.label} className="bg-background p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-8 text-2xl tracking-[-0.03em] text-foreground">
                    {item.value ?? item.placeholder}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 max-w-2xl text-xs leading-5 text-muted-foreground">
              {experience.impactDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
