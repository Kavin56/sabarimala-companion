import React from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Home, Compass, Flame, Bus, MoreHorizontal, Mic } from "lucide-react";
import { useApp } from "@/context/AppContext";

export const MobileBottomNav: React.FC<{ onOpenMore: () => void }> = ({ onOpenMore }) => {
  const location = useLocation();
  const { setIsVoiceOpen, simpleMode } = useApp();

  const NAV_ITEMS = [
    { label: "HOME", path: "/home", icon: Home },
    { label: "JOURNEY", path: "/my-journey", icon: Compass },
    { label: "VRATHAM", path: "/vratham", icon: Flame },
    { label: "TRAVEL", path: "/travel", icon: Bus },
  ];

  return (
    <>
      {/* Global Floating Voice Mic Button above bottom nav */}
      <div className="fixed bottom-20 right-4 z-40 lg:hidden">
        <button
          onClick={() => setIsVoiceOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-devotional text-white flex items-center justify-center shadow-2xl border-2 border-gold animate-pulse-glow hover:scale-105 active:scale-95 transition"
          aria-label="Voice Assistant"
        >
          <Mic className="w-6 h-6" />
        </button>
      </div>

      {/* Fixed Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-ink/95 backdrop-blur border-t border-gold/30 text-ivory px-2 py-2 flex items-center justify-around shadow-2xl">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
                isActive
                  ? "text-gold font-bold scale-105"
                  : "text-ivory/60 hover:text-ivory"
              } ${simpleMode ? "py-2" : ""}`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-gold animate-bounce" : ""}`} />
              <span className={`text-[10px] mt-1 tracking-wider ${simpleMode ? "text-xs" : ""}`}>
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* More Menu Trigger */}
        <button
          onClick={onOpenMore}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all text-ivory/60 hover:text-gold ${
            simpleMode ? "py-2" : ""
          }`}
        >
          <MoreHorizontal className="w-5 h-5" />
          <span className={`text-[10px] mt-1 tracking-wider ${simpleMode ? "text-xs" : ""}`}>
            MORE
          </span>
        </button>
      </nav>
    </>
  );
};
