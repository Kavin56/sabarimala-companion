import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { ShieldCheck, ArrowRight, CheckSquare } from "lucide-react";

export const Route = createFileRoute("/booking/review")({
  component: BookingReviewUI,
});

function BookingReviewUI() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(true);

  const handleProceedToPayment = () => {
    if (agreed) {
      navigate({ to: "/booking/payment" });
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6 max-w-3xl mx-auto">
        {/* Step Bar */}
        <div className="bg-card border border-gold/30 rounded-3xl p-4 shadow-sm flex items-center justify-between text-xs font-bold">
          <span className="text-green-600">1. Passenger Details ✓</span>
          <span>→</span>
          <span className="text-saffron">2. Review Order ✓</span>
          <span>→</span>
          <span className="text-muted-foreground">3. Payment</span>
        </div>

        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm space-y-6">
          <div className="border-b border-gold/20 pb-4">
            <span className="eyebrow block text-[10px] text-saffron">VERIFY SUMMARY</span>
            <h1 className="text-2xl font-display font-bold text-foreground">Review Booking Details</h1>
          </div>

          {/* Journey Summary Box */}
          <div className="p-4 rounded-2xl bg-ivory border border-gold/30 space-y-3 text-xs">
            <div className="flex justify-between border-b border-gold/20 pb-2">
              <span className="text-muted-foreground">Service:</span>
              <strong className="text-foreground">KSRTC Swift Multi-Axle Volvo Sleeper</strong>
            </div>
            <div className="flex justify-between border-b border-gold/20 pb-2">
              <span className="text-muted-foreground">Route:</span>
              <strong className="text-foreground">Chennai Koyambedu → Nilakkal / Pamba</strong>
            </div>
            <div className="flex justify-between border-b border-gold/20 pb-2">
              <span className="text-muted-foreground">Journey Date & Time:</span>
              <strong className="text-foreground">15 Nov 2026 at 20:30 PM</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Pilgrims (2):</span>
              <strong className="text-foreground">Ramesh Kumar (L4), Suresh Kumar (L5)</strong>
            </div>
          </div>

          {/* Fare Summary */}
          <div className="p-4 rounded-2xl bg-cream border border-gold/30 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Base Seat Fare (2 Seats):</span>
              <span className="font-bold text-foreground">₹2,500</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Taxes & KSRTC Levy:</span>
              <span className="font-bold text-foreground">₹120</span>
            </div>
            <div className="pt-2 border-t border-gold/30 flex justify-between text-sm">
              <span className="font-bold text-foreground">Total Payable Amount:</span>
              <span className="font-display font-bold text-2xl text-maroon">₹2,620</span>
            </div>
          </div>

          {/* Terms checkbox */}
          <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 rounded border-gold/40 text-saffron focus:ring-saffron"
            />
            <span>
              I confirm that all pilgrim details are correct and agree to Sabarimala Yathra terms & cancellation policy.
            </span>
          </label>

          <button
            onClick={handleProceedToPayment}
            disabled={!agreed}
            className="w-full py-3.5 rounded-2xl bg-gradient-devotional text-white font-bold text-sm shadow-lg hover:opacity-95 disabled:opacity-50 transition flex items-center justify-center gap-2"
          >
            PROCEED TO PAYMENT (₹2,620) <ArrowRight className="w-4 h-4 text-gold" />
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
