import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { CloudSun, Droplets, Wind, Thermometer, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/weather")({
  component: WeatherPageUI,
});

function WeatherPageUI() {
  const [location, setLocation] = useState<"sabarimala" | "pamba" | "home">("sabarimala");

  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <span className="eyebrow block text-xs text-saffron">REAL-TIME FORECAST</span>
            <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              Sabarimala Mountain Weather
              <CloudSun className="w-6 h-6 text-saffron" />
            </h1>
          </div>
        </div>

        {/* Location selector */}
        <div className="flex gap-2 border-b border-gold/20 pb-2">
          {[
            { id: "sabarimala", label: "Sabarimala Sannidhanam" },
            { id: "pamba", label: "Pamba River Base" },
            { id: "home", label: "Chennai Origin" },
          ].map((loc) => (
            <button
              key={loc.id}
              onClick={() => setLocation(loc.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                location === loc.id
                  ? "bg-gradient-devotional text-white shadow"
                  : "bg-ivory text-muted-foreground border border-gold/20"
              }`}
            >
              {loc.label}
            </button>
          ))}
        </div>

        {/* Main Weather Banner */}
        <div className="bg-gradient-to-br from-ink via-maroon to-ink text-white rounded-3xl p-8 border border-gold/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs text-gold-warm font-semibold block uppercase">
              Current Condition
            </span>
            <h2 className="text-5xl sm:text-6xl font-display font-bold text-white mt-1">24°C</h2>
            <p className="text-sm font-serif italic text-gold mt-1">Clear Mountain Sky & Cool Mist</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <Droplets className="w-5 h-5 text-gold mx-auto mb-1" />
              <span className="text-[10px] text-ivory/60 block">Humidity</span>
              <span className="font-bold text-sm text-white">78%</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <Wind className="w-5 h-5 text-gold mx-auto mb-1" />
              <span className="text-[10px] text-ivory/60 block">Wind Speed</span>
              <span className="font-bold text-sm text-white">12 km/h</span>
            </div>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 flex items-start gap-3 text-xs">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block">Mountain Rain Advisory:</strong>
            <span>Light evening mist expected on Neeli Mala hill trek around 6:00 PM. Keep lightweight rain jackets ready.</span>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
