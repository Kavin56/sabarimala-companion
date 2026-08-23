import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useApp } from "@/context/AppContext";
import { Landmark, Volume2, ShieldCheck, Flame, ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/sannidhanam")({
  component: SannidhanamGuideUI,
});

function SannidhanamGuideUI() {
  const { playPageVoice } = useApp();

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Banner */}
        <div className="relative rounded-3xl overflow-hidden h-64 sm:h-80 shadow-xl border border-gold/30">
          <img
            src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80"
            alt="Sannidhanam"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="eyebrow block text-xs text-gold-warm mb-1">DIVINE CULMINATION</span>
              <h1 className="text-3xl sm:text-5xl font-display font-bold text-white flex items-center gap-2">
                Sannidhanam & 18 Holy Steps
                <Sparkles className="w-6 h-6 text-gold fill-gold" />
              </h1>
              <p className="text-xs sm:text-sm text-ivory/80 mt-1 font-serif italic">
                "The sacred abode of Lord Ayyappa. Ascend Pathinettam Padi for divine Neyyabhishekam."
              </p>
            </div>

            <button
              onClick={() =>
                playPageVoice(
                  "Swamiye Saranam Ayyappa. You have reached Sannidhanam. Follow police instructions on Pathinettam Padi and keep your Irumudi balanced."
                )
              }
              className="px-4 py-2.5 rounded-xl bg-saffron text-white font-bold text-xs shadow hover:bg-saffron/90 transition shrink-0 flex items-center gap-2"
            >
              <Volume2 className="w-4 h-4" /> LISTEN TO DARSHAN GUIDE
            </button>
          </div>
        </div>

        {/* 18 Steps & Neyyabhishekam Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm space-y-3">
            <h3 className="font-display font-bold text-xl text-foreground">
              Pathinettam Padi (18 Holy Steps) Rules
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Only pilgrims bearing the sacred Irumudi Kettu on their head are allowed to climb the 18 Gold-Clad steps. Step with pure mind, chanting "Swamiye Saranam Ayyappa".
            </p>
          </div>

          <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm space-y-3">
            <h3 className="font-display font-bold text-xl text-foreground">
              Neyyabhishekam & Prasadam Counters
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Pour ghee from your sacred Neyyuthengai coconut for Neyyabhishekam offering. Collect Appam and Aravana prasadam from official Devaswom counters.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
