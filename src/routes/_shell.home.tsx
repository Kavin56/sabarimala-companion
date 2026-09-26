import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Flame,
  Backpack,
  Bus,
  TrainFront,
  Package,
  Landmark,
  Utensils,
  BedDouble,
  Video,
  Route as RouteIcon,
  LifeBuoy,
  Compass,
  CloudSun,
  CalendarClock,
  Bell,
} from "lucide-react";
import {
  JourneyTimeline,
  Panel,
  ProgressBar,
  Section,
  PageHeader,
  LinkButton,
} from "@/components/app/kit";
import { journeyStages, notifications, user, vratham, weather, img } from "@/lib/mock";

export const Route = createFileRoute("/_shell/home")({
  head: () => ({
    meta: [
      { title: "Home Dashboard — Ayyappa Yathra" },
      {
        name: "description",
        content:
          "Your Yathra dashboard: pilgrimage countdown, Vratham progress, travel plans, weather and journey timeline.",
      },
      { property: "og:title", content: "Home Dashboard — Ayyappa Yathra" },
      {
        property: "og:description",
        content: "Track your Vratham, travel and journey progress from home to Sannidhanam.",
      },
    ],
  }),
  component: HomePage,
});

const quickActions = [
  { label: "Vratham", to: "/vratham", icon: Flame },
  { label: "Packing", to: "/packing", icon: Backpack },
  { label: "Travel", to: "/travel", icon: Compass },
  { label: "Bus", to: "/travel/bus", icon: Bus },
  { label: "Train", to: "/travel/train", icon: TrainFront },
  { label: "Packages", to: "/packages", icon: Package },
  { label: "Temples", to: "/temples", icon: Landmark },
  { label: "Food", to: "/food", icon: Utensils },
  { label: "Stay", to: "/accommodation", icon: BedDouble },
  { label: "Videos", to: "/videos", icon: Video },
  { label: "My Journey", to: "/my-journey", icon: RouteIcon },
  { label: "Emergency", to: "/emergency", icon: LifeBuoy },
];

function HomePage() {
  const doneStages = journeyStages.filter((s) => s.status === "done").length;
  const progress = Math.round((doneStages / journeyStages.length) * 100) + 20;

  return (
    <div>
      <PageHeader
        eyebrow="Swamiye Saranam Ayyappa"
        title={`Welcome back, ${user.firstName}`}
        subtitle="From my home to Sabarimala and safely back home. Here is where your Yathra stands today."
        image={img.hero}
      >
        <LinkButton to="/my-journey" variant="ghost" className="border-gold/60 text-gold">
          View My Journey
        </LinkButton>
      </PageHeader>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <Panel className="relative overflow-hidden bg-devotional text-ivory lg:col-span-1">
          <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-gold">
            Pilgrimage Countdown
          </p>
          <p className="mt-4 font-display text-6xl leading-none text-gold">{user.daysToYathra}</p>
          <p className="mt-2 font-display text-2xl">Days Until Your Yathra</p>
          <p className="mt-4 flex items-center gap-2 text-sm text-ivory/80">
            <CalendarClock className="size-4 text-gold" /> {user.yathraDate}
          </p>
          <p className="mt-1 text-xs text-ivory/60">Selected darshan window: Mandala season</p>
        </Panel>

        <Panel className="lg:col-span-2">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-maroon/60">
                Journey Progress
              </p>
              <p className="font-display text-4xl text-maroon">{progress}%</p>
            </div>
            <LinkButton to="/live-journey" variant="ghost" className="px-4 py-2 text-xs">
              Live Status
            </LinkButton>
          </div>
          <ProgressBar value={progress} className="mt-4" />
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {journeyStages.slice(0, 8).map((s) => (
              <li
                key={s.key}
                className="flex items-center justify-between rounded-xl border border-border bg-cream/60 px-3 py-2 text-sm"
              >
                <span className="font-medium text-maroon">{s.label}</span>
                <span
                  className={
                    s.status === "done"
                      ? "text-xs font-semibold text-emerald-700"
                      : s.status === "current"
                        ? "text-xs font-semibold text-saffron"
                        : "text-xs text-foreground/45"
                  }
                >
                  {s.status === "done" ? "Completed" : s.status === "current" ? "Current" : "Upcoming"}
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        <Panel className="lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-maroon/60">
                Vratham
              </p>
              <p className="font-display text-3xl text-maroon">
                Day {vratham.day} / {vratham.total}
              </p>
              <p className="text-sm text-saffron">{vratham.remaining} days remaining</p>
            </div>
            <img
              src={img.vratham}
              alt="Oil lamp lit for daily Vratham prayer"
              className="size-20 rounded-2xl object-cover"
            />
          </div>
          <ProgressBar value={(vratham.day / vratham.total) * 100} className="mt-4" />
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {vratham.routine.map((r) => (
              <li
                key={r.key}
                className="flex items-center justify-between rounded-xl border border-border px-3 py-2.5 text-sm"
              >
                <span className="font-medium text-maroon">
                  {r.label}
                  <span className="ml-2 text-xs text-foreground/45">{r.time}</span>
                </span>
                <span className={r.done ? "text-emerald-600" : "text-foreground/35"}>
                  {r.done ? "✓" : "○"}
                </span>
              </li>
            ))}
          </ul>
          <LinkButton to="/vratham" className="mt-5">
            Continue Vratham
          </LinkButton>
        </Panel>

        <div className="space-y-5">
          <Panel>
            <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.24em] uppercase text-maroon/60">
              <CloudSun className="size-4 text-saffron" /> Weather
            </p>
            {weather.slice(2).map((w) => (
              <div key={w.place} className="mt-3">
                <p className="font-display text-2xl text-maroon">{w.place}</p>
                <p className="font-display text-4xl text-saffron">{w.temp}°C</p>
                <p className="text-sm text-foreground/70">{w.condition}</p>
                <p className="mt-1 text-xs text-foreground/55">
                  Rain probability {w.rain}% · Humidity {w.humidity}%
                </p>
              </div>
            ))}
            <LinkButton to="/weather" variant="ghost" className="mt-4 px-4 py-2 text-xs">
              All Locations
            </LinkButton>
          </Panel>

          <Panel>
            <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.24em] uppercase text-maroon/60">
              <Bell className="size-4 text-saffron" /> Upcoming Reminders
            </p>
            <ul className="mt-3 space-y-3">
              {notifications.slice(0, 3).map((n) => (
                <li key={n.id} className="border-b border-border pb-3 last:border-0 last:pb-0">
                  <p className="text-sm font-semibold text-maroon">{n.title}</p>
                  <p className="text-xs text-foreground/60">{n.body}</p>
                  <p className="mt-1 text-[11px] text-foreground/40">{n.time}</p>
                </li>
              ))}
            </ul>
            <LinkButton to="/notifications" variant="ghost" className="mt-4 px-4 py-2 text-xs">
              All Notifications
            </LinkButton>
          </Panel>
        </div>
      </div>

      <Section title="Quick Actions" desc="Jump straight to the part of your Yathra you need now.">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {quickActions.map((a) => (
            <li key={a.label}>
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={a.to as any}
                className="flex h-full flex-col items-start gap-3 rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-saffron hover:shadow-warm"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-cream text-saffron">
                  <a.icon className="size-5" />
                </span>
                <span className="text-sm font-semibold text-maroon">{a.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Your Journey Timeline" desc="Home → Preparation → Vratham → Packing → Travel → Pamba → Route → Sannidhanam → Return → Home">
        <Panel>
          <JourneyTimeline stages={journeyStages} compact />
        </Panel>
      </Section>
    </div>
  );
}
