import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { MOCK_CHECKPOINTS } from "@/lib/mockData";
import { MapPin, Navigation, ArrowRight, ShieldCheck, Heart } from "lucide-react";

export const Route = createFileRoute("/pilgrimage-route")({
  component: PilgrimageRouteUI,
});

function PilgrimageRouteUI() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <span className="eyebrow block text-xs text-saffron">MOUNTAIN ASCENT</span>
            <h1 className="text-2xl font-display font-bold text-foreground">
              Pilgrimage Route & Checkpoints
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Explore Neeli Mala, Appachi Medu, Marakkootam, and Sannidhanam trek path locations.
            </p>
          </div>

          <Link
            to="/route-map"
            className="px-4 py-2.5 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow hover:opacity-95 transition"
          >
            INTERACTIVE MAP →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_CHECKPOINTS.map((chk) => (
            <div
              key={chk.id}
              className="bg-card border border-gold/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img src={chk.image} alt={chk.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase bg-saffron px-2 py-0.5 rounded-md">
                      {chk.distance}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white mt-1">{chk.name}</h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs text-muted-foreground">{chk.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {chk.facilities.map((f, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-ivory text-maroon font-medium px-2 py-0.5 rounded-md border border-gold/20"
                      >
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-border/40 mt-3">
                <Link
                  to="/checkpoint/$id"
                  params={{ id: chk.id }}
                  className="w-full py-2.5 rounded-xl bg-secondary text-foreground font-bold text-xs border border-border hover:bg-gold/20 transition flex items-center justify-center gap-2"
                >
                  VIEW CHECKPOINT DETAILS →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
