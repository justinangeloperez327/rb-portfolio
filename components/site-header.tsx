"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "About", href: "#about", id: "about", index: "01" },
  { label: "Experience", href: "#experience", id: "experience", index: "02" },
  { label: "Projects", href: "#projects", id: "projects", index: "03" },
  { label: "Archive", href: "#archive", id: "archive", index: "04" },
  { label: "Contact", href: "#contact", id: "contact", index: "05" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-24% 0px -58% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    for (const section of sections) {
      observer.observe(section);
    }

    const onScroll = () => {
      if (window.scrollY < Math.max(window.innerHeight * 0.45, 320)) {
        setActiveSection("");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const mainContent = document.getElementById("main-content");
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    document.body.style.overflow = "hidden";
    mainContent?.setAttribute("inert", "");

    const getFocusableElements = () =>
      Array.from(
        mobileMenuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );

    getFocusableElements()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements();
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (!first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    desktopQuery.addEventListener("change", onDesktopChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      mainContent?.removeAttribute("inert");
      window.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onDesktopChange);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[70] -translate-y-24 bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/88 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-16">
          <Link
            href="#top"
            onClick={closeMenu}
            className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Ruth Berlie Perez — home"
          >
            <span className="grid size-9 place-items-center border border-border bg-background font-mono text-[11px] font-medium tracking-[0.18em] text-foreground transition-[border-color,background-color] duration-200 group-hover:border-primary/70 group-hover:bg-primary/[0.05]">
              RBP
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-foreground/90 sm:inline">
              Ruth Berlie Perez
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navigation.slice(0, -1).map((item) => {
              const active = activeSection === item.id;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "location" : undefined}
                  className={`group relative py-2 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-[23px] h-px origin-left bg-primary transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              aria-current={activeSection === "contact" ? "location" : undefined}
              className={`hidden border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-[border-color,background-color,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:inline-flex ${
                activeSection === "contact"
                  ? "border-primary/70 bg-primary/10 text-blue-200"
                  : "border-border bg-background text-foreground hover:border-primary/60 hover:bg-primary/10"
              }`}
            >
              Let&apos;s talk
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              className="grid size-11 place-items-center border border-border text-foreground transition-[border-color,background-color] duration-200 hover:border-primary/60 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        ref={mobileMenuRef}
        id="mobile-navigation"
        className={`fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto bg-background transition-[opacity,visibility] duration-200 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="mx-auto flex min-h-full max-w-[1440px] flex-col px-5 py-8 sm:px-8"
          aria-label="Mobile navigation"
        >
          <div className="border-t border-border">
            {navigation.map((item) => {
              const active = activeSection === item.id;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                  aria-current={active ? "location" : undefined}
                  className={`group grid grid-cols-[44px_minmax(0,1fr)_auto] items-center border-b border-border py-5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${
                    active ? "bg-primary/[0.06]" : "hover:bg-primary/[0.035]"
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-[0.18em] text-primary">
                    {item.index}
                  </span>
                  <span className="min-w-0 text-2xl tracking-[-0.03em] text-foreground">{item.label}</span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.15em] transition-colors ${
                      active ? "text-blue-300" : "text-muted-foreground group-hover:text-blue-300"
                    }`}
                  >
                    {active ? "Here" : "Open"}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-auto border-t border-border pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              RBP / Portfolio
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
              Procurement × Technology × Systems
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
