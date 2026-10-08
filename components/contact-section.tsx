import Link from "next/link";
import { ArrowUp, AtSign, Code2, Link as LinkIcon } from "lucide-react";

import { portfolioContent, type ContactIconKey } from "@/content/portfolio";

const contactIcons: Record<ContactIconKey, typeof AtSign> = {
  email: AtSign,
  linkedin: LinkIcon,
  github: Code2,
};

export function ContactSection() {
  const year = new Date().getFullYear();
  const { contact, identity } = portfolioContent;

  return (
    <footer id="contact" className="scroll-mt-20">
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute bottom-0 right-0 size-[480px] rounded-full bg-primary/[0.07] blur-[140px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-16 lg:py-40">
          <div data-reveal className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="section-label">{contact.eyebrow}</p>
            </div>

            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue-300">
                Start a conversation
              </p>
              <h2 className="mt-6 max-w-4xl text-4xl leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
                {contact.headingLead}
                <span className="text-muted-foreground"> {contact.headingMuted}</span>
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {contact.introduction}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {contact.conversationAreas.map((area) => (
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

          <div data-reveal data-reveal-delay="1" className="mt-16 border-t border-border">
            {contact.channels.map((channel, index) => {
              const Icon = contactIcons[channel.icon];

              return (
                <div
                  key={channel.label}
                  className="grid min-h-24 gap-4 border-b border-border py-5 sm:grid-cols-[44px_1fr_auto] sm:items-center sm:py-0"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] text-primary">0{index + 1}</span>

                  <div className="flex items-center gap-4">
                    <div className="grid size-10 place-items-center border border-border bg-card">
                      <Icon className="size-4 text-blue-300" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-lg tracking-[-0.02em] text-foreground">{channel.label}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{channel.detail}</p>
                    </div>
                  </div>

                  {channel.href ? (
                    <Link
                      href={channel.href}
                      className="pl-14 font-mono text-[10px] uppercase tracking-[0.16em] text-blue-300 transition-colors hover:text-foreground sm:pl-0"
                    >
                      Open
                    </Link>
                  ) : (
                    <span className="pl-14 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:pl-0">
                      {channel.status}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-start gap-3">
            <span className="mt-1.5 size-1.5 shrink-0 bg-primary" aria-hidden="true" />
            <p className="max-w-2xl text-xs leading-5 text-muted-foreground">
              {contact.publicationNote}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        <div className="grid gap-8 py-10 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="grid size-9 place-items-center border border-border font-mono text-[10px] tracking-[0.16em] text-foreground">
                {identity.shortName}
              </span>
              <p className="text-sm font-medium text-foreground">{identity.name}</p>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
              {identity.role} × {identity.education}
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
