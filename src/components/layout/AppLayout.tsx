import React, { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { TopNavbar } from "./TopNavbar";
import { MobileBottomNav } from "./MobileBottomNav";
import { MoreDrawer } from "./MoreDrawer";
import { VoiceAssistantModal } from "./VoiceAssistantModal";
import { useApp } from "@/context/AppContext";

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMoreDrawerOpen, setIsMoreDrawerOpen] = useState(false);
  const { simpleMode } = useApp();

  return (
    <div
      className={`min-h-screen bg-background text-foreground flex flex-col lg:flex-row font-sans antialiased selection:bg-gold/30 selection:text-maroon ${
        simpleMode ? "text-base sm:text-lg" : "text-xs sm:text-sm"
      }`}
    >
      {/* Desktop Sidebar */}
      <AppSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen pb-20 lg:pb-0">
        {/* Sticky Top Navbar */}
        <TopNavbar onOpenMobileMenu={() => setIsMoreDrawerOpen(true)} />

        {/* Dynamic Page Container */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto animate-rise">
          {children}
        </main>

        {/* Global Footer info */}
        <footer className="border-t border-border/40 py-6 px-6 text-center text-xs text-muted-foreground bg-card/40 mt-12">
          <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto gap-4">
            <div>
              <p className="font-display font-bold text-foreground text-sm">
                Sri Sri Shabharish Guruji Ayyappa Yathra
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                From My Home to Sabarimala and Safely Back Home
              </p>
            </div>
            <div className="text-xs text-gold-warm font-serif italic">
              Swamiye Saranam Ayyappa
            </div>
          </div>
        </footer>
      </div>

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav onOpenMore={() => setIsMoreDrawerOpen(true)} />

      {/* Mobile More Navigation Drawer */}
      <MoreDrawer isOpen={isMoreDrawerOpen} onClose={() => setIsMoreDrawerOpen(false)} />

      {/* Global Voice Assistant Modal */}
      <VoiceAssistantModal />
    </div>
  );
};
