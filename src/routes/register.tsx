import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { Flame, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/register")({
  component: RegisterPageUI,
});

function RegisterPageUI() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/otp" });
  };

  return (
    <div className="min-h-screen bg-ivory font-sans flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-xl bg-card border border-gold/30 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-10 relative">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-3">
            <span className="w-10 h-10 rounded-full bg-saffron text-white flex items-center justify-center font-bold">
              🔥
            </span>
            <span className="font-display font-bold text-xl text-ink text-left">
              Sri Sri Shabharish Guruji
              <span className="block text-[10px] tracking-widest text-maroon uppercase font-sans">
                Ayyappa Yathra
              </span>
            </span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
            Create Devotee Account
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Begin your sacred pilgrimage preparation with guided assistance
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Ramesh Kumar"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">Mobile Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">Email Address</label>
            <input
              type="email"
              placeholder="ramesh@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">Password *</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">Confirm Password *</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">Date of Birth</label>
            <input
              type="date"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-xl bg-gradient-devotional text-white font-bold text-sm shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2"
          >
            REGISTER & CONTINUE OTP <ArrowRight className="w-4 h-4" />
          </button>

          <div className="text-center text-xs text-muted-foreground pt-4 border-t border-border/40">
            Already registered?{" "}
            <Link to="/login" className="text-saffron font-bold hover:underline">
              Log in here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
