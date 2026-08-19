import { Home, Waves, Mountain } from "lucide-react";
import travelImg from "@/assets/travel-road.jpg";

const items = [
  "Route Options",
  "Car / Bus / Train",
  "Checkpoints",
  "Map Navigation",
  "Rest Areas",
  "Food Stops",
  "Accommodation",
];

export function TravelSection() {
  return (
    <section id="travel" className="bg-ivory px-5 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-3xl shadow-warm">
          <img
            src={travelImg}
            alt="Aerial view of vehicles travelling a misty mountain road toward a hill temple"
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-[4/3] size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
          <ol className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-2 rounded-2xl border border-gold/30 bg-ink/70 px-5 py-4 backdrop-blur-sm">
            {[
              { label: "Home", icon: Home },
              { label: "Pamba", icon: Waves },
              { label: "Sannidhanam", icon: Mountain },
            ].map((p, i) => (
              <li key={p.label} className="flex flex-1 items-center gap-2">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">
                  <p.icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold tracking-widest uppercase text-ivory/85">
                  {p.label}
                </span>
                {i < 2 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-px flex-1 bg-gold/50 sm:block"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <p className="eyebrow text-saffron">Travel</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-maroon sm:text-5xl">
            Plan the Journey Before You Begin
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            Explore routes, transportation options, checkpoints, rest areas and important
            journey information.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {items.map((i) => (
              <li
                key={i}
                className="rounded-full border border-border bg-cream px-4 py-2 text-sm font-medium text-maroon"
              >
                {i}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            Travel availability and timings change frequently — always confirm with official
            sources before departure.
          </p>
          <a
            href="/begin-yathra"
            className="mt-8 inline-flex rounded-full bg-devotional px-7 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-saffron"
          >
            Plan Your Yathra
          </a>
        </div>
      </div>
    </section>
  );
}
