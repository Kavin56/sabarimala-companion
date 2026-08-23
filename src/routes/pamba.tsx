import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useApp } from "@/context/AppContext";
import { MapPin, Volume2, ShieldCheck, Waves, Flame, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pamba")({
  component: PambaGuideUI,
});

function PambaGuideUI() {
  const { playPageVoice } = useApp();

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Banner */}
        <div className="relative rounded-3xl overflow-hidden h-64 sm:h-80 shadow-xl border border-gold/30">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
            alt="Pamba River"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="eyebrow block text-xs text-gold-warm mb-1">FOOTHILLS OF SABARIMALA</span>
              <h1 className="text-3xl sm:text-5xl font-display font-bold text-white">
                Pamba Sacred River Guide
              </h1>
              <p className="text-xs sm:text-sm text-ivory/80 mt-1 font-serif italic">
                "The holy river where Ayyappas perform sacred immersion and offer Kettunira before climbing."
              </p>
            </div>

            <button
              onClick={() =>
                playPageVoice(
                  "Welcome to Pamba. Take your holy river dip safely holding the metal railings, perform Ganapathy pooja, and check your Irumudi."
                )
              }
              className="px-4 py-2.5 rounded-xl bg-saffron text-white font-bold text-xs shadow hover:bg-saffron/90 transition shrink-0 flex items-center gap-2"
            >
              <Volume2 className="w-4 h-4" /> LISTEN TO PAMBA GUIDE
            </button>
          </div>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm space-y-3">
            <h3 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
              <Waves className="w-5 h-5 text-saffron" /> Pamba River Immersion Rules
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Always hold the metal safety railings installed along the river ghats. Do not use chemical soaps or plastic in the holy river. Place your Irumudi Kettu safely on the elevated concrete mandapams.
            </p>
          </div>

          <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm space-y-3">
            <h3 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
              <Flame className="w-5 h-5 text-maroon" /> Kettunira & Ganapathy Temple
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Visit Pamba Sree Maha Ganapathy Temple immediately after river bath. Offer Ganapathy Homam and seek divine blessings before beginning the steep Neeli Mala ascent.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            to="/pilgrimage-route"
            className="px-6 py-3.5 rounded-2xl bg-gradient-devotional text-white font-bold text-xs shadow-lg hover:opacity-95 transition inline-flex items-center gap-2"
          >
            EXPLORE NEELI MALA TREK ROUTE <ArrowRight className="w-4 h-4 text-gold" />
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
