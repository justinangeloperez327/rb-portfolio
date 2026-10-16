import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { MidnightLily } from "@/components/midnight-lily";
import { portfolioContent } from "@/content/portfolio";
import { getPublishedProjects } from "@/lib/projects";

export default function Home() {
  const { identity, about, experience, contact } = portfolioContent;
  const projects = getPublishedProjects();
  const channels = contact.channels.filter((channel) => channel.href);
  const navigation = portfolioContent.navigation.filter((item) =>
    item.id === "about" || item.id === "experience" ||
    item.id === "projects" || item.id === "contact"
  );
  const achievements = experience.impact.filter((item) => item.value?.trim());

  return (
    <>
      <div id="top" aria-hidden="true" />
      <SiteHeader name={identity.name} shortName={identity.shortName}
        positioning={identity.role} navigation={navigation} />
      <main id="main-content" tabIndex={-1} className="blue-main">
        <section className="blue-hero blue-container" aria-labelledby="intro-title">
          <div>
            <p className="blue-eyebrow">{identity.role}</p>
            <h1 id="intro-title">{identity.firstName} {identity.middleName}<br />{identity.lastName}<span className="text-blue-300">.</span></h1>
            <p className="blue-summary">Connecting business requirements with suppliers, commercial decisions, and clear follow-through.</p>
            <Link href="#experience" className="portfolio-button portfolio-button-primary">
              View experience <ArrowDownRight className="size-4" aria-hidden="true" />
            </Link>
            <p className="blue-education">{identity.education}</p>
          </div>
          <div className="blue-signature" aria-hidden="true"><MidnightLily /></div>
        </section>

        <section id="about" className="blue-section">
          <div className="blue-container blue-section-layout">
            <h2>About</h2>
            <div>
              <p className="blue-lead">Commercial judgment.<br /><span className="text-muted-foreground">A technical way of thinking.</span></p>
              <p className="blue-body">Ruth is a Procurement Manager and Computer Science graduate. Her work brings structure to requirements, supplier coordination, and commercial decisions.</p>
              <div className="blue-capabilities">
                {about.capabilityGroups.map((group) => (
                  <div key={group.title}>
                    <h3>{group.title === "Systems" ? "Technical foundation" : "Procurement capabilities"}</h3>
                    <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="blue-section">
          <div className="blue-container blue-section-layout">
            <h2>Experience</h2>
            <div>
              <div className="blue-role-heading"><h3>{experience.currentRole.title}</h3><span>Current role</span></div>
              <p className="blue-body">Sourcing, commercial evaluation, supplier engagement, contract coordination, and purchasing follow-up.</p>
              <div className="blue-responsibilities">
                {experience.responsibilityGroups.map((group) => (
                  <article key={group.title}>
                    <h4>{group.title}</h4>
                    <p>{group.description}</p>
                  </article>
                ))}
              </div>
              {achievements.length > 0 && (
                <dl className="blue-achievements">{achievements.map((item) => (
                  <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>
                ))}</dl>
              )}
            </div>
          </div>
        </section>

          <section id="projects" className="blue-section">
            <div className="blue-container blue-section-layout">
              <h2>Selected work</h2>
              <div className="blue-work-list">
                {projects.length === 0 && ["Procurement case study", "Systems & process project"].map((title) => (
                  <article key={title} className="portfolio-link-card">
                    <p className="blue-eyebrow">Design preview</p>
                    <h3 className="text-xl">{title}</h3>
                    <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                      {["Project title", "Scope", "Approach", "Outcome"].map((label) => (
                        <div key={label}><dt className="text-muted-foreground">{label}</dt><dd className="mt-2 text-foreground/70">To be added</dd></div>
                      ))}
                    </dl>
                  </article>
                ))}
                {projects.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`} className="portfolio-link-card blue-work-link">
                  <div><h3>{project.title}</h3><p>{project.subtitle}</p></div>
                  <ArrowUpRight className="size-5 shrink-0" aria-hidden="true" />
                </Link>
              ))}</div>
            </div>
          </section>

          <section id="contact" className="blue-section">
            <div className="blue-container blue-section-layout">
              <h2>Contact</h2>
              <div><p className="blue-lead">Start a conversation.</p>
                <p className="blue-body">For professional conversations about procurement and commercial operations.</p>
                <div className="blue-contact-links">
                  {contact.channels.filter((channel) => !channel.href).map((channel) => (
                    <div key={channel.label} className="portfolio-link-card min-w-0 flex-1 basis-48">
                      <h3 className="text-base">{channel.label}</h3>
                      <p className="mt-3 text-sm text-muted-foreground">Contact details to be added</p>
                    </div>
                  ))}
                  {channels.map((channel) => (
                  <Link key={channel.label} href={channel.href!} className="portfolio-button portfolio-button-secondary">
                    {channel.label}<ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                ))}</div>
              </div>
            </div>
          </section>
      </main>
      <footer className="blue-footer blue-container"><p>{identity.name} · {identity.role}</p>
        <Link href="#top" className="blue-top-link">Back to top <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
      </footer>
    </>
  );
}
