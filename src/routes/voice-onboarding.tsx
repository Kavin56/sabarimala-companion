import { createFileRoute, useNavigate } from "@tanstack/react-router";
import React, { useState } from "react";
import { Mic, Volume2, Globe, Flame, ArrowRight, CheckCircle, Compass, Bus, Landmark } from "lucide-react";
import { useApp } from "@/context/AppContext";

export const Route = createFileRoute("/voice-onboarding")({
  component: VoiceOnboardingUI,
});

function VoiceOnboardingUI() {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const navigate = useNavigate();
  const { preferredLanguage, setPreferredLanguage, setIsVoiceOpen } = useApp();

  const handleChooseStart = (destination: string) => {
    navigate({ to: destination as any });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-ink via-maroon to-ink font-sans flex items-center justify-center p-4 sm:p-6 text-ivory">
      <div className="w-full max-w-2xl bg-black/40 backdrop-blur-md border border-gold/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        {/* Step Progress Dots */}
        <div className="flex justify-center gap-2 mb-8 relative z-10">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                step === i
                  ? "w-8 bg-gold"
                  : step > i
                  ? "w-2 bg-saffron"
                  : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>

        {/* STEP 1: WELCOME */}
        {step === 1 && (
          <div className="text-center animate-rise relative z-10">
            <div className="w-20 h-20 rounded-full bg-saffron/20 border-2 border-gold/50 text-gold flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse-glow">
              <Flame className="w-10 h-10" />
            </div>
            <span className="eyebrow block text-xs text-gold-warm mb-2">DEVOTIONAL WELCOME</span>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
              Swamiye Saranam Ayyappa
            </h1>
            <p className="text-sm sm:text-base text-ivory/80 max-w-lg mx-auto font-serif italic mb-8">
              "Welcome to Sri Sri Shabharish Guruji Ayyappa Yathra. We are honored to accompany you on your sacred journey from home to Sabarimala and safely back home."
            </p>
            <button
              onClick={() => setStep(2)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-devotional text-white font-bold text-sm shadow-xl hover:scale-105 transition inline-flex items-center justify-center gap-2"
            >
              CONTINUE <ArrowRight className="w-4 h-4 text-gold" />
            </button>
          </div>
        )}

        {/* STEP 2: INTRODUCTION */}
        {step === 2 && (
          <div className="animate-rise relative z-10">
            <div className="text-center mb-6">
              <span className="eyebrow block text-xs text-gold-warm mb-1">ECOSYSTEM OVERVIEW</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Your Complete Digital Companion
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {[
                { title: "Vratham Guide", desc: "41-day daily ritual tracker" },
                { title: "Travel Planner", desc: "Bus, Train & Private routes" },
                { title: "Temple Guide", desc: "Sabarimala & nearby shrines" },
                { title: "Food & Stay", desc: "Satvik meals & pilgrim lodges" },
                { title: "Video Hub", desc: "Devotional & safety guides" },
                { title: "Emergency SOS", desc: "24/7 Police & Medical help" },
              ].map((feature, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <h4 className="font-semibold text-xs text-gold mb-0.5">{feature.title}</h4>
                  <p className="text-[10px] text-ivory/60">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-xl bg-white/10 text-ivory font-semibold text-xs hover:bg-white/20 transition"
              >
                BACK
              </button>
              <button
                onClick={() => setStep(3)}
                className="w-2/3 py-3 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2"
              >
                CHOOSE LANGUAGE <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: LANGUAGE */}
        {step === 3 && (
          <div className="animate-rise text-center relative z-10">
            <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto mb-4 border border-gold/40">
              <Globe className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">Select Preferred Language</h2>
            <p className="text-xs text-ivory/70 mb-6">Choose your preferred voice & interface language</p>

            <div className="space-y-3 max-w-sm mx-auto mb-8">
              {[
                { name: "Tamil", label: "தமிழ்" },
                { name: "Malayalam", label: "മലയാളം" },
                { name: "English", label: "English" },
              ].map((lang) => (
                <button
                  key={lang.name}
                  onClick={() => setPreferredLanguage(lang.name)}
                  className={`w-full p-3.5 rounded-2xl border text-sm font-semibold flex items-center justify-between transition ${
                    preferredLanguage === lang.name
                      ? "bg-saffron/30 border-gold text-gold shadow-lg"
                      : "bg-white/5 border-white/10 text-ivory hover:border-white/30"
                  }`}
                >
                  <span>{lang.name}</span>
                  <span className="text-xs font-serif text-gold-warm">{lang.label}</span>
                </button>
              ))}
              <div className="p-2 text-[11px] text-ivory/40 border border-white/5 rounded-xl">
                Hindi language voice support coming soon
              </div>
            </div>

            <button
              onClick={() => setStep(4)}
              className="w-full py-3.5 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow-lg hover:opacity-95 transition"
            >
              NEXT: GUIDED TOUR
            </button>
          </div>
        )}

        {/* STEP 4: GUIDED TOUR */}
        {step === 4 && (
          <div className="animate-rise text-center relative z-10">
            <div className="w-16 h-16 rounded-full bg-saffron/20 text-saffron flex items-center justify-center mx-auto mb-4 border border-saffron/40">
              <Mic className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">Smart Voice Assistant Tour</h2>
            <p className="text-xs text-ivory/70 max-w-md mx-auto mb-8 leading-relaxed">
              Would you like a short guided voice tour explaining how to track Vratham, book travel, and navigate Sabarimala?
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <button
                onClick={() => {
                  setIsVoiceOpen(true);
                  setStep(5);
                }}
                className="flex-1 py-3.5 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow-lg hover:scale-105 transition flex items-center justify-center gap-2"
              >
                <Volume2 className="w-4 h-4" /> START VOICE TOUR
              </button>
              <button
                onClick={() => setStep(5)}
                className="flex-1 py-3.5 rounded-xl bg-white/10 text-ivory font-semibold text-xs hover:bg-white/20 transition"
              >
                SKIP TOUR
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: CHOOSE START */}
        {step === 5 && (
          <div className="animate-rise text-center relative z-10">
            <h2 className="text-2xl font-display font-bold text-white mb-1">Where would you like to begin?</h2>
            <p className="text-xs text-ivory/70 mb-6">Select a section to open your personalized dashboard</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { title: "Track Vratham", desc: "41-Day daily routine & prayer log", route: "/vratham", icon: Flame },
                { title: "Travel Planner", desc: "Search buses, trains & packages", route: "/travel", icon: Bus },
                { title: "Explore Temples", desc: "Sabarimala, Pamba & nearby shrines", route: "/temples", icon: Landmark },
                { title: "My Journey Dashboard", desc: "Full pilgrimage progress overview", route: "/home", icon: Compass },
              ].map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.route}
                    onClick={() => handleChooseStart(opt.route)}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold hover:bg-saffron/20 transition text-left group flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-saffron/20 text-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white group-hover:text-gold-warm">{opt.title}</h4>
                      <p className="text-[11px] text-ivory/60">{opt.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handleChooseStart("/home")}
              className="w-full py-3.5 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2"
            >
              GO TO MAIN HOME DASHBOARD <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
