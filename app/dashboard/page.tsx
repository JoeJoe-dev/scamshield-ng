"use client";
import Link from "next/link";
import { AppBar } from "@/components/AppBar";
import { BottomNav } from "@/components/BottomNav";
import { ShieldCheck, AlertTriangle, Bell, BookOpen, TrendingUp, MessageCircle, CreditCard, Phone, Link2, Shield, ChevronRight } from "lucide-react";

const QUICK = [
  { label:"Verify",      href:"/verify",    icon:<ShieldCheck size={22}/>, color:"text-green-safe dark:text-green-400", bg:"bg-green-safe/10 dark:bg-green-safe/20" },
  { label:"Report Scam", href:"/report",    icon:<AlertTriangle size={22}/>, color:"text-red-risk dark:text-red-400",  bg:"bg-red-risk/10 dark:bg-red-risk/20"   },
  { label:"Alerts",      href:"/alerts",    icon:<Bell size={22}/>,         color:"text-amber-600 dark:text-amber-400",bg:"bg-amber-500/10 dark:bg-amber-500/20" },
  { label:"Learn",       href:"/education", icon:<BookOpen size={22}/>,     color:"text-blue-600 dark:text-blue-400",  bg:"bg-blue-500/10 dark:bg-blue-500/20"   },
];

const TRENDING = [
  { icon:<AlertTriangle size={18}/>, title:"Fake CBN Grants", desc:"Sophisticated phishing emails targeting MSMEs with promise of low-interest loans.", color:"text-amber-600 dark:text-amber-400", bg:"bg-amber-500/10 dark:bg-amber-500/20", tag:"Phishing" },
  { icon:<MessageCircle size={18}/>, title:"WhatsApp Takeover", desc:"Verification code requests from known contacts to hijack your account.", color:"text-red-risk dark:text-red-400",   bg:"bg-red-risk/10 dark:bg-red-risk/20",   tag:"Social" },
  { icon:<CreditCard size={18}/>,    title:"BVN Link Scam",     desc:"SMS alerts claiming your bank account is suspended. Do not click links.", color:"text-orange-600 dark:text-orange-400", bg:"bg-orange-500/10 dark:bg-orange-500/20", tag:"SMS Fraud" },
];

const RECENT = [
  { icon:<Phone size={16}/>,  entity:"+234 810 002 9912", detail:"Opay Impersonator",       risk:"HIGH RISK",  riskColor:"chip-risk"  },
  { icon:<Link2 size={16}/>,  entity:"bitly.ly/cbn-grant", detail:"Malicious Link",          risk:"HIGH RISK",  riskColor:"chip-risk"  },
];

const WISDOM = [
  { icon:<Shield size={18}/>, tip:"Protect Your PIN", body:"Never share your bank OTP with anyone, even if they claim to be from your bank.", iconColor:"text-green-safe dark:text-green-400" },
  { icon:<ShieldCheck size={18}/>, tip:"Check the Link",   body:"Always verify the domain. Official banks use .com or .ng, not random characters.", iconColor:"text-blue-600 dark:text-blue-400" },
];

