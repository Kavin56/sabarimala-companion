import type { ReactNode } from "react";
import { Check, ChevronRight, MapPin, Play, Bell, AlertTriangle, Mic, Megaphone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function PageHeader({
  title,
  subtitle,
  crumb,
  action,
}: {
  title: string;
  subtitle?: string;
  crumb?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        {crumb && (
          <p className="mb-2 text-xs font-semibold tracking-[0.24em] uppercase text-saffron">
            {crumb}
          </p>
        )}
        <h1 className="font-display text-3xl leading-tight text-maroon sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-sm text-foreground/70">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("rounded-3xl border border-border bg-card p-6 shadow-warm/20", className)}>
      {children}
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const tone =
    /active|completed|sent|done/i.test(status)
      ? "bg-emerald-100 text-emerald-800"
      : /blocked|pending|draft/i.test(status)
        ? "bg-cream text-maroon"
        : /progress|scheduled|upcoming/i.test(status)
          ? "bg-saffron/15 text-saffron"
          : "bg-muted text-muted-foreground";
  return (
    <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-semibold", tone)}>
      {status}
    </span>
  );
}

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-cream">
      <div
        className="h-full rounded-full bg-gradient-to-r from-saffron via-gold to-gold-warm transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export function FeatureCard({
  title,
  text,
  icon: Icon,
  to,
  accent,
}: {
  title: string;
  text: string;
  icon: React.ElementType;
  to: string;
  accent?: boolean;
}) {
  return (
    <Link
      to={to as never}
      className={cn(
        "group flex flex-col gap-3 rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-warm",
        accent && "border-devotional/30 bg-devotional/5",
      )}
    >
      <span
        className={cn(
          "grid size-12 place-items-center rounded-2xl bg-saffron/10 text-saffron",
          accent && "bg-devotional/10 text-devotional",
        )}
      >
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <div>
        <p className="font-semibold text-maroon">{title}</p>
        <p className="mt-1 text-sm text-foreground/65">{text}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-saffron opacity-0 transition-opacity group-hover:opacity-100">
        Open <ChevronRight className="size-3" aria-hidden="true" />
      </span>
    </Link>
  );
}

