import { Flame } from "lucide-react";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Yathra", href: "#journey" },
  { label: "Vratham", href: "#vratham" },
  { label: "Temples", href: "#temples" },
  { label: "Travel", href: "#travel" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#about" },
];

const legal = ["Privacy Policy", "Terms & Conditions", "Safety Information"];

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-16 text-ivory/70">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full border border-gold/50 text-gold">
                <Flame className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg leading-tight text-ivory">
                Sri Sri Shabharish Guruji
                <span className="block text-[0.65rem] tracking-[0.26em] uppercase text-gold/85">
                  Ayyappa Yathra
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              From My Home to Sabarimala and Safely Back Home. A complete digital companion for
              your sacred Ayyappa pilgrimage.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-[0.68rem] font-semibold tracking-[0.24em] uppercase text-gold">
              Explore
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="transition-colors hover:text-gold">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.68rem] font-semibold tracking-[0.24em] uppercase text-gold">
              Information
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {legal.map((l) => (
                <li key={l}>
                  <a href="/begin-yathra" className="transition-colors hover:text-gold">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ivory/60">தமிழ் | മലയാളം | English</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-gold/15 pt-8 text-center">
          <p className="font-display text-xl text-gold-warm">Swamiye Saranam Ayyappa</p>
          <p className="text-xs text-ivory/45">
            © {new Date().getFullYear()} Sri Sri Shabharish Guruji Ayyappa Yathra. Temple
            timings, weather, travel and availability information shown in the app are
            indicative and should be confirmed with official sources.
          </p>
        </div>
      </div>
    </footer>
  );
}
