import { portfolioContent } from "@/content/portfolio";

export function AboutProfile() {
  const { about } = portfolioContent;

  return (
    <div className="mt-16 border-t border-border">
      <div className="grid lg:grid-cols-12">
        <div className="border-b border-border py-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:pr-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            Profile / at a glance
          </p>

          <dl className="mt-8">
            {about.profileFacts.map((fact) => (
              <div
                key={fact.label}
                className="grid gap-2 border-t border-border py-5 first:border-t-0 sm:grid-cols-[150px_1fr]"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="text-sm leading-6 text-foreground sm:text-base">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="py-8 lg:col-span-7 lg:pl-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            Professional profile
          </p>

          <p className="mt-8 max-w-2xl text-xl leading-8 tracking-[-0.02em] text-foreground sm:text-2xl sm:leading-9">
            {about.profileStatement}
          </p>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
            {about.profileDescription}
          </p>
        </div>
      </div>

      <div className="grid border-t border-border lg:grid-cols-2">
        {about.capabilityGroups.map((group, position) => (
          <div
            key={group.title}
            className={`py-8 lg:py-10 ${
              position === 1 ? "border-t border-border lg:border-l lg:border-t-0 lg:pl-10" : "lg:pr-10"
            }`}
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[10px] text-primary">{group.index}</span>
              <h3 className="text-2xl tracking-[-0.03em]">{group.title}</h3>
            </div>

            <ul className="mt-7 grid gap-0">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex min-h-12 items-center justify-between border-t border-border text-sm text-muted-foreground first:border-t-0"
                >
                  <span>{item}</span>
                  <span className="size-1 bg-primary" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid border-t border-border py-8 sm:grid-cols-[180px_1fr] sm:py-10">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Education</p>
        </div>
        <div className="mt-6 sm:mt-0">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
            <div>
              <h3 className="text-2xl tracking-[-0.03em]">{about.education.field}</h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {about.education.level}
              </p>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              {about.education.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
