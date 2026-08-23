import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { MOCK_ACCOMMODATION } from "@/lib/mockData";
import { Hotel, Star, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/accommodation")({
  component: AccommodationUI,
});

function AccommodationUI() {
  const [type, setType] = useState<string>("all");

  const filteredAcc = MOCK_ACCOMMODATION.filter((a) =>
    type === "all" ? true : a.type === type
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="eyebrow block text-xs text-saffron">PILGRIM STAY DISCOVERY</span>
            <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              Accommodation & Cottage Booking
              <Hotel className="w-6 h-6 text-saffron" />
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Find pre-booked cottages, lodges, guest houses, and rest areas at Nilakkal, Pamba & Sannidhanam.
            </p>
          </div>
        </div>

        <div className="flex border-b border-gold/20 gap-2 overflow-x-auto pb-2">
          {[
            { id: "all", label: "All Properties" },
            { id: "hotel", label: "Hotels & Cottages" },
            { id: "guesthouse", label: "Devaswom Guest Houses" },
            { id: "dormitory", label: "Common Dormitories" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setType(t.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                type === t.id
                  ? "bg-gradient-devotional text-white shadow"
                  : "bg-card text-muted-foreground hover:text-foreground border border-gold/20"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAcc.map((acc) => (
            <div
              key={acc.id}
              className="bg-card border border-gold/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img src={acc.image} alt={acc.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase bg-saffron px-2 py-0.5 rounded-md">
                        {acc.location}
                      </span>
                      <h3 className="font-display font-bold text-lg text-white mt-1">{acc.name}</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-display font-bold text-gold">₹{acc.price}</span>
                      <span className="text-[10px] block opacity-80">/ night</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 text-saffron shrink-0" />
                    <span>{acc.distance}</span>
                    <span className="ml-auto flex items-center gap-1 text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      ★ {acc.rating} ({acc.reviews})
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {acc.amenities.map((am, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-ivory text-muted-foreground px-2 py-0.5 rounded-md border border-gold/20"
                      >
                        ✓ {am}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-border/40 mt-3">
                <Link
                  to="/accommodation/$id"
                  params={{ id: acc.id }}
                  className="w-full py-2.5 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow hover:opacity-95 transition flex items-center justify-center gap-2"
                >
                  RESERVE ROOM / COTTAGE <ArrowRight className="w-4 h-4 text-gold" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
