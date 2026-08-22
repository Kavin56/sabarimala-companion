import { createContext, useContext, useState, type ReactNode } from "react";

type AppState = {
  simpleMode: boolean;
  setSimpleMode: (v: boolean) => void;
  language: string;
  setLanguage: (v: string) => void;
  voiceOpen: boolean;
  setVoiceOpen: (v: boolean) => void;
};

const Ctx = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [simpleMode, setSimpleMode] = useState(false);
  const [language, setLanguage] = useState("English");
  const [voiceOpen, setVoiceOpen] = useState(false);

  return (
    <Ctx.Provider
      value={{ simpleMode, setSimpleMode, language, setLanguage, voiceOpen, setVoiceOpen }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useAppState() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAppState must be used inside AppStateProvider");
  return ctx;
}
