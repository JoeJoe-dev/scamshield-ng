"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight } from "lucide-react";

export default function Auth() {
  const router = useRouter();
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", name: "", phone: "" });
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const inputCls = "w-full bg-surface-low dark:bg-dark-surface-low border border-slate-200/0 focus:border-navy/20 dark:focus:border-white/20 rounded-2xl px-4 py-3.5 text-sm font-medium transition-all outline-none";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save user data to localStorage
    localStorage.setItem('userName', form.name || 'User');
    localStorage.setItem('userEmail', form.email);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface dark:bg-dark-surface">
      {/* Header with gradient */}
      <div className="bg-navy-gradient px-5 pt-10 pb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-green-safe/10 -translate-y-1/2 translate-x-1/2" />
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
              <Shield size={16} className="text-white" />
            </div>
            <span className="text-white font-display font-bold text-sm">ScamShield NG</span>
          </div>
        </div>
        <div className="relative z-10">
          <p className="text-white/50 text-xs font-medium uppercase tracking-widest mb-1">🔒 Secure Access</p>
          <h1 className="text-2xl font-bold text-white font-display">Protecting your<br />digital identity</h1>
        </div>
        {/* Tab switcher inside header */}
        <div className="relative z-10 mt-5 flex gap-1 p-1 bg-white/8 rounded-2xl">
          {(["login","signup"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold font-display transition-all ${
                tab === t ? "bg-white text-white shadow-md" : "text-white/60 hover:text-white/80"
              }`}>
              {t === "login" ? "Login" : "Sign Up"}
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 px-5 pt-6 pb-8 flex flex-col gap-4">
        {tab === "signup" && (
          <>
            <div>
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">Full Name</label>
              <div className="relative">
                <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input value={form.name} onChange={e => set("name", e.target.value)}
                  placeholder="Chinwendu Okafor" className={`${inputCls} pl-10`} required />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">Phone Number</label>
              <div className="relative">
                <Phone size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input type="tel" value={form.phone} onChange={e => set("phone", e.target.value)}
                  placeholder="+234 800 000 0000" className={`${inputCls} pl-10`} />
              </div>
            </div>
          </>
        )}

        <div>
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">Email or Phone</label>
          <div className="relative">
            <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input type="email" value={form.email} onChange={e => set("email", e.target.value)}
              placeholder="you@email.com" className={`${inputCls} pl-10`} required />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">Password</label>
          <div className="relative">
            <Lock size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input type={showPass ? "text" : "password"} value={form.password} onChange={e => set("password", e.target.value)}
              placeholder="••••••••" className={`${inputCls} pl-10 pr-11`} required />
            <button type="button" onClick={() => setShowPass(s => !s)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
              {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {tab === "login" && (
            <button type="button" onClick={() => alert("Password reset link sent to your email.")}
              className="text-xs text-navy dark:text-blue-400 font-semibold mt-1.5 float-right hover:underline">
              Forgot Password?
            </button>
          )}
        </div>

        <div className="mt-2 flex flex-col gap-3">
          <button type="submit"
            className="w-full bg-navy-gradient text-white font-bold py-4 rounded-2xl font-display flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-[0.98]">
            {tab === "login" ? "Login" : "Create Account"} <ArrowRight size={18} />
          </button>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-200 dark:bg-dark-surface-high" />
            <span className="text-xs text-slate-400 font-medium">Or continue with</span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-dark-surface-high" />
          </div>

          <button type="button"
            onClick={() => router.push("/dashboard")}
            className="w-full bg-surface-low dark:bg-dark-surface-low text-slate-700 dark:text-slate-300 font-semibold py-3.5 rounded-2xl flex items-center justify-center gap-3 hover:bg-surface-high dark:hover:bg-dark-surface-high transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Google Account
          </button>
        </div>

        <p className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2">
          By signing up, you agree to our{" "}
          <button type="button" onClick={() => alert("Terms of Service — Coming soon.")} className="text-navy dark:text-blue-400 font-semibold hover:underline">Terms</button>
          {" "}and{" "}
          <button type="button" onClick={() => alert("Privacy Policy — Coming soon.")} className="text-navy dark:text-blue-400 font-semibold hover:underline">Privacy Policy</button>
        </p>

        {/* Server status */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-safe animate-pulse2" />
          <p className="text-xs text-slate-400">Server Status: <span className="text-green-safe font-semibold">Secure</span></p>
        </div>
      </form>
    </div>
  );
}
