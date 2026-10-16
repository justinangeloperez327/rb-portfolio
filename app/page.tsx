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
        <section className="portfolio-hero" aria-labelledby="hero-heading">
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-eyebrow">{portfolioContent.identity.heroKicker}</p>
              <h1 id="hero-heading" className="hero-name">
                {portfolioContent.identity.firstName} {portfolioContent.identity.middleName}
                <span>{portfolioContent.identity.lastName}.</span>
              </h1>
              <p className="hero-role">{portfolioContent.identity.role}</p>
              <p className="hero-description">{portfolioContent.identity.heroDescription}</p>
              <div className="hero-actions">
                <Link href="#experience" className="portfolio-button portfolio-button-primary">
                  Explore my experience <ArrowDownRight className="size-4" aria-hidden="true" />
                </Link>
                <Link href="#about" className="portfolio-button portfolio-button-secondary">
                  Meet Ruth <ArrowDownRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="hero-foundation">
                <span>Academic foundation</span>
                <p>{portfolioContent.identity.education}</p>
              </div>
            </div>
            <div className="hero-artwork">
              <div className="hero-artwork-caption" aria-hidden="true">
                <span>Ruth Berlie Perez</span><span>Midnight Lily</span>
              </div>
              <MidnightLily />
              <p className="hero-artwork-note">A structured mind.<br />A creative perspective.</p>
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
                className={`px-5 py-8 sm:px-8 lg:px-10 ${
                  position > 0 ? "border-t border-border lg:border-l lg:border-t-0" : ""
                }`}
              >
                <span aria-hidden="true" className="block h-1 w-7 bg-primary" />
                <h2 className="mt-5 text-2xl tracking-[-0.03em]">{principle.title}</h2>
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
