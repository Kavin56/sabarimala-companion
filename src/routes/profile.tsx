import { createFileRoute, useNavigate } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useApp } from "@/context/AppContext";
import { MOCK_USER } from "@/lib/mockData";
import { User, Phone, MapPin, Globe, Shield, Eye, LogOut } from "lucide-react";

export const Route = createFileRoute("/profile")({
  component: ProfilePageUI,
});

function ProfilePageUI() {
  const { simpleMode, toggleSimpleMode, preferredLanguage, setPreferredLanguage } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate({ to: "/login" });
  };

  return (
    <AppLayout>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <span className="eyebrow block text-xs text-saffron">DEVOTEE ACCOUNT</span>
            <h1 className="text-2xl font-display font-bold text-foreground">Profile & Preferences</h1>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-saffron to-gold p-1 shadow">
            <div className="w-full h-full rounded-full bg-ink flex items-center justify-center text-gold font-bold text-xl">
              RK
            </div>
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-foreground">{MOCK_USER.name}</h3>
            <p className="text-xs text-saffron font-semibold">{MOCK_USER.title}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{MOCK_USER.mobile} • {MOCK_USER.email}</p>
          </div>
        </div>

        {/* App Settings */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm space-y-4">
          <h3 className="font-display font-bold text-lg text-foreground border-b border-gold/20 pb-2">
            App Settings & Accessibility
          </h3>

          <div className="flex items-center justify-between p-3 rounded-2xl bg-ivory border border-gold/20">
            <div>
              <h4 className="font-bold text-xs text-foreground">Elderly / Simple Mode</h4>
              <p className="text-[11px] text-muted-foreground">Larger text, high contrast & prominent voice controls</p>
            </div>
            <button
              onClick={toggleSimpleMode}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                simpleMode ? "bg-saffron text-white" : "bg-secondary text-muted-foreground"
              }`}
            >
              {simpleMode ? "ENABLED" : "DISABLED"}
            </button>
          </div>

          <div className="flex items-center justify-between p-3 rounded-2xl bg-ivory border border-gold/20">
            <div>
              <h4 className="font-bold text-xs text-foreground">Voice Guidance Language</h4>
              <p className="text-[11px] text-muted-foreground">Currently set to {preferredLanguage}</p>
            </div>
            <select
              value={preferredLanguage}
              onChange={(e) => setPreferredLanguage(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-white border border-gold/30 text-xs font-bold text-ink outline-none"
            >
              <option value="Tamil">Tamil (தமிழ்)</option>
              <option value="Malayalam">Malayalam (മലയാളം)</option>
              <option value="English">English</option>
            </select>
          </div>

          <button
            onClick={handleLogout}
            className="w-full py-3 rounded-2xl bg-red-50 text-red-600 border border-red-200 font-bold text-xs hover:bg-red-100 transition flex items-center justify-center gap-2 mt-4"
          >
            <LogOut className="w-4 h-4" /> LOG OUT DEVOTEE ACCOUNT
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
