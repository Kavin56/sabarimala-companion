import { useEffect, useState } from "react";
import { Flame, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Yathra", href: "#journey" },
  { label: "Vratham", href: "#vratham" },
  { label: "Temples", href: "#temples" },
  { label: "Travel", href: "#travel" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-maroon/85 backdrop-blur-md border-b border-gold/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-3 group">
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/50 bg-maroon/60 text-gold transition-transform duration-300 group-hover:scale-105">
            <Flame className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-base leading-tight text-ivory sm:text-lg">
            Sri Sri Shabharish Guruji
            <span className="block text-xs tracking-[0.28em] uppercase text-gold/90">
              Ayyappa Yathra
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-ivory/80 transition-colors hover:text-gold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="rounded-full bg-devotional px-4 py-2.5 text-xs font-semibold tracking-wide text-ivory shadow-warm transition-all duration-300 hover:bg-saffron hover:shadow-gold sm:px-6 sm:text-sm"
          >
            Begin Your Yathra
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-gold/40 text-ivory lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mt-3 border-t border-gold/20 bg-maroon/95 px-5 py-4 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ivory/90 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
