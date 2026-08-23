import { createFileRoute, useNavigate, useParams, Link } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { MOCK_PACKAGES } from "@/lib/mockData";
import { Star, CheckCircle, ArrowRight, ShieldCheck, MapPin, Calendar, Users } from "lucide-react";

export const Route = createFileRoute("/packages/$id")({
  component: PackageDetailsUI,
});

function PackageDetailsUI() {
  const { id } = useParams({ from: "/packages/$id" });
  const navigate = useNavigate();
  const pkg = MOCK_PACKAGES.find((p) => p.id === id) || MOCK_PACKAGES[0]!;

  const handleBookNow = () => {
    navigate({ to: "/booking/passengers" });
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden h-64 sm:h-80 shadow-xl border border-gold/30">
          <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="eyebrow block text-xs text-gold-warm mb-1">{pkg.duration}</span>
              <h1 className="text-2xl sm:text-4xl font-display font-bold text-white leading-tight">
                {pkg.name}
              </h1>
              <p className="text-xs sm:text-sm text-ivory/80 mt-1 font-serif italic">{pkg.subtitle}</p>
            </div>

            <div className="bg-ink/80 backdrop-blur border border-gold/40 p-4 rounded-2xl text-right shrink-0">
              <span className="text-[10px] text-ivory/60 block">Package Price</span>
              <span className="text-3xl font-display font-bold text-gold">₹{pkg.price}</span>
              <span className="text-[10px] text-ivory/80 block mt-0.5">per pilgrim</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-xl text-foreground mb-2">Package Overview</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{pkg.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-border/40 text-xs">
                <div>
                  <span className="text-[10px] text-muted-foreground block">Starting Location</span>
                  <strong className="text-foreground">{pkg.startingPoint}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block">Transport Type</span>
                  <strong className="text-foreground">{pkg.transport}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block">Stay & Cottage</span>
                  <strong className="text-foreground">{pkg.accommodation}</strong>
                </div>
              </div>
            </div>

            {/* Day by Day Itinerary */}
            <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Day-by-Day Journey Itinerary
              </h3>

              <div className="space-y-4">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="p-4 rounded-2xl bg-ivory border border-gold/20 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-saffron text-white font-bold text-xs flex items-center justify-center shrink-0">
                      Day {day.day}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">{day.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{day.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card border border-green-500/30 rounded-3xl p-5 shadow-sm">
                <h4 className="font-bold text-xs text-green-700 uppercase tracking-widest mb-3">
                  ✓ What's Included
                </h4>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">•</span> {inc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-red-500/30 rounded-3xl p-5 shadow-sm">
                <h4 className="font-bold text-xs text-red-700 uppercase tracking-widest mb-3">
                  ✕ Exclusions
                </h4>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-red-600 font-bold">•</span> {exc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm h-fit space-y-6">
            <div>
              <span className="eyebrow block text-[10px] text-saffron">RESERVE YATHRA</span>
              <h3 className="font-display font-bold text-2xl text-foreground">
                Book This Package
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Select your preferred journey date and number of devotees.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Journey Date</label>
                <input
                  type="date"
                  defaultValue="2026-11-15"
                  className="w-full px-3 py-2 rounded-xl bg-ivory border border-gold/30 text-ink outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Pilgrims Count</label>
                <select className="w-full px-3 py-2 rounded-xl bg-ivory border border-gold/30 text-ink outline-none">
                  <option value="1">1 Pilgrim (₹{pkg.price})</option>
                  <option value="2">2 Pilgrims (₹{pkg.price * 2})</option>
                  <option value="4">4 Pilgrims Family (₹{pkg.price * 4})</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleBookNow}
              className="w-full py-3.5 rounded-2xl bg-gradient-devotional text-white font-bold text-xs shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2"
            >
              BOOK PACKAGE NOW <ArrowRight className="w-4 h-4 text-gold" />
            </button>

            <div className="text-[11px] text-muted-foreground text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-4 h-4 text-saffron" /> 100% Refundable up to 48 hrs before travel
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
