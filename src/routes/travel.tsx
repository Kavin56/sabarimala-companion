import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Bus, Train, Car, Gift, Search, MapPin, Calendar, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/travel")({
  component: TravelPlannerHubUI,
});

function TravelPlannerHubUI() {
  const navigate = useNavigate();
  const [from, setFrom] = useState("Chennai Koyambedu");
  const [to, setTo] = useState("Sabarimala / Pamba");
  const [date, setDate] = useState("2026-11-15");
  const [passengers, setPassengers] = useState("2");
  const [activeTab, setActiveTab] = useState<"bus" | "train" | "car" | "packages">("bus");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "bus") navigate({ to: "/travel/bus" });
    else if (activeTab === "train") navigate({ to: "/travel/train" });
    else if (activeTab === "car") navigate({ to: "/travel/car" });
    else navigate({ to: "/packages" });
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header Hero */}
        <div className="rounded-3xl bg-gradient-to-r from-ink via-maroon to-ink p-6 sm:p-8 text-ivory border border-gold/30 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="eyebrow block text-xs text-gold-warm mb-1">TRAVEL DISCOVERY PLATFORM</span>
            <h1 className="text-2xl sm:text-4xl font-display font-bold text-white mb-2">
              Sabarimala Travel Planner
            </h1>
            <p className="text-xs sm:text-sm text-ivory/80 max-w-xl font-serif italic">
              "Discover KSRTC buses, Southern Railway trains, private car road routes, and all-inclusive pilgrimage packages."
            </p>
          </div>
        </div>

        {/* Travel Search Form Card */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-lg">
          {/* Mode Selector Tabs */}
          <div className="flex border-b border-gold/20 gap-2 mb-6 overflow-x-auto pb-2">
            {[
              { id: "bus", label: "BUS TRAVEL", icon: Bus },
              { id: "train", label: "TRAIN TRAVEL", icon: Train },
              { id: "car", label: "CAR / PRIVATE", icon: Car },
              { id: "packages", label: "YATHRA PACKAGES", icon: Gift },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-3 rounded-2xl font-bold text-xs flex items-center gap-2 transition whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-gradient-devotional text-white shadow-md"
                      : "bg-ivory text-muted-foreground hover:text-foreground border border-gold/20"
                  }`}
                >
                  <Icon className="w-4 h-4" /> {tab.label}
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">From Origin City</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none font-medium text-ink"
                  />
                  <MapPin className="w-4 h-4 text-saffron absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">To Destination</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none font-medium text-ink"
                  />
                  <MapPin className="w-4 h-4 text-devotional absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Journey Date</label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none font-medium text-ink"
                  />
                  <Calendar className="w-4 h-4 text-gold absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Devotees / Passengers</label>
                <div className="relative">
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none font-medium text-ink"
                  >
                    <option value="1">1 Pilgrim</option>
                    <option value="2">2 Pilgrims</option>
                    <option value="4">4 Pilgrims (Group)</option>
                    <option value="10">10+ Group Yathra</option>
                  </select>
                  <Users className="w-4 h-4 text-saffron absolute left-3 top-3" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-devotional text-white font-bold text-sm shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5 text-gold" /> SEARCH AVAILABLE {activeTab.toUpperCase()} ROUTES
            </button>
          </form>
        </div>

        {/* Quick Travel Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/travel/bus"
            className="p-5 rounded-3xl bg-card border border-gold/20 hover:border-gold shadow-sm hover:shadow-md transition flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-saffron/10 text-saffron flex items-center justify-center group-hover:scale-110 transition shrink-0">
              <Bus className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground group-hover:text-saffron">KSRTC & Private Buses</h4>
              <p className="text-xs text-muted-foreground mt-0.5">AC Volvo Sleepers to Nilakkal / Pamba</p>
            </div>
          </Link>

          <Link
            to="/travel/train"
            className="p-5 rounded-3xl bg-card border border-gold/20 hover:border-gold shadow-sm hover:shadow-md transition flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-maroon/10 text-maroon flex items-center justify-center group-hover:scale-110 transition shrink-0">
              <Train className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground group-hover:text-maroon">Southern Railway Trains</h4>
              <p className="text-xs text-muted-foreground mt-0.5">Trains to Chengannur & Kottayam</p>
            </div>
          </Link>

          <Link
            to="/packages"
            className="p-5 rounded-3xl bg-card border border-gold/20 hover:border-gold shadow-sm hover:shadow-md transition flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gold/20 text-maroon flex items-center justify-center group-hover:scale-110 transition shrink-0">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground group-hover:text-gold">Pilgrimage Packages</h4>
              <p className="text-xs text-muted-foreground mt-0.5">All-inclusive stay, food & Guruswamy</p>
            </div>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
