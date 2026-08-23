import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useApp } from "@/context/AppContext";
import { MOCK_CHECKPOINTS } from "@/lib/mockData";
import { MapPin, Volume2, ShieldCheck, Heart, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/checkpoint/$id")({
  component: CheckpointDetailsUI,
});

function CheckpointDetailsUI() {
  const { id } = useParams({ from: "/checkpoint/$id" });
  const { playPageVoice } = useApp();
  const chk = MOCK_CHECKPOINTS.find((c) => c.id === id) || MOCK_CHECKPOINTS[0]!;

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="relative rounded-3xl overflow-hidden h-64 sm:h-80 shadow-xl border border-gold/30">
          <img src={chk.image} alt={chk.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="eyebrow block text-xs text-gold-warm mb-1">{chk.distance}</span>
              <h1 className="text-3xl sm:text-5xl font-display font-bold text-white">{chk.name}</h1>
              <span className="text-xs text-gold font-semibold block mt-1">Elevation: {chk.elevation}</span>
            </div>

            <button
              onClick={() => playPageVoice(`${chk.name}. ${chk.description}`)}
              className="px-4 py-2.5 rounded-xl bg-saffron text-white font-bold text-xs shadow hover:bg-saffron/90 transition shrink-0 flex items-center gap-2"
            >
              <Volume2 className="w-4 h-4" /> LISTEN TO CHECKPOINT AUDIO
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-xl text-foreground mb-2">About Checkpoint</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{chk.description}</p>
            </div>

            <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Available Facilities</h3>
              <div className="flex flex-wrap gap-2">
                {chk.facilities.map((f, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-cream text-maroon font-bold text-xs border border-gold/20"
                  >
                    ✓ {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-card border border-red-500/30 rounded-3xl p-6 shadow-sm h-fit space-y-3">
            <h3 className="font-display font-bold text-lg text-red-700 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-red-600" /> Safety Guidance
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {chk.safetyTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span> {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
