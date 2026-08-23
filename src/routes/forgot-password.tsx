import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { KeyRound, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/forgot-password")({
  component: ForgotPasswordUI,
});

function ForgotPasswordUI() {
  const [step, setStep] = useState<"request" | "reset">("request");
  const [contact, setContact] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleRequestOTP = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("reset");
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/login" });
  };

  return (
    <div className="min-h-screen bg-ivory font-sans flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-card border border-gold/30 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-saffron/10 text-saffron border border-saffron/30 flex items-center justify-center mx-auto mb-3">
            <KeyRound className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-display font-bold text-foreground">Reset Password</h1>
          <p className="text-xs text-muted-foreground mt-1">
            {step === "request"
              ? "Enter your mobile number or email to receive password reset OTP"
              : "Set your new password for Sri Sri Shabharish Guruji Yathra"}
          </p>
        </div>

        {step === "request" ? (
          <form onSubmit={handleRequestOTP} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Mobile Number or Email
              </label>
              <input
                type="text"
                required
                placeholder="+91 98765 43210"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-devotional text-white font-bold text-sm shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2"
            >
              SEND OTP CODE <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">Enter OTP</label>
              <input
                type="text"
                required
                placeholder="6-digit OTP code"
                defaultValue="410892"
                className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">New Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-gold/30 text-xs focus:ring-2 focus:ring-saffron outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-devotional text-white font-bold text-sm shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2"
            >
              UPDATE PASSWORD & LOGIN <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="mt-6 pt-4 border-t border-border/40 text-center text-xs">
          <Link to="/login" className="text-saffron font-bold hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
