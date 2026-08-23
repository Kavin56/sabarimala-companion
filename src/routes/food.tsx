import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useApp } from "@/context/AppContext";
import { MOCK_FOOD } from "@/lib/mockData";
import { UtensilsCrossed, Heart, ShieldAlert, CheckCircle, Droplet } from "lucide-react";

export const Route = createFileRoute("/food")({
  component: FoodGuideUI,
});

function FoodGuideUI() {
  const { toggleFavorite, isFavorite } = useApp();
  const [category, setCategory] = useState<string>("all");

  const filteredFood = MOCK_FOOD.filter((f) =>
    category === "all" ? true : f.category === category
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="eyebrow block text-xs text-saffron">SATVIK DIET & HYDRATION</span>
            <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              Pilgrimage Food & Fasting Guide
              <UtensilsCrossed className="w-6 h-6 text-saffron" />
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Traditional Ayyappa Satvik food rules, recommended energy drinks, fasting meals, and prohibited items.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex border-b border-gold/20 gap-2 overflow-x-auto pb-2">
          {[
            { id: "all", label: "All Items" },
            { id: "recommended", label: "Prasadam & Energy" },
            { id: "fasting", label: "Fasting Kanji Meals" },
            { id: "hydration", label: "Chukku Water & Drinks" },
            { id: "avoid", label: "Prohibited Foods" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                category === cat.id
                  ? "bg-gradient-devotional text-white shadow"
                  : "bg-card text-muted-foreground hover:text-foreground border border-gold/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredFood.map((food) => (
            <div
              key={food.id}
              className="bg-card border border-gold/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <button
                    onClick={() => toggleFavorite(food.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFavorite(food.id) ? "text-red-500 fill-red-500" : "text-white"
                      }`}
                    />
                  </button>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
                        food.category === "avoid" ? "bg-red-600" : "bg-saffron"
                      }`}
                    >
                      {food.category}
                    </span>
                    <h3 className="font-display font-bold text-base text-white mt-1">{food.name}</h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs text-muted-foreground">{food.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {food.benefits.map((b, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-ivory text-maroon font-semibold px-2 py-0.5 rounded-md border border-gold/20"
                      >
                        ✓ {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
