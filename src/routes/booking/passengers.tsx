import { createFileRoute, useNavigate } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { User, Phone, Mail, ShieldCheck, Plus, Trash2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/booking/passengers")({
  component: PassengerDetailsUI,
});

interface Passenger {
  name: string;
  age: string;
  gender: string;
  idType: string;
  idNumber: string;
}

function PassengerDetailsUI() {
  const navigate = useNavigate();
  const [passengers, setPassengers] = useState<Passenger[]>([
    { name: "Ramesh Kumar", age: "38", gender: "Male", idType: "Aadhaar", idNumber: "xxxx-xxxx-1234" },
    { name: "Suresh Kumar", age: "42", gender: "Male", idType: "Aadhaar", idNumber: "xxxx-xxxx-5678" },
  ]);

  const addPassenger = () => {
    if (passengers.length < 6) {
      setPassengers([
        ...passengers,
        { name: "", age: "", gender: "Male", idType: "Aadhaar", idNumber: "" },
      ]);
    }
  };

  const removePassenger = (index: number) => {
    if (passengers.length > 1) {
      setPassengers(passengers.filter((_, i) => i !== index));
    }
  };

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/booking/review" });
  };

  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Step Bar */}
        <div className="bg-card border border-gold/30 rounded-3xl p-4 shadow-sm flex items-center justify-between text-xs font-bold text-muted-foreground">
          <span className="text-saffron">1. Passenger Details ✓</span>
          <span>→</span>
          <span>2. Review Order</span>
          <span>→</span>
          <span>3. Payment</span>
        </div>

        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-gold/20 pb-4 mb-6">
            <div>
              <span className="eyebrow block text-[10px] text-saffron">PILGRIM DETAILS</span>
              <h1 className="text-2xl font-display font-bold text-foreground">
                Enter Devotee / Passenger Details
              </h1>
            </div>
            <button
              onClick={addPassenger}
              className="px-3.5 py-1.5 rounded-xl bg-saffron/10 border border-saffron/30 text-saffron font-bold text-xs hover:bg-saffron hover:text-white transition flex items-center gap-1"
            >
              <Plus className="w-4 h-4" /> ADD PASSENGER
            </button>
          </div>

          <form onSubmit={handleProceed} className="space-y-6">
            {passengers.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-ivory border border-gold/30 space-y-4 relative"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-maroon flex items-center gap-2">
                    <User className="w-4 h-4 text-saffron" /> Pilgrim #{idx + 1}
                  </h3>
                  {passengers.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removePassenger(idx)}
                      className="text-red-500 hover:text-red-700 text-xs font-semibold flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Remove
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Full Name (as per Govt ID) *
                    </label>
                    <input
                      type="text"
                      required
                      value={p.name}
                      onChange={(e) => {
                        const updated = [...passengers];
                        if (updated[idx]) updated[idx]!.name = e.target.value;
                        setPassengers(updated);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-gold/30 text-xs outline-none focus:ring-2 focus:ring-saffron"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Age *</label>
                    <input
                      type="number"
                      required
                      value={p.age}
                      onChange={(e) => {
                        const updated = [...passengers];
                        if (updated[idx]) updated[idx]!.age = e.target.value;
                        setPassengers(updated);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-gold/30 text-xs outline-none focus:ring-2 focus:ring-saffron"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Gender *</label>
                    <select
                      value={p.gender}
                      onChange={(e) => {
                        const updated = [...passengers];
                        if (updated[idx]) updated[idx]!.gender = e.target.value;
                        setPassengers(updated);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-gold/30 text-xs outline-none focus:ring-2 focus:ring-saffron"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-devotional text-white font-bold text-sm shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2"
            >
              CONTINUE TO BOOKING REVIEW <ArrowRight className="w-4 h-4 text-gold" />
            </button>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}
