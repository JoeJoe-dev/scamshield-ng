"use client";
import Link from "next/link";
import { AppBar } from "@/components/AppBar";
import { BottomNav } from "@/components/BottomNav";
import { AlertTriangle, TrendingUp, Briefcase, Share2, ShieldCheck, ChevronRight, Bell } from "lucide-react";

const ALERTS = [
  {
    id:"1",
    priority:"Critical Priority",
    priorityColor:"chip-risk",
    icon:<AlertTriangle size={20}/>,
    iconBg:"bg-red-risk/15 dark:bg-red-risk/25",
    iconColor:"text-red-risk dark:text-red-400",
    time:"2 mins ago",
    title:"Fake Rental Listings: Lekki Phase 1",
    body:"Scammers are posing as agents for non-existent luxury apartments. They request \"commitment fees\" before viewing. Do not pay upfront.",
    tag:"Rental Scam",
    tagColor:"chip-risk",
  },
  {
    id:"2",
    priority:"Investment Risk",
    priorityColor:"chip-warn",
    icon:<TrendingUp size={20}/>,
    iconBg:"bg-amber-500/15 dark:bg-amber-500/25",
    iconColor:"text-amber-600 dark:text-amber-400",
    time:"45 mins ago",
    title:"\"Crypto-Doubling\" WhatsApp Groups",
    body:"Viral messages promising 200% returns in 24 hours. These are Ponzi schemes targeting university students and young professionals.",
    tag:"Investment Fraud",
    tagColor:"chip-warn",
  },
  {
    id:"3",
    priority:"Employment Scam",
    priorityColor:"chip-warn",
    icon:<Briefcase size={20}/>,
    iconBg:"bg-blue-500/15 dark:bg-blue-500/25",
    iconColor:"text-blue-600 dark:text-blue-400",
    time:"3 hours ago",
    title:"Fake NNPC Recruitment Portal",
    body:"A phishing site mimicking the official NNPC portal is harvesting personal data and asking for \"processing fees\". Verify all links before clicking.",
    tag:"Job Scam",
    tagColor:"chip-warn",
  },
  {
    id:"4",
    priority:"Banking Alert",
    priorityColor:"chip-risk",
    icon:<AlertTriangle size={20}/>,
    iconBg:"bg-red-risk/15 dark:bg-red-risk/25",
    iconColor:"text-red-risk dark:text-red-400",
    time:"Yesterday",
    title:"CBN Grant SMS Phishing Campaign",
    body:"Mass SMS campaign impersonating Central Bank of Nigeria offering ₦500K grants. All links in these SMS are malicious. Do not click.",
    tag:"Phishing",
    tagColor:"chip-risk",
  },
];

export default function Alerts() {
  return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar showLogo showBell />

      <div className="px-5 pt-2">
        {/* Hero */}
        <div className="mb-5 animate-fade-up">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-red-risk animate-pulse2" />
            <p className="text-xs font-bold text-red-risk dark:text-red-400 uppercase tracking-wider">Live Threat Feed</p>
          </div>
          <h1 className="text-2xl font-bold text-navy dark:text-slate-100 font-display">Real-time Scam<br />Monitoring</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Active threat intelligence across Nigeria</p>
        </div>

        {/* Alerts */}
        <div className="flex flex-col gap-3">
          {ALERTS.map((alert, i) => (
            <div key={alert.id}
              className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card overflow-hidden animate-fade-up"
              style={{animationDelay:`${0.05 + i * 0.06}s`}}>
              {/* Header strip */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 dark:border-dark-surface-high">
                <span className={`${alert.priorityColor} text-[11px] font-bold px-2.5 py-1 rounded-full`}>
                  {alert.priority}
                </span>
                <span className="text-xs text-slate-400">{alert.time}</span>
              </div>
              {/* Body */}
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl ${alert.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <span className={alert.iconColor}>{alert.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-navy dark:text-slate-200 leading-tight mb-1">{alert.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{alert.body}</p>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-dark-surface-high">
                  <Link href={`/alerts/${alert.id}`}
                    className="flex-1 bg-navy-gradient text-white text-xs font-bold py-2 rounded-xl text-center hover:opacity-90 transition-opacity">
                    View Details
                  </Link>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: alert.title, text: alert.body });
                      } else {
                        alert.title && window.alert("Share feature: " + alert.title);
                      }
                    }}
                    className="w-9 h-9 bg-surface-low dark:bg-dark-surface-high rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-surface-high dark:hover:bg-dark-surface-high transition-colors">
                    <Share2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom protection card */}
        <div className="mt-5 bg-navy-gradient rounded-2xl p-5 animate-fade-up" style={{animationDelay:"0.3s"}}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={24} className="text-green-400" />
            </div>
            <div>
              <p className="text-white font-bold font-display text-sm">Stay Protected</p>
              <p className="text-white/60 text-xs mt-0.5 leading-relaxed">Our AI monitors millions of data points to flag scams before they reach you. Keep your notifications enabled for instant protection.</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse2" />
            <p className="text-white/60 text-xs font-medium">Shield Protection Active</p>
          </div>
        </div>

        {/* Enable notifications */}
        <button
          onClick={() => alert("✅ Notifications enabled! You will receive instant alerts for new scam activity.")}
          className="w-full mt-3 mb-4 flex items-center justify-center gap-2 bg-surface-lowest dark:bg-dark-surface-card text-navy dark:text-slate-300 font-semibold text-sm py-3.5 rounded-2xl shadow-card dark:shadow-dark-card hover:shadow-card-md transition-shadow animate-fade-up"
          style={{animationDelay:"0.35s"}}>
          <Bell size={16} className="text-green-safe dark:text-green-400" />
          Enable Push Notifications
          <ChevronRight size={14} className="text-slate-400" />
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
