import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Bus, Check, ArrowRight, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/travel/bus/seats")({
  component: BusSeatSelectionUI,
});

function BusSeatSelectionUI() {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState<string[]>(["L4", "L5"]);

  const seatFare = 1250;
  const taxes = 120;
  const totalAmount = selectedSeats.length * seatFare + taxes;

  const toggleSeat = (seatNo: string) => {
    if (selectedSeats.includes(seatNo)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatNo));
    } else {
      if (selectedSeats.length < 4) {
        setSelectedSeats([...selectedSeats, seatNo]);
      }
    }
  };

  const handleProceed = () => {
    if (selectedSeats.length > 0) {
      navigate({ to: "/booking/passengers" });
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="eyebrow block text-[10px] text-saffron">SEAT SELECTION</span>
            <h1 className="text-xl sm:text-2xl font-display font-bold text-foreground">
              KSRTC Swift Multi-Axle Volvo Sleeper
            </h1>
            <p className="text-xs text-muted-foreground">Chennai (20:30) → Nilakkal / Pamba (06:00)</p>
          </div>

          <div className="flex gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-ivory border border-gold/40" /> Available
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-saffron border border-saffron" /> Selected
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-muted text-muted-foreground" /> Booked
            </span>
          </div>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Seat Map Layout (Left 2 cols) */}
          <div className="lg:col-span-2 bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
            <h3 className="font-display font-bold text-base text-foreground mb-4 flex items-center justify-between">
              <span>Upper / Lower Sleeper Deck</span>
              <span className="text-xs text-muted-foreground font-sans">Front Driver Side →</span>
            </h3>

            {/* Mock Bus Layout */}
            <div className="max-w-md mx-auto border-2 border-gold/30 rounded-3xl p-6 bg-ivory relative">
              <div className="text-right text-xs font-bold text-muted-foreground mb-4">
                🚌 Driver Steering
              </div>

              {/* Rows */}
              <div className="grid grid-cols-4 gap-3 my-2 text-center">
                {["L1", "L2", "GANGWAY", "L3", "L4", "L5", "GANGWAY", "L6", "L7", "L8", "GANGWAY", "L9"].map(
                  (seat, i) => {
                    if (seat === "GANGWAY") {
                      return <div key={i} className="text-[10px] text-muted-foreground/30 py-2">••</div>;
                    }
                    const isSelected = selectedSeats.includes(seat);
                    const isBooked = seat === "L1" || seat === "L8";

                    return (
                      <button
                        key={seat}
                        disabled={isBooked}
                        onClick={() => toggleSeat(seat)}
                        className={`py-3 px-2 rounded-xl text-xs font-bold transition flex flex-col items-center justify-center border ${
                          isBooked
                            ? "bg-muted text-muted-foreground opacity-50 cursor-not-allowed border-transparent"
                            : isSelected
                            ? "bg-saffron text-white border-saffron shadow"
                            : "bg-white text-ink border-gold/30 hover:border-saffron"
                        }`}
                      >
                        <span>{seat}</span>
                        <span className="text-[8px] font-normal mt-0.5">
                          {isBooked ? "Booked" : "₹1250"}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* Fare Breakdown Sidebar */}
          <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-lg text-foreground mb-4 border-b border-gold/20 pb-2">
                Booking Summary
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Selected Seats:</span>
                  <span className="font-bold text-saffron">
                    {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base Seat Fare:</span>
                  <span className="font-bold text-foreground">₹{selectedSeats.length * seatFare}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxes & KSRTC Levy:</span>
                  <span className="font-bold text-foreground">₹{taxes}</span>
                </div>

                <div className="pt-3 border-t border-border/40 flex justify-between text-sm">
                  <span className="font-bold text-foreground">Total Fare:</span>
                  <span className="font-display font-bold text-xl text-maroon">₹{totalAmount}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleProceed}
              disabled={selectedSeats.length === 0}
              className="w-full mt-6 py-3.5 rounded-2xl bg-gradient-devotional text-white font-bold text-xs shadow-lg hover:opacity-95 disabled:opacity-50 transition flex items-center justify-center gap-2"
            >
              PROCEED PASSENGER DETAILS <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
