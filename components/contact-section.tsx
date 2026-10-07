import Link from "next/link";
import { ArrowUp, AtSign, Code2, Link as LinkIcon } from "lucide-react";

const contactChannels = [
  {
    label: "Email",
    detail: "Professional correspondence",
    status: "To be linked",
    icon: AtSign,
  },
  {
    label: "LinkedIn",
    detail: "Career & professional network",
    status: "To be linked",
    icon: LinkIcon,
  },
  {
    label: "GitHub",
    detail: "Technical work & repositories",
    status: "To be linked",
    icon: Code2,
  },
];

const conversationAreas = [
  "Procurement",
  "Commercial operations",
  "Technology",
  "Systems & process",
];

export function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-20">
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute bottom-0 right-0 size-[480px] rounded-full bg-primary/[0.07] blur-[140px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-16 lg:py-40">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="section-label">05 / Contact</p>
            </div>

            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue-300">
                Start a conversation
              </p>
              <h2 className="mt-6 max-w-4xl text-4xl leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
                Good work usually starts with
                <span className="text-muted-foreground"> a clear conversation.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                For professional conversations around procurement, commercial operations, technology,
                or systems, Ruth&apos;s contact channels can be connected here when the portfolio is ready
                for publication.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {conversationAreas.map((area) => (
                  <span
                    key={area}
                    className="border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-border">
            {contactChannels.map((channel, index) => {
              const Icon = channel.icon;

              return (
                <div
                  key={channel.label}
                  className="grid min-h-24 gap-4 border-b border-border py-5 sm:grid-cols-[44px_1fr_auto] sm:items-center sm:py-0"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] text-primary">
                    0{index + 1}
                  </span>

                  <div className="flex items-center gap-4">
                    <div className="grid size-10 place-items-center border border-border bg-card">
                      <Icon className="size-4 text-blue-300" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-lg tracking-[-0.02em] text-foreground">{channel.label}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{channel.detail}</p>
                    </div>
                  </div>

                  <span className="pl-14 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:pl-0">
                    {channel.status}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-start gap-3">
            <span className="mt-1.5 size-1.5 shrink-0 bg-primary" aria-hidden="true" />
            <p className="max-w-2xl text-xs leading-5 text-muted-foreground">
              Contact information is intentionally not fabricated. Real email and profile URLs should be
              added before public launch.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        <div className="grid gap-8 py-10 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="grid size-9 place-items-center border border-border font-mono text-[10px] tracking-[0.16em] text-foreground">
                RBP
              </span>
              <p className="text-sm font-medium text-foreground">Ruth Berlie Perez</p>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
              Procurement Manager × Computer Science Graduate
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Midnight Lily / {year}
            </p>
          </div>

          <Link
            href="#top"
            className="inline-flex min-h-11 w-fit items-center gap-3 border border-border px-4 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground transition-colors hover:border-primary/60 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Back to top
            <ArrowUp className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
