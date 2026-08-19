import foodImg from "@/assets/food-guide.jpg";
import stayImg from "@/assets/accommodation.jpg";

const cards = [
  {
    img: foodImg,
    alt: "Traditional Kerala vegetarian meal served on a banana leaf",
    eyebrow: "Food",
    title: "Food Guidance Along the Yathra",
    items: [
      "Recommended foods",
      "Travel food",
      "Fasting guidance",
      "Hydration",
      "Traditional guidance",
    ],
    cta: "Explore Food Guide",
  },
  {
    img: stayImg,
    alt: "Traditional Kerala pilgrim accommodation lit warmly at dusk",
    eyebrow: "Stay",
    title: "Find a Place to Rest",
    items: ["Hotels", "Lodges", "Dormitories", "Rest areas"],
    cta: "Explore Accommodation",
  },
];

export function FoodAccommodation() {
  return (
    <section id="food" className="bg-cream px-5 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        {cards.map((c) => (
          <article
            key={c.title}
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-warm"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                width={1280}
                height={960}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <p className="eyebrow absolute left-6 top-6">{c.eyebrow}</p>
            </div>
            <div className="p-8">
              <h3 className="font-display text-3xl text-maroon">{c.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {c.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-full border border-border bg-cream px-3.5 py-1.5 text-xs font-medium text-maroon"
                  >
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground">
                Availability changes seasonally — details are confirmed inside the app.
              </p>
              <a
                href="/begin-yathra"
                className="mt-7 inline-flex rounded-full border border-saffron px-6 py-3 text-sm font-semibold text-saffron transition-all duration-300 hover:bg-saffron hover:text-primary-foreground"
              >
                {c.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
