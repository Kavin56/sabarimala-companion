import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
export const Route = createFileRoute("/login")({
  component: LoginPageUI,
});

function LoginPageUI() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
  };
  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden flex flex-col lg:flex-row">
      {/* LEFT SECTION (Form) */}
      <div className="w-full lg:w-[40%] flex flex-col p-6 lg:px-12 lg:py-10 relative z-10 max-h-screen overflow-y-auto">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 mb-8 lg:mb-12 group w-fit">
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/50 bg-maroon/60 text-gold transition-transform duration-300 group-hover:scale-105">
            <Flame className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-base leading-tight text-ink sm:text-lg">
            Sri Sri Shabharish Guruji
            <span className="block text-xs tracking-[0.28em] uppercase text-maroon">
              Ayyappa Yathra
            </span>
          </span>
        </a>
        {/* Dynamic Form Area */}
        <div className="flex-grow flex items-start mb-8 lg:mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto"
          >
            <h1 className="text-3xl font-bold text-[#1a1f36] mb-8">Log in</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 h-12 bg-[#edf2ff] border border-transparent focus:bg-white focus:border-[#2563eb] outline-none transition-all rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 h-12 bg-[#edf2ff] border border-transparent focus:bg-white focus:border-[#2563eb] outline-none transition-all rounded-lg"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors text-white font-bold h-12 rounded-lg text-base shadow-sm"
              >
                Log In
              </button>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-400">or continue with</span>
                </div>
              </div>
              <button 
                type="button"
                className="w-full h-12 rounded-lg flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 transition-all font-medium text-gray-700 shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>
              <div className="flex justify-between items-center text-sm pt-2">
                <button type="button" className="text-gray-500 hover:text-[#2563eb] transition-colors">
                  Create an account
                </button>
                <button type="button" className="text-gray-500 hover:text-[#2563eb] transition-colors">
                  Forgot your password?
                </button>
              </div>
            </form>
          </motion.div>
        </div>
        {/* Footer Links */}
        <div className="flex gap-6 text-xs text-gray-400 font-medium shrink-0 mt-auto pt-6">
          <a href="#" className="hover:text-gray-600">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:text-gray-600">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-gray-600">Security</a>
        </div>
      </div>
      {/* RIGHT SECTION (Visual Panel) */}
      <div className="hidden lg:flex w-[60%] bg-gray-50 p-6 items-center justify-center">
        <div className="w-full h-full bg-gradient-to-b from-ink via-maroon to-ink rounded-[48px] relative overflow-hidden flex flex-col p-12 lg:p-16 shadow-2xl">
          {/* Badge */}
          <div className="mb-6">
            <span className="bg-transparent text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 uppercase tracking-widest text-gold">
              PILGRIMAGE COMPANION
            </span>
          </div>
          {/* Headline */}
          <h2 className="font-display text-5xl xl:text-6xl font-bold text-ivory leading-[1.05] tracking-tight mb-12 max-w-xl">
            Your sacred journey, <br /> guided at <br /> every step
          </h2>
          {/* Illustration Mockup */}
          <div className="relative mt-8 px-12">
            <div className="bg-white rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-1 border border-black/5 w-full max-w-lg mx-auto">
              {/* Browser bar */}
              <div className="flex gap-2 mb-2 p-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              
              {/* Content Rows */}
              <div className="space-y-6 p-6 pt-0 pb-12">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-[#edf2ff] shrink-0" />
                    <div className="flex-grow space-y-3">
                      <div className="h-3 bg-[#edf2ff] rounded-full w-full" />
                      <div className="h-3 bg-[#f1f5f9] rounded-full w-2/3 opacity-50" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Hand-drawn arrow annotation */}
            <div className="absolute top-0 right-[15%] translate-y-[-110%] hidden xl:block">
              <div className="flex flex-col items-center">
                <span className="text-sm font-serif italic text-ivory/80 whitespace-nowrap mb-1">
                  track your vratham
                </span>
                <div className="relative w-16 h-8 translate-x-2">
                  <svg className="w-full h-full text-ivory opacity-40 -scale-x-100 rotate-[5deg]" viewBox="0 0 100 50">
                    <path d="M10,40 C40,45 60,30 85,5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M75,5 L85,5 L85,15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Background Highlight */}
          <div className="absolute -bottom-20 -right-20 w-[60%] h-[60%] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
