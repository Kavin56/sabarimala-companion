import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useApp } from "@/context/AppContext";
import { MOCK_TEMPLES } from "@/lib/mockData";
import { Landmark, MapPin, Clock, Heart, Volume2, Shield, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/temples/$id")({
  component: TempleDetailsUI,
});

function TempleDetailsUI() {
  const { id } = useParams({ from: "/temples/$id" });
  const { isFavorite, toggleFavorite, playPageVoice } = useApp();
  const temple = MOCK_TEMPLES.find((t) => t.id === id) || MOCK_TEMPLES[0]!;

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Banner */}
        <div className="relative rounded-3xl overflow-hidden h-64 sm:h-80 shadow-xl border border-gold/30">
          <img src={temple.image} alt={temple.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <button
            onClick={() => toggleFavorite(temple.id)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:scale-110 transition"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite(temple.id) ? "text-red-500 fill-red-500" : "text-white"
              }`}
            />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="eyebrow block text-xs text-gold-warm mb-1">{temple.location}</span>
              <h1 className="text-2xl sm:text-4xl font-display font-bold text-white">
                {temple.name}
              </h1>
            </div>

            <button
              onClick={() => playPageVoice(`${temple.name}. ${temple.description}`)}
              className="px-4 py-2.5 rounded-xl bg-saffron text-white font-bold text-xs shadow hover:bg-saffron/90 transition shrink-0 flex items-center gap-2"
            >
              <Volume2 className="w-4 h-4" /> LISTEN TO TEMPLE AUDIO
            </button>
          </div>
        </div>

        {/* Grid Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-xl text-foreground mb-2">About The Shrine</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {temple.description}
              </p>
            </div>

            {/* Sacred Poojas & Services */}
            <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                Sacred Poojas & Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {temple.services.map((s, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-ivory border border-gold/20 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-saffron" />
                    <span className="font-bold text-xs text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                Pilgrim Facilities Available
              </h3>
              <div className="flex flex-wrap gap-2">
                {temple.facilities.map((f, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-cream text-maroon font-semibold text-xs border border-gold/20"
                  >
                    ✓ {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Directions */}
          <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm space-y-4 h-fit">
            <h3 className="font-display font-bold text-lg text-foreground border-b border-gold/20 pb-2">
              Timings & Directions
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-muted-foreground block font-semibold">Darshan Timings:</span>
                <strong className="text-saffron block mt-0.5">{temple.timings}</strong>
              </div>

              <div>
                <span className="text-muted-foreground block font-semibold">Route & Directions:</span>
                <p className="text-foreground mt-0.5">{temple.directions}</p>
              </div>
            </div>

            <Link
              to="/route-map"
              className="w-full py-3 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow hover:opacity-95 transition flex items-center justify-center gap-2"
            >
              NAVIGATE ON ROUTE MAP →
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
