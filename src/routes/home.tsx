import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useApp } from "@/context/AppContext";
import { MOCK_USER, MOCK_NOTIFICATIONS } from "@/lib/mockData";
import {
  Flame,
  Compass,
  Bus,
  Train,
  Gift,
  Landmark,
  ShieldAlert,
  CloudSun,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Clock,
  Sparkles,
  ChevronRight,
  UtensilsCrossed,
  Hotel,
  Video,
} from "lucide-react";

export const Route = createFileRoute("/home")({
  component: HomeDashboardUI,
});

function HomeDashboardUI() {
  const { vrathamProgress, toggleVrathamTask } = useApp();

  return (
    <AppLayout>
      <div className="space-y-6 sm:space-y-8">
        {/* Banner Welcome Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-ink via-maroon to-ink p-6 sm:p-8 text-ivory overflow-hidden shadow-2xl border border-gold/30">
          <div className="absolute top-0 right-0 w-80 h-80 bg-saffron/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="eyebrow block text-xs text-gold-warm mb-1">
                SWAMIYE SARANAM AYYAPPA
              </span>
              <h1 className="text-2xl sm:text-4xl font-display font-bold text-white leading-tight">
                Welcome back, {MOCK_USER.name}
              </h1>
              <p className="text-xs sm:text-sm text-ivory/80 mt-1 max-w-xl font-serif italic">
                "May your 41-day sacred Vratham bring purity, strength, and divine peace on your journey to Sabarimala."
              </p>
            </div>

            <Link
              to="/live-journey"
              className="px-5 py-3 rounded-2xl bg-saffron text-white font-bold text-xs shadow-lg hover:bg-saffron/90 transition shrink-0 flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-gold animate-spin" /> LIVE JOURNEY STATUS
            </Link>
          </div>
        </div>

        {/* Top Grid: Countdown & Journey Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pilgrimage Countdown Card */}
          <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-saffron uppercase tracking-widest flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> PILGRIMAGE COUNTDOWN
              </span>
              <span className="px-3 py-1 rounded-full bg-cream text-maroon font-bold text-xs">
                {MOCK_USER.yathraDate}
              </span>
            </div>

            <div className="my-4 text-center">
              <div className="text-5xl sm:text-6xl font-display font-bold text-maroon tracking-tight">
                31 DAYS
              </div>
              <p className="text-xs font-semibold text-muted-foreground mt-1">
                Until Your Scheduled Sabarimala Yathra
              </p>
            </div>

            <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
              <span>Guruswamy: <strong>{MOCK_USER.guruswamy}</strong></span>
              <Link to="/journey-plan" className="text-saffron font-bold hover:underline">
                View Itinerary →
              </Link>
            </div>
          </div>

          {/* Overall Pilgrimage Progress (60%) */}
          <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-md flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-saffron uppercase tracking-widest flex items-center gap-1.5">
                <Compass className="w-4 h-4" /> JOURNEY PROGRESS
              </span>
              <span className="text-xl font-display font-bold text-maroon">60%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-3 bg-secondary rounded-full overflow-hidden my-3">
              <div className="h-full bg-gradient-to-r from-saffron to-gold w-[60%] transition-all duration-1000" />
            </div>

            {/* Stage Steps */}
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-1 text-center my-2">
              {[
                { stage: "Preparation", status: "done" },
                { stage: "Vratham", status: "done" },
                { stage: "Packing", status: "done" },
                { stage: "Travel", status: "current" },
                { stage: "Pamba", status: "upcoming" },
                { stage: "Sannidhanam", status: "upcoming" },
                { stage: "Return", status: "upcoming" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center ${
                      s.status === "done"
                        ? "bg-green-600 text-white"
                        : s.status === "current"
                        ? "bg-saffron text-white ring-2 ring-gold animate-bounce"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {s.status === "done" ? "✓" : i + 1}
                  </div>
                  <span className="text-[9px] font-semibold text-muted-foreground mt-1 truncate w-full">
                    {s.stage}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/my-journey"
              className="mt-2 text-xs text-center text-saffron font-bold hover:underline block"
            >
              View Detailed Timeline & Stages →
            </Link>
          </div>
        </div>

        {/* Vratham Card Section */}
        <div className="bg-gradient-to-br from-cream via-ivory to-cream border border-gold/40 rounded-3xl p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gold/20 pb-4 mb-4">
            <div>
              <span className="eyebrow block text-[10px] text-maroon">SACRED DISCIPLINE</span>
              <h3 className="font-display font-bold text-xl text-ink flex items-center gap-2">
                VRATHAM DAY 10 / 41
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-saffron text-white font-sans font-semibold">
                  31 DAYS REMAINING
                </span>
              </h3>
            </div>
            <Link
              to="/vratham"
              className="px-4 py-2 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow hover:opacity-95 transition"
            >
              CONTINUE VRATHAM GUIDE →
            </Link>
          </div>

          {/* Daily Routine Checkmarks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: "day10-morning", label: "Morning Bath & Pooja", time: "05:30 AM" },
              { id: "day10-afternoon", label: "Satvik Lunch Routine", time: "01:00 PM" },
              { id: "day10-evening", label: "Evening Lamp & Bhajan", time: "06:30 PM" },
              { id: "day10-night", label: "Night Light Meal & Prayer", time: "09:00 PM" },
            ].map((task) => {
              const isDone = !!vrathamProgress[task.id];
              return (
                <button
                  key={task.id}
                  onClick={() => toggleVrathamTask(task.id)}
                  className={`p-3.5 rounded-2xl border text-left transition flex items-start justify-between ${
                    isDone
                      ? "bg-white border-green-500/50 shadow-sm"
                      : "bg-white/60 border-gold/30 hover:border-gold"
                  }`}
                >
                  <div>
                    <span className="text-[10px] text-muted-foreground font-semibold block">
                      {task.time}
                    </span>
                    <span className="font-bold text-xs text-ink block">{task.label}</span>
                  </div>
                  <CheckCircle2
                    className={`w-5 h-5 shrink-0 ml-2 ${
                      isDone ? "text-green-600 fill-green-100" : "text-muted-foreground/40"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-xl text-foreground">Quick Pilgrimage Actions</h3>
            <span className="text-xs text-muted-foreground">Select any module to navigate</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: "Vratham Guide", route: "/vratham", icon: Flame, color: "text-saffron" },
              { label: "Packing List", route: "/packing", icon: CheckCircle2, color: "text-green-600" },
              { label: "Travel Planner", route: "/travel", icon: Bus, color: "text-maroon" },
              { label: "Bus Booking", route: "/travel/bus", icon: Bus, color: "text-saffron" },
              { label: "Train Booking", route: "/travel/train", icon: Train, color: "text-maroon" },
              { label: "Packages", route: "/packages", icon: Gift, color: "text-gold" },
              { label: "Temple Guide", route: "/temples", icon: Landmark, color: "text-saffron" },
              { label: "Food Guide", route: "/food", icon: UtensilsCrossed, color: "text-green-600" },
              { label: "Accommodation", route: "/accommodation", icon: Hotel, color: "text-maroon" },
              { label: "Video Hub", route: "/videos", icon: Video, color: "text-devotional" },
              { label: "My Journey", route: "/my-journey", icon: Compass, color: "text-saffron" },
              { label: "Emergency SOS", route: "/emergency", icon: ShieldAlert, color: "text-red-600" },
            ].map((act, i) => {
              const Icon = act.icon;
              return (
                <Link
                  key={i}
                  to={act.route}
                  className="p-4 rounded-2xl bg-card border border-gold/20 hover:border-gold hover:shadow-lg transition flex flex-col items-center justify-center text-center group"
                >
                  <div className="w-10 h-10 rounded-xl bg-ivory border border-gold/30 flex items-center justify-center mb-2 group-hover:scale-110 transition">
                    <Icon className={`w-5 h-5 ${act.color}`} />
                  </div>
                  <span className="font-bold text-xs text-foreground group-hover:text-saffron leading-tight">
                    {act.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Split: Upcoming Reminders & Sabarimala Weather */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Reminders */}
          <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
            <h3 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-saffron" /> Upcoming Reminders
            </h3>

            <div className="space-y-3">
              {MOCK_NOTIFICATIONS.map((n) => (
                <div
                  key={n.id}
                  className="p-3.5 rounded-2xl bg-ivory border border-gold/20 flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-saffron/10 text-saffron flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-foreground">{n.title}</h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{n.message}</p>
                    <span className="text-[10px] text-saffron font-medium mt-1 block">
                      {n.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weather Widget */}
          <div className="bg-gradient-to-br from-ink to-maroon text-ivory border border-gold/30 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="eyebrow block text-xs text-gold-warm">LIVE FORECAST</span>
                <CloudSun className="w-6 h-6 text-gold" />
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-display font-bold text-white">24°C</span>
                <span className="text-sm font-semibold text-gold-warm">Clear Mountain Sky</span>
              </div>
              <p className="text-xs text-ivory/70 mt-1">Sabarimala & Pamba Region</p>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-white/10 text-center">
              <div>
                <span className="block text-[10px] text-ivory/60">Rain Prob.</span>
                <span className="font-bold text-xs text-gold">15%</span>
              </div>
              <div>
                <span className="block text-[10px] text-ivory/60">Humidity</span>
                <span className="font-bold text-xs text-gold">78%</span>
              </div>
              <div>
                <span className="block text-[10px] text-ivory/60">Wind</span>
                <span className="font-bold text-xs text-gold">12 km/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
