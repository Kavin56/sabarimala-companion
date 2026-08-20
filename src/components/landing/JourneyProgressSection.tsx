import { Check, Circle, Loader } from "lucide-react";

const steps = [
  { label: "Preparation", state: "done" },
  { label: "Vratham", state: "done" },
  { label: "Packing", state: "done" },
  { label: "Travel", state: "active" },
  { label: "Pamba", state: "upcoming" },
  { label: "Sannidhanam", state: "upcoming" },
  { label: "Return", state: "upcoming" },
] as const;

export function JourneyProgressSection() {
  return (
    <section className="bg-ivory px-5 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-saffron">Progress</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-maroon sm:text-5xl">
            Your Yathra, At a Glance
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            See exactly where you are in the journey — preparation, Vratham, travel, darshan
            and the return home.
          </p>
          <a
            href="/begin-yathra"
            className="mt-8 inline-flex rounded-full bg-devotional px-7 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-saffron"
          >
            View My Journey
          </a>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-warm">
          <div className="flex items-end justify-between">
            <p className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
              Journey Progress
            </p>
            <p className="font-display text-4xl text-maroon">60%</p>
          </div>
          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-cream">
            <div className="h-full rounded-full bg-devotional" style={{ width: "60%" }} />
          </div>

          <ul className="mt-8 space-y-3">
            {steps.map((s) => (
              <li
                key={s.label}
                className={`flex items-center justify-between rounded-2xl border px-4 py-3.5 text-sm font-medium ${
                  s.state === "active"
                    ? "border-saffron/50 bg-saffron/10 text-saffron"
                    : s.state === "done"
                      ? "border-border bg-cream text-maroon"
                      : "border-border bg-card text-muted-foreground"
                }`}
              >
                <span className="flex items-center gap-3">
                  {s.state === "done" ? (
                    <Check className="size-4" aria-hidden="true" />
                  ) : s.state === "active" ? (
                    <Loader className="size-4" aria-hidden="true" />
                  ) : (
                    <Circle className="size-4" aria-hidden="true" />
                  )}
                  {s.label}
                </span>
                <span className="text-xs capitalize opacity-80">
                  {s.state === "active" ? "In Progress" : s.state === "done" ? "Complete" : "Upcoming"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
