import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Bus, Train, Gift, QrCode, Download, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/bookings")({
  component: MyBookingsUI,
});

function MyBookingsUI() {
  const [tab, setTab] = useState<"upcoming" | "completed" | "cancelled">("upcoming");

  const BOOKINGS = [
    {
      id: "AYY123456789",
      type: "Bus",
      title: "KSRTC Swift Multi-Axle Volvo Sleeper",
      from: "Chennai",
      to: "Nilakkal / Pamba",
      date: "15 Nov 2026",
      seats: "L4, L5",
      amount: "₹2,620",
      status: "CONFIRMED",
    },
    {
      id: "PKG987654321",
      type: "Package",
      title: "Sabarimala Weekend Sacred Yathra",
      from: "Chennai",
      to: "Sabarimala Sannidhanam",
      date: "15 Nov 2026",
      seats: "2 Pilgrims",
      amount: "₹9,998",
      status: "CONFIRMED",
    },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <span className="eyebrow block text-xs text-saffron">MY PURCHASES</span>
            <h1 className="text-2xl font-display font-bold text-foreground">My Pilgrimage Bookings</h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-gold/20 pb-2">
          {(["upcoming", "completed", "cancelled"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition ${
                tab === t
                  ? "bg-gradient-devotional text-white shadow"
                  : "bg-ivory text-muted-foreground border border-gold/20 hover:text-foreground"
              }`}
            >
              {t} Bookings
            </button>
          ))}
        </div>

        {/* Booking Cards */}
        {tab === "upcoming" ? (
          <div className="space-y-4">
            {BOOKINGS.map((b) => (
              <div
                key={b.id}
                className="bg-card border border-gold/30 rounded-3xl p-5 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between border-b border-gold/20 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-saffron/10 text-saffron font-bold text-[10px] uppercase">
                      {b.type}
                    </span>
                    <h3 className="font-bold text-sm text-foreground">{b.title}</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-xs">
                    {b.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-muted-foreground block">PNR ID:</span>
                    <strong className="text-foreground">{b.id}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground block">Route:</span>
                    <strong className="text-foreground">{b.from} → {b.to}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground block">Travel Date:</span>
                    <strong className="text-saffron">{b.date}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground block">Total Paid:</span>
                    <strong className="text-maroon font-bold">{b.amount}</strong>
                  </div>
                </div>

                <div className="flex gap-2 pt-2 border-t border-border/40 justify-end">
                  <button
                    onClick={() => alert("Ticket PDF Downloaded")}
                    className="px-3 py-1.5 rounded-xl bg-ivory border border-gold/30 text-xs font-semibold hover:border-gold transition flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" /> Download Ticket
                  </button>
                  <Link
                    to="/booking/success"
                    className="px-3 py-1.5 rounded-xl bg-gradient-devotional text-white text-xs font-bold shadow hover:opacity-95 transition"
                  >
                    View E-Ticket
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-card rounded-3xl border border-gold/20 text-muted-foreground text-xs">
            No {tab} bookings found.
          </div>
        )}
      </div>
    </AppLayout>
  );
}
