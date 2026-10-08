import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { portfolioContent } from "@/content/portfolio";

export default function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center bg-background px-5 text-foreground">
      <div className="w-full max-w-2xl border-t border-border pt-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
          404 / Not found
        </p>
        <h1 className="mt-6 text-5xl tracking-[-0.05em] sm:text-6xl">
          This page isn&apos;t part of the portfolio.
        </h1>
        <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
          The project may still be a draft, may have moved, or may not exist.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-11 items-center gap-3 border border-border px-4 text-sm transition-colors hover:border-primary/60 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ArrowLeft className="size-4" />
          Return to {portfolioContent.identity.shortName}
        </Link>
      </div>
    </main>
  );
}
