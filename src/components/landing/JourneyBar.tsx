import {
  Home,
  ClipboardList,
  Flame,
  Bus,
  Waves,
  Mountain,
  RotateCcw,
  HomeIcon,
} from "lucide-react";

const stages = [
  { label: "Home", icon: Home, desc: "Where every Yathra begins." },
  { label: "Preparation", icon: ClipboardList, desc: "Dates, profile and essentials." },
  { label: "Vratham", icon: Flame, desc: "Daily routine and guidance." },
  { label: "Travel", icon: Bus, desc: "Routes, transport and rest stops." },
  { label: "Pamba", icon: Waves, desc: "The sacred riverside halt." },
  { label: "Sannidhanam", icon: Mountain, desc: "Arrival at the sacred hill." },
  { label: "Return", icon: RotateCcw, desc: "Guided journey back." },
  { label: "Home", icon: HomeIcon, desc: "Safely back home." },
];

export function JourneyBar() {
  return (
    <section
      aria-label="Pilgrimage journey stages"
      className="relative z-10 -mt-14 px-4"
    >
      <div className="mx-auto max-w-6xl rounded-3xl border border-gold/25 bg-maroon/95 px-4 py-7 shadow-warm backdrop-blur-md sm:px-8">
        <div className="flex snap-x gap-2 overflow-x-auto pb-2 sm:gap-0 sm:overflow-visible">
          {stages.map((s, i) => (
            <div
              key={`${s.label}-${i}`}
              className="group relative flex min-w-[92px] flex-1 snap-start flex-col items-center text-center"
            >
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-5 hidden h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/50 to-gold/50 animate-draw-line sm:block"
                  style={{ animationDelay: `${i * 0.12}s` }}
                />
              )}
              <span
                className={`relative grid size-10 place-items-center rounded-full border transition-all duration-300 ${
                  i === 0
                    ? "border-gold bg-gold/20 text-gold animate-pulse-glow"
                    : "border-gold/35 bg-maroon text-gold/70 group-hover:border-gold group-hover:text-gold"
                }`}
              >
                <s.icon className="size-4" aria-hidden="true" />
              </span>
              <span className="mt-3 text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-ivory/80 group-hover:text-gold">
                {s.label}
              </span>
              <span className="pointer-events-none absolute -bottom-2 z-20 w-40 translate-y-full rounded-lg border border-gold/25 bg-ink px-3 py-2 text-[0.7rem] leading-snug text-ivory/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {s.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