export function JourneyTimeline({
  stages,
}: {
  stages: readonly { name: string; status: string }[];
}) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-3">
      {stages.map((s, i) => (
        <div key={`${s.name}-${i}`} className="flex min-w-[128px] flex-1 flex-col items-center text-center">
          <div className="flex w-full items-center">
            <span className={cn("h-0.5 flex-1", i === 0 ? "bg-transparent" : "bg-gold/40")} />
            <span
              className={cn(
                "grid size-9 shrink-0 place-items-center rounded-full border-2 text-xs font-bold",
                s.status === "done" && "border-emerald-500 bg-emerald-500 text-white",
                s.status === "current" && "border-saffron bg-saffron text-white animate-pulse-glow",
                s.status === "upcoming" && "border-gold/50 bg-ivory text-maroon/60",
              )}
            >
              {s.status === "done" ? <Check className="size-4" aria-hidden="true" /> : i + 1}
            </span>
            <span
              className={cn("h-0.5 flex-1", i === stages.length - 1 ? "bg-transparent" : "bg-gold/40")}
            />
          </div>
          <p
            className={cn(
              "mt-2 text-xs font-medium",
              s.status === "current" ? "text-saffron font-bold" : "text-maroon/75",
            )}
          >
            {s.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export function TempleCard({
  temple,
}: {
  temple: {
    name: string;
    location: string;
    image: string;
    text: string;
    darshan: string;
    guidelines: string;
  };
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-warm/20">
      <div className="aspect-video overflow-hidden">
        <img src={temple.image} alt={temple.name} className="size-full object-cover" loading="lazy" />
      </div>
      <div className="space-y-3 p-6">
        <h3 className="font-display text-2xl text-maroon">{temple.name}</h3>
        <p className="flex items-center gap-1.5 text-sm text-saffron">
          <MapPin className="size-4" aria-hidden="true" /> {temple.location}
        </p>
        <p className="text-sm text-foreground/70">{temple.text}</p>
        <dl className="space-y-2 rounded-2xl bg-cream/60 p-4 text-sm">
          <div>
            <dt className="font-semibold text-maroon">Darshan</dt>
            <dd className="text-foreground/70">{temple.darshan}</dd>
          </div>
          <div>
            <dt className="font-semibold text-maroon">Guidelines</dt>
            <dd className="text-foreground/70">{temple.guidelines}</dd>
          </div>
        </dl>
        <div className="flex gap-3 pt-1">
          <ActionButton onClick={() => toast.success(`Directions to ${temple.name}`)}>
            Directions
          </ActionButton>
          <ActionButton variant="ghost" onClick={() => toast("Guidelines opened")}>
            Guidelines
          </ActionButton>
        </div>
      </div>
    </article>
  );
}

export function VideoCard({
  video,
}: {
  video: { title: string; category: string; duration: string; image: string };
}) {
  return (
    <button
      type="button"
      onClick={() => toast(`Playing: ${video.title}`)}
      className="group overflow-hidden rounded-3xl border border-border bg-card text-left shadow-warm/20 transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden">
        <img src={video.image} alt={video.title} className="size-full object-cover" loading="lazy" />
        <span className="absolute inset-0 grid place-items-center bg-ink/35 transition-colors group-hover:bg-ink/20">
          <span className="grid size-14 place-items-center rounded-full bg-gold text-maroon">
            <Play className="size-6" aria-hidden="true" />
          </span>
        </span>
        <span className="absolute right-3 bottom-3 rounded-full bg-ink/80 px-2 py-0.5 text-xs font-semibold text-ivory">
          {video.duration}
        </span>
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold tracking-widest uppercase text-saffron">{video.category}</p>
        <p className="mt-1 font-semibold text-maroon">{video.title}</p>
      </div>
    </button>
  );
}

export function AccommodationCard({
  item,
}: {
  item: { name: string; distance: string; type: string; place: string; image: string };
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-warm/20">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={item.image} alt={item.name} className="size-full object-cover" loading="lazy" />
      </div>
      <div className="space-y-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-maroon">{item.name}</h3>
          <StatusBadge status={item.type} />
        </div>
        <p className="flex items-center gap-1.5 text-sm text-foreground/70">
          <MapPin className="size-4 text-saffron" aria-hidden="true" /> {item.place} · {item.distance}
        </p>
        <div className="flex gap-2 pt-2">
          <ActionButton onClick={() => toast(`${item.name} details`)}>View Details</ActionButton>
          <ActionButton variant="ghost" onClick={() => toast(`Directions to ${item.name}`)}>
            Directions
          </ActionButton>
        </div>
      </div>
    </article>
  );
}

const notifIcons = {
  reminder: Bell,
  alert: AlertTriangle,
  voice: Mic,
  announcement: Megaphone,
} as const;

export function NotificationCard({
  item,
}: {
  item: { icon: string; title: string; text: string; time: string; category: string };
}) {
  const Icon = notifIcons[item.icon as keyof typeof notifIcons] ?? Bell;
  return (
    <div className="flex gap-4 rounded-3xl border border-border bg-card p-5">
      <span
        className={cn(
          "grid size-11 shrink-0 place-items-center rounded-2xl",
          item.icon === "alert" ? "bg-devotional/10 text-devotional" : "bg-saffron/10 text-saffron",
        )}
      >
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-semibold text-maroon">{item.title}</p>
          <span className="text-xs text-muted-foreground">{item.time}</span>
        </div>
        <p className="mt-1 text-sm text-foreground/70">{item.text}</p>
        <span className="mt-2 inline-block text-xs font-semibold tracking-wide uppercase text-saffron">
          {item.category}
        </span>
      </div>
    </div>
  );
}

export function ActionButton({
  children,
  onClick,
  variant = "solid",
  className,
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "solid" | "ghost" | "danger";
  className?: string;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors",
        variant === "solid" && "bg-saffron text-ivory hover:bg-devotional",
        variant === "ghost" && "border border-border text-maroon hover:border-gold hover:bg-cream/60",
        variant === "danger" && "bg-devotional text-ivory hover:bg-maroon",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function StatCard({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-5">
      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-3xl text-maroon">{value}</p>
      {hint && <p className="mt-1 text-xs text-emerald-700">{hint}</p>}
    </div>
  );
}

export function DataTable({
  columns,
  children,
}: {
  columns: string[];
  children: ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-border bg-card">
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="border-b border-border bg-cream/50 text-left">
            {columns.map((c) => (
              <th key={c} className="px-5 py-3 text-xs font-semibold tracking-widest uppercase text-maroon">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">{children}</tbody>
      </table>
    </div>
  );
}

export function RowActions({ actions }: { actions: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {actions.map((a) => (
        <button
          key={a}
          type="button"
          onClick={() => toast(`${a} action (mock)`)}
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
            a === "Delete" || a === "Block"
              ? "border-devotional/40 text-devotional hover:bg-devotional/10"
              : "border-border text-maroon hover:bg-cream",
          )}
        >
          {a}
        </button>
      ))}
    </div>
  );
}
