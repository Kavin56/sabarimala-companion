import { ArrowRight } from "lucide-react";
import sabarimala from "@/assets/temple-sabarimala.jpg";
import pamba from "@/assets/temple-pamba.jpg";
import sannidhanam from "@/assets/temple-sannidhanam.jpg";
import nearby from "@/assets/temple-nearby.jpg";

const places = [
  {
    title: "Sabarimala",
    text: "The sacred hill shrine at the heart of the Yathra.",
    img: sabarimala,
    alt: "Temple courtyard with lamps and pilgrims in warm evening light",
  },
  {
    title: "Pamba",
    text: "The riverside halt where the pilgrimage gathers.",
    img: pamba,
    alt: "Pilgrims at the Pamba riverbank surrounded by Kerala forest",
  },
  {
    title: "Sannidhanam",
    text: "Arrival, darshan and the sacred surroundings.",
    img: sannidhanam,
    alt: "Rows of oil lamps glowing at a temple courtyard at night",
  },
  {
    title: "Nearby Temples",
    text: "Sacred places along the way with distance and directions.",
    img: nearby,
    alt: "Traditional Kerala temple beside a pond with lush greenery",
  },
];

export function TempleSection() {
  return (
    <section id="temples" className="bg-maroon px-5 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Temples</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ivory sm:text-5xl">
            Discover the Sacred Places
          </h2>
          <p className="mt-5 text-lg text-ivory/70">
            Temple information, surroundings and guidance for each stage of the pilgrimage.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {places.map((p) => (
            <a
              key={p.title}
              href="/begin-yathra"
              className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-3xl border border-gold/20 transition-all duration-500 hover:border-gold/60"
            >
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
              <div className="relative p-6">
                <h3 className="font-display text-2xl text-gold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/75">{p.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-ivory/70 group-hover:text-gold">
                  Explore
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
