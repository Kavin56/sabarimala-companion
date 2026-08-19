import {
  ArrowUpRight,
  Flame,
  Map,
  Landmark,
  Compass,
  Utensils,
  BedDouble,
  PlayCircle,
  LifeBuoy,
} from "lucide-react";
import vrathamImg from "@/assets/vratham.jpg";
import travelImg from "@/assets/travel-road.jpg";
import templeImg from "@/assets/temple-sabarimala.jpg";
import foodImg from "@/assets/food-guide.jpg";
import stayImg from "@/assets/accommodation.jpg";
import lampImg from "@/assets/lamp-glow.jpg";

type Feature = {
  title: string;
  text: string;
  icon: typeof Flame;
  img?: string;
  alt?: string;
  span?: string;
  href: string;
};

const features: Feature[] = [
  {
    title: "Vratham Guide",
    text: "Preparation, daily routine, Do's & Don'ts, prayer guidance and progress tracking.",
    icon: Flame,
    img: vrathamImg,
    alt: "Traditional brass lamp and prayer beads in a Kerala home at sunrise",
    span: "lg:col-span-2 lg:row-span-2",
    href: "#vratham",
  },
  {
    title: "Pilgrimage Planner",
    text: "Plan routes, transportation, checkpoints and journey timeline.",
    icon: Map,
    img: travelImg,
    alt: "Vehicles travelling a misty Kerala mountain road toward a hill temple",
    span: "lg:col-span-2",
    href: "#travel",
  },
  {
    title: "Temple Guide",
    text: "Explore Sabarimala, Pamba, Sannidhanam and important places.",
    icon: Landmark,
    img: templeImg,
    alt: "Temple courtyard with lamps and pilgrims at golden hour",
    href: "#temples",
  },
  {
    title: "Nearby Temples",
    text: "Discover nearby temples with distance, directions and timings.",
    icon: Compass,
    href: "#temples",
  },
  {
    title: "Food Guide",
    text: "Recommended foods, travel food and traditional guidance.",
    icon: Utensils,
    img: foodImg,
    alt: "Kerala vegetarian meal served on a banana leaf",
    href: "#food",
  },
  {
    title: "Accommodation",
    text: "Hotels, lodges, dormitories and rest areas.",
    icon: BedDouble,
    img: stayImg,
    alt: "Pilgrim accommodation with traditional Kerala architecture at dusk",
    href: "#food",
  },
  {
    title: "Video Hub",
    text: "Vratham, travel, temple, devotional and safety videos.",
    icon: PlayCircle,
    img: lampImg,
    alt: "Glowing brass temple lamp in a devotional setting",
    span: "lg:col-span-2",
    href: "#app",
  },
  {
    title: "Emergency",
    text: "Emergency contacts, hospitals, police, fire and SOS/help.",
    icon: LifeBuoy,
    span: "lg:col-span-2",
    href: "#safety",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="bg-cream px-5 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow text-saffron">Core Features</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-maroon sm:text-5xl">
            Everything You Need for Your Yathra
          </h2>
          <p className="mt-5 text-lg text-foreground/70">
            Guidance, planning and support for every stage of the pilgrimage.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(200px,auto)] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <a
              key={f.title}
              href={f.href}
              className={`group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-warm ${f.span ?? ""}`}
            >
              {f.img && (
                <>
                  <img
                    src={f.img}
                    alt={f.alt ?? ""}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/20" />
                </>
              )}
              <div className="relative">
                <span
                  className={`grid size-11 place-items-center rounded-full border ${
                    f.img
                      ? "border-gold/50 bg-ink/40 text-gold"
                      : "border-saffron/30 bg-saffron/10 text-saffron"
                  }`}
                >
                  <f.icon className="size-5" aria-hidden="true" />
                </span>
                <h3
                  className={`mt-5 font-display text-2xl ${f.img ? "text-ivory" : "text-maroon"}`}
                >
                  {f.title}
                </h3>
                <p
                  className={`mt-2 max-w-md text-sm leading-relaxed ${
                    f.img ? "text-ivory/75" : "text-foreground/65"
                  }`}
                >
                  {f.text}
                </p>
                <span
                  className={`mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase ${
                    f.img ? "text-gold" : "text-saffron"
                  }`}
                >
                  Explore
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
