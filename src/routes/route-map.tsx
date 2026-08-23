import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Navigation, MapPin, ShieldCheck, ArrowRight, Compass } from "lucide-react";

export const Route = createFileRoute("/route-map")({
  component: RoutePlannerUI,
});

function RoutePlannerUI() {
  const [navStarted, setNavStarted] = useState(false);

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="eyebrow block text-xs text-saffron">VISUAL ROUTE MAP</span>
            <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              Sabarimala Route & Facilities Planner
              <Navigation className="w-6 h-6 text-saffron" />
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Visual map representation of Pamba, Neeli Mala, Appachi Medu, and Sannidhanam.
            </p>
          </div>

          <button
            onClick={() => setNavStarted(!navStarted)}
            className={`px-5 py-3 rounded-2xl font-bold text-xs shadow-lg transition flex items-center gap-2 ${
              navStarted
                ? "bg-green-600 text-white animate-pulse"
                : "bg-gradient-devotional text-white hover:opacity-95"
            }`}
          >
            <Compass className="w-4 h-4" />
            {navStarted ? "NAVIGATION ACTIVE (MOCK)" : "START MOCK NAVIGATION"}
          </button>
        </div>

        {/* Visual Map Mockup Box */}
        <div className="bg-gradient-to-br from-ink via-maroon to-ink rounded-3xl p-6 sm:p-10 text-white border border-gold/40 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-8">
            <span className="eyebrow block text-xs text-gold-warm mb-1">INTERACTIVE TREK LINE</span>
            <h2 className="text-2xl font-display font-bold text-white">Pamba to Sannidhanam (4.5 km)</h2>
          </div>

          {/* Route Nodes */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto my-8">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-saffron via-gold to-saffron -translate-y-1/2 z-0" />

            {[
              { id: "chk-1", title: "Pamba River", dist: "0.0 km", status: "Start" },
              { id: "chk-2", title: "Neeli Mala", dist: "1.8 km", status: "Steep Climb" },
              { id: "chk-3", title: "Appachi Medu", dist: "2.5 km", status: "Ravine Peak" },
              { id: "chk-4", title: "Sannidhanam", dist: "4.5 km", status: "Destination" },
            ].map((node, i) => (
              <Link
                key={node.id}
                to="/checkpoint/$id"
                params={{ id: node.id }}
                className="relative z-10 p-4 rounded-2xl bg-black/60 border border-gold/40 hover:border-gold hover:scale-105 transition text-center w-48 shadow-lg group"
              >
                <div className="w-10 h-10 rounded-full bg-saffron text-white font-bold text-xs flex items-center justify-center mx-auto mb-2 shadow group-hover:bg-gold group-hover:text-ink transition">
                  {i + 1}
                </div>
                <h4 className="font-bold text-sm text-white group-hover:text-gold-warm">{node.title}</h4>
                <span className="text-[10px] text-gold block mt-0.5">{node.dist}</span>
                <span className="text-[9px] text-ivory/60 block mt-1 uppercase font-semibold">
                  {node.status}
                </span>
              </Link>
            ))}
          </div>

          {navStarted && (
            <div className="p-4 rounded-2xl bg-green-900/60 border border-green-500/50 text-center text-xs text-green-200 font-semibold animate-rise">
              ✓ Mock GPS Navigation Active: Approaching Neeli Mala Base (Speed: 3 km/h)
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
