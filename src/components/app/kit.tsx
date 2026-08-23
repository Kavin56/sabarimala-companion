import { Link } from "@tanstack/react-router";
import {
  Heart,
  Star,
  Volume2,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  MapPin,
  Check,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useAppState } from "./state";

/* ---------------- Page header ---------------- */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <header
      className={cn(
        "relative overflow-hidden rounded-3xl border border-gold/20 px-6 py-8 sm:px-10 sm:py-12",
        image ? "text-ivory" : "bg-devotional text-ivory",
      )}
    >
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon/95 via-maroon/80 to-maroon/40" />
        </>
      )}
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-gold">{eyebrow}</p>
          )}
          <h1 className="mt-3 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
          {subtitle && <p className="mt-3 text-sm leading-relaxed text-ivory/80 sm:text-base">{subtitle}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <ListenButton />
          {children}
        </div>
      </div>
    </header>
  );
}

/* ---------------- Listen to this page ---------------- */
export function ListenButton() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const { language } = useAppState();

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-gold/50 bg-ink/20 px-4 py-2.5 text-xs font-semibold text-gold backdrop-blur transition hover:bg-gold/15 sm:text-sm"
      >
        <Volume2 className="size-4" /> Listen to this page
      </button>
      {open && (
        <div className="absolute right-0 top-full z-30 mt-3 w-72 rounded-2xl border border-border bg-card p-4 text-left shadow-warm">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-maroon">Voice Player</p>
          <p className="mt-2 text-sm text-foreground/70">
            Reading this page aloud in {language}. Mock playback for the prototype.
          </p>
          <div className="mt-3 flex h-8 items-end gap-1">
            {Array.from({ length: 22 }).map((_, i) => (
              <span
                key={i}
                className={cn("w-1.5 rounded-full bg-saffron/70", playing && "animate-pulse")}
                style={{ height: `${20 + ((i * 37) % 80)}%` }}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="flex items-center gap-1.5 rounded-full bg-saffron px-3 py-2 text-xs font-semibold text-white"
            >
              {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
              {playing ? "Pause" : "Play"}
            </button>
            <button
              type="button"
              onClick={() => setPlaying(false)}
              className="flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-semibold text-maroon"
            >
              <RotateCcw className="size-3.5" /> Replay
            </button>
          </div>
          <div className="mt-4 space-y-2 text-xs text-foreground/60">
            <label className="block">
              Speed
              <input type="range" min={0.5} max={2} step={0.25} defaultValue={1} className="mt-1 w-full accent-saffron" />
            </label>
            <label className="block">
              Volume
              <input type="range" min={0} max={100} defaultValue={70} className="mt-1 w-full accent-saffron" />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Section ---------------- */
export function Section({
  title,
  desc,
  action,
  children,
  className,
}: {
  title: string;
  desc?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mt-8", className)}>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl text-maroon sm:text-3xl">{title}</h2>
          {desc && <p className="mt-1 text-sm text-foreground/65">{desc}</p>}
        </div>
        {action}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

/* ---------------- Card shell ---------------- */
export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-border bg-card p-5 shadow-sm", className)}>{children}</div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    done: "bg-emerald-100 text-emerald-800 border-emerald-200",
    Completed: "bg-emerald-100 text-emerald-800 border-emerald-200",
    AVAILABLE: "bg-emerald-100 text-emerald-800 border-emerald-200",
    current: "bg-saffron/15 text-saffron border-saffron/30",
    "In Progress": "bg-saffron/15 text-saffron border-saffron/30",
    Upcoming: "bg-gold/20 text-maroon border-gold/40",
    RAC: "bg-gold/20 text-maroon border-gold/40",
    upcoming: "bg-cream text-maroon/70 border-border",
    Pending: "bg-cream text-maroon/70 border-border",
    WL: "bg-devotional/10 text-devotional border-devotional/30",
    Cancelled: "bg-devotional/10 text-devotional border-devotional/30",
  };
  const key = Object.keys(map).find((k) => status.startsWith(k)) ?? "upcoming";
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase",
        map[key],
      )}
    >
      {status}
    </span>
  );
}

export function FavoriteButton({ id, className }: { id: string; className?: string }) {
  const { favorites, toggleFavorite } = useAppState();
  const active = favorites.includes(id);
  return (
    <button
      type="button"
      aria-label={active ? "Remove from favorites" : "Save to favorites"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(id);
      }}
      className={cn(
        "grid size-9 place-items-center rounded-full border border-border bg-card/90 text-maroon backdrop-blur transition hover:border-saffron",
        active && "border-devotional text-devotional",
        className,
      )}
    >
      <Heart className={cn("size-4", active && "fill-devotional")} />
    </button>
  );
}

export function Rating({ value, reviews }: { value: number; reviews?: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-maroon">
      <Star className="size-3.5 fill-gold text-gold" /> {value.toFixed(1)}
      {reviews != null && <span className="font-normal text-foreground/50">({reviews})</span>}
    </span>
  );
}

export function ProgressBar({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn("h-2.5 w-full overflow-hidden rounded-full bg-cream", className)}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-saffron to-gold transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export function Tabs({
  tabs,
  active,
  onChange,
}: {
  tabs: string[];
  active: string;
  onChange: (t: string) => void;
}) {
  return (
    <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
      {tabs.map((t) => (
        <button
          key={t}
          type="button"
          onClick={() => onChange(t)}
          className={cn(
            "shrink-0 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide uppercase transition sm:text-sm sm:normal-case",
            active === t
              ? "border-transparent bg-devotional text-ivory shadow-warm"
              : "border-border bg-card text-maroon hover:border-saffron",
          )}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

export function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-maroon/70">{label}</span>
      <span className="mt-1.5 block">{children}</span>
    </label>
  );
}

export const inputClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/20";

export function PrimaryButton({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-6 py-3 text-sm font-semibold text-white shadow-warm transition hover:-translate-y-0.5 hover:bg-devotional",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-maroon/25 px-6 py-3 text-sm font-semibold text-maroon transition hover:border-saffron hover:text-saffron",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  to,
  params,
  children,
  variant = "primary",
  className,
}: {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      params={params as any}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition",
        variant === "primary"
          ? "bg-saffron text-white shadow-warm hover:-translate-y-0.5 hover:bg-devotional"
          : "border border-maroon/25 text-maroon hover:border-saffron hover:text-saffron",
        className,
      )}
    >
      {children}
    </Link>
  );
}

/* ---------------- Journey timeline ---------------- */
export function JourneyTimeline({
  stages,
  compact,
}: {
  stages: readonly { key: string; label: string; status: string; note?: string }[];
  compact?: boolean;
}) {
  return (
    <ol className="relative space-y-0">
      {stages.map((s, i) => (
        <li key={s.key + i} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span
              className={cn(
                "grid size-9 shrink-0 place-items-center rounded-full border-2 text-xs font-bold",
                s.status === "done" && "border-emerald-500 bg-emerald-500 text-white",
                s.status === "current" && "border-saffron bg-saffron text-white",
                s.status === "upcoming" && "border-border bg-card text-maroon/40",
              )}
            >
              {s.status === "done" ? <Check className="size-4" /> : i + 1}
            </span>
            {i < stages.length - 1 && (
              <span
                className={cn(
                  "w-0.5 flex-1",
                  s.status === "done" ? "bg-emerald-300" : "bg-border",
                  compact ? "min-h-6" : "min-h-10",
                )}
              />
            )}
          </div>
          <div className={cn("pb-6", compact && "pb-4")}>
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-display text-lg text-maroon">{s.label}</p>
              <StatusBadge status={s.status} />
            </div>
            {s.note && <p className="mt-1 text-sm text-foreground/60">{s.note}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------------- Map mockup ---------------- */
export function MapMockup({
  points,
  className,
  height = "h-72",
}: {
  points: string[];
  className?: string;
  height?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-gold/30 bg-[oklch(0.93_0.04_120)]",
        height,
        className,
      )}
      role="img"
      aria-label="Illustrative route map"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,oklch(0.92_0.05_130),oklch(0.96_0.04_95))]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <svg className="absolute inset-0 size-full" viewBox="0 0 400 240" preserveAspectRatio="none">
        <path
          d="M30 200 C 110 190, 90 120, 170 120 S 250 60, 370 40"
          fill="none"
          stroke="var(--color-saffron)"
          strokeWidth="4"
          strokeDasharray="10 8"
        />
      </svg>
      <ul className="relative flex h-full flex-col justify-between p-4">
        {points.map((p, i) => (
          <li
            key={p}
            className="flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-card/90 px-3 py-1.5 text-xs font-semibold text-maroon shadow-sm"
            style={{ marginLeft: `${Math.min(i * 12, 60)}%` }}
          >
            <MapPin className="size-3.5 text-saffron" /> {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Image gallery ---------------- */
export function ImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-border">
        <img src={images[active]} alt={alt} className="h-64 w-full object-cover sm:h-96" />
      </div>
      <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
        {images.map((im, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "size-20 shrink-0 overflow-hidden rounded-xl border-2 transition",
              i === active ? "border-saffron" : "border-transparent opacity-70 hover:opacity-100",
            )}
          >
            <img src={im} alt="" className="size-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export function ReviewCard({
  name,
  rating,
  text,
  when,
}: {
  name: string;
  rating: number;
  text: string;
  when: string;
}) {
  return (
    <Panel>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-devotional text-sm font-semibold text-ivory">
            {name.charAt(0)}
          </span>
          <div>
            <p className="text-sm font-semibold text-maroon">{name}</p>
            <p className="text-xs text-foreground/50">{when}</p>
          </div>
        </div>
        <Rating value={rating} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/70">{text}</p>
    </Panel>
  );
}

export function InfoList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((i) => (
        <li key={i} className="flex gap-2.5 text-sm text-foreground/75">
          <ChevronRight className="mt-0.5 size-4 shrink-0 text-saffron" />
          {i}
        </li>
      ))}
    </ul>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((i) => (
        <li
          key={i}
          className="rounded-full border border-border bg-cream px-3 py-1.5 text-xs font-medium text-maroon"
        >
          {i}
        </li>
      ))}
    </ul>
  );
}

export function StageBanner({ stage, detail }: { stage: string; detail: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-gold/30 bg-cream px-5 py-4">
      <div>
        <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-maroon/60">
          Current Stage
        </p>
        <p className="font-display text-2xl text-maroon">{stage}</p>
      </div>
      <p className="text-right text-sm font-semibold text-saffron">{detail}</p>
    </div>
  );
}
