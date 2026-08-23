import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { MOCK_TRAINS } from "@/lib/mockData";
import { Train, Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/travel/train")({
  component: TrainSearchResultsUI,
});

function TrainSearchResultsUI() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState<string>("SL");

  const handleSelectTrainClass = () => {
    navigate({ to: "/booking/passengers" });
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-card border border-gold/30 rounded-3xl p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="eyebrow block text-[10px] text-maroon">SOUTHERN RAILWAY TRAINS</span>
            <h1 className="text-xl sm:text-2xl font-display font-bold text-foreground flex items-center gap-2">
              Chennai Central (MAS) <ArrowRight className="w-4 h-4 text-gold" /> Chengannur (CNGR)
            </h1>
            <p className="text-xs text-muted-foreground">
              Nov 15, 2026 • 2 Pilgrims • Nearest Railway Station to Sabarimala
            </p>
          </div>

          <Link
            to="/travel"
            className="px-4 py-2 rounded-xl bg-secondary text-foreground text-xs font-semibold hover:bg-gold/20 transition"
          >
            MODIFY SEARCH
          </Link>
        </div>

        {/* Train List */}
        <div className="space-y-4">
          {MOCK_TRAINS.map((tr) => (
            <div
              key={tr.id}
              className="bg-card border border-gold/30 rounded-3xl p-5 shadow-sm space-y-4"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gold/20 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-maroon/10 text-maroon font-bold text-xs flex items-center justify-center">
                    🚂
                  </span>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-foreground">
                      {tr.number} - {tr.name}
                    </h3>
                    <span className="text-[11px] text-muted-foreground">
                      Runs Daily • Superfast Express
                    </span>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  Duration: <strong className="text-saffron">{tr.duration}</strong>
                </div>
              </div>

              {/* Station Timings */}
              <div className="flex items-center justify-between max-w-md">
                <div>
                  <span className="text-base font-display font-bold text-foreground">{tr.departure}</span>
                  <span className="block text-[10px] text-muted-foreground">{tr.from}</span>
                </div>
                <div className="text-[10px] text-muted-foreground font-semibold">━━━━━ Express ━━━━━</div>
                <div>
                  <span className="text-base font-display font-bold text-foreground">{tr.arrival}</span>
                  <span className="block text-[10px] text-muted-foreground">{tr.to}</span>
                </div>
              </div>

              {/* Class Availability Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {tr.classes.map((c) => (
                  <div
                    key={c.code}
                    onClick={handleSelectTrainClass}
                    className="p-3 rounded-2xl bg-ivory border border-gold/30 hover:border-saffron cursor-pointer transition flex flex-col justify-between group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs text-maroon">{c.name} ({c.code})</span>
                      <span className="font-bold text-xs text-foreground">₹{c.price}</span>
                    </div>

                    <span
                      className={`text-[10px] font-bold block mt-2 ${
                        c.status === "AVAILABLE" ? "text-green-600" : "text-amber-600"
                      }`}
                    >
                      {c.availability}
                    </span>

                    <span className="text-[9px] text-saffron font-bold group-hover:underline mt-2 block">
                      BOOK NOW →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
