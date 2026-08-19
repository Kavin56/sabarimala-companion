import {
  Home,
  ClipboardList,
  Flame,
  Backpack,
  Bus,
  Waves,
  Footprints,
  Mountain,
  RotateCcw,
  HeartHandshake,
} from "lucide-react";

const stages = [
  { n: "01", label: "Home", icon: Home, text: "Set your intention and dates." },
  { n: "02", label: "Preparation", icon: ClipboardList, text: "Profile, checklist, essentials." },
  { n: "03", label: "Vratham", icon: Flame, text: "Daily routine and prayer guidance." },
  { n: "04", label: "Packing", icon: Backpack, text: "Irumudi and travel essentials." },
  { n: "05", label: "Travel", icon: Bus, text: "Routes, transport and rest stops." },
  { n: "06", label: "Pamba", icon: Waves, text: "The sacred riverside halt." },
  { n: "07", label: "Route", icon: Footprints, text: "Checkpoints along the climb." },
  { n: "08", label: "Sannidhanam", icon: Mountain, text: "Arrival at the sacred hill." },
  { n: "09", label: "Return", icon: RotateCcw, text: "Guided journey homeward." },
  { n: "10", label: "Home", icon: HeartHandshake, text: "Safely back home." },
];

export function JourneyStory() {
  return (
    <section id="journey" className="bg-cream px-5 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow text-saffron">The Yathra</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-maroon sm:text-5xl">
            Every Step Has a Purpose
          </h2>
          <p className="mt-5 text-lg text-foreground/70">
            From my home to Sabarimala and safely back home — ten connected stages of one
            sacred journey.
          </p>
        </div>

        <div className="relative mt-14 overflow-x-auto pb-4">
          <div className="relative flex min-w-[900px] gap-4">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-gold/20 via-gold to-gold/20 animate-draw-line"
            />
            {stages.map((s) => (
              <article
                key={s.n}
                className="group relative flex-1 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-ivory"
              >
                <span className="relative grid size-14 place-items-center rounded-full border border-gold/50 bg-ivory text-saffron transition-colors duration-300 group-hover:bg-devotional group-hover:text-ivory">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-4 text-[0.65rem] font-semibold tracking-[0.2em] text-gold">
                  {s.n}
                </p>
                <h3 className="mt-1 font-display text-lg text-maroon">{s.label}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-foreground/65">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
