import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Compass, CheckCircle2, MapPin, Share2 } from "lucide-react";

export const Route = createFileRoute("/live-journey")({
  component: LiveJourneyUI,
});

function LiveJourneyUI() {
  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <span className="eyebrow block text-xs text-saffron">LIVE MONITORING</span>
            <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              Live Pilgrimage Status
              <Compass className="w-6 h-6 text-saffron animate-spin" />
            </h1>
          </div>
        </div>

        {/* Current status card */}
        <div className="bg-gradient-to-br from-cream via-ivory to-cream border border-gold/40 rounded-3xl p-6 shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-saffron text-white font-bold text-xs">
              CURRENT STAGE: TRAVEL TRANSIT
            </span>
            <span className="text-xs text-muted-foreground">Updated 5 mins ago</span>
          </div>

          <h2 className="text-2xl font-display font-bold text-maroon">
            En route to Pamba via KSRTC Volvo Bus
          </h2>
          <p className="text-xs text-muted-foreground">
            Current Position: Passing Dindigul Highway NH44 • Est. Arrival at Pamba: Tomorrow 06:00 AM
          </p>

          <div className="pt-3 border-t border-gold/20 flex justify-end">
            <button
              onClick={() => alert("Live Journey Link copied to Clipboard!")}
              className="px-4 py-2 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow flex items-center gap-1.5"
            >
              <Share2 className="w-4 h-4" /> SHARE LIVE STATUS WITH FAMILY
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
