import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Calendar, Bus, Landmark, Hotel, UtensilsCrossed, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/journey-plan")({
  component: JourneyPlanUI,
});

function JourneyPlanUI() {
  const [activeDay, setActiveDay] = useState<number>(1);

  const DAYS = [
    {
      day: 1,
      title: "DAY 1: Departure & Transit",
      desc: "Chennai → Kerala Transit",
      items: [
        { type: "Transport", title: "KSRTC Volvo Sleeper Bus Departure at 20:30 PM", time: "08:30 PM" },
        { type: "Food", title: "Satvik Dinner at Highway Rest Stop", time: "10:45 PM" },
      ],
    },
    {
      day: 2,
      title: "DAY 2: Pamba Arrival & Trek",
      desc: "Nilakkal → Pamba → Neeli Mala → Sannidhanam",
      items: [
        { type: "Arrival", title: "Arrive at Nilakkal Base Camp", time: "06:00 AM" },
        { type: "Ritual", title: "Pamba River Bath & Ganapathy Kettunira", time: "08:00 AM" },
        { type: "Trek", title: "Ascend Neeli Mala & Appachi Medu", time: "10:30 AM" },
        { type: "Arrival", title: "Reach Sannidhanam Queue Complex", time: "02:00 PM" },
      ],
    },
    {
      day: 3,
      title: "DAY 3: Sannidhanam Darshan & Return",
      desc: "Pathinettam Padi → Darshan → Descent to Pamba",
      items: [
        { type: "Darshan", title: "Ascend 18 Holy Steps & Neyyabhishekam", time: "04:00 AM" },
        { type: "Prasadam", title: "Collect Aravana & Appam Prasadam", time: "08:30 AM" },
        { type: "Return", title: "Descent trek back to Pamba & Bus return", time: "11:00 AM" },
      ],
    },
  ];

  const currentDayData = DAYS.find((d) => d.day === activeDay) || DAYS[0]!;

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <span className="eyebrow block text-xs text-saffron">DAY-BY-DAY ITINERARY</span>
            <h1 className="text-2xl font-display font-bold text-foreground">Detailed Journey Plan</h1>
          </div>
        </div>

        {/* Day Selector */}
        <div className="flex gap-2 border-b border-gold/20 pb-2">
          {DAYS.map((d) => (
            <button
              key={d.day}
              onClick={() => setActiveDay(d.day)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs transition ${
                activeDay === d.day
                  ? "bg-gradient-devotional text-white shadow"
                  : "bg-ivory text-muted-foreground border border-gold/20 hover:text-foreground"
              }`}
            >
              Day {d.day}
            </button>
          ))}
        </div>

        {/* Day Itinerary */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="border-b border-gold/20 pb-3">
            <h3 className="font-display font-bold text-xl text-foreground">{currentDayData.title}</h3>
            <p className="text-xs text-saffron font-semibold">{currentDayData.desc}</p>
          </div>

          <div className="space-y-3">
            {currentDayData.items.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-ivory border border-gold/20 flex items-start gap-4">
                <div className="px-3 py-1 rounded-xl bg-cream border border-gold/30 font-bold text-xs text-maroon shrink-0">
                  {item.time}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-saffron uppercase tracking-widest block">
                    {item.type}
                  </span>
                  <h4 className="font-bold text-xs text-foreground mt-0.5">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
