import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useApp } from "@/context/AppContext";
import { MOCK_TEMPLES, MOCK_VIDEOS } from "@/lib/mockData";
import { Heart, Landmark, Video, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/favorites")({
  component: FavoritesUI,
});

function FavoritesUI() {
  const { favorites } = useApp();

  const savedTemples = MOCK_TEMPLES.filter((t) => favorites.includes(t.id));
  const savedVideos = MOCK_VIDEOS.filter((v) => favorites.includes(v.id));

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <span className="eyebrow block text-xs text-saffron">SAVED ITEMS</span>
            <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              My Saved Favorites
              <Heart className="w-6 h-6 text-red-500 fill-red-500" />
            </h1>
          </div>
        </div>

        {/* Saved Temples */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-lg text-foreground flex items-center gap-2">
            <Landmark className="w-5 h-5 text-saffron" /> Saved Temples ({savedTemples.length})
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {savedTemples.map((t) => (
              <div key={t.id} className="p-4 rounded-2xl bg-card border border-gold/30 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-xs text-foreground">{t.name}</h4>
                  <span className="text-[10px] text-muted-foreground block">{t.location}</span>
                </div>
                <Link
                  to="/temples/$id"
                  params={{ id: t.id }}
                  className="px-3 py-1.5 rounded-xl bg-gradient-devotional text-white text-xs font-bold shrink-0"
                >
                  VIEW →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
