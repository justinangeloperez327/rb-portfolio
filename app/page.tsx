import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import { AboutProfile } from "@/components/about-profile";
import { ArchiveSection } from "@/components/archive-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { MidnightLily } from "@/components/midnight-lily";
import { MotionController } from "@/components/motion-controller";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";
import { portfolioContent } from "@/content/portfolio";

export default function Home() {
  return (
    <>
      <div id="top" aria-hidden="true" />
      <SiteHeader
        name={portfolioContent.identity.name}
        shortName={portfolioContent.identity.shortName}
        positioning={portfolioContent.identity.positioning}
        navigation={portfolioContent.navigation}
      />
      <MotionController />

      <main id="main-content" tabIndex={-1} className="relative overflow-hidden focus:outline-none">
        <section className="relative min-h-svh border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
          <div className="pointer-events-none absolute -left-48 top-1/4 size-[520px] rounded-full bg-primary/8 blur-[140px]" />

          <div className="relative mx-auto grid min-h-svh max-w-[1440px] grid-cols-1 items-center gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-12 lg:px-16 lg:pb-10 lg:pt-24">
            <div data-reveal data-reveal-direction="left" className="lg:col-span-7">
              <div className="mb-9 flex items-center gap-4">
                <span className="h-px w-10 bg-primary" />
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-300">
                  {portfolioContent.identity.heroKicker}
                </p>
              </div>

              <h1 className="max-w-5xl text-[clamp(3.4rem,8vw,8.75rem)] font-medium leading-[0.82] tracking-[-0.065em] text-foreground">
                {portfolioContent.identity.firstName} {portfolioContent.identity.middleName}
                <span className="block text-foreground/46">{portfolioContent.identity.lastName}.</span>
              </h1>

              <div className="mt-10 grid max-w-3xl gap-8 border-t border-border pt-7 sm:grid-cols-[1.15fr_1fr]">
                <p className="text-xl leading-relaxed tracking-[-0.02em] text-foreground sm:text-2xl">
                  {portfolioContent.identity.role}
                  <span className="block text-muted-foreground">× {portfolioContent.identity.education}</span>
                </p>
                <p className="max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
                  {portfolioContent.identity.heroDescription}
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#projects"
                  className="inline-flex min-h-12 items-center gap-3 bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  View selected work
                  <ArrowDownRight className="size-4" />
                </Link>
                <Link
                  href="#about"
                  className="inline-flex min-h-12 items-center gap-3 border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-primary/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  About Ruth
                  <ArrowDownRight className="size-4" />
                </Link>
              </div>
            </div>

            <div data-reveal data-reveal-direction="right" data-reveal-delay="1" className="relative lg:col-span-5">
              <MidnightLily />
            </div>

            <div className="absolute bottom-7 left-5 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground lg:flex lg:left-16">
              <span>Scroll to explore</span>
              <span className="h-px w-14 bg-border" />
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-3">
            {portfolioContent.principles.map((principle, position) => (
              <article
                key={principle.title}
                data-reveal
                data-reveal-delay={String(position)}
                className={`min-h-56 px-5 py-10 sm:px-8 lg:px-10 ${
                  position > 0 ? "border-t border-border lg:border-l lg:border-t-0" : ""
                }`}
              >
                <p className="font-mono text-[10px] tracking-[0.2em] text-primary">{principle.index}</p>
                <h2 className="mt-10 text-2xl tracking-[-0.03em]">{principle.title}</h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-b border-border">
          <div className="mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-16 lg:py-40">
            <div data-reveal className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="section-label">{portfolioContent.about.eyebrow}</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="max-w-4xl text-4xl leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  {portfolioContent.about.headingLead}
                  <span className="text-muted-foreground"> {portfolioContent.about.headingMuted}</span>
                </h2>
                {portfolioContent.about.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`${index === 0 ? "mt-8" : "mt-5"} max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <AboutProfile />
          </div>
        </section>

        <ExperienceSection />

        <ProjectsSection />

        <ArchiveSection />

        <ContactSection />
      </main>
    </>
  );
}
