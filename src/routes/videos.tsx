import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useApp } from "@/context/AppContext";
import { MOCK_VIDEOS } from "@/lib/mockData";
import { Video, Play, Heart, Clock, Volume2 } from "lucide-react";

export const Route = createFileRoute("/videos")({
  component: VideoHubUI,
});

function VideoHubUI() {
  const { toggleFavorite, isFavorite } = useApp();
  const [cat, setCat] = useState<string>("all");

  const filteredVideos = MOCK_VIDEOS.filter((v) =>
    cat === "all" ? true : v.category === cat
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="eyebrow block text-xs text-saffron">DEVOTIONAL MEDIA HUB</span>
            <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              Pilgrimage Video Hub & Summaries
              <Video className="w-6 h-6 text-saffron" />
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Watch Vratham guides, trek walkthroughs, Pathinettam Padi sanctity, and audio summaries.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex border-b border-gold/20 gap-2 overflow-x-auto pb-2">
          {[
            { id: "all", label: "All Videos" },
            { id: "vratham", label: "Vratham Rules" },
            { id: "travel", label: "Trek Walkthroughs" },
            { id: "temple", label: "Temple Sanctity" },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                cat === c.id
                  ? "bg-gradient-devotional text-white shadow"
                  : "bg-card text-muted-foreground hover:text-foreground border border-gold/20"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredVideos.map((vid) => (
            <div
              key={vid.id}
              className="bg-card border border-gold/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 sm:h-56 overflow-hidden group">
                  <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Link
                      to="/videos/$id"
                      params={{ id: vid.id }}
                      className="w-14 h-14 rounded-full bg-saffron text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition"
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </Link>
                  </div>
                  <span className="absolute bottom-3 right-3 text-[10px] font-bold bg-black/70 text-white px-2 py-0.5 rounded-md">
                    {vid.duration}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-display font-bold text-lg text-foreground leading-tight">{vid.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{vid.description}</p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-border/40 mt-3">
                <Link
                  to="/videos/$id"
                  params={{ id: vid.id }}
                  className="w-full py-2.5 rounded-xl bg-secondary text-foreground font-bold text-xs border border-border hover:bg-gold/20 transition flex items-center justify-center gap-2"
                >
                  WATCH VIDEO & VOICE SUMMARY →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
