import { Clapperboard, Flower2, Headphones, Music2 } from "lucide-react";

const screenList = [
  "Marvel movies",
  "Demon Slayer",
  "Attack on Titan",
  "Tokyo Ghoul",
  "Frieren",
];

const artists = [
  ["01", "Avril Lavigne"],
  ["02", "Coldplay"],
  ["03", "Linkin Park", "Emily Armstrong era"],
  ["04", "Paramore"],
];

const instruments = ["Guitar", "Drums", "Keyboard"];

export function ArchiveSection() {
  return (
    <section id="archive" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-16 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label">04 / Archive</p>
          </div>

          <div className="lg:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue-300">
              Off duty / personal index
            </p>
            <h2 className="mt-6 max-w-4xl text-4xl leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              The things that shape the
              <span className="text-muted-foreground"> quieter side of the profile.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Music, stories, and instruments sit behind the professional work as a more personal layer.
              They are presented here as references and influences—not as the main identity of the site.
            </p>
          </div>
        </div>

        <div className="mt-16 grid border-t border-border lg:grid-cols-12">
          <article className="relative overflow-hidden border-b border-border py-10 lg:col-span-5 lg:border-b-0 lg:border-r lg:py-12 lg:pr-10">
            <div className="absolute -right-8 top-6 size-48 rounded-full bg-primary/8 blur-3xl" />

            <div className="relative flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                Personal mark / flower
              </p>
              <Flower2 className="size-5 text-blue-300" aria-hidden="true" />
            </div>

            <div className="relative mt-16">
              <p className="text-[clamp(4.5rem,11vw,8rem)] font-medium leading-none tracking-[-0.07em] text-foreground">
                Lily.
              </p>
              <p className="mt-6 max-w-sm text-sm leading-6 text-muted-foreground">
                Ruth&apos;s favorite flower and the visual motif behind the Midnight Lily identity used
                throughout the portfolio.
              </p>
            </div>

            <div className="relative mt-12 flex items-center gap-4">
              <span className="h-px flex-1 bg-border" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-blue-300">
                calm / precise / personal
              </span>
            </div>
          </article>

          <article className="py-10 lg:col-span-7 lg:py-12 lg:pl-10">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                Watching / stories
              </p>
              <Clapperboard className="size-5 text-blue-300" aria-hidden="true" />
            </div>

            <div className="mt-10 border-t border-border">
              {screenList.map((title, index) => (
                <div
                  key={title}
                  className="group grid min-h-16 grid-cols-[44px_1fr_auto] items-center border-b border-border transition-colors hover:bg-primary/[0.035]"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] text-primary">
                    0{index + 1}
                  </span>
                  <span className="text-lg tracking-[-0.02em] text-foreground transition-transform duration-200 group-hover:translate-x-1">
                    {title}
                  </span>
                  <span className="hidden font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground sm:block">
                    Screen
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="grid border-t border-border lg:grid-cols-12">
          <article className="border-b border-border py-10 lg:col-span-7 lg:border-b-0 lg:border-r lg:py-12 lg:pr-10">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                Listening / current rotation
              </p>
              <Headphones className="size-5 text-blue-300" aria-hidden="true" />
            </div>

            <div className="mt-10 border-t border-border">
              {artists.map(([index, artist, note]) => (
                <div
                  key={artist}
                  className="group grid min-h-20 grid-cols-[44px_1fr] items-center border-b border-border transition-colors hover:bg-primary/[0.035] sm:grid-cols-[44px_1fr_auto]"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] text-primary">{index}</span>
                  <span className="text-xl tracking-[-0.025em] text-foreground transition-transform duration-200 group-hover:translate-x-1 sm:text-2xl">
                    {artist}
                  </span>
                  {note ? (
                    <span className="col-start-2 pb-4 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground sm:col-start-auto sm:pb-0">
                      {note}
                    </span>
                  ) : (
                    <span className="hidden font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground sm:block">
                      Artist
                    </span>
                  )}
                </div>
              ))}
            </div>
          </article>

          <article className="py-10 lg:col-span-5 lg:py-12 lg:pl-10">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                Playing / instruments
              </p>
              <Music2 className="size-5 text-blue-300" aria-hidden="true" />
            </div>

            <p className="mt-10 max-w-md text-2xl leading-9 tracking-[-0.03em] text-foreground">
              Music is not only something Ruth listens to.
              <span className="text-muted-foreground"> She plays it.</span>
            </p>

            <div className="mt-10 border-t border-border">
              {instruments.map((instrument, index) => (
                <div
                  key={instrument}
                  className="flex min-h-16 items-center justify-between border-b border-border"
                >
                  <span className="text-lg tracking-[-0.02em]">{instrument}</span>
                  <span className="font-mono text-[10px] tracking-[0.16em] text-primary">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="border-t border-border pt-10">
          <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:items-start">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
              Design principle
            </p>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              These references influence atmosphere, pacing, and visual taste. The site deliberately avoids
              character art, movie posters, album covers, or imitation interfaces so Ruth&apos;s own identity
              stays stronger than the media she enjoys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
