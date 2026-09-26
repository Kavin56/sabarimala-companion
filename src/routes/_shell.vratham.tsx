import { createFileRoute } from "@tanstack/react-router";
import { Check, CircleCheck, CircleX } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  InfoList,
  PageHeader,
  Panel,
  PrimaryButton,
  ProgressBar,
  Section,
  StageBanner,
} from "@/components/app/kit";
import { img, vratham } from "@/lib/mock";

export const Route = createFileRoute("/_shell/vratham")({
  head: () => ({
    meta: [
      { title: "Vratham Guide — 41 Days of Devotion" },
      { name: "description", content: "Daily Vratham routine, do's and don'ts, prayer guide, mala guide and food guidance for your 41-day observance." },
      { property: "og:title", content: "Vratham Guide — 41 Days of Devotion" },
      { property: "og:description", content: "Track each day of your Vratham with morning, afternoon, evening and night guidance." },
    ],
  }),
  component: VrathamPage,
});

function VrathamPage() {
  const [routine, setRoutine] = useState(vratham.routine.map((r) => r.done));
  const doneCount = routine.filter(Boolean).length;

  return (
    <div>
      <PageHeader
        eyebrow="Vratham Guide"
        title="Day 10 of 41"
        subtitle="Discipline of body and mind — observed daily until you carry the Irumudi to Sannidhanam."
        image={img.vratham}
      />

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <Panel className="lg:col-span-2">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-maroon/60">
                Day Tracker
              </p>
              <p className="font-display text-5xl text-maroon">
                {vratham.day} <span className="text-2xl text-foreground/40">/ {vratham.total}</span>
              </p>
            </div>
            <p className="text-sm font-semibold text-saffron">{vratham.remaining} days remaining</p>
          </div>
          <ProgressBar value={(vratham.day / vratham.total) * 100} className="mt-4" />

          <p className="mt-7 text-[11px] font-semibold tracking-[0.24em] uppercase text-maroon/60">
            Today's Checklist — {doneCount} of 4 complete
          </p>
          <ul className="mt-3 space-y-3">
            {vratham.routine.map((r, i) => (
              <li key={r.key}>
                <button
                  type="button"
                  onClick={() => setRoutine((p) => p.map((v, j) => (j === i ? !v : v)))}
                  className={cn(
                    "flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition",
                    routine[i] ? "border-emerald-300 bg-emerald-50/60" : "border-border bg-card hover:border-saffron",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border-2",
                      routine[i] ? "border-emerald-500 bg-emerald-500 text-white" : "border-border",
                    )}
                  >
                    {routine[i] && <Check className="size-3.5" />}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-maroon">
                      {r.label} <span className="ml-1 text-xs text-foreground/45">{r.time}</span>
                    </span>
                    <span className="mt-0.5 block text-sm text-foreground/65">{r.detail}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <PrimaryButton className="mt-5" onClick={() => setRoutine([true, true, true, true])}>
            Mark Day as Completed
          </PrimaryButton>
        </Panel>

        <div className="space-y-5">
          <StageBanner stage="Vratham" detail={`Day ${vratham.day} / ${vratham.total}`} />
          <Panel>
            <p className="flex items-center gap-2 font-display text-xl text-maroon">
              <CircleCheck className="size-5 text-emerald-600" /> Do's
            </p>
            <div className="mt-3">
              <InfoList items={vratham.dos} />
            </div>
          </Panel>
          <Panel>
            <p className="flex items-center gap-2 font-display text-xl text-maroon">
              <CircleX className="size-5 text-devotional" /> Don'ts
            </p>
            <div className="mt-3">
              <InfoList items={vratham.donts} />
            </div>
          </Panel>
        </div>
      </div>

      <Section title="Vratham Guidance" desc="Everything you need to observe the 41 days with confidence.">
        <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {vratham.sections.map((s) => (
            <li key={s.title}>
              <article className="h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-warm">
                <img src={s.image} alt={s.title} className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-display text-xl text-maroon">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.text}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
