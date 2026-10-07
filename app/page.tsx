import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-background p-6 text-foreground">
      <section className="flex max-w-xl flex-col items-start gap-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Portfolio foundation</p>
          <h1 className="text-4xl font-semibold tracking-tight">RB Portfolio</h1>
          <p className="text-muted-foreground">
            Next.js, Tailwind CSS, and shadcn/ui are initialized and ready for the design phase.
          </p>
        </div>
        <Button>Ready to build</Button>
      </section>
    </main>
  );
}
