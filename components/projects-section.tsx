import { BriefcaseBusiness, Code2, ShieldCheck } from "lucide-react";

const workTracks = [
  {
    index: "A",
    label: "Professional",
    title: "Procurement case studies",
    description:
      "Selected professional work will focus on the decision, Ruth’s responsibility, the commercial approach, and the measurable result—without exposing confidential client or supplier information.",
    tags: ["Sourcing", "Evaluation", "Negotiation", "Supplier management", "Contracts"],
    icon: BriefcaseBusiness,
  },
  {
    index: "B",
    label: "Technical",
    title: "Software & systems work",
    description:
      "Technical projects will be presented separately from Ruth’s procurement career so the portfolio can show her Computer Science background without implying that software engineering is her current professional role.",
    tags: ["Software", "Systems", "Problem-solving", "Computer Science"],
    icon: Code2,
  },
];

const caseStudyStructure = [
  ["01", "Context", "What needed to be solved and why it mattered."],
  ["02", "Role", "What Ruth was responsible for in the work."],
  ["03", "Approach", "How the decision, process, or solution was structured."],
  ["04", "Outcome", "The verified result, metric, or lesson that followed."],
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-16 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label">03 / Projects</p>
          </div>

          <div className="lg:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue-300">
              Selected work / two tracks
            </p>
            <h2 className="mt-6 max-w-4xl text-4xl leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Professional work and
              <span className="text-muted-foreground"> technical work stay distinct.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              The portfolio separates procurement case studies from software and systems projects. That
              keeps Ruth&apos;s current role clear while still giving her technical background meaningful
              space.
            </p>
          </div>
        </div>

        <div className="mt-16 grid border-t border-border lg:grid-cols-2">
          {workTracks.map((track, position) => {
            const Icon = track.icon;

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
                        Being curated
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

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
              {caseStudyStructure.map(([index, title, description]) => (
                <div
                  key={title}
                  className="grid gap-3 border-b border-border py-6 sm:grid-cols-[44px_130px_1fr] sm:items-start"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] text-primary">{index}</span>
                  <h3 className="text-sm font-medium text-foreground">{title}</h3>
                  <p className="max-w-xl text-sm leading-6 text-muted-foreground">{description}</p>
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
                Procurement examples can be anonymized where necessary. Client names, supplier names,
                pricing, contract terms, and internal data should only appear when they are appropriate to
                publish. The value of a case study is the reasoning and verified outcome—not sensitive data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
