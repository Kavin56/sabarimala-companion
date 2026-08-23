import React, { createContext, useContext, useState } from "react";

interface AppContextType {
  simpleMode: boolean;
  setSimpleMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSimpleMode: () => void;
  
  isVoiceOpen: boolean;
  setIsVoiceOpen: (open: boolean) => void;
  voiceAudioPlaying: boolean;
  setVoiceAudioPlaying: (playing: boolean) => void;
  voiceCurrentText: string;
  playPageVoice: (text: string) => void;

  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;

  vrathamProgress: { [key: string]: boolean };
  toggleVrathamTask: (taskId: string) => void;

  packedItems: string[];
  togglePackedItem: (itemId: string) => void;

  preferredLanguage: string;
  setPreferredLanguage: (lang: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [simpleMode, setSimpleMode] = useState<boolean>(false);
  const [isVoiceOpen, setIsVoiceOpen] = useState<boolean>(false);
  const [voiceAudioPlaying, setVoiceAudioPlaying] = useState<boolean>(false);
  const [voiceCurrentText, setVoiceCurrentText] = useState<string>(
    "Swamiye Saranam Ayyappa. Welcome to Sri Sri Shabharish Guruji Ayyappa Yathra."
  );

  const [favorites, setFavorites] = useState<string[]>(["sabarimala-main", "pamba-ganapathy"]);
  const [vrathamProgress, setVrathamProgress] = useState<{ [key: string]: boolean }>({
    "day10-morning": true,
    "day10-afternoon": true,
    "day10-evening": true,
    "day10-night": false,
  });

  const [packedItems, setPackedItems] = useState<string[]>([
    "item-1", "item-2", "item-3", "item-4", "item-5", "item-6", "item-7", "item-8"
  ]);
  const [preferredLanguage, setPreferredLanguage] = useState<string>("Tamil");

  const toggleSimpleMode = () => setSimpleMode((prev) => !prev);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const playPageVoice = (text: string) => {
    setVoiceCurrentText(text);
    setIsVoiceOpen(true);
    setVoiceAudioPlaying(true);
  };

  const toggleVrathamTask = (taskId: string) => {
    setVrathamProgress((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const togglePackedItem = (itemId: string) => {
    setPackedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  return (
    <AppContext.Provider
      value={{
        simpleMode,
        setSimpleMode,
        toggleSimpleMode,
        isVoiceOpen,
        setIsVoiceOpen,
        voiceAudioPlaying,
        setVoiceAudioPlaying,
        voiceCurrentText,
        playPageVoice,
        favorites,
        toggleFavorite,
        isFavorite,
        vrathamProgress,
        toggleVrathamTask,
        packedItems,
        togglePackedItem,
        preferredLanguage,
        setPreferredLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
