import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type AppState = {
  simpleMode: boolean;
  toggleSimpleMode: () => void;
  language: string;
  setLanguage: (l: string) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  voiceOpen: boolean;
  setVoiceOpen: (v: boolean) => void;
  locationSharing: boolean;
  setLocationSharing: (v: boolean) => void;
};

const Ctx = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [simpleMode, setSimpleMode] = useState(false);
  const [language, setLanguage] = useState("Tamil");
  const [favorites, setFavorites] = useState<string[]>([
    "sabarimala",
    "temple-darshan",
    "pamba-heritage",
    "chennai-sabarimala",
  ]);
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [locationSharing, setLocationSharing] = useState(true);

  const value = useMemo<AppState>(
    () => ({
      simpleMode,
      toggleSimpleMode: () => setSimpleMode((v) => !v),
      language,
      setLanguage,
      favorites,
      toggleFavorite: (id) =>
        setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id])),
      voiceOpen,
      setVoiceOpen,
      locationSharing,
      setLocationSharing,
    }),
    [simpleMode, language, favorites, voiceOpen, locationSharing],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAppState() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAppState must be used inside AppStateProvider");
  return ctx;
}
