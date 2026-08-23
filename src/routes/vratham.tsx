import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useApp } from "@/context/AppContext";
import { Flame, CheckCircle2, BookOpen, Utensils, Heart, Shield, Sparkles, Volume2 } from "lucide-react";

export const Route = createFileRoute("/vratham")({
  component: VrathamGuidePageUI,
});

function VrathamGuidePageUI() {
  const { vrathamProgress, toggleVrathamTask, playPageVoice } = useApp();
  const [activeTab, setActiveTab] = useState<"tracker" | "rules" | "food" | "prayer">("tracker");

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header Hero */}
        <div className="rounded-3xl bg-gradient-to-r from-maroon via-ink to-maroon p-6 sm:p-8 text-ivory border border-gold/30 shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="eyebrow block text-xs text-gold-warm mb-1">41-DAY SACRED DISCIPLINE</span>
              <h1 className="text-2xl sm:text-4xl font-display font-bold text-white flex items-center gap-2">
                Ayyappa Vratham Guide
                <Flame className="w-6 h-6 text-gold fill-gold" />
              </h1>
              <p className="text-xs sm:text-sm text-ivory/80 mt-1 max-w-xl font-serif italic">
                "Complete daily guidance on bath rituals, strict Satvik diet, prayer mantras, and mental purity."
              </p>
            </div>

            <button
              onClick={() =>
                playPageVoice(
                  "Swamiye Saranam Ayyappa. You are on Vratham Day 10. Complete your morning bath, satvik diet, and evening lamp prayers."
                )
              }
              className="px-4 py-2.5 rounded-xl bg-saffron text-white font-bold text-xs shadow-lg hover:bg-saffron/90 transition flex items-center gap-2"
            >
              <Volume2 className="w-4 h-4" /> LISTEN TO VRATHAM GUIDE
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gold/20 gap-2 overflow-x-auto pb-2">
          {[
            { id: "tracker", label: "Day Tracker & Routine" },
            { id: "rules", label: "Do's & Don'ts Rules" },
            { id: "food", label: "Satvik Food Guidance" },
            { id: "prayer", label: "Daily Prayer & Mantras" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs transition whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gradient-devotional text-white shadow"
                  : "bg-card text-muted-foreground hover:text-foreground border border-gold/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: DAY TRACKER & ROUTINE */}
        {activeTab === "tracker" && (
          <div className="space-y-6">
            {/* Progress Card */}
            <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display font-bold text-lg text-foreground">
                  Current Status: Day 10 of 41
                </span>
                <span className="text-xs font-bold text-saffron bg-cream px-3 py-1 rounded-full">
                  31 Days Remaining
                </span>
              </div>

              <div className="w-full h-3 bg-secondary rounded-full overflow-hidden mb-4">
                <div className="h-full bg-saffron w-[24.4%]" />
              </div>

              {/* Today's Checklist */}
              <h3 className="font-display font-bold text-base text-foreground mb-3">
                Today's Daily Checklist (Day 10)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: "day10-morning", title: "Morning Cold Water Bath (5:00 AM)", desc: "Apply Bhasmam, Chandanam & Kumkum" },
                  { id: "day10-afternoon", title: "Pure Satvik Diet Meal", desc: "No onion, garlic, non-veg or processed oils" },
                  { id: "day10-evening", title: "Evening Lamp & Bhajan (6:30 PM)", desc: "Chant 108 Ayyappa Namavali mantras" },
                  { id: "day10-night", title: "Simple Light Meal & Floor Sleep", desc: "Sleep on plain mat with wooden pillow" },
                ].map((item) => {
                  const isDone = !!vrathamProgress[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleVrathamTask(item.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition flex items-start justify-between ${
                        isDone
                          ? "bg-white border-green-500 shadow-sm"
                          : "bg-ivory border-gold/30 hover:border-gold"
                      }`}
                    >
                      <div>
                        <h4 className="font-bold text-xs text-foreground">{item.title}</h4>
                        <p className="text-[11px] text-muted-foreground mt-0.5">{item.desc}</p>
                      </div>
                      <CheckCircle2
                        className={`w-5 h-5 shrink-0 ml-2 ${
                          isDone ? "text-green-600 fill-green-100" : "text-muted-foreground/30"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DO'S & DON'TS RULES */}
        {activeTab === "rules" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* DO'S */}
            <div className="bg-card border border-green-500/30 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-lg text-green-700 mb-4 flex items-center gap-2">
                ✓ Sacred Do's (Strict Discipline)
              </h3>
              <ul className="space-y-3 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Wear Black, Blue, or Saffron traditional clothes exclusively.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Address every fellow person as "Swami" or "Malikappuram".</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Take bath twice daily in cold water before sunrise and sunset.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Maintain complete Brahmacharya in thought, word, and deed.</span>
                </li>
              </ul>
            </div>

            {/* DON'TS */}
            <div className="bg-card border border-red-500/30 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-lg text-red-700 mb-4 flex items-center gap-2">
                ✕ Prohibited Actions (Don'ts)
              </h3>
              <ul className="space-y-3 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Strictly NO non-vegetarian food, alcohol, tobacco, or smoking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Do not cut hair, shave beard, or clip nails during 41 days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Avoid footwear/shoes if undertaking traditional barefoot Vratham.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Avoid anger, harsh words, or arguments with anyone.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 3: SATVIK FOOD GUIDANCE */}
        {activeTab === "food" && (
          <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm">
            <h3 className="font-display font-bold text-lg text-foreground mb-2">Satvik Diet Rules</h3>
            <p className="text-xs text-muted-foreground mb-4">
              Food consumed during Vratham directly influences physical energy and spiritual purity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-cream border border-gold/30">
                <h4 className="font-bold text-xs text-maroon mb-1">Recommended Meals</h4>
                <p className="text-[11px] text-muted-foreground">
                  Steamed rice, Kanji gruel, boiled green gram, coconut water, fruits, and herbal Chukku water.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-ivory border border-gold/30">
                <h4 className="font-bold text-xs text-saffron mb-1">Fasting Frequency</h4>
                <p className="text-[11px] text-muted-foreground">
                  One full satvik meal at noon, light tiffin/fruits at night. Avoid heavy eating.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200">
                <h4 className="font-bold text-xs text-red-700 mb-1">Strictly Avoid</h4>
                <p className="text-[11px] text-red-600">
                  Onions, garlic, non-veg, stale food, deep fried snacks, and outside hotel meals.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DAILY PRAYER & MANTRAS */}
        {activeTab === "prayer" && (
          <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm space-y-4">
            <h3 className="font-display font-bold text-lg text-foreground">Ayyappa Gayatri Mantra</h3>
            <div className="p-4 rounded-2xl bg-ivory border border-gold/40 font-serif italic text-base text-ink leading-relaxed">
              "Om Bhoothanathaaya Vidhmahe, Bhava Puthraaya Dheemahi, Thanno Sastha Prachodhayaath."
            </div>

            <h4 className="font-bold text-xs text-saffron uppercase">Sacred Chanting Slogan</h4>
            <div className="p-4 rounded-2xl bg-cream border border-gold/40 font-display font-bold text-lg text-maroon text-center">
              "Swamiye Saranam Ayyappa!"
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
