import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useApp } from "@/context/AppContext";
import {
  Search,
  Bell,
  CloudSun,
  Mic,
  User,
  Menu,
  Eye,
  ChevronRight,
  Flame,
  Volume2,
} from "lucide-react";
import { MOCK_USER } from "@/lib/mockData";

export const TopNavbar: React.FC<{ onOpenMobileMenu: () => void }> = ({ onOpenMobileMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { simpleMode, toggleSimpleMode, playPageVoice, setIsVoiceOpen } = useApp();
  const [searchQuery, setSearchQuery] = useState("");

  const getPageTitle = (path: string) => {
    switch (path) {
      case "/home": return "Home Dashboard";
      case "/my-journey": return "My Journey Timeline";
      case "/vratham": return "41-Day Vratham Guide";
      case "/packing": return "Yathra Packing Checklist";
      case "/travel": return "Travel Planner Hub";
      case "/travel/bus": return "Bus Travel Search";
      case "/travel/train": return "Train Travel Search";
      case "/travel/car": return "Car & Private Road Planner";
      case "/packages": return "Pilgrimage Packages";
      case "/journey-plan": return "Day-by-Day Journey Itinerary";
      case "/route": return "Pilgrimage Route Checkpoints";
      case "/pamba": return "Pamba Sacred River Guide";
      case "/pilgrimage-route": return "Trek Route Locations";
      case "/sannidhanam": return "Sannidhanam & 18 Holy Steps";
      case "/temples": return "Sacred Temple Guide";
      case "/nearby-temples": return "Nearby Temples Explorer";
      case "/food": return "Devotional Food & Fasting Guide";
      case "/accommodation": return "Accommodation & Stay Booking";
      case "/videos": return "Devotional Video Hub";
      case "/community": return "Ayyappa Bhakthan Community";
      case "/notifications": return "Alerts & Notifications";
      case "/weather": return "Live Sabarimala Weather";
      case "/emergency": return "Emergency SOS & Police Assistance";
      case "/favorites": return "My Saved Favorites";
      case "/offline": return "Offline Downloaded Content";
      case "/family-safety": return "Family Safety & Location Sharing";
      case "/live-journey": return "Live Pilgrimage Status";
      case "/profile": return "My Profile & Settings";
      default: return "Sri Sri Shabharish Guruji Yathra";
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({ to: "/temples" });
    }
  };

  return (
    <header className="sticky top-0 z-20 bg-card/95 backdrop-blur border-b border-gold/20 shadow-xs px-4 sm:px-6 py-3 flex items-center justify-between transition-all">
      {/* Left: Mobile menu button & Breadcrumb */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-xl bg-secondary text-foreground hover:bg-gold/20 transition"
          title="Open Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-muted-foreground font-medium">
            <span>Pilgrimage</span>
            <ChevronRight className="w-3 h-3 text-gold" />
            <span className="text-saffron font-semibold">{getPageTitle(location.pathname)}</span>
          </div>
          <h2 className="font-display font-bold text-base sm:text-xl text-foreground flex items-center gap-2 leading-tight">
            {getPageTitle(location.pathname)}
          </h2>
        </div>
      </div>

      {/* Right: Controls & Profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Global Search Bar (Desktop) */}
        <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center relative">
          <input
            type="text"
            placeholder="Search temples, buses, food..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-48 lg:w-64 pl-9 pr-4 py-1.5 text-xs rounded-full bg-ivory border border-gold/30 focus:outline-none focus:ring-2 focus:ring-saffron text-ink placeholder:text-muted-foreground"
          />
          <Search className="w-4 h-4 text-muted-foreground absolute left-3" />
        </form>

        {/* Listen to Page Button */}
        <button
          onClick={() =>
            playPageVoice(
              `You are currently viewing ${getPageTitle(location.pathname)}. Swamiye Saranam Ayyappa.`
            )
          }
          className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-saffron/10 border border-saffron/30 text-saffron hover:bg-saffron hover:text-white transition flex items-center gap-1.5 text-xs font-semibold"
          title="Listen to this page"
        >
          <Volume2 className="w-4 h-4 animate-pulse" />
          <span className="hidden sm:inline">Listen</span>
        </button>

        {/* Voice Assistant Button */}
        <button
          onClick={() => setIsVoiceOpen(true)}
          className="w-9 h-9 rounded-full bg-gradient-devotional text-white flex items-center justify-center shadow-md hover:scale-105 transition"
          title="Open Voice Guide"
        >
          <Mic className="w-4 h-4" />
        </button>

        {/* Simple Mode Toggle */}
        <button
          onClick={toggleSimpleMode}
          className={`p-2 rounded-full border text-xs font-semibold transition flex items-center gap-1.5 ${
            simpleMode
              ? "bg-saffron text-white border-saffron shadow-sm"
              : "bg-secondary text-muted-foreground border-border hover:text-foreground"
          }`}
          title="Toggle Simple/Elderly Mode"
        >
          <Eye className="w-4 h-4" />
          <span className="hidden xl:inline">{simpleMode ? "Simple ON" : "Simple"}</span>
        </button>

        {/* Weather Quick Widget */}
        <Link
          to="/weather"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory border border-gold/30 text-xs font-semibold text-ink hover:border-gold transition"
        >
          <CloudSun className="w-4 h-4 text-saffron" />
          <span>Sabarimala 24°C</span>
        </Link>

        {/* Notifications */}
        <Link
          to="/notifications"
          className="p-2 rounded-full bg-secondary text-foreground hover:bg-gold/20 relative transition"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-devotional animate-ping" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-devotional" />
        </Link>

        {/* User Avatar */}
        <Link
          to="/profile"
          className="flex items-center gap-2 pl-2 border-l border-border/60 hover:opacity-90 transition"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-saffron to-gold p-0.5 shadow-sm">
            <div className="w-full h-full rounded-full bg-ink flex items-center justify-center text-gold font-bold text-xs">
              RK
            </div>
          </div>
          <div className="hidden xl:block text-left">
            <span className="block text-xs font-bold text-foreground leading-tight">
              {MOCK_USER.name}
            </span>
            <span className="block text-[10px] text-saffron font-medium">Day 10 Vratham</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
