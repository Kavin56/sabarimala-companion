import {
  Phone,
  Hospital,
  Shield,
  Flame,
  MapPin,
  LifeBuoy,
  Users,
} from "lucide-react";

const features = [
  { label: "Emergency Contacts", icon: Phone },
  { label: "Hospitals", icon: Hospital },
  { label: "Police", icon: Shield },
  { label: "Fire Services", icon: Flame },
  { label: "Nearby Facilities", icon: MapPin },
  { label: "SOS / Help", icon: LifeBuoy },
];

export function SafetySection() {
  return (
    <section
      id="safety"
      className="bg-ivory bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--color-devotional)_14%,transparent),transparent_65%)] px-5 py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-saffron">Support</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-maroon sm:text-5xl">
            Support When You Need It
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            Quick access to important contacts and nearby facilities, kept clearly separate
            from traditional and devotional guidance.
          </p>

          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-4 text-sm font-medium text-maroon"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-devotional/10 text-devotional">
                  <f.icon className="size-4" aria-hidden="true" />
                </span>
                {f.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="relative grid size-56 place-items-center rounded-full border border-devotional/30 bg-card shadow-warm">
            <span className="absolute inset-6 rounded-full border border-devotional/20 animate-pulse-glow" />
            <div className="text-center">
              <p className="font-display text-5xl text-devotional">SOS</p>
              <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.24em] uppercase text-muted-foreground">
                Hold for help
              </p>
            </div>
          </div>

          <div className="w-full rounded-3xl border border-border bg-card p-7 shadow-warm">
            <span className="grid size-10 place-items-center rounded-full bg-saffron/10 text-saffron">
              <Users className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-2xl text-maroon">Family Safety Sharing</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Optionally share your journey status with trusted family members.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Location sharing always requires your explicit permission and can be turned off
              at any time. Emergency and medical information should always be verified with
              official services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
