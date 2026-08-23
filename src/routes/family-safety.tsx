import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { ShieldCheck, Share2, MapPin, Users, ToggleLeft, ToggleRight } from "lucide-react";

export const Route = createFileRoute("/family-safety")({
  component: FamilySafetyUI,
});

function FamilySafetyUI() {
  const [sharingOn, setSharingOn] = useState(true);

  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="eyebrow block text-xs text-saffron">FAMILY TRACKING & PEACE OF MIND</span>
            <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              Family Safety & Location Sharing
              <ShieldCheck className="w-6 h-6 text-saffron" />
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Permission-based real-time journey stage sharing with your trusted family contacts.
            </p>
          </div>

          <button
            onClick={() => setSharingOn(!sharingOn)}
            className={`px-4 py-2 rounded-2xl border text-xs font-bold transition flex items-center gap-2 ${
              sharingOn
                ? "bg-green-600 text-white border-green-500 shadow"
                : "bg-secondary text-muted-foreground border-border"
            }`}
          >
            {sharingOn ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
            <span>LOCATION SHARING: {sharingOn ? "ON" : "OFF"}</span>
          </button>
        </div>

        {/* Current Shared Location */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-gold/20 pb-3">
            <div>
              <span className="text-xs font-bold text-saffron uppercase">Current Journey Stage</span>
              <h3 className="font-display font-bold text-lg text-foreground">
                Travel Transit (Chennai → Kerala)
              </h3>
            </div>
            <span className="text-xs text-muted-foreground">Last Updated: 10:32 AM</span>
          </div>

          <p className="text-xs text-muted-foreground">
            Shared with Lakshmi (Wife) & Guruswamy Subramanian.
          </p>
        </div>

        {/* Trusted Contacts */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm space-y-3">
          <h3 className="font-display font-bold text-lg text-foreground">Trusted Family Contacts</h3>

          <div className="space-y-2">
            {[
              { name: "Lakshmi (Wife)", mobile: "+91 94440 12345", status: "Active Tracking" },
              { name: "Srinivasan (Brother)", mobile: "+91 98400 67890", status: "SMS Alerts Only" },
            ].map((c, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-ivory border border-gold/20 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-foreground">{c.name}</h4>
                  <span className="text-[11px] text-muted-foreground block">{c.mobile}</span>
                </div>
                <span className="text-[10px] font-bold text-saffron bg-cream px-2.5 py-1 rounded-full">
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
