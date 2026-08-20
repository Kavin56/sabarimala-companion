const languages = [
  { native: "தமிழ்", name: "Tamil" },
  { native: "മലയാളം", name: "Malayalam" },
  { native: "English", name: "English" },
];

export function LanguageSection() {
  return (
    <section className="bg-ivory px-5 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <p className="eyebrow text-saffron">Languages</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-maroon sm:text-5xl">
          Guidance in Your Language
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-foreground/70">
          Choose the language that makes your Yathra easier to follow.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {languages.map((l) => (
            <article
              key={l.name}
              className="group rounded-3xl border border-border bg-card p-10 shadow-warm transition-all duration-500 hover:-translate-y-1 hover:border-gold"
            >
              <p className="font-display text-4xl text-maroon group-hover:text-saffron">
                {l.native}
              </p>
              <p className="mt-3 text-xs font-semibold tracking-[0.24em] uppercase text-muted-foreground">
                {l.name}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-5 max-w-xs rounded-2xl border border-dashed border-border bg-cream/70 px-6 py-5">
          <p className="font-display text-2xl text-maroon/70">हिन्दी</p>
          <p className="mt-1 text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            Hindi — Coming Soon
          </p>
        </div>
      </div>
    </section>
  );
}
