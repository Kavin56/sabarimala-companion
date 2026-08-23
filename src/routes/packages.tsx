import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { MOCK_PACKAGES } from "@/lib/mockData";
import { Gift, Star, Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/packages")({
  component: PilgrimagePackagesUI,
});

function PilgrimagePackagesUI() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="eyebrow block text-xs text-saffron">ALL-INCLUSIVE YATHRA</span>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground flex items-center gap-2">
              Pilgrimage Packages Marketplace
              <Gift className="w-6 h-6 text-gold" />
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Curated Ayyappa Yathra packages with Guruswamy guide, AC transport, pure veg food, and pre-booked stay.
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-card border border-gold/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                {/* Image & Price Overlay */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-saffron px-2.5 py-0.5 rounded-md">
                        {pkg.duration}
                      </span>
                      <h3 className="font-display font-bold text-lg text-white mt-1 leading-tight">
                        {pkg.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] opacity-80 block">Starting from</span>
                      <span className="text-2xl font-display font-bold text-gold">₹{pkg.price}</span>
                    </div>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-muted-foreground">{pkg.subtitle}</p>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-border/40">
                    <div>
                      <span className="text-[10px] text-muted-foreground block">Origin:</span>
                      <strong className="text-foreground">{pkg.startingPoint}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground block">Transport:</span>
                      <strong className="text-foreground">{pkg.transport}</strong>
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {pkg.inclusions.map((inc, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-ivory text-maroon font-medium px-2.5 py-0.5 rounded-full border border-gold/20"
                      >
                        ✓ {inc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-border/40 mt-4">
                <Link
                  to="/packages/$id"
                  params={{ id: pkg.id }}
                  className="w-full py-3 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow hover:opacity-95 transition flex items-center justify-center gap-2"
                >
                  VIEW FULL ITINERARY & BOOK <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
