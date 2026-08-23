import React from "react";
import { Link } from "@tanstack/react-router";
import { X, Sparkles } from "lucide-react";
import { APP_NAV_ITEMS, SECONDARY_NAV_ITEMS } from "./AppSidebar";
import { useApp } from "@/context/AppContext";

export const MoreDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { simpleMode } = useApp();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-black/70 backdrop-blur-sm animate-rise">
      <div className="bg-ink border-t-2 border-gold/40 text-ivory rounded-t-3xl max-h-[85vh] overflow-y-auto p-5 relative shadow-2xl">
        {/* Drawer Drag handle */}
        <div className="w-12 h-1.5 rounded-full bg-white/20 mx-auto mb-4" />

        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div>
            <span className="eyebrow block text-[10px] text-gold-warm">MORE EXPLORER</span>
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
              Sri Sri Shabharish Guruji
              <Sparkles className="w-4 h-4 text-gold" />
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-ivory/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pb-6">
          {[...APP_NAV_ITEMS, ...SECONDARY_NAV_ITEMS].map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-saffron/20 transition text-center group ${
                  simpleMode ? "p-4 text-sm" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-maroon to-saffron/40 flex items-center justify-center text-gold group-hover:scale-110 transition mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-ivory/90 group-hover:text-gold-warm leading-tight">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-3 rounded-xl bg-saffron/10 border border-saffron/30 text-center text-xs text-gold-warm font-serif italic">
          "Swamiye Saranam Ayyappa — Safe Journey to Sabarimala & Back Home"
        </div>
      </div>
    </div>
  );
};
