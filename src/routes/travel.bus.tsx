import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { MOCK_BUSES } from "@/lib/mockData";
import { Bus, Star, Clock, MapPin, ShieldCheck, Filter, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/travel/bus")({
  component: BusSearchResultsUI,
});

function BusSearchResultsUI() {
  const [filterType, setFilterType] = useState<string>("all");

  const filteredBuses = MOCK_BUSES.filter((b) =>
    filterType === "all" ? true : b.type.toLowerCase().includes(filterType)
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Search Bar summary */}
        <div className="bg-card border border-gold/30 rounded-3xl p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="eyebrow block text-[10px] text-saffron">BUS SEARCH RESULTS</span>
            <h1 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-2">
              Chennai <ArrowRight className="w-4 h-4 text-gold" /> Pamba / Nilakkal
            </h1>
            <p className="text-xs text-muted-foreground">
              Nov 15, 2026 • 2 Pilgrims • Showing {filteredBuses.length} Available Buses
            </p>
          </div>

          <Link
            to="/travel"
            className="px-4 py-2 rounded-xl bg-secondary text-foreground text-xs font-semibold hover:bg-gold/20 transition"
          >
            MODIFY SEARCH
          </Link>
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gold/20">
          <Filter className="w-4 h-4 text-gold shrink-0 ml-1" />
          {["all", "sleeper", "seater", "volvo"].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase transition ${
                filterType === type
                  ? "bg-saffron text-white shadow-xs"
                  : "bg-ivory text-muted-foreground border border-gold/20 hover:text-foreground"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Bus List */}
        <div className="space-y-4">
          {filteredBuses.map((bus) => (
            <div
              key={bus.id}
              className="bg-card border border-gold/30 rounded-3xl p-5 shadow-sm hover:shadow-md transition flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            >
              {/* Bus Details */}
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-saffron/10 text-saffron font-bold text-[10px] uppercase border border-saffron/30">
                    {bus.operator}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">{bus.type}</span>
                  <span className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> {bus.rating}
                  </span>
                </div>

                {/* Timings */}
                <div className="flex items-center gap-4 py-2">
                  <div>
                    <span className="text-lg font-display font-bold text-foreground">{bus.departure}</span>
                    <span className="block text-[10px] text-muted-foreground">{bus.from}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-semibold text-saffron">{bus.duration}</span>
                    <div className="w-20 h-0.5 bg-gold/40 relative my-1">
                      <div className="w-2 h-2 rounded-full bg-saffron absolute -top-0.75 left-0" />
                      <div className="w-2 h-2 rounded-full bg-maroon absolute -top-0.75 right-0" />
                    </div>
                    <span className="text-[9px] text-muted-foreground">Direct Bus</span>
                  </div>

                  <div>
                    <span className="text-lg font-display font-bold text-foreground">{bus.arrival}</span>
                    <span className="block text-[10px] text-muted-foreground">{bus.to}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {bus.amenities.map((am, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-ivory text-muted-foreground px-2 py-0.5 rounded-md border border-gold/20"
                    >
                      ✓ {am}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing & Seat Action */}
              <div className="w-full lg:w-auto lg:text-right border-t lg:border-t-0 lg:border-l border-gold/20 pt-4 lg:pt-0 lg:pl-6 shrink-0 flex lg:flex-col items-center lg:items-end justify-between">
                <div>
                  <span className="text-xs text-muted-foreground block">Starting from</span>
                  <span className="text-2xl font-display font-bold text-maroon">₹{bus.price}</span>
                  <span className="text-[10px] text-green-600 font-semibold block">
                    {bus.seatsAvailable} Seats Left
                  </span>
                </div>

                <Link
                  to="/travel/bus/seats"
                  className="mt-3 px-5 py-2.5 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow-md hover:opacity-95 transition inline-flex items-center gap-1.5"
                >
                  SELECT SEATS →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
