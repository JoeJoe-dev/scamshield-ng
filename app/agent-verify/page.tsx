"use client";
import { useState } from "react";
import { AppBar } from "@/components/AppBar";
import { BottomNav } from "@/components/BottomNav";
import { ShieldCheck, Upload, Lock, CheckCircle, BadgeCheck, Clock, X } from "lucide-react";

export default function AgentVerify() {
  const [form, setForm] = useState({ fullName:"", businessName:"", phone:"", email:"" });
  const [idFile, setIdFile] = useState("");
  const [bizFile, setBizFile] = useState("NIN_Slip_Final.pdf");
  const [submitted, setSubmitted] = useState(false);
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const inputCls = "w-full bg-surface-low dark:bg-dark-surface-low rounded-2xl px-4 py-3.5 text-sm outline-none transition-all focus:bg-surface-lowest dark:focus:bg-dark-surface-card";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone) return;
    setSubmitted(true);
  };

  if (submitted) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface dark:bg-dark-surface px-6 text-center pb-24">
      <div className="w-20 h-20 rounded-full bg-green-safe/15 flex items-center justify-center mb-5 animate-scale-in">
        <BadgeCheck size={40} className="text-green-safe dark:text-green-400" />
      </div>
      <h2 className="text-2xl font-bold text-navy dark:text-slate-100 font-display mb-2">Application Submitted!</h2>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
        Your verification application is under review. Our team will respond within 3–5 business days.
      </p>
      <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card p-4 w-full mb-6 text-left">
        <p className="text-xs text-slate-400 mb-1">Application ID</p>
        <p className="text-sm font-bold text-navy dark:text-slate-200 font-display">
          VER-2026-{Math.floor(Math.random() * 90000) + 10000}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <Clock size={12} className="text-amber-600 dark:text-amber-400" />
          <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold">Pending Review</p>
        </div>
      </div>
      <a href="/profile" className="w-full bg-navy-gradient text-white font-bold py-4 rounded-2xl text-center font-display block hover:opacity-90">
        Back to Profile
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar title="Get Verified Badge" back="/profile" showBell />

      <div className="px-5 pt-2">
        {/* Hero */}
        <div className="bg-navy-gradient rounded-2xl p-5 mb-5 animate-fade-up">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={28} className="text-green-400" />
            </div>
            <div>
              <p className="text-white font-bold text-lg font-display leading-tight">Official Guardian Badge</p>
              <p className="text-white/60 text-xs mt-1 leading-relaxed">Join the network of trusted professionals. Verification builds trust and protects users across the Nigerian digital ecosystem.</p>
            </div>
          </div>

          {/* Status row */}
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3 flex-wrap">
            <div className="glass px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse2" />
              <span className="text-white/80 text-xs font-semibold">Application Open</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="chip-warn text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <Clock size={11} /> Pending
              </span>
              <span className="chip-safe text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <CheckCircle size={11} /> Approved
              </span>
              <span className="chip-risk text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <X size={11} /> Rejected
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <p className="text-sm font-bold text-navy dark:text-slate-200 font-display animate-fade-up" style={{animationDelay:"0.05s"}}>
            Identity Details
          </p>

          {[
            ["Full Name",      "fullName",     "Chinwendu Okafor",       "text"],
            ["Business Name",  "businessName", "Optional — if applicable","text"],
            ["Phone Number",   "phone",        "+234 800 000 0000",       "tel"],
            ["Email Address",  "email",        "you@business.com",        "email"],
          ].map(([label, key, placeholder, type], i) => (
            <div key={key} className="animate-fade-up" style={{animationDelay:`${0.05 + i * 0.04}s`}}>
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">{label}</label>
              <input
                type={type}
                value={form[key as keyof typeof form]}
                onChange={e => set(key, e.target.value)}
                placeholder={placeholder}
                className={inputCls}
                required={key === "fullName" || key === "phone"}
              />
            </div>
          ))}

          {/* ID Upload */}
          <div className="animate-fade-up" style={{animationDelay:"0.22s"}}>
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">Upload ID</label>
            <p className="text-[11px] text-slate-400 mb-2">NIN, International Passport, or Driver&apos;s License</p>
            <label className="block cursor-pointer">
              <input type="file" accept=".pdf,.jpg,.png" className="hidden"
                onChange={e => setIdFile(e.target.files?.[0]?.name || "")} />
              <div className={`rounded-2xl border-2 border-dashed transition-all p-4 flex items-center gap-3 ${
                idFile ? "border-green-safe/40 bg-green-safe/5 dark:bg-green-safe/10" : "border-slate-200 dark:border-dark-surface-high bg-surface-low dark:bg-dark-surface-low hover:border-navy/30"
              }`}>
                <Upload size={20} className={idFile ? "text-green-safe dark:text-green-400" : "text-slate-400"} />
                <div>
                  {idFile ? (
                    <><p className="text-sm font-semibold text-green-safe dark:text-green-400">{idFile}</p><p className="text-xs text-slate-400">Uploaded ✓</p></>
                  ) : (
                    <><p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Tap to select file</p><p className="text-xs text-slate-400">PDF, JPG, PNG (Max 5MB)</p></>
                  )}
                </div>
              </div>
            </label>
          </div>

          {/* Business Proof */}
          <div className="animate-fade-up" style={{animationDelay:"0.26s"}}>
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">Business Proof</label>
            <p className="text-[11px] text-slate-400 mb-2">CAC Certificate or Utility Bill with business name</p>
            <label className="block cursor-pointer">
              <input type="file" accept=".pdf,.jpg,.png" className="hidden"
                onChange={e => setBizFile(e.target.files?.[0]?.name || "")} />
              <div className={`rounded-2xl border-2 border-dashed transition-all p-4 flex items-center gap-3 ${
                bizFile ? "border-green-safe/40 bg-green-safe/5 dark:bg-green-safe/10" : "border-slate-200 dark:border-dark-surface-high bg-surface-low dark:bg-dark-surface-low hover:border-navy/30"
              }`}>
                <Upload size={20} className="text-green-safe dark:text-green-400" />
                <div>
                  <p className="text-sm font-semibold text-green-safe dark:text-green-400">{bizFile}</p>
                  <p className="text-xs text-slate-400">Uploaded successfully ✓</p>
                </div>
              </div>
            </label>
          </div>

          {/* Submit */}
          <button type="submit"
            disabled={!form.fullName || !form.phone}
            className={`w-full font-bold py-4 rounded-2xl font-display flex items-center justify-center gap-2 transition-all animate-fade-up ${
              form.fullName && form.phone
                ? "bg-navy-gradient text-white hover:opacity-90 active:scale-[0.98]"
                : "bg-surface-low dark:bg-dark-surface-low text-slate-400 cursor-not-allowed"
            }`} style={{animationDelay:"0.3s"}}>
            <BadgeCheck size={18} /> Apply for Verification
          </button>

          {/* Privacy note */}
          <div className="flex items-center gap-2 animate-fade-up" style={{animationDelay:"0.32s"}}>
            <Lock size={14} className="text-green-safe dark:text-green-400 flex-shrink-0" />
            <p className="text-xs text-slate-400 leading-relaxed">
              Your data is encrypted and protected by Nigerian Privacy Laws. We do not share your details with third parties.
            </p>
          </div>
        </form>
      </div>

      <BottomNav />
    </div>
  );
}
