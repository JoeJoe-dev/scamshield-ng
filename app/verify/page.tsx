"use client";
import { useState } from "react";
import { AppBar } from "@/components/AppBar";
import { BottomNav } from "@/components/BottomNav";
import { Search, ShieldCheck, AlertTriangle, Phone, Building2, CreditCard, Clock, Shield, ChevronDown } from "lucide-react";

type VerifyResult = "none" | "loading" | "risk" | "safe" | "unknown";

const RISK_DB: Record<string, { risk: "risk" | "safe"; reports: number; type: string; summary: string }> = {
  "+2348100029912": { risk:"risk",  reports:42, type:"Bank Impersonation",  summary:"They called claiming to be from my bank asking for an OTP to upgrade my BVN…" },
  "+2349012345678": { risk:"risk",  reports:18, type:"Investment Fraud",     summary:"Promised 200% returns in 48hrs via WhatsApp. Collected ₦150,000 from victim." },
  "0801234567":     { risk:"safe",  reports:0,  type:"",                     summary:"" },
  "cbn-grant.xyz":  { risk:"risk",  reports:31, type:"Phishing Site",        summary:"Domain mimicking CBN portal. Harvesting bank login credentials." },
};

const TYPES = ["Phone Number", "Bank Account", "Business Name", "Website / URL"];

