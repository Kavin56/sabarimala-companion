import { Users } from "lucide-react";

const features = [
  "Create Group",
  "Join Group",
  "Chat",
  "Share Journey",
  "Announcements",
  "Family Sharing",
];

const avatars = ["A", "S", "M", "R", "K", "V"];

export function CommunitySection() {
  return (
    <section className="relative overflow-hidden bg-devotional px-5 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-devotional via-saffron/70 to-maroon" />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full border border-gold/50 bg-ink/30 text-gold">
          <Users className="size-6" aria-hidden="true" />
        </span>
        <p className="eyebrow mt-6">Community</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-ivory sm:text-5xl">
          Walk the Yathra Together
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-ivory/80">
          Connect with fellow devotees, create groups, share your journey and stay connected
          with family.
        </p>

        <div className="relative mt-14 flex items-center justify-center">
          <span
            aria-hidden="true"
            className="absolute inset-x-4 top-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
          />
          <ul className="relative flex gap-3 sm:gap-6">
            {avatars.map((a, i) => (
              <li
                key={a}
                className="grid size-14 place-items-center rounded-full border border-gold/60 bg-ink/50 font-display text-xl text-gold backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1.5 sm:size-16"
                style={{ transform: `translateY(${i % 2 === 0 ? "-6px" : "6px"})` }}
              >
                {a}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-14 flex flex-wrap justify-center gap-2.5">
          {features.map((f) => (
            <li
              key={f}
              className="rounded-full border border-gold/35 bg-ink/25 px-4 py-2 text-xs font-medium tracking-wide text-ivory/85"
            >
              {f}
            </li>
          ))}
        </ul>

        <a
          href="/begin-yathra"
          className="mt-10 inline-flex rounded-full bg-gold px-8 py-4 text-sm font-semibold text-maroon transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-warm"
        >
          Explore Community
        </a>
      </div>
    </section>
  );
}
