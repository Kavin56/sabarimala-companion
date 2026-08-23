import React from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Home,
  Compass,
  Flame,
  PackageCheck,
  Bus,
  Train,
  Gift,
  Landmark,
  MapPin,
  UtensilsCrossed,
  Hotel,
  Video,
  Users,
  Bell,
  CloudSun,
  ShieldAlert,
  Heart,
  WifiOff,
  ShieldCheck,
  User,
  Sparkles,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

export const APP_NAV_ITEMS = [
  { label: "HOME", path: "/home", icon: Home },
  { label: "MY JOURNEY", path: "/my-journey", icon: Compass },
  { label: "VRATHAM", path: "/vratham", icon: Flame },
  { label: "PACKING", path: "/packing", icon: PackageCheck },
  { label: "TRAVEL PLANNER", path: "/travel", icon: Bus },
  { label: "BUS", path: "/travel/bus", icon: Bus },
  { label: "TRAIN", path: "/travel/train", icon: Train },
  { label: "PACKAGES", path: "/packages", icon: Gift },
  { label: "TEMPLES", path: "/temples", icon: Landmark },
  { label: "NEARBY TEMPLES", path: "/nearby-temples", icon: MapPin },
  { label: "FOOD GUIDE", path: "/food", icon: UtensilsCrossed },
  { label: "ACCOMMODATION", path: "/accommodation", icon: Hotel },
  { label: "VIDEO HUB", path: "/videos", icon: Video },
  { label: "COMMUNITY", path: "/community", icon: Users },
  { label: "NOTIFICATIONS", path: "/notifications", icon: Bell },
  { label: "WEATHER", path: "/weather", icon: CloudSun },
  { label: "EMERGENCY", path: "/emergency", icon: ShieldAlert },
];

export const SECONDARY_NAV_ITEMS = [
  { label: "FAVORITES", path: "/favorites", icon: Heart },
  { label: "OFFLINE CONTENT", path: "/offline", icon: WifiOff },
  { label: "FAMILY SAFETY", path: "/family-safety", icon: ShieldCheck },
  { label: "PROFILE & SETTINGS", path: "/profile", icon: User },
];

export const AppSidebar: React.FC = () => {
  const location = useLocation();
  const { simpleMode } = useApp();

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-gold/20 bg-ink text-ivory h-screen sticky top-0 shrink-0 z-30 shadow-xl overflow-y-auto">
      {/* Brand Header */}
      <div className="p-5 border-b border-white/10 bg-gradient-to-b from-maroon to-ink">
        <Link to="/home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-saffron flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition">
            🔥
          </div>
          <div>
            <span className="eyebrow block text-[10px] text-gold-warm">SRI SRI SHABHARISH GURUJI</span>
            <h1 className="font-display font-bold text-base tracking-wide text-white leading-tight">
              Ayyappa Yathra
            </h1>
          </div>
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 py-4 px-3 space-y-1">
        <div className="px-3 pb-2 text-[10px] font-semibold text-gold/70 tracking-widest uppercase">
          Pilgrimage Dashboard
        </div>

        {APP_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-sans transition-all text-xs font-semibold ${
                isActive
                  ? "bg-gradient-to-r from-saffron to-maroon text-white shadow-md font-bold"
                  : "text-ivory/80 hover:bg-white/5 hover:text-gold-warm"
              } ${simpleMode ? "py-3.5 text-sm" : ""}`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-gold" : "text-gold/60"}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}

        <div className="pt-4 pb-2 px-3 border-t border-white/10 text-[10px] font-semibold text-gold/70 tracking-widest uppercase">
          Saved & Safety
        </div>

        {SECONDARY_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-sans transition-all text-xs font-semibold ${
                isActive
                  ? "bg-saffron/20 border border-saffron/40 text-gold-warm font-bold"
                  : "text-ivory/80 hover:bg-white/5 hover:text-gold-warm"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-saffron" : "text-gold/60"}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Bottom Footer Widget */}
      <div className="p-4 border-t border-white/10 bg-maroon/40 text-center">
        <div className="text-[11px] font-display text-gold-warm flex items-center justify-center gap-1">
          <Sparkles className="w-3 h-3" /> Swamiye Saranam Ayyappa
        </div>
        <p className="text-[10px] text-ivory/50 mt-1">Digital Pilgrimage Companion</p>
      </div>
    </aside>
  );
};
