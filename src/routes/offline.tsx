import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { WifiOff, Download, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/offline")({
  component: OfflineContentUI,
});

function OfflineContentUI() {
  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <span className="eyebrow block text-xs text-saffron">NO INTERNET PACKS</span>
            <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              Offline Downloaded Guidance
              <WifiOff className="w-6 h-6 text-saffron" />
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Access your checklists, emergency phone numbers, and trek maps even without network coverage in forest areas.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { title: "Sabarimala & Neeli Mala Offline Map", size: "14.2 MB", status: "Downloaded" },
            { title: "41-Day Vratham & Prayer Mantras Pack", size: "8.5 MB", status: "Downloaded" },
            { title: "Emergency Contacts & Hospital List", size: "1.2 MB", status: "Downloaded" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-card border border-gold/20 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-xs text-foreground">{item.title}</h4>
                <span className="text-[10px] text-muted-foreground block">Size: {item.size}</span>
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Available Offline
              </span>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
