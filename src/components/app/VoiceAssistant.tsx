import { Mic, Play, Pause, RotateCcw, Volume2, Gauge, X } from "lucide-react";
import { useState } from "react";
import { useAppState } from "@/lib/app-state";
import { languages } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const features = [
  "Welcome Voice",
  "Read Current Page",
  "Step-by-Step Guide",
  "Voice Navigation",
  "Voice Notifications",
  "Video Summary",
  "Elderly Mode",
];

export function VoiceAssistant() {
  const { voiceOpen, setVoiceOpen, language, setLanguage } = useAppState();
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState("1.0x");

  if (!voiceOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 p-0 sm:items-center sm:p-6">
      <div className="w-full max-w-lg rounded-t-3xl border border-gold/30 bg-ivory p-6 shadow-warm sm:rounded-3xl">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-display text-2xl text-maroon">Swamiye Saranam Ayyappa</p>
            <p className="mt-1 text-sm text-foreground/70">How can I guide you?</p>
          </div>
          <button
            type="button"
            aria-label="Close voice assistant"
            onClick={() => setVoiceOpen(false)}
            className="grid size-11 place-items-center rounded-full border border-border text-maroon hover:bg-cream"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="my-6 grid place-items-center">
          <button
            type="button"
            aria-label="Start voice guidance"
            onClick={() => {
              setPlaying(true);
              toast("Voice guidance (mock) started");
            }}
            className={cn(
              "grid size-28 place-items-center rounded-full bg-devotional text-ivory",
              playing && "animate-pulse-glow",
            )}
          >
            <Mic className="size-12" aria-hidden="true" />
          </button>
          <div className="mt-4 flex h-8 items-end gap-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className={cn("w-1.5 rounded-full bg-gold", playing && "animate-wave")}
                style={{ height: "100%", animationDelay: `${i * 0.07}s` }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <VoiceBtn icon={Play} label="Play" onClick={() => setPlaying(true)} />
          <VoiceBtn icon={Pause} label="Pause" onClick={() => setPlaying(false)} />
          <VoiceBtn icon={RotateCcw} label="Replay" onClick={() => setPlaying(true)} />
          <VoiceBtn icon={Volume2} label="Volume" onClick={() => toast("Volume 80%")} />
          <VoiceBtn
            icon={Gauge}
            label={speed}
            onClick={() => setSpeed((s) => (s === "1.0x" ? "1.5x" : s === "1.5x" ? "0.75x" : "1.0x"))}
          />
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            Language
          </p>
          <div className="mt-2 flex gap-2">
            {languages.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLanguage(l)}
                className={cn(
                  "min-h-11 rounded-full border px-4 text-sm font-semibold",
                  language === l
                    ? "border-saffron bg-saffron text-ivory"
                    : "border-border text-maroon hover:bg-cream",
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {features.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => toast(`${f} (mock)`)}
              className="rounded-full bg-cream px-3 py-1.5 text-xs font-semibold text-maroon hover:bg-gold/30"
            >
              {f}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function VoiceBtn({
  icon: Icon,
  label,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-sm font-semibold text-maroon hover:bg-cream"
    >
      <Icon className="size-4" aria-hidden="true" />
      {label}
    </button>
  );
}
