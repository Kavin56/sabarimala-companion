import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Car, MapPin, Fuel, ShieldAlert, CheckCircle, Navigation, Coffee } from "lucide-react";

export const Route = createFileRoute("/travel/car")({
  component: PrivateCarTravelUI,
});

function PrivateCarTravelUI() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="eyebrow block text-xs text-saffron">ROAD TRIP & PRIVATE VEHICLE</span>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground flex items-center gap-2">
              Car Travel & Checkpoint Planner
              <Car className="w-6 h-6 text-saffron" />
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Custom highway route, fuel estimates, rest stops, and Nilakkal parking guidance.
            </p>
          </div>

          <Link
            to="/route-map"
            className="px-4 py-2.5 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow hover:opacity-95 transition"
          >
            VIEW VISUAL ROUTE MAP
          </Link>
        </div>

        {/* Highway Trip Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-card border border-gold/20 shadow-xs">
            <span className="text-[10px] text-muted-foreground font-semibold block">Total Distance</span>
            <span className="text-2xl font-display font-bold text-maroon">620 km</span>
          </div>
          <div className="p-4 rounded-2xl bg-card border border-gold/20 shadow-xs">
            <span className="text-[10px] text-muted-foreground font-semibold block">Est. Driving Time</span>
            <span className="text-2xl font-display font-bold text-saffron">11 hrs 45 mins</span>
          </div>
          <div className="p-4 rounded-2xl bg-card border border-gold/20 shadow-xs">
            <span className="text-[10px] text-muted-foreground font-semibold block">Fuel Cost Estimate</span>
            <span className="text-2xl font-display font-bold text-foreground">₹4,200</span>
          </div>
          <div className="p-4 rounded-2xl bg-card border border-gold/20 shadow-xs">
            <span className="text-[10px] text-muted-foreground font-semibold block">Toll Booths</span>
            <span className="text-2xl font-display font-bold text-amber-600">8 Checkpoints</span>
          </div>
        </div>

        {/* Route Checkpoints & Stops */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
          <h3 className="font-display font-bold text-lg text-foreground mb-4">
            Recommended Highway Rest & Satvik Food Stops
          </h3>

          <div className="space-y-4">
            {[
              { title: "Chennai → Dindigul Highway NH44", desc: "Smooth 4-lane national highway", dist: "330 km", type: "Highway" },
              { title: "Theni Pilgrim Satvik Rest Stop", desc: "Pure vegetarian food, clean washrooms & fuel station", dist: "450 km", type: "Food & Rest" },
              { title: "Kumily Mountain Border Pass", desc: "Scenic Western Ghats entry into Kerala", dist: "540 km", type: "Hill Drive" },
              { title: "Nilakkal Base Camp Car Parking", desc: "Official multi-story parking ground for private cars", dist: "620 km", type: "Parking" },
            ].map((stop, i) => (
              <div key={i} className="p-4 rounded-2xl bg-ivory border border-gold/20 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-saffron text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-foreground">{stop.title}</h4>
                    <span className="text-xs font-bold text-saffron">{stop.dist}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{stop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
