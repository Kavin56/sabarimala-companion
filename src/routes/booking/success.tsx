import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { CheckCircle2, QrCode, Download, Share2, ArrowRight, Flame } from "lucide-react";

export const Route = createFileRoute("/booking/success")({
  component: BookingSuccessUI,
});

function BookingSuccessUI() {
  return (
    <AppLayout>
      <div className="space-y-6 max-w-2xl mx-auto text-center">
        {/* Success Card */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 border-2 border-green-500 flex items-center justify-center mx-auto shadow-lg animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="eyebrow block text-xs text-saffron">BOOKING CONFIRMED</span>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              Swamiye Saranam Ayyappa!
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Your Sabarimala Yathra travel booking has been successfully issued.
            </p>
          </div>

          {/* Ticket ID Box */}
          <div className="p-4 rounded-2xl bg-ivory border border-gold/30 flex items-center justify-between">
            <div className="text-left">
              <span className="text-[10px] text-muted-foreground block font-semibold">BOOKING PNR ID</span>
              <span className="text-xl font-display font-bold text-maroon">AYY123456789</span>
            </div>
            <div className="w-12 h-12 bg-white rounded-xl border border-gold/30 flex items-center justify-center">
              <QrCode className="w-8 h-8 text-ink" />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-2 text-xs text-left border-t border-border/40 pt-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service:</span>
              <strong className="text-foreground">KSRTC Swift Multi-Axle Volvo Sleeper</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Departure Date:</span>
              <strong className="text-foreground">15 Nov 2026 at 20:30 PM</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Boarding Point:</span>
              <strong className="text-foreground">Chennai Koyambedu OS</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Seats Booked:</span>
              <strong className="text-saffron font-bold">L4, L5 (2 Pilgrims)</strong>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => alert("Ticket downloaded as PDF (Mock)")}
              className="py-3 rounded-xl bg-ivory border border-gold/30 text-ink font-bold text-xs hover:border-gold transition flex items-center justify-center gap-1.5"
            >
              <Download className="w-4 h-4 text-saffron" /> DOWNLOAD TICKET
            </button>
            <button
              onClick={() => alert("Ticket shared with Family Safety Contacts")}
              className="py-3 rounded-xl bg-ivory border border-gold/30 text-ink font-bold text-xs hover:border-gold transition flex items-center justify-center gap-1.5"
            >
              <Share2 className="w-4 h-4 text-saffron" /> SHARE TICKET
            </button>
          </div>

          <Link
            to="/bookings"
            className="w-full py-3.5 rounded-2xl bg-gradient-devotional text-white font-bold text-xs shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2"
          >
            VIEW ALL MY BOOKINGS <ArrowRight className="w-4 h-4 text-gold" />
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
