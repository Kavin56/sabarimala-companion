import { createFileRoute, useNavigate } from "@tanstack/react-router";
import React, { useState } from "react";
import { User, Phone, MapPin, Globe, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/profile-setup")({
  component: ProfileSetupUI,
});

function ProfileSetupUI() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    fullName: "Ramesh Kumar",
    dob: "1988-06-15",
    gender: "Male",
    location: "Chennai, Tamil Nadu",
    emergencyContact: "+91 94440 12345 (Wife - Lakshmi)",
    language: "Tamil",
    guruswamy: "Sri Sri Shabharish Guruji",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/voice-onboarding" });
  };

  return (
    <div className="min-h-screen bg-ivory font-sans flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl bg-card border border-gold/30 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-10 relative">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-saffron to-gold p-1 mx-auto mb-3 shadow-md">
            <div className="w-full h-full rounded-full bg-ink flex items-center justify-center text-gold font-bold text-xl">
              RK
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground flex items-center justify-center gap-2">
            Pilgrim Profile Setup
            <Sparkles className="w-5 h-5 text-gold fill-gold" />
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Personalize your pilgrimage details for emergency safety and custom guidance
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none"
                />
                <User className="w-4 h-4 text-muted-foreground absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">Preferred Language</label>
              <div className="relative">
                <select
                  value={profile.language}
                  onChange={(e) => setProfile({ ...profile, language: e.target.value })}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none"
                >
                  <option value="Tamil">Tamil (தமிழ்)</option>
                  <option value="Malayalam">Malayalam (മലയാളം)</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi (हिन्दी)</option>
                </select>
                <Globe className="w-4 h-4 text-muted-foreground absolute left-3 top-3" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">Gender</label>
              <select
                value={profile.gender}
                onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none"
              >
                <option value="Male">Male (Ayyappa)</option>
                <option value="Female">Female (Malikappuram)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">Date of Birth</label>
              <input
                type="date"
                value={profile.dob}
                onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">Home Town / City</label>
            <div className="relative">
              <input
                type="text"
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none"
              />
              <MapPin className="w-4 h-4 text-muted-foreground absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Emergency Family Contact (For Family Safety Sharing) *
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={profile.emergencyContact}
                onChange={(e) => setProfile({ ...profile, emergencyContact: e.target.value })}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none"
              />
              <Phone className="w-4 h-4 text-muted-foreground absolute left-3 top-3" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 mt-6 rounded-xl bg-gradient-devotional text-white font-bold text-sm shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5 text-gold" /> SAVE & CONTINUE TO VOICE ONBOARDING
          </button>
        </form>
      </div>
    </div>
  );
}
