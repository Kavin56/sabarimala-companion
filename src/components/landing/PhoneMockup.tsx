import type { ReactNode } from "react";

export function PhoneMockup({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-[15rem] shrink-0 rounded-[2rem] border border-gold/30 bg-ink p-2.5 shadow-warm ${className}`}
    >
      <div className="overflow-hidden rounded-[1.6rem] bg-ivory">
        <div className="flex items-center justify-between bg-devotional px-4 py-3">
          <span className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-ivory/85">
            {title}
          </span>
          <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" />
        </div>
        <div className="space-y-2.5 p-3.5">{children}</div>
      </div>
    </div>
  );
}

export function MockRow({
  label,
  value,
  tone = "muted",
}: {
  label: string;
  value?: string;
  tone?: "muted" | "active" | "done";
}) {
  const tones = {
    muted: "border-border bg-card text-foreground/70",
    active: "border-saffron/50 bg-saffron/10 text-saffron",
    done: "border-border bg-cream text-maroon",
  } as const;
  return (
    <div
      className={`flex items-center justify-between rounded-xl border px-3 py-2.5 text-[0.68rem] font-medium ${tones[tone]}`}
    >
      <span>{label}</span>
      {value && <span className="text-[0.62rem] opacity-80">{value}</span>}
    </div>
  );
}

export function MockBar({ percent, label }: { percent: number; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card px-3 py-3">
      <div className="flex items-center justify-between text-[0.62rem] font-semibold text-maroon">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-cream">
        <div className="h-full rounded-full bg-devotional" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
