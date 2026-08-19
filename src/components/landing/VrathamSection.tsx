import { Check } from "lucide-react";
import vrathamImg from "@/assets/vratham.jpg";

const daily = ["Morning", "Afternoon", "Evening", "Night"];

export function VrathamSection() {
  return (
    <section id="vratham" className="bg-ivory px-5 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-3xl shadow-warm">
          <img
            src={vrathamImg}
            alt="Devotee seated in prayer beside a brass lamp and pilgrimage items at sunrise"
            loading="lazy"
            width={1200}
            height={1200}
            className="aspect-square size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon/45 to-transparent" />
        </div>

        <div>
          <p className="eyebrow text-saffron">Vratham</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-maroon sm:text-5xl">
            Begin Your Vratham
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            Follow your daily routine and keep track of your progress throughout the sacred
            preparation period.
          </p>

          <div className="mt-9 rounded-3xl border border-border bg-card p-7 shadow-warm">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
                  Vratham Day
                </p>
                <p className="mt-1 font-display text-5xl text-maroon">
                  10 <span className="text-2xl text-muted-foreground">/ 41</span>
                </p>
              </div>
              <p className="text-sm font-medium text-saffron">31 Days Remaining</p>
            </div>

            <div
              className="mt-6 h-2.5 w-full overflow-hidden rounded-full bg-cream"
              role="img"
              aria-label="Vratham progress: day 10 of 41"
            >
              <div
                className="h-full rounded-full bg-devotional"
                style={{ width: "24%" }}
              />
            </div>

            <ul className="mt-7 grid grid-cols-2 gap-3">
              {daily.map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-cream/60 px-4 py-3 text-sm font-medium text-maroon"
                >
                  <span className="grid size-5 place-items-center rounded-full bg-saffron text-primary-foreground">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted-foreground">
              Visual preview only. Traditional guidance is presented separately from health,
              travel and safety information.
            </p>
          </div>

          <a
            href="/begin-yathra"
            className="mt-8 inline-flex rounded-full bg-devotional px-7 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-saffron"
          >
            Explore Vratham Guide
          </a>
        </div>
      </div>
    </section>
  );
}
