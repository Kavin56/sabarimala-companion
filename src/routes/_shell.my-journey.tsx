import { createFileRoute } from "@tanstack/react-router";
import { History } from "lucide-react";
import {
  JourneyTimeline,
  LinkButton,
  PageHeader,
  Panel,
  ProgressBar,
  Section,
  StageBanner,
} from "@/components/app/kit";
import { img, journeyHistory, journeyStages } from "@/lib/mock";

export const Route = createFileRoute("/_shell/my-journey")({
  head: () => ({
    meta: [
      { title: "My Journey — Ayyappa Yathra" },
      { name: "description", content: "Track every stage of your pilgrimage from home to Sannidhanam and safely back home." },
      { property: "og:title", content: "My Journey — Ayyappa Yathra" },
      { property: "og:description", content: "Journey progress, stage timeline and your past Yathra history." },
    ],
  }),
  component: MyJourneyPage,
});

function MyJourneyPage() {
  return (
    <div>
      <PageHeader
        eyebrow="My Journey"
        title="From My Home to Sabarimala"
        subtitle="Every stage of this Yathra, tracked in one place — and safely back home again."
        image={img.pilgrims}
      >
        <LinkButton to="/journey-plan" variant="ghost" className="border-gold/60 text-gold">
          View Journey Plan
        </LinkButton>
      </PageHeader>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <Panel className="lg:col-span-2">
          <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-maroon/60">
            Journey Progress
          </p>
          <p className="font-display text-5xl text-maroon">60%</p>
          <ProgressBar value={60} className="mt-4" />
          <div className="mt-6">
            <JourneyTimeline stages={journeyStages} />
          </div>
        </Panel>

        <div className="space-y-5">
          <StageBanner stage="Travel" detail="Departing 15 Nov, 18:30" />
          <Panel>
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-maroon/60">
              This Yathra
            </p>
            <dl className="mt-3 space-y-3 text-sm">
              {[
                ["Route", "Chennai → Kottayam → Pamba → Sannidhanam"],
                ["Travel mode", "Bus + Trek"],
                ["Group", "Chennai Ayyappa Sangam (42)"],
                ["Guru Swami", "Venkatesan Swami"],
                ["Darshan date", "17 November 2026"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-border pb-2 last:border-0">
                  <dt className="text-foreground/55">{k}</dt>
                  <dd className="text-right font-medium text-maroon">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex flex-wrap gap-3">
              <LinkButton to="/live-journey" className="px-5 py-2.5 text-xs">
                Live Journey
              </LinkButton>
              <LinkButton to="/route" variant="ghost" className="px-5 py-2.5 text-xs">
                View Route
              </LinkButton>
            </div>
          </Panel>
        </div>
      </div>

      <Section
        title="Journey History"
        desc="Your completed Yathras, preserved as a record of devotion."
        action={
          <LinkButton to="/favorites" variant="ghost" className="px-5 py-2.5 text-xs">
            Saved Memories
          </LinkButton>
        }
      >
        <ul className="grid gap-4 md:grid-cols-3">
          {journeyHistory.map((h) => (
            <li key={h.year}>
              <Panel className="h-full">
                <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-saffron">
                  <History className="size-4" /> {h.year}
                </p>
                <p className="mt-3 font-display text-xl text-maroon">{h.title}</p>
                <p className="mt-2 text-sm text-foreground/65">{h.route}</p>
                <p className="mt-3 text-xs text-foreground/50">
                  {h.days} · {h.note}
                </p>
              </Panel>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
