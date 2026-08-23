import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useApp } from "@/context/AppContext";
import { MOCK_TEMPLES } from "@/lib/mockData";
import { Landmark, MapPin, Heart, Clock, ArrowRight, Star } from "lucide-react";

export const Route = createFileRoute("/temples")({
  component: TempleGuideUI,
});

function TempleGuideUI() {
  const { toggleFavorite, isFavorite } = useApp();
  const [filterCat, setFilterCat] = useState<string>("all");

  const filteredTemples = MOCK_TEMPLES.filter((t) =>
    filterCat === "all" ? true : t.category === filterCat
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="eyebrow block text-xs text-saffron">SACRED SHRINES & TEMPLES</span>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground flex items-center gap-2">
              Sabarimala Temple Guide
              <Landmark className="w-6 h-6 text-saffron" />
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Explore Sabarimala Sannidhanam, Pamba Ganapathy, Erumely, and sacred transit shrines.
            </p>
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex border-b border-gold/20 gap-2 overflow-x-auto pb-2">
          {[
            { id: "all", label: "All Temples" },
            { id: "sannidhanam", label: "Sannidhanam" },
            { id: "pamba", label: "Pamba River Shrines" },
            { id: "nearby", label: "Nearby Transit Temples" },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => setFilterCat(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                filterCat === c.id
                  ? "bg-gradient-devotional text-white shadow"
                  : "bg-card text-muted-foreground hover:text-foreground border border-gold/20"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Temples List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTemples.map((temple) => (
            <div
              key={temple.id}
              className="bg-card border border-gold/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <button
                    onClick={() => toggleFavorite(temple.id)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center hover:scale-110 transition"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isFavorite(temple.id) ? "text-red-500 fill-red-500" : "text-white"
                      }`}
                    />
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-maroon px-2.5 py-0.5 rounded-md">
                      {temple.distance}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white mt-1 leading-tight">
                      {temple.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs text-muted-foreground line-clamp-2">{temple.description}</p>

                  <div className="text-xs space-y-1 pt-2 border-t border-border/40">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-3.5 h-3.5 text-saffron shrink-0" />
                      <span>{temple.timings}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-border/40 mt-4">
                <Link
                  to="/temples/$id"
                  params={{ id: temple.id }}
                  className="w-full py-3 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow hover:opacity-95 transition flex items-center justify-center gap-2"
                >
                  VIEW TEMPLE DETAILS & RITUALS <ArrowRight className="w-4 h-4 text-gold" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
