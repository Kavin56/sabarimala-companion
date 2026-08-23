import { createFileRoute, useParams, useNavigate } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { MOCK_ACCOMMODATION } from "@/lib/mockData";
import { Hotel, MapPin, Star, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/accommodation/$id")({
  component: AccommodationDetailsUI,
});

function AccommodationDetailsUI() {
  const { id } = useParams({ from: "/accommodation/$id" });
  const navigate = useNavigate();
  const acc = MOCK_ACCOMMODATION.find((a) => a.id === id) || MOCK_ACCOMMODATION[0]!;

  const handleReserve = () => {
    navigate({ to: "/booking/passengers" });
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="relative rounded-3xl overflow-hidden h-64 sm:h-80 shadow-xl border border-gold/30">
          <img src={acc.image} alt={acc.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="eyebrow block text-xs text-gold-warm mb-1">{acc.location}</span>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">{acc.name}</h1>
              <span className="text-xs text-ivory/80 block mt-1">{acc.distance}</span>
            </div>

            <div className="bg-ink/80 backdrop-blur border border-gold/40 p-4 rounded-2xl text-right shrink-0">
              <span className="text-[10px] text-ivory/60 block">Price starting from</span>
              <span className="text-3xl font-display font-bold text-gold">₹{acc.price}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Available Room Types</h3>
              <div className="space-y-3">
                {acc.rooms.map((rm, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-ivory border border-gold/20 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-sm text-foreground">{rm.type}</h4>
                      <span className="text-xs text-muted-foreground block font-medium">Capacity: {rm.capacity}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-display font-bold text-maroon block">₹{rm.price}</span>
                      <button
                        onClick={handleReserve}
                        className="mt-1 px-4 py-1.5 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow hover:opacity-95 transition"
                      >
                        RESERVE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Amenities Included</h3>
              <div className="flex flex-wrap gap-2">
                {acc.amenities.map((am, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-cream text-maroon font-bold text-xs border border-gold/20">
                    ✓ {am}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm h-fit space-y-4">
            <h3 className="font-display font-bold text-lg text-foreground border-b border-gold/20 pb-2">
              Reserve Room
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-foreground mb-1">Check-in Date</label>
                <input type="date" defaultValue="2026-11-15" className="w-full px-3 py-2 rounded-xl bg-ivory border border-gold/30 text-ink outline-none" />
              </div>
              <div>
                <label className="block font-semibold text-foreground mb-1">Check-out Date</label>
                <input type="date" defaultValue="2026-11-16" className="w-full px-3 py-2 rounded-xl bg-ivory border border-gold/30 text-ink outline-none" />
              </div>
            </div>

            <button
              onClick={handleReserve}
              className="w-full py-3.5 rounded-2xl bg-gradient-devotional text-white font-bold text-xs shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2"
            >
              PROCEED TO BOOKING <ArrowRight className="w-4 h-4 text-gold" />
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