export default function Dashboard() {
  const userName = typeof window !== 'undefined' ? localStorage.getItem('userName') || 'User' : 'User';

  return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      {/* Navy hero header */}
      <div className="bg-navy-gradient px-5 pt-10 pb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-green-safe/8 -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/3 translate-y-1/2 -translate-x-1/2" />

        {/* AppBar inside hero */}
        <div className="flex items-center justify-between mb-5 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
              <ShieldCheck size={16} className="text-white" />
            </div>
            <span className="text-white font-display font-bold text-sm">ScamShield NG</span>
          </div>
          <div className="flex items-center gap-1">
            <Link href="/alerts" className="relative w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors">
              <Bell size={18} className="text-white/80" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-risk" />
            </Link>
            {/* ThemeToggle inline */}
            <Link href="/profile" className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors">
              <div className="w-7 h-7 rounded-full bg-green-safe/30 flex items-center justify-center text-xs font-bold text-white">T</div>
            </Link>
          </div>
        </div>

        {/* Greeting */}
        <div className="relative z-10 mb-5">
          <p className="text-white/50 text-xs uppercase tracking-widest font-medium mb-0.5">Digital Guardian Active</p>
          <h1 className="text-2xl font-bold text-white font-display">Hello, {userName} 👋</h1>
        </div>

        {/* Active protection card */}
        <div className="relative z-10 glass rounded-2xl p-4 animate-fade-up">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-xl bg-green-safe/20 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={24} className="text-green-400" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm font-display">Your Device is Secured</p>
              <p className="text-white/60 text-xs mt-0.5 leading-relaxed">Real-time scanning is active. We&apos;ve blocked <span className="text-green-400 font-bold">12</span> suspicious attempts this week.</p>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <div className="flex-1 bg-white/8 rounded-xl px-3 py-2 text-center">
              <p className="text-white font-bold text-lg font-display">12</p>
              <p className="text-white/40 text-[10px]">Blocked</p>
            </div>
            <div className="flex-1 bg-white/8 rounded-xl px-3 py-2 text-center">
              <p className="text-green-400 font-bold text-lg font-display">Active</p>
              <p className="text-white/40 text-[10px]">Status</p>
            </div>
            <div className="flex-1 bg-white/8 rounded-xl px-3 py-2 text-center">
              <p className="text-white font-bold text-lg font-display">7d</p>
              <p className="text-white/40 text-[10px]">Protected</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pt-5">
        {/* Quick Actions */}
        <div className="mb-6 animate-fade-up" style={{animationDelay:"0.05s"}}>
          <p className="text-sm font-bold text-navy dark:text-slate-200 font-display mb-3">Quick Actions</p>
          <div className="grid grid-cols-4 gap-3">
            {QUICK.map(a => (
              <Link key={a.label} href={a.href} className="flex flex-col items-center gap-2 group">
                <div className={`w-14 h-14 rounded-2xl ${a.bg} flex items-center justify-center ${a.color} group-hover:scale-105 transition-transform shadow-card dark:shadow-dark-card`}>
                  {a.icon}
                </div>
                <span className="text-[11px] font-semibold text-center text-slate-600 dark:text-slate-400 leading-tight">{a.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Trending Scams */}
        <div className="mb-6 animate-fade-up" style={{animationDelay:"0.1s"}}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-bold text-navy dark:text-slate-200 font-display">Trending Scams</p>
            <Link href="/alerts" className="text-xs text-green-safe dark:text-green-400 font-semibold flex items-center gap-0.5 hover:underline">
              View All <ChevronRight size={12} />
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            {TRENDING.map((t, i) => (
              <Link key={i} href="/alerts"
                className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl p-4 flex items-start gap-3 shadow-card dark:shadow-dark-card hover:shadow-card-md transition-shadow">
                <div className={`w-9 h-9 rounded-xl ${t.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <span className={t.color}>{t.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-sm font-bold text-navy dark:text-slate-200">{t.title}</p>
                    <span className="chip-warn text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">{t.tag}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recently Reported */}
        <div className="mb-6 animate-fade-up" style={{animationDelay:"0.15s"}}>
          <p className="text-sm font-bold text-navy dark:text-slate-200 font-display mb-3">Recently Reported</p>
          <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card overflow-hidden">
            {RECENT.map((r, i) => (
              <Link key={i} href="/verify"
                className={`flex items-center gap-3 px-4 py-3.5 hover:bg-surface-low dark:hover:bg-dark-surface-high transition-colors ${i < RECENT.length - 1 ? "border-b border-slate-100 dark:border-dark-surface-high" : ""}`}>
                <div className="w-9 h-9 rounded-xl bg-surface-low dark:bg-dark-surface-high flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-500 dark:text-slate-400">{r.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-navy dark:text-slate-200 truncate">{r.entity}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{r.detail}</p>
                </div>
                <span className={`chip-risk text-[10px] font-bold px-2 py-1 rounded-full flex-shrink-0`}>{r.risk}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Safety Wisdom */}
        <div className="mb-4 animate-fade-up" style={{animationDelay:"0.2s"}}>
          <p className="text-sm font-bold text-navy dark:text-slate-200 font-display mb-3">Safety Wisdom</p>
          <div className="flex flex-col gap-3">
            {WISDOM.map((w, i) => (
              <div key={i} className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl p-4 shadow-card dark:shadow-dark-card flex gap-3">
                <div className={`w-9 h-9 rounded-xl bg-surface-low dark:bg-dark-surface-high flex items-center justify-center flex-shrink-0 ${w.iconColor}`}>
                  {w.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-navy dark:text-slate-200">{w.tip}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
