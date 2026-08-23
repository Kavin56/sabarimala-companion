import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { MapPin, Navigation, Landmark, Heart } from "lucide-react";

export const Route = createFileRoute("/nearby-temples")({
  component: NearbyTemplesUI,
});

function NearbyTemplesUI() {
  const NEARBY = [
    { name: "Ayyappa Temple — Pamba Ghat", dist: "2.4 km", desc: "Holy immersion & Ganapathy pooja" },
    { name: "Shiva Temple — Chengannur", dist: "3.8 km", desc: "Ancient Mahadeva transit temple" },
    { name: "Devi Temple — Chottanikkara", dist: "5.1 km", desc: "Sacred Bhagavathy shrine" },
    { name: "Ganapathy Temple — Kottarakkara", dist: "6.2 km", desc: "Famous Unniyappam offering" },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <span className="eyebrow block text-xs text-saffron">TRANSIT SHRINES</span>
            <h1 className="text-2xl font-display font-bold text-foreground">Nearby Shrines & Temples</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {NEARBY.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-3xl bg-card border border-gold/20 hover:border-gold shadow-sm flex items-start justify-between gap-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-saffron/10 text-saffron flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">{item.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  <span className="text-[10px] text-saffron font-bold block mt-2">
                    Distance: {item.dist}
                  </span>
                </div>
              </div>

              <Link
                to="/temples"
                className="p-2 rounded-xl bg-secondary text-foreground hover:bg-gold/20 text-xs font-bold shrink-0"
              >
                MAP →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
