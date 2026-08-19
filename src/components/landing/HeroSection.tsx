import { ChevronDown, Mic } from "lucide-react";
import heroImage from "@/assets/hero-sabarimala.jpg";

const particles = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7 + 5) % 96}%`,
  delay: `${(i * 1.4) % 12}s`,
  duration: `${12 + (i % 5) * 3}s`,
  size: 3 + (i % 3),
}));

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Pilgrims walking a forest path toward Sabarimala at golden sunrise"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-maroon/55 to-ink/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-ink)_65%,transparent),transparent_70%)]" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-gold/70 animate-float-up blur-[1px]"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-4xl px-6 pt-28 pb-24 text-center">
        <p className="eyebrow animate-rise">Swamiye Saranam Ayyappa</p>
        <h1
          className="mt-6 font-display text-[2.6rem] leading-[1.05] text-ivory animate-rise sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.1s" }}
        >
          Sri Sri Shabharish Guruji
          <span className="block text-gradient-gold">Ayyappa Yathra</span>
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl font-display text-xl text-ivory/90 animate-rise sm:text-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          Your Complete Digital Companion for the Sacred Sabarimala Pilgrimage
        </p>
        <p
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ivory/70 animate-rise"
          style={{ animationDelay: "0.3s" }}
        >
          Prepare your Vratham. Plan your journey. Discover sacred places. Stay guided at
          every step — from home to Sannidhanam and safely back home.
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 animate-rise sm:flex-row"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="/begin-yathra"
            className="w-full rounded-full bg-devotional px-8 py-4 text-sm font-semibold tracking-wide text-ivory shadow-warm transition-all duration-300 hover:-translate-y-0.5 hover:bg-saffron hover:shadow-gold sm:w-auto"
          >
            Begin Your Yathra
          </a>
          <a
            href="#journey"
            className="w-full rounded-full border border-gold/60 px-8 py-4 text-sm font-semibold tracking-wide text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/10 sm:w-auto"
          >
            Explore the Journey
          </a>
        </div>

        <div
          className="mt-10 flex flex-col items-center gap-2 animate-rise"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="flex items-center gap-2 text-sm font-medium text-gold">
            <span className="grid size-8 place-items-center rounded-full border border-gold/40 animate-pulse-glow">
              <Mic className="size-4" aria-hidden="true" />
            </span>
            Voice Guided
          </span>
          <span className="text-xs tracking-[0.22em] uppercase text-ivory/60">
            Tamil • Malayalam • English
          </span>
        </div>
      </div>

      <a
        href="#intro"
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/80"
      >
        <ChevronDown className="size-7 animate-scroll-hint" aria-hidden="true" />
      </a>
    </section>
  );
}
