import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useApp } from "@/context/AppContext";
import { PackageCheck, CheckCircle2, Plus, Filter, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/packing")({
  component: PackingChecklistUI,
});

interface PackingItem {
  id: string;
  name: string;
  category: "essential" | "travel" | "personal" | "devotional" | "health";
  note?: string;
}

const DEFAULT_PACKING_ITEMS: PackingItem[] = [
  { id: "item-1", name: "Tulsi / Rudraksha Mala", category: "devotional", note: "Blessed by Guruswamy" },
  { id: "item-2", name: "Black / Saffron Dhoti & Shawl (2 Sets)", category: "essential" },
  { id: "item-3", name: "Irumudi Cloth Bag (Black/Red)", category: "devotional" },
  { id: "item-4", name: "Ghee Coconut (Neyyuthengai)", category: "devotional", note: "Pure cow ghee filled" },
  { id: "item-5", name: "Torch Light & Extra Batteries", category: "travel", note: "For night forest trek" },
  { id: "item-6", name: "Raincoat / Poncho", category: "travel", note: "Mountain mist protection" },
  { id: "item-7", name: "Warm Woolen Cap & Blanket", category: "personal", note: "For cold night at Sannidhanam" },
  { id: "item-8", name: "ORSL / Electrolyte Packets", category: "health", note: "Hydration during steep climb" },
  { id: "item-9", name: "First Aid Kit & Personal Medicines", category: "health" },
  { id: "item-10", name: "Government ID Proof (Aadhaar/Voter ID)", category: "essential" },
];

function PackingChecklistUI() {
  const { packedItems, togglePackedItem } = useApp();
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [customItemName, setCustomItemName] = useState("");

  const filteredItems = DEFAULT_PACKING_ITEMS.filter((item) =>
    filterCategory === "all" ? true : item.category === filterCategory
  );

  const completedCount = DEFAULT_PACKING_ITEMS.filter((item) =>
    packedItems.includes(item.id)
  ).length;

  const totalCount = DEFAULT_PACKING_ITEMS.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header Hero */}
        <div className="bg-card border border-gold/30 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="eyebrow block text-xs text-saffron">PREPARATION CHECKLIST</span>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground flex items-center gap-2">
              Yathra Packing Checklist
              <PackageCheck className="w-6 h-6 text-saffron" />
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Ensure all devotional offerings, clothing, and safety gear are packed before departure.
            </p>
          </div>

          {/* Progress badge */}
          <div className="bg-ivory border border-gold/40 rounded-2xl p-4 text-center shrink-0 min-w-36">
            <span className="text-2xl font-display font-bold text-maroon block">
              {completedCount} / {totalCount}
            </span>
            <span className="text-[11px] font-semibold text-saffron block">
              {progressPercent}% Packed
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-saffron to-gold transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Filters & Add Custom Item */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-card p-3 rounded-2xl border border-gold/20">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            <Filter className="w-4 h-4 text-gold ml-2 shrink-0" />
            {["all", "essential", "devotional", "travel", "personal", "health"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize whitespace-nowrap transition ${
                  filterCategory === cat
                    ? "bg-saffron text-white shadow-xs"
                    : "bg-ivory text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Add custom packing item..."
              value={customItemName}
              onChange={(e) => setCustomItemName(e.target.value)}
              className="px-3 py-1.5 text-xs rounded-xl bg-ivory border border-gold/30 text-ink outline-none focus:ring-2 focus:ring-saffron w-full sm:w-48"
            />
            <button
              onClick={() => setCustomItemName("")}
              className="px-3 py-1.5 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow shrink-0 flex items-center gap-1"
            >
              <Plus className="w-4 h-4" /> ADD
            </button>
          </div>
        </div>

        {/* Packing Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredItems.map((item) => {
            const isPacked = packedItems.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => togglePackedItem(item.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition flex items-start justify-between ${
                  isPacked
                    ? "bg-white border-green-500/60 shadow-xs"
                    : "bg-card border-gold/20 hover:border-gold"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center mt-0.5 transition ${
                      isPacked
                        ? "bg-green-600 border-green-600 text-white"
                        : "border-muted-foreground/40 bg-ivory"
                    }`}
                  >
                    {isPacked && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4
                      className={`font-bold text-xs leading-snug ${
                        isPacked ? "line-through text-muted-foreground" : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </h4>
                    {item.note && (
                      <span className="text-[10px] text-saffron font-medium block mt-0.5">
                        {item.note}
                      </span>
                    )}
                    <span className="text-[9px] uppercase font-bold tracking-widest text-muted-foreground/70 block mt-1">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
