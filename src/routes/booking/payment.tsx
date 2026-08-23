import { createFileRoute, useNavigate } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { CreditCard, QrCode, Building, Wallet, Lock, ShieldCheck, Loader2 } from "lucide-react";

export const Route = createFileRoute("/booking/payment")({
  component: MockPaymentUI,
});

function MockPaymentUI() {
  const navigate = useNavigate();
  const [method, setMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      navigate({ to: "/booking/success" });
    }, 1500);
  };

  return (
    <AppLayout>
      <div className="space-y-6 max-w-2xl mx-auto">
        {/* Step Bar */}
        <div className="bg-card border border-gold/30 rounded-3xl p-4 shadow-sm flex items-center justify-between text-xs font-bold">
          <span className="text-green-600">1. Details ✓</span>
          <span>→</span>
          <span className="text-green-600">2. Review ✓</span>
          <span>→</span>
          <span className="text-saffron">3. Payment Gateway</span>
        </div>

        <div className="bg-card border border-gold/30 rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
          {/* Top Info */}
          <div className="flex items-center justify-between border-b border-gold/20 pb-4 mb-6">
            <div>
              <span className="eyebrow block text-[10px] text-saffron">SECURE CHECKOUT</span>
              <h1 className="text-2xl font-display font-bold text-foreground">Complete Payment</h1>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-muted-foreground block">Amount Payable</span>
              <span className="text-2xl font-display font-bold text-maroon">₹2,620</span>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {[
              { id: "upi", label: "UPI / GPay", icon: QrCode },
              { id: "card", label: "Debit/Credit", icon: CreditCard },
              { id: "netbanking", label: "NetBanking", icon: Building },
            ].map((m) => {
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => setMethod(m.id as any)}
                  className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition ${
                    method === m.id
                      ? "bg-gradient-devotional text-white border-saffron shadow"
                      : "bg-ivory text-muted-foreground border-gold/30 hover:border-gold"
                  }`}
                >
                  <Icon className="w-4 h-4" /> {m.label}
                </button>
              );
            })}
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            {method === "upi" && (
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-foreground">
                  Enter UPI ID (e.g. 9876543210@paytm / gpay)
                </label>
                <input
                  type="text"
                  required
                  placeholder="ramesh@upi"
                  defaultValue="ramesh@okicici"
                  className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs outline-none focus:ring-2 focus:ring-saffron"
                />
              </div>
            )}

            {method === "card" && (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="4532 •••• •••• 8910"
                    className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs outline-none"
                  />
                  <input
                    type="password"
                    maxLength={3}
                    placeholder="CVV"
                    className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs outline-none"
                  />
                </div>
              </div>
            )}

            {method === "netbanking" && (
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Select Bank</label>
                <select className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs outline-none">
                  <option value="sbi">State Bank of India</option>
                  <option value="hdfc">HDFC Bank</option>
                  <option value="icici">ICICI Bank</option>
                  <option value="axis">Axis Bank</option>
                </select>
              </div>
            )}

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 mt-6 rounded-2xl bg-gradient-devotional text-white font-bold text-sm shadow-xl hover:opacity-95 disabled:opacity-50 transition flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Processing Payment...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-gold" /> PAY ₹2,620 SECURELY
                </>
              )}
            </button>
          </form>

          <div className="mt-4 text-center text-[11px] text-muted-foreground flex items-center justify-center gap-1">
            <ShieldCheck className="w-4 h-4 text-green-600" /> 256-Bit Encrypted Mock Payment Gateway
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
