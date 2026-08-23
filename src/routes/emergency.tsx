import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { ShieldAlert, PhoneCall, HeartPulse, Shield, Flame, MapPin, Share2 } from "lucide-react";

export const Route = createFileRoute("/emergency")({
  component: EmergencyPageUI,
});

function EmergencyPageUI() {
  const [sosTriggered, setSosTriggered] = useState(false);

  const handleTriggerSOS = () => {
    setSosTriggered(true);
    alert("EMERGENCY SOS ALERT: Mock signal sent to Police Control Room & Family Contacts!");
  };

  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* SOS Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-red-900 via-devotional to-red-900 text-white p-6 sm:p-8 border border-red-500/50 shadow-2xl text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-red-600 border-4 border-white text-white flex items-center justify-center mx-auto shadow-2xl animate-pulse-glow">
            <ShieldAlert className="w-10 h-10" />
          </div>

          <div>
            <span className="eyebrow block text-xs text-gold-warm mb-1">24/7 PILGRIM ASSISTANCE</span>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Emergency SOS Assistance
            </h1>
            <p className="text-xs sm:text-sm text-white/90 max-w-lg mx-auto mt-1">
              Press the SOS button below for immediate police, cardiac medical, or emergency evacuation assistance along Sabarimala trek.
            </p>
          </div>

          <button
            onClick={handleTriggerSOS}
            className={`w-full max-w-md py-4 rounded-2xl font-bold text-base shadow-2xl transition ${
              sosTriggered
                ? "bg-black text-gold border-2 border-gold animate-bounce"
                : "bg-white text-devotional hover:bg-red-50"
            }`}
          >
            {sosTriggered ? "✓ EMERGENCY SOS ALERT SENT" : "🚨 PRESS FOR IMMEDIATE SOS HELP"}
          </button>
        </div>

        {/* Direct Emergency Hotlines */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Sabarimala Police", phone: "100 / 04735 202011", icon: Shield },
            { label: "Cardiac Emergency", phone: "108 / Medical Aid", icon: HeartPulse },
            { label: "Fire & Rescue", phone: "101", icon: Flame },
            { label: "Devaswom Helpline", phone: "04735 202002", icon: PhoneCall },
          ].map((h, i) => {
            const Icon = h.icon;
            return (
              <a
                key={i}
                href={`tel:${h.phone}`}
                className="p-4 rounded-2xl bg-card border border-red-500/30 hover:border-red-500 shadow-sm transition flex flex-col items-center text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center mb-2 group-hover:scale-110 transition">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-xs text-foreground">{h.label}</span>
                <span className="text-[11px] font-bold text-red-600 mt-1 block">{h.phone}</span>
              </a>
            );
          })}
        </div>

        {/* Nearby Emergency Facilities */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm space-y-3">
          <h3 className="font-display font-bold text-lg text-foreground">
            Nearest Medical & Evacuation Posts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Pamba Cardiac Centre", dist: "0.2 km from Pamba Ghat", service: "24/7 ICU & Oxygen" },
              { name: "Appachi Medu Oxygen Parlour", dist: "2.5 km (Hill Trek)", service: "Emergency Breathing Support" },
              { name: "Sannidhanam Hospital", dist: "Top Sannidhanam", service: "Full Medical Team" },
              { name: "Nilakkal Base Hospital", dist: "18 km Base", service: "Trauma & Ambulance Base" },
            ].map((fac, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-ivory border border-gold/20 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-foreground">{fac.name}</h4>
                  <span className="text-[10px] text-saffron font-medium block">{fac.dist}</span>
                  <span className="text-[10px] text-muted-foreground block">{fac.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
