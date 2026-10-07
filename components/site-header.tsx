import Link from "next/link";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Archive", href: "#archive" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-16">
        <Link
          href="#top"
          className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Ruth Berlie Perez — home"
        >
          <span className="grid size-9 place-items-center border border-border bg-background/70 font-mono text-[11px] font-medium tracking-[0.18em] text-foreground backdrop-blur">
            RBP
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-foreground/90 sm:inline">
            Ruth Berlie Perez
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="border border-border bg-background/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:border-primary/60 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Let&apos;s talk
        </Link>
      </div>
    </header>
  );
}
