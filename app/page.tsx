"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, Lock } from "lucide-react";

export default function Splash() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 40);
    const timeout = setTimeout(() => router.push("/onboarding"), 5600);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-navy-gradient relative overflow-hidden">
      <div className="relative flex items-center justify-center w-full mb-8">
        <div className="relative w-[min(72vw,24rem)] h-[min(72vw,24rem)]">
          <div className="absolute inset-0 rounded-full border border-white/20" />
          <div className="absolute inset-4 rounded-full border border-slate-white" />
          <div className="absolute inset-8 rounded-full border border-slate-400/40" />
          <div className="absolute rounded-full bg-white" />

          <div className="absolute inset-8 flex flex-col items-center justify-center gap-2 p-4 text-center">
            <div className="relative w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-navy-gradient flex items-center justify-center">
                <Shield size={28} className="text-white" fill="rgba(255,255,255,0.15)" />
              </div>
            </div>

            <h1 className="text-xl font-bold text-slate-900 font-display">ScamShield NG</h1>
            <p className="text-slate-700 text-xs font-medium">Verify Before You Pay</p>

            <div className="w-full max-w-[12rem]">
              <div className="h-1.5 rounded-full bg-slate-300 overflow-hidden">
                <div className="h-1.5 rounded-full bg-green-safe transition-all duration-100" style={{width:`${progress}%`}} />
              </div>
            </div>

            <p className="text-slate-500 text-[10px]">Initializing secure database…</p>
          </div>
        </div>
      </div>

      {/* Bottom badge */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-fade-up mt-[10rem]" style={{animationDelay:"0.4s"}}>
        <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
          <Lock size={12} className="text-green-safe" />
          <span className="text-white/70 text-xs font-medium">Federal Protection Service</span>
        </div>
        <p className="text-white/30 text-xs">Nigeria's #1 Anti-Fraud Platform</p>
      </div>
    </div>
  );
}
