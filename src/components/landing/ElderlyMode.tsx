import { Mic, Type, Contrast, LayoutGrid } from "lucide-react";

const points = [
  { icon: Type, label: "Large readable text" },
  { icon: LayoutGrid, label: "Simple navigation" },
  { icon: Contrast, label: "High contrast" },
  { icon: Mic, label: "Voice-first interaction" },
];

export function ElderlyMode() {
  return (
    <section className="bg-cream px-5 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-saffron">Accessibility</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-maroon sm:text-5xl">
            Designed for Every Devotee
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            Large controls, simple navigation and voice-first guidance make the experience
            easier throughout the Yathra.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li
                key={p.label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-ivory px-4 py-4 text-base font-medium text-maroon"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-saffron/10 text-saffron">
                  <p.icon className="size-5" aria-hidden="true" />
                </span>
                {p.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-ivory p-8 shadow-warm">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            Simple Mode
          </p>
          <div className="mt-6 space-y-4">
            <button
              type="button"
              className="w-full rounded-2xl bg-devotional px-6 py-6 text-xl font-semibold text-ivory transition-colors hover:bg-saffron"
            >
              Today's Guidance
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-maroon px-6 py-6 text-xl font-semibold text-maroon transition-colors hover:bg-maroon hover:text-ivory"
            >
              <Mic className="size-6" aria-hidden="true" />
              Listen
            </button>
            <button
              type="button"
              className="w-full rounded-2xl border-2 border-border px-6 py-6 text-xl font-semibold text-maroon transition-colors hover:border-gold"
            >
              Call Family
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
