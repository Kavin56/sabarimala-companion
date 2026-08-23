import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { ShieldCheck, ArrowRight, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/otp")({
  component: OTPPageUI,
});

function OTPPageUI() {
  const [otp, setOtp] = useState(["4", "1", "0", "8", "9", "2"]);
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [timer]);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/profile-setup" });
  };

  return (
    <div className="min-h-screen bg-ivory font-sans flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-card border border-gold/30 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-saffron/10 border border-saffron/30 text-saffron flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
          <ShieldCheck className="w-8 h-8" />
        </div>

        <h1 className="text-2xl font-display font-bold text-foreground">OTP Verification</h1>
        <p className="text-xs text-muted-foreground mt-1 mb-6">
          We have sent a 6-digit verification code to <span className="font-semibold text-foreground">+91 98765 43210</span>
        </p>

        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-center gap-2">
            {otp.map((digit, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => {
                  const newOtp = [...otp];
                  newOtp[i] = e.target.value;
                  setOtp(newOtp);
                }}
                className="w-11 h-13 text-center text-lg font-bold rounded-xl bg-ivory border border-gold/40 text-ink focus:ring-2 focus:ring-saffron outline-none shadow-sm"
              />
            ))}
          </div>

          <div className="text-xs text-muted-foreground flex items-center justify-center gap-2">
            {timer > 0 ? (
              <span>Resend OTP in <strong className="text-saffron">{timer}s</strong></span>
            ) : (
              <button
                type="button"
                onClick={() => setTimer(30)}
                className="text-saffron font-bold flex items-center gap-1 hover:underline"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Resend OTP Code
              </button>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-devotional text-white font-bold text-sm shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2"
          >
            VERIFY & SETUP PROFILE <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-border/40 text-xs">
          <Link to="/login" className="text-muted-foreground hover:text-foreground">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
