import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import { AboutProfile } from "@/components/about-profile";
import { ExperienceSection } from "@/components/experience-section";
import { MidnightLily } from "@/components/midnight-lily";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";

const principles = [
  ["01", "Procurement", "Commercial judgment, sourcing, negotiation, and structured decision-making."],
  ["02", "Technology", "A Computer Science foundation with a practical interest in systems and software."],
  ["03", "Creative", "Music, film, anime, and design as a quieter layer behind the professional work."],
];

export default function Home() {
  return (
    <>
      <div id="top" aria-hidden="true" />
      <SiteHeader />

      <main id="main-content" className="relative overflow-hidden">
        <section className="relative min-h-svh border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
          <div className="pointer-events-none absolute -left-48 top-1/4 size-[520px] rounded-full bg-primary/8 blur-[140px]" />

          <div className="relative mx-auto grid min-h-svh max-w-[1440px] grid-cols-1 items-center gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-12 lg:px-16 lg:pb-10 lg:pt-24">
            <div className="lg:col-span-7">
              <div className="mb-9 flex items-center gap-4">
                <span className="h-px w-10 bg-primary" />
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-300">
                  Procurement / Technology / Systems
                </p>
              </div>

              <h1 className="max-w-5xl text-[clamp(3.4rem,8vw,8.75rem)] font-medium leading-[0.82] tracking-[-0.065em] text-foreground">
                Ruth Berlie
                <span className="block text-foreground/46">Perez.</span>
              </h1>

              <div className="mt-10 grid max-w-3xl gap-8 border-t border-border pt-7 sm:grid-cols-[1.15fr_1fr]">
                <p className="text-xl leading-relaxed tracking-[-0.02em] text-foreground sm:text-2xl">
                  Procurement Manager
                  <span className="block text-muted-foreground">× Computer Science Graduate</span>
                </p>
                <p className="max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
                  Working across procurement, technology, systems, and problem-solving with a balance of
                  commercial discipline and technical curiosity.
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

            <div className="relative lg:col-span-5">
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
            {principles.map(([index, title, description], position) => (
              <article
                key={title}
                className={`min-h-56 px-5 py-10 sm:px-8 lg:px-10 ${
                  position > 0 ? "border-t border-border lg:border-l lg:border-t-0" : ""
                }`}
              >
                <p className="font-mono text-[10px] tracking-[0.2em] text-primary">{index}</p>
                <h2 className="mt-10 text-2xl tracking-[-0.03em]">{title}</h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-b border-border">
          <div className="mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-16 lg:py-40">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="section-label">01 / About</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="max-w-4xl text-4xl leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  Commercial thinking,
                  <span className="text-muted-foreground">
                    {" "}
                    technical foundation, creative perspective.
                  </span>
                </h2>
                <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  Ruth works at the intersection of procurement and technology. Her current professional
                  focus is procurement management, supported by a Computer Science background that shapes
                  how she approaches systems, information, process, and problem-solving.
                </p>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  The result is a profile that is commercially grounded but comfortable with technical
                  conversations—useful when requirements, suppliers, systems, and business decisions need
                  to meet in the same room.
                </p>
              </div>
            </div>

            <AboutProfile />
          </div>
        </section>

        <ExperienceSection />

        <ProjectsSection />

        <section id="archive" className="scroll-mt-20 border-b border-border">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-28 sm:px-8 lg:grid-cols-12 lg:px-16 lg:py-40">
            <p className="section-label lg:col-span-4">04 / Archive</p>
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue-300">
                Watching / Listening / Playing
              </p>
              <h2 className="mt-6 max-w-4xl text-4xl tracking-[-0.045em] sm:text-5xl">
                The personal layer comes after the professional story.
              </h2>
              <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
                Music, anime, film, and instruments will become part of the archive without turning the
                portfolio into a fan page. The design will use those interests as editorial texture.
              </p>
            </div>
          </div>
        </section>

        <footer id="contact" className="scroll-mt-20">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-16 lg:py-28">
            <div className="lg:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">RBP / 2026</p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-3xl tracking-[-0.04em] sm:text-4xl">
                Procurement × Technology × Systems
              </p>
              <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground">
                Contact details and professional links will be connected in the dedicated contact phase.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
