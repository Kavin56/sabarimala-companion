import prepareImg from "@/assets/prepare-home.jpg";
import pilgrimsImg from "@/assets/pilgrims-route.jpg";
import returnImg from "@/assets/return-home.jpg";

const cards = [
  {
    img: prepareImg,
    alt: "Devotee arranging traditional pilgrimage items at home in warm morning light",
    step: "01",
    title: "Prepare with purpose",
    text: "Plan your dates, profile, Vratham and essentials before beginning your journey.",
  },
  {
    img: pilgrimsImg,
    alt: "Pilgrims walking a green forest path in Kerala toward Sabarimala",
    step: "02",
    title: "Experience the Yathra",
    text: "Receive guidance through travel, Pamba, pilgrimage checkpoints and sacred places.",
  },
  {
    img: returnImg,
    alt: "A pilgrim walking home along a Kerala country road at dusk",
    step: "03",
    title: "Return safely",
    text: "Keep your journey organized from Sannidhanam all the way back home.",
  },
];

export function IntroSection() {
  return (
    <section id="intro" className="bg-ivory px-5 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="eyebrow text-saffron">One Companion</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-maroon sm:text-5xl">
            One Yathra. One Complete Companion.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/75">
            Sri Sri Shabharish Guruji Ayyappa Yathra brings preparation, Vratham guidance,
            travel planning, temple information, food guidance, accommodation, videos,
            safety and community into one connected pilgrimage experience.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-warm transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-gold/60 bg-ink/50 px-3 py-1 text-xs font-semibold tracking-widest text-gold">
                  {c.step}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-maroon">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
