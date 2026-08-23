import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { MOCK_NOTIFICATIONS } from "@/lib/mockData";
import { Bell, Sparkles, CloudSun, Bus, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/notifications")({
  component: NotificationsUI,
});

function NotificationsUI() {
  return (
    <AppLayout>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <span className="eyebrow block text-xs text-saffron">ALERTS & REMINDERS</span>
            <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              Notifications Hub
              <Bell className="w-6 h-6 text-saffron" />
            </h1>
          </div>
        </div>

        <div className="space-y-3">
          {MOCK_NOTIFICATIONS.map((n) => (
            <div
              key={n.id}
              className={`p-4 rounded-2xl border flex items-start gap-4 transition ${
                !n.read
                  ? "bg-cream border-saffron shadow-xs"
                  : "bg-card border-gold/20"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-saffron/10 text-saffron flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-foreground">{n.title}</h4>
                  <span className="text-[10px] text-saffron font-bold">{n.time}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{n.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
