import { Mic, Play } from "lucide-react";
import lampImg from "@/assets/lamp-glow.jpg";

const chips = [
  "Welcome Voice",
  "Read Current Page",
  "Step-by-Step Guide",
  "Voice Navigation",
  "Voice Notifications",
  "Video Summary",
  "Elderly Mode",
];

const bars = Array.from({ length: 28 }, (_, i) => i);

export function VoiceGuideSection() {
  return (
    <section id="voice" className="relative overflow-hidden bg-devotional px-5 py-24 lg:py-32">
      <img
        src={lampImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-maroon/90 via-maroon/70 to-saffron/50" />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="mx-auto grid size-20 place-items-center rounded-full border border-gold/50 bg-ink/40 text-gold animate-pulse-glow">
          <Mic className="size-8" aria-hidden="true" />
        </span>
        <p className="eyebrow mt-8">Voice Guidance</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-ivory sm:text-5xl">
          Guidance That Speaks With You
        </h2>
        <p className="mt-4 font-display text-2xl text-gold-warm">
          Your Yathra, guided step by step.
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ivory/75">
          Listen to important information, follow step-by-step guidance and navigate your
          pilgrimage with voice assistance.
        </p>

        <div
          aria-hidden="true"
          className="mx-auto mt-10 flex h-16 max-w-md items-center justify-center gap-1.5"
        >
          {bars.map((i) => (
            <span
              key={i}
              className="w-1.5 rounded-full bg-gold/80 animate-wave"
              style={{
                height: `${28 + ((i * 13) % 40)}px`,
                animationDelay: `${(i % 9) * 0.08}s`,
              }}
            />
          ))}
        </div>

        <button
          type="button"
          className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-maroon transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-warm hover:shadow-gold"
        >
          <Play className="size-4" aria-hidden="true" />
          Tap to Hear Guidance
        </button>

        <ul className="mt-10 flex flex-wrap justify-center gap-2.5">
          {chips.map((c) => (
            <li
              key={c}
              className="rounded-full border border-gold/35 bg-ink/25 px-4 py-2 text-xs font-medium tracking-wide text-ivory/85"
            >
              {c}
            </li>
          ))}
        </ul>

        <p className="mt-10 font-display text-xl text-gold-warm">
          தமிழ் &nbsp;•&nbsp; മലയാളം &nbsp;•&nbsp; English
        </p>
      </div>
    </section>
  );
}
