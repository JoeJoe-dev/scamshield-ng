"use client";
import { useState } from "react";
import { AppBar } from "@/components/AppBar";
import { BottomNav } from "@/components/BottomNav";
import { Shield, Upload, Send, CheckCircle, Scale, EyeOff, ChevronDown } from "lucide-react";

const SCAM_TYPES = [
  "Bank Fraud / Phishing",
  "Social Media Impersonation",
  "Investment Scam (Ponzi)",
  "Online Marketplace Fraud",
  "WhatsApp Call/Text Scam",
  "Fake Recruitment / Job Offer",
  "Rental Scam",
  "Other Fraudulent Activity",
];

export default function ReportScam() {
  const [scamType, setScamType] = useState("");
  const [showTypes, setShowTypes] = useState(false);
  const [fraudsterDetail, setFraudsDetail] = useState("");
  const [description, setDescription] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scamType || !description.trim()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface dark:bg-dark-surface px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-green-safe/15 flex items-center justify-center mb-5 animate-scale-in">
          <CheckCircle size={40} className="text-green-safe dark:text-green-400" />
        </div>
        <h2 className="text-2xl font-bold text-navy dark:text-slate-100 font-display mb-2">Report Submitted</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-2">
          Thank you for helping protect Nigeria. Your report has been encrypted and submitted to our verification team.
        </p>
        {anonymous && (
          <div className="chip-safe text-xs font-semibold px-3 py-1 rounded-full mb-6 inline-block">
            ✓ Submitted Anonymously
          </div>
        )}
        <div className="bg-green-safe/8 dark:bg-green-safe/15 rounded-2xl p-4 w-full mb-6 text-left">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Reference ID</p>
          <p className="text-sm font-bold text-navy dark:text-slate-200 font-display">
            SCM-2026-{Math.floor(Math.random() * 900000) + 100000}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Flagged reports are shared with EFCC / Interpol for investigation.</p>
        </div>
        <a href="/dashboard"
          className="w-full bg-navy-gradient text-white font-bold py-4 rounded-2xl text-center font-display block hover:opacity-90 transition-opacity">
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar showLogo showBell />

      <div className="px-5 pt-2">
        {/* Hero */}
        <div className="mb-5 animate-fade-up">
          <h1 className="text-2xl font-bold text-navy dark:text-slate-100 font-display">Report a Scam</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
            Your report helps us build a safer digital Nigeria. All information is encrypted and handled with extreme confidentiality.
          </p>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-2 gap-3 mb-5 animate-fade-up" style={{animationDelay:"0.05s"}}>
          <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl p-3 shadow-card dark:shadow-dark-card flex items-start gap-2">
            <Scale size={16} className="text-navy dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-navy dark:text-slate-200">Legal Support</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">Shared with EFCC/Interpol for investigation</p>
            </div>
          </div>
          <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl p-3 shadow-card dark:shadow-dark-card flex items-start gap-2">
            <EyeOff size={16} className="text-green-safe dark:text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-navy dark:text-slate-200">Stay Private</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">Choose Anonymous to hide your identity</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Scam type */}
          <div className="animate-fade-up" style={{animationDelay:"0.1s"}}>
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">What happened?</label>
            <div className="relative">
              <button type="button" onClick={() => setShowTypes(s => !s)}
                className="w-full flex items-center justify-between bg-surface-low dark:bg-dark-surface-low px-4 py-3.5 rounded-2xl text-sm font-medium text-left transition-all">
                <span className={scamType ? "text-navy dark:text-slate-200 font-semibold" : "text-slate-400"}>
                  {scamType || "Select Scam Type"}
                </span>
                <ChevronDown size={16} className={`text-slate-400 transition-transform ${showTypes ? "rotate-180" : ""}`} />
              </button>
              {showTypes && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card-lg dark:shadow-dark-card overflow-hidden z-20">
                  {SCAM_TYPES.map(t => (
                    <button key={t} type="button"
                      onClick={() => { setScamType(t); setShowTypes(false); }}
                      className={`w-full px-4 py-3 text-sm text-left hover:bg-surface-low dark:hover:bg-dark-surface-high transition-colors ${t === scamType ? "text-green-safe dark:text-green-400 font-bold" : "text-slate-700 dark:text-slate-300"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Fraudster details */}
          <div className="animate-fade-up" style={{animationDelay:"0.12s"}}>
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">Fraudster Details</label>
            <input
              value={fraudsterDetail}
              onChange={e => setFraudsDetail(e.target.value)}
              placeholder="Phone number, account number, name, or URL"
              className="w-full bg-surface-low dark:bg-dark-surface-low rounded-2xl px-4 py-3.5 text-sm outline-none"
            />
          </div>

          {/* Description */}
          <div className="animate-fade-up" style={{animationDelay:"0.14s"}}>
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">Describe the Incident</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Tell us what happened in your own words. The more detail, the better we can investigate..."
              rows={4}
              className="w-full bg-surface-low dark:bg-dark-surface-low rounded-2xl px-4 py-3.5 text-sm outline-none resize-none"
              required
            />
          </div>

          {/* Upload evidence */}
          <div className="animate-fade-up" style={{animationDelay:"0.16s"}}>
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">Upload Evidence</label>
            <label className="block cursor-pointer">
              <input type="file" accept=".png,.jpg,.pdf" className="hidden"
                onChange={e => setFileName(e.target.files?.[0]?.name || "")} />
              <div className={`rounded-2xl border-2 border-dashed transition-all p-4 flex items-center gap-3 ${
                fileName
                  ? "border-green-safe/40 dark:border-green-safe/60 bg-green-safe/5 dark:bg-green-safe/10"
                  : "border-slate-200 dark:border-dark-surface-high bg-surface-low dark:bg-dark-surface-low hover:border-navy/30"
              }`}>
                <Upload size={20} className={fileName ? "text-green-safe dark:text-green-400" : "text-slate-400"} />
                <div>
                  {fileName ? (
                    <>
                      <p className="text-sm font-semibold text-green-safe dark:text-green-400">{fileName}</p>
                      <p className="text-xs text-slate-400">Uploaded successfully ✓</p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Upload Screenshot</p>
                      <p className="text-xs text-slate-400">PNG, JPG or PDF up to 10MB</p>
                    </>
                  )}
                </div>
              </div>
            </label>
          </div>

          {/* Anonymous toggle */}
          <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl p-4 shadow-card dark:shadow-dark-card flex items-center justify-between animate-fade-up" style={{animationDelay:"0.18s"}}>
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${anonymous ? "bg-navy/10 dark:bg-white/10" : "bg-surface-low dark:bg-dark-surface-high"}`}>
                <EyeOff size={18} className={anonymous ? "text-navy dark:text-slate-300" : "text-slate-400"} />
              </div>
              <div>
                <p className="text-sm font-bold text-navy dark:text-slate-200">Report Anonymously</p>
                <p className="text-xs text-slate-400">Protect your identity</p>
              </div>
            </div>
            <button type="button" onClick={() => setAnonymous(a => !a)}
              className={`relative w-12 h-7 rounded-full transition-colors ${anonymous ? "bg-navy dark:bg-navy-mid" : "bg-slate-200 dark:bg-dark-surface-high"}`}>
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${anonymous ? "translate-x-6" : "translate-x-1"}`} />
            </button>
          </div>

          {/* Submit */}
          <button type="submit"
            disabled={!scamType || !description.trim()}
            className={`w-full font-bold py-4 rounded-2xl font-display flex items-center justify-center gap-2 text-base transition-all animate-fade-up ${
              scamType && description.trim()
                ? "bg-navy-gradient text-white hover:opacity-90 active:scale-[0.98]"
                : "bg-surface-low dark:bg-dark-surface-low text-slate-400 cursor-not-allowed"
            }`} style={{animationDelay:"0.2s"}}>
            <Send size={18} /> Submit Report
          </button>

          {/* Security badge */}
          <div className="flex items-center justify-center gap-2 animate-fade-up" style={{animationDelay:"0.22s"}}>
            <Shield size={14} className="text-green-safe dark:text-green-400" />
            <p className="text-xs text-slate-400">Verified Secure Submission · End-to-End Encrypted</p>
          </div>
        </form>
      </div>

      <BottomNav />
    </div>
  );
}
