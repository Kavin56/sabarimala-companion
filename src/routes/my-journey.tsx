import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Compass, CheckCircle2, Clock, MapPin, Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/my-journey")({
  component: MyJourneyPageUI,
});

function MyJourneyPageUI() {
  const STAGES = [
    { title: "1. Preparation", desc: "Selecting Guruswamy, buying Mala & clothing", status: "completed", date: "Oct 05, 2026" },
    { title: "2. Vratham (41 Days)", desc: "Daily morning & evening pooja, satvik diet", status: "completed", date: "Oct 15 - Nov 14" },
    { title: "3. Packing & Kettunira", desc: "Preparing Irumudi Kettu with sacred offerings", status: "completed", date: "Nov 14, 2026" },
    { title: "4. Travel to Kerala", desc: "AC Bus Transit from Chennai to Nilakkal", status: "in_progress", date: "Nov 15, 2026 (Current)" },
    { title: "5. Pamba River & Bath", desc: "Holy dip in Pamba, Kettunira prayer at Ganapathy temple", status: "upcoming", date: "Nov 16, 2026" },
    { title: "6. Pilgrimage Trek", desc: "Ascending Neeli Mala, Appachi Medu & Karimala", status: "upcoming", date: "Nov 16, 2026" },
    { title: "7. Sannidhanam Darshan", desc: "Climbing 18 Holy Steps & Neyyabhishekam", status: "upcoming", date: "Nov 16 - 17" },
    { title: "8. Safe Return Home", desc: "Descent & comfortable return journey back home", status: "upcoming", date: "Nov 18, 2026" },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
          <div>
            <span className="eyebrow block text-xs text-saffron">PILGRIMAGE ECOSYSTEM</span>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              My Sacred Journey Progress
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Track every stage from home preparation to Sabarimala Darshan and safe return
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              to="/journey-plan"
              className="px-4 py-2.5 rounded-xl bg-secondary text-foreground font-semibold text-xs border border-border hover:bg-gold/20 transition"
            >
              VIEW JOURNEY PLAN
            </Link>
            <Link
              to="/live-journey"
              className="px-4 py-2.5 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow hover:opacity-95 transition"
            >
              LIVE TRACKING
            </Link>
          </div>
        </div>

        {/* Journey Timeline Cards */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-gold/40 space-y-6 my-4">
          {STAGES.map((st, i) => (
            <div key={i} className="relative group">
              {/* Timeline Marker Icon */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs transition ${
                  st.status === "completed"
                    ? "bg-green-600 border-green-500 text-white"
                    : st.status === "in_progress"
                    ? "bg-saffron border-gold text-white ring-4 ring-gold/30 animate-pulse"
                    : "bg-card border-border text-muted-foreground"
                }`}
              >
                {st.status === "completed" ? "✓" : i + 1}
              </div>

              {/* Stage Card */}
              <div
                className={`p-5 rounded-2xl border transition shadow-sm ${
                  st.status === "in_progress"
                    ? "bg-gradient-to-r from-cream to-ivory border-saffron shadow-md"
                    : "bg-card border-gold/20 hover:border-gold"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold text-base sm:text-lg text-foreground flex items-center gap-2">
                    {st.title}
                    {st.status === "in_progress" && (
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-saffron text-white font-sans font-semibold uppercase">
                        CURRENT STAGE
                      </span>
                    )}
                  </h3>
                  <span className="text-xs font-semibold text-saffron flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {st.date}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground mb-3">{st.desc}</p>

                <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs">
                  <span className="text-muted-foreground capitalize font-medium">
                    Status: <strong className="text-foreground">{st.status.replace("_", " ")}</strong>
                  </span>
                  <Link
                    to={i === 1 ? "/vratham" : i === 2 ? "/packing" : i === 3 ? "/travel" : "/route-map"}
                    className="text-saffron font-bold hover:underline flex items-center gap-1"
                  >
                    Manage Stage <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