export default function Verify() {
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("Phone Number");
  const [showTypes, setShowTypes] = useState(false);
  const [result, setResult] = useState<VerifyResult>("none");
  const [resultData, setResultData] = useState<typeof RISK_DB[string] | null>(null);

  const handleVerify = () => {
    if (!query.trim()) return;
    setResult("loading");
    setTimeout(() => {
      const normalized = query.replace(/\s/g, "");
      const found = RISK_DB[normalized];
      if (found) {
        setResultData(found);
        setResult(found.risk);
      } else {
        setResult("safe");
        setResultData(null);
      }
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar showLogo showBell />

      <div className="px-5 pt-2 pb-4">
        {/* Hero text */}
        <div className="mb-6 animate-fade-up">
          <h1 className="text-2xl font-bold text-navy dark:text-slate-100 font-display leading-tight">Verify Entity</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
            Check phone numbers, bank accounts, or businesses against Nigeria&apos;s central scam database.
          </p>
        </div>

        {/* Search box */}
        <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card p-4 mb-4 animate-fade-up" style={{animationDelay:"0.05s"}}>
          {/* Type selector */}
          <div className="relative mb-3">
            <button onClick={() => setShowTypes(s => !s)}
              className="w-full flex items-center justify-between bg-surface-low dark:bg-dark-surface-low px-4 py-2.5 rounded-xl text-sm font-semibold text-navy dark:text-slate-300">
              <div className="flex items-center gap-2">
                {selectedType === "Phone Number"   && <Phone size={15} className="text-slate-400" />}
                {selectedType === "Bank Account"   && <CreditCard size={15} className="text-slate-400" />}
                {selectedType === "Business Name"  && <Building2 size={15} className="text-slate-400" />}
                {selectedType === "Website / URL"  && <Search size={15} className="text-slate-400" />}
                {selectedType}
              </div>
              <ChevronDown size={16} className={`text-slate-400 transition-transform ${showTypes ? "rotate-180" : ""}`} />
            </button>
            {showTypes && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card-md dark:shadow-dark-card overflow-hidden z-10">
                {TYPES.map(t => (
                  <button key={t} onClick={() => { setSelectedType(t); setShowTypes(false); }}
                    className={`w-full px-4 py-3 text-sm font-medium text-left hover:bg-surface-low dark:hover:bg-dark-surface-high transition-colors ${t === selectedType ? "text-green-safe dark:text-green-400 font-semibold" : "text-slate-700 dark:text-slate-300"}`}>
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input + button */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleVerify()}
                placeholder={
                  selectedType === "Phone Number"  ? "+234 800 000 0000" :
                  selectedType === "Bank Account"  ? "0123456789" :
                  selectedType === "Business Name" ? "Business or person name" :
                  "suspicious-link.com"
                }
                className="w-full bg-surface-low dark:bg-dark-surface-low rounded-xl pl-9 pr-4 py-3 text-sm outline-none transition-all"
              />
            </div>
            <button onClick={handleVerify}
              className="bg-navy-gradient text-white font-bold px-5 rounded-xl text-sm hover:opacity-90 transition-opacity active:scale-[0.97] whitespace-nowrap">
              Verify Now
            </button>
          </div>

          {/* Status badge */}
          <div className="flex items-center gap-2 mt-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-safe animate-pulse2" />
            <p className="text-xs text-slate-400 font-medium">Live Database · <span className="text-green-safe dark:text-green-400 font-semibold">Verification Status Active</span></p>
          </div>
        </div>

        {/* Loading state */}
        {result === "loading" && (
          <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card p-6 mb-4 flex flex-col items-center gap-3 animate-scale-in">
            <div className="w-14 h-14 rounded-2xl bg-navy/5 dark:bg-white/5 flex items-center justify-center">
              <Shield size={28} className="text-navy dark:text-slate-300 animate-pulse2" />
            </div>
            <div className="w-full space-y-2">
              <div className="shimmer-line h-3 w-3/4 mx-auto" />
              <div className="shimmer-line h-3 w-1/2 mx-auto" />
            </div>
            <p className="text-xs text-slate-400">Scanning national database…</p>
          </div>
        )}

        {/* RISK result */}
        {result === "risk" && resultData && (
          <div className="animate-scale-in mb-4">
            <div className="bg-red-risk/5 dark:bg-red-risk/10 rounded-2xl p-5 border border-red-risk/20 dark:border-red-risk/30 mb-3">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-red-risk/15 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={24} className="text-red-risk dark:text-red-400" />
                </div>
                <div>
                  <span className="chip-risk text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-1">⚠ High Risk</span>
                  <p className="text-sm font-bold text-navy dark:text-slate-200">{query}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{resultData.type}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-xl p-3 text-center">
                  <p className="text-xl font-bold text-red-risk dark:text-red-400 font-display">{resultData.reports}</p>
                  <p className="text-xs text-slate-400">Total Reports</p>
                </div>
                <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-xl p-3 text-center">
                  <p className="text-sm font-bold text-navy dark:text-slate-200">{resultData.type}</p>
                  <p className="text-xs text-slate-400">Common Type</p>
                </div>
              </div>
              <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Clock size={12} className="text-slate-400" />
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Recent Report</p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">&ldquo;{resultData.summary}&rdquo;</p>
              </div>
            </div>
            <button onClick={() => { setQuery(""); setResult("none"); }}
              className="w-full bg-navy-gradient text-white font-bold py-3.5 rounded-2xl text-sm font-display hover:opacity-90 transition-opacity">
              Verify Another
            </button>
          </div>
        )}

        {/* SAFE result */}
        {result === "safe" && !resultData && (
          <div className="animate-scale-in mb-4">
            <div className="bg-green-safe/5 dark:bg-green-safe/10 rounded-2xl p-5 border border-green-safe/20 dark:border-green-safe/30 mb-3">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-green-safe/15 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={24} className="text-green-safe dark:text-green-400" />
                </div>
                <div>
                  <span className="chip-safe text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-1">✓ Verified Safe</span>
                  <p className="text-sm font-bold text-navy dark:text-slate-200">{query}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">No scam reports found</p>
                </div>
              </div>
              <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-xl p-3">
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed flex items-start gap-2">
                  <ShieldCheck size={14} className="text-green-safe dark:text-green-400 mt-0.5 flex-shrink-0" />
                  This entity is not currently flagged in our central registry. Exercise general caution with new contacts.
                </p>
              </div>
            </div>
            <button onClick={() => { setQuery(""); setResult("none"); }}
              className="w-full bg-navy-gradient text-white font-bold py-3.5 rounded-2xl text-sm font-display hover:opacity-90 transition-opacity">
              Verify Another
            </button>
          </div>
        )}

        {/* Tips when idle */}
        {result === "none" && (
          <div className="animate-fade-up" style={{animationDelay:"0.1s"}}>
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">What you can verify</p>
            <div className="flex flex-col gap-2">
              {[
                { icon:<Phone size={16}/>,     label:"Phone Numbers",    ex:"Verify any Nigerian mobile number" },
                { icon:<CreditCard size={16}/>, label:"Bank Accounts",    ex:"Check before sending a transfer"  },
                { icon:<Building2 size={16}/>,  label:"Businesses",       ex:"Search CAC-registered entities"   },
                { icon:<Search size={16}/>,     label:"Links & Websites", ex:"Spot phishing domains instantly"  },
              ].map((item, i) => (
                <div key={i} className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl p-4 flex items-center gap-3 shadow-card dark:shadow-dark-card">
                  <div className="w-9 h-9 rounded-xl bg-surface-low dark:bg-dark-surface-high flex items-center justify-center text-slate-500 dark:text-slate-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy dark:text-slate-200">{item.label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.ex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
