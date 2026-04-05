"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Shield, Search, Users, ChevronRight, ArrowRight } from "lucide-react";

const SLIDES = [
  {
    icon: <Shield size={48} className="text-white" />,
    badge: "Trusted",
    badgeColor: "bg-green-safe",
    title: "Stay Protected\nfrom Scams",
    body: "Avoid losing money to fake agents and fraudsters with Nigeria's most trusted verification system.",
    tags: [
      { label: "Trusted", color: "bg-green-safe/20 text-green-safe dark:text-green-400" },
      { label: "Flagged", color: "bg-red-risk/20 text-red-risk dark:text-red-400" },
    ],
    bg: "from-navy via-navy-mid to-navy",
  },
  {
    icon: <Search size={48} className="text-white" />,
    badge: "Verify",
    badgeColor: "bg-blue-600",
    title: "Verify Before\nYou Pay",
    body: "Check phone numbers, bank accounts, and businesses instantly against our nationwide database.",
    tags: [
      { label: "✓ Verified Safe", color: "bg-green-safe/20 text-green-safe dark:text-green-400" },
      { label: "Phone / Account / Business", color: "bg-white/10 text-white/70" },
    ],
    bg: "from-navy-mid via-navy to-[#012040]",
  },
  {
    icon: <Users size={48} className="text-white" />,
    badge: "Community",
    badgeColor: "bg-amber-600",
    title: "Report & Help\nOther Nigerians",
    body: "Your reports create a safer digital economy. Join thousands of users flagging fraudulent activities daily.",
    tags: [
      { label: "📋 Report", color: "bg-white/10 text-white/80" },
      { label: "✓ Verified Secure", color: "bg-green-safe/20 text-green-safe dark:text-green-400" },
    ],
    bg: "from-[#001428] via-navy to-[#003020]",
  },
];

export default function Onboarding() {
  const router = useRouter();
  const [slide, setSlide] = useState(0);
  const current = SLIDES[slide];
  const isLast = slide === SLIDES.length - 1;

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-b ${current.bg} relative overflow-hidden transition-all duration-500`}>
      {/* Background rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full border border-white/5" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full border border-white/8" />
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between px-5 pt-12 pb-4 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
            <Shield size={14} className="text-white" />
          </div>
          <span className="text-white font-display font-bold text-sm">ScamShield NG</span>
        </div>
        <button onClick={() => router.push("/auth")} className="text-white/50 text-sm font-medium hover:text-white/80 transition-colors">
          Skip
        </button>
      </div>

      {/* Slide content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        {/* Icon in glass circle */}
        <div className="relative mb-10 animate-scale-in">
          <div className="absolute inset-0 rounded-full bg-green-safe/15 scale-150 ring-pulse" />
          <div className="absolute inset-0 rounded-full bg-white/5 scale-125 ring-pulse" style={{animationDelay:"0.5s"}} />
          <div className="w-32 h-32 rounded-full glass flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-navy-gradient flex items-center justify-center">
              {current.icon}
            </div>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold text-white font-display text-center leading-snug mt-6 mb-10 
        whitespace-pre-line animate-fade-up">
          {current.title}
        </h2>
        <p className="text-white/60 text-sm text-center leading-relaxed mt-4 mb-8 max-w-xs animate-fade-up" style={{animationDelay:"0.05s"}}>
          {current.body}
        </p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap justify-center mb-4 animate-fade-up" style={{animationDelay:"0.1s"}}>
          {current.tags.map((tag, i) => (
            <span key={i} className={`px-3 py-1 rounded-full text-xs font-semibold ${tag.color}`}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom controls */}
      <div className="px-6 pb-12 relative z-10">
        {/* Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              className={`rounded-full transition-all duration-300 ${i === slide ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/30"}`} />
          ))}
        </div>

        {isLast ? (
          <div className="flex flex-col gap-3">
            <button onClick={() => router.push("/auth")}
              className="w-full bg-green-gradient text-white font-bold py-4 rounded-2xl font-display flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-[0.98]">
              Get Started <ArrowRight size={18} />
            </button>
            <Link href="/auth" className="w-full text-white/50 text-sm font-medium py-2 text-center hover:text-white/80 transition-colors">
              Already have an account? Log in
            </Link>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <button onClick={() => router.push("/auth")} className="text-white/40 text-sm font-medium hover:text-white/60 transition-colors">
              Skip all
            </button>
            <button onClick={() => setSlide(s => s + 1)}
              className="w-14 h-14 rounded-2xl bg-green-gradient flex items-center justify-center hover:opacity-90 transition-opacity active:scale-[0.98]">
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
