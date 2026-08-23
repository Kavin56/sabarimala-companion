import { createFileRoute, useParams } from "@tanstack/react-router";
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useApp } from "@/context/AppContext";
import { MOCK_VIDEOS } from "@/lib/mockData";
import { Play, Volume2, Heart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/videos/$id")({
  component: VideoDetailsUI,
});

function VideoDetailsUI() {
  const { id } = useParams({ from: "/videos/$id" });
  const { playPageVoice, isFavorite, toggleFavorite } = useApp();
  const vid = MOCK_VIDEOS.find((v) => v.id === id) || MOCK_VIDEOS[0]!;

  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Mock Video Player */}
        <div className="relative rounded-3xl overflow-hidden bg-black aspect-video shadow-2xl border border-gold/30 flex items-center justify-center">
          <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <button
              onClick={() => alert("Playing Mock Video...")}
              className="w-20 h-20 rounded-full bg-saffron text-white flex items-center justify-center shadow-2xl hover:scale-110 transition animate-pulse-glow mb-4"
            >
              <Play className="w-8 h-8 ml-1" />
            </button>
            <span className="text-white font-bold text-sm bg-black/60 px-4 py-1.5 rounded-full border border-white/20">
              Click to Play Devotional Video ({vid.duration})
            </span>
          </div>
        </div>

        {/* Title & Actions */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="eyebrow block text-xs text-saffron uppercase">{vid.category}</span>
              <h1 className="text-2xl font-display font-bold text-foreground">{vid.title}</h1>
            </div>
            <button
              onClick={() => toggleFavorite(vid.id)}
              className="p-3 rounded-full bg-ivory border border-gold/30 hover:border-gold text-foreground transition shrink-0"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite(vid.id) ? "text-red-500 fill-red-500" : "text-muted-foreground"
                }`}
              />
            </button>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">{vid.description}</p>

          {/* Voice Summary Player Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-cream to-ivory border border-gold/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-maroon flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-saffron" /> Voice Summary Before Playback
              </span>
              <button
                onClick={() => playPageVoice(vid.summary)}
                className="px-3 py-1 rounded-xl bg-saffron text-white font-bold text-xs shadow hover:bg-saffron/90 transition"
              >
                PLAY AUDIO SUMMARY
              </button>
            </div>
            <p className="text-xs text-ink/90 font-serif italic">{vid.summary}</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
