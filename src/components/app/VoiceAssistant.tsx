import { Mic, Play, Pause, RotateCcw, X, Volume2, Gauge, Accessibility } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useAppState } from "./state";

const features = [
  { label: "Welcome Voice", desc: "Hear the Swamiye Saranam Ayyappa greeting" },
  { label: "Read Current Page", desc: "Listen to everything on this screen" },
  { label: "Step-by-Step Guide", desc: "Guided walkthrough of your next Yathra step" },
  { label: "Voice Navigation", desc: "Say a page name to move there" },
  { label: "Voice Notifications", desc: "Reminders read aloud each morning" },
  { label: "Video Summary", desc: "Short spoken summary before you watch" },
];

const languages = ["Tamil", "Malayalam", "English", "Hindi — Future"];

export function VoiceAssistant() {
  const { voiceOpen, setVoiceOpen, language, setLanguage, simpleMode, toggleSimpleMode } =
    useAppState();
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState("Welcome Voice");

  if (!voiceOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Close voice assistant"
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={() => setVoiceOpen(false)}
      />
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-gold/30 bg-maroon p-6 text-ivory sm:rounded-3xl sm:p-8">
        <button
          type="button"
          aria-label="Close"
          onClick={() => setVoiceOpen(false)}
          className="absolute top-5 right-5 text-gold"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-center gap-4">
          <span className="grid size-14 shrink-0 place-items-center rounded-full bg-devotional ring-4 ring-gold/25">
            <Mic className="size-6" />
          </span>
          <div>
            <h2 className="font-display text-2xl text-gold">Swamiye Saranam Ayyappa</h2>
            <p className="text-sm text-ivory/70">How can I guide you?</p>
          </div>
        </div>

        <div className="mt-6 flex h-16 items-end justify-center gap-1.5 rounded-2xl bg-ink/30 px-4 py-3">
          {Array.from({ length: 32 }).map((_, i) => (
            <span
              key={i}
              className={cn("w-1.5 rounded-full bg-gold/80", playing && "animate-pulse")}
              style={{
                height: `${18 + ((i * 29) % 82)}%`,
                animationDelay: `${(i % 8) * 0.1}s`,
              }}
            />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex items-center gap-2 rounded-full bg-saffron px-5 py-2.5 text-sm font-semibold text-white"
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
            {playing ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={() => setPlaying(false)}
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold"
          >
            <RotateCcw className="size-4" /> Replay
          </button>
          <span className="inline-flex flex-1 items-center gap-2 text-xs text-ivory/70">
            <Volume2 className="size-4 text-gold" />
            <input type="range" min={0} max={100} defaultValue={75} className="w-full accent-gold" />
          </span>
          <span className="inline-flex flex-1 items-center gap-2 text-xs text-ivory/70">
            <Gauge className="size-4 text-gold" />
            <input type="range" min={0.5} max={2} step={0.25} defaultValue={1} className="w-full accent-gold" />
          </span>
        </div>

        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f.label}>
              <button
                type="button"
                onClick={() => setActive(f.label)}
                className={cn(
                  "w-full rounded-2xl border px-4 py-3 text-left transition",
                  active === f.label
                    ? "border-gold bg-gold/15"
                    : "border-ivory/15 hover:border-gold/50",
                )}
              >
                <p className="text-sm font-semibold text-gold">{f.label}</p>
                <p className="mt-0.5 text-xs text-ivory/65">{f.desc}</p>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold/70">Language</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {languages.map((l) => {
              const disabled = l.includes("Future");
              return (
                <button
                  key={l}
                  type="button"
                  disabled={disabled}
                  onClick={() => setLanguage(l)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-semibold",
                    disabled && "cursor-not-allowed border-ivory/10 text-ivory/35",
                    !disabled && language === l
                      ? "border-transparent bg-gold text-maroon"
                      : !disabled && "border-ivory/25 text-ivory/80",
                  )}
                >
                  {l}
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={toggleSimpleMode}
          className={cn(
            "mt-6 flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left",
            simpleMode ? "border-gold bg-gold/15" : "border-ivory/15",
          )}
        >
          <span className="flex items-center gap-3">
            <Accessibility className="size-5 text-gold" />
            <span>
              <span className="block text-sm font-semibold text-gold">Elderly / Simple Mode</span>
              <span className="block text-xs text-ivory/65">
                Larger text, bigger buttons, fewer distractions
              </span>
            </span>
          </span>
          <span
            className={cn(
              "h-6 w-11 shrink-0 rounded-full p-0.5 transition",
              simpleMode ? "bg-gold" : "bg-ivory/25",
            )}
          >
            <span
              className={cn(
                "block size-5 rounded-full bg-maroon transition",
                simpleMode && "translate-x-5",
              )}
            />
          </span>
        </button>

        <p className="mt-6 text-center text-xs text-ivory/50">
          Voice playback is simulated in this prototype.
        </p>
      </div>
    </div>
  );
}
