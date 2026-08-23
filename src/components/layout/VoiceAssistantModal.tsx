import React from "react";
import { useApp } from "@/context/AppContext";
import { Volume2, Play, Pause, RotateCcw, X, Mic, Globe, Shield, Sparkles } from "lucide-react";

export const VoiceAssistantModal: React.FC = () => {
  const {
    isVoiceOpen,
    setIsVoiceOpen,
    voiceAudioPlaying,
    setVoiceAudioPlaying,
    voiceCurrentText,
    preferredLanguage,
    setPreferredLanguage,
    simpleMode,
  } = useApp();

  if (!isVoiceOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-rise">
      <div
        className={`w-full max-w-lg rounded-3xl bg-card border border-gold/30 shadow-2xl p-6 relative overflow-hidden ${
          simpleMode ? "text-lg" : "text-sm"
        }`}
      >
        {/* Background glow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-saffron/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gold/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-saffron/10 border border-saffron/30 flex items-center justify-center text-saffron animate-pulse-glow">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground text-lg sm:text-xl flex items-center gap-2">
                Swamiye Saranam Ayyappa
                <Sparkles className="w-4 h-4 text-gold fill-gold" />
              </h3>
              <p className="text-xs text-muted-foreground">Voice Pilgrimage Guide</p>
            </div>
          </div>

          <button
            onClick={() => setIsVoiceOpen(false)}
            className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Active Speech Card */}
        <div className="bg-ivory border border-gold/20 rounded-2xl p-4 mb-5 text-ink shadow-inner relative">
          <div className="flex items-center gap-2 text-xs font-semibold text-maroon mb-2">
            <Volume2 className="w-4 h-4 text-saffron animate-bounce" />
            <span>Active Guidance ({preferredLanguage})</span>
          </div>
          <p className="font-serif italic leading-relaxed text-base text-ink/90">
            "{voiceCurrentText}"
          </p>
        </div>

        {/* Voice Controls */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setVoiceAudioPlaying(!voiceAudioPlaying)}
            className="w-14 h-14 rounded-full bg-gradient-devotional text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
          >
            {voiceAudioPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
          </button>
          <button
            onClick={() => setVoiceAudioPlaying(true)}
            className="w-10 h-10 rounded-full bg-secondary text-foreground flex items-center justify-center hover:bg-gold/20 transition"
            title="Replay"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Language Selection */}
        <div className="flex items-center justify-between bg-muted/50 rounded-xl p-3 mb-4">
          <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-gold" /> Voice Language
          </span>
          <div className="flex gap-1.5">
            {["Tamil", "Malayalam", "English"].map((lang) => (
              <button
                key={lang}
                onClick={() => setPreferredLanguage(lang)}
                className={`px-3 py-1 text-xs rounded-lg font-medium transition ${
                  preferredLanguage === lang
                    ? "bg-saffron text-white shadow-sm"
                    : "bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang}
              </button>
            ))}
            <span className="px-2 py-1 text-[10px] rounded bg-border/50 text-muted-foreground opacity-60">
              Hindi (Soon)
            </span>
          </div>
        </div>

        <div className="text-center text-[11px] text-muted-foreground flex items-center justify-center gap-1">
          <Shield className="w-3.5 h-3.5 text-devotional" />
          Sri Sri Shabharish Guruji Official Devotional Audio Guidance
        </div>
      </div>
    </div>
  );
};
