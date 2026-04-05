"use client";
import { useState } from "react";
import { AppBar } from "@/components/AppBar";
import { BottomNav } from "@/components/BottomNav";
import { ShieldCheck, Phone, Clock, CheckCircle, AlertTriangle } from "lucide-react";

const HISTORY = [
  { entity:"+234 810 002 9912", type:"Phone",   result:"risk",  date:"Today, 10:32 AM"  },
  { entity:"cbn-grant.xyz",     type:"Website", result:"risk",  date:"Today, 9:15 AM"   },
  { entity:"+234 905 123 4567", type:"Phone",   result:"safe",  date:"Yesterday"        },
  { entity:"Adeyemi Ventures",  type:"Business",result:"safe",  date:"3 days ago"       },
  { entity:"+234 810 002 0000", type:"Phone",   result:"risk",  date:"1 week ago"       },
];

export default function ProfileSub({ params }: { params: { slug: string } }) {
  const [name, setName] = useState("Chinwendu Okafor");
  const [phone, setPhone] = useState("+234 803 000 0000");
  const [twofa, setTwofa] = useState(true);
  const [notif, setNotif] = useState({ alerts:true, report:true, news:false });

  const inputCls = "w-full bg-surface-low dark:bg-dark-surface-low rounded-2xl px-4 py-3.5 text-sm outline-none";

  if (params.slug === "edit") return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar title="Personal Information" back="/profile" />
      <div className="px-5 pt-4 flex flex-col gap-4">
        {[["Full Name", name, setName], ["Phone Number", phone, setPhone], ["Email", "chinwendu@email.com", () => {}], ["Location", "Lagos, Nigeria", () => {}]].map(([label, val, setter]) => (
          <div key={label as string}>
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">{label as string}</label>
            <input value={val as string} onChange={e => (setter as Function)(e.target.value)} className={inputCls} />
          </div>
        ))}
        <button onClick={() => alert("Profile updated successfully!")} className="w-full bg-navy-gradient text-white font-bold py-4 rounded-2xl font-display hover:opacity-90 mt-2">Save Changes</button>
      </div>
      <BottomNav />
    </div>
  );

  if (params.slug === "security") return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar title="Security & Privacy" back="/profile" />
      <div className="px-5 pt-4 flex flex-col gap-4">
        <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-green-safe/10 dark:bg-green-safe/20 flex items-center justify-center">
              <ShieldCheck size={18} className="text-green-safe dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-navy dark:text-slate-200">Two-Factor Auth (2FA)</p>
              <p className="text-xs text-slate-400">{twofa ? "Enabled — your account is protected" : "Disabled — enable for extra security"}</p>
            </div>
          </div>
          <button onClick={() => setTwofa(t => !t)} className={`relative w-12 h-7 rounded-full transition-colors ${twofa ? "bg-green-safe" : "bg-slate-200 dark:bg-dark-surface-high"}`}>
            <div className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${twofa ? "translate-x-6" : "translate-x-1"}`} />
          </button>
        </div>
        <button onClick={() => alert("Password reset link sent to your registered email.")} className="w-full bg-surface-lowest dark:bg-dark-surface-card text-navy dark:text-slate-300 font-semibold py-3.5 rounded-2xl shadow-card dark:shadow-dark-card text-sm hover:shadow-card-md transition-shadow">
          Change Password
        </button>
        <button onClick={() => alert("Your data export will be emailed to you within 24 hours.")} className="w-full bg-surface-lowest dark:bg-dark-surface-card text-navy dark:text-slate-300 font-semibold py-3.5 rounded-2xl shadow-card dark:shadow-dark-card text-sm">
          Download My Data
        </button>
        <button onClick={() => { if(confirm("Are you sure? This will permanently delete your account.")) alert("Account deletion requested."); }} className="w-full bg-red-risk/5 dark:bg-red-risk/10 text-red-risk dark:text-red-400 font-semibold py-3.5 rounded-2xl text-sm">
          Delete Account
        </button>
      </div>
      <BottomNav />
    </div>
  );

  if (params.slug === "history") return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar title="Verification History" back="/profile" />
      <div className="px-5 pt-4">
        <p className="text-xs text-slate-400 mb-4">{HISTORY.length} searches in total</p>
        <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card overflow-hidden">
          {HISTORY.map((h, i) => (
            <div key={i} className={`flex items-center gap-3 px-4 py-3.5 ${i < HISTORY.length-1 ? "border-b border-slate-100 dark:border-dark-surface-high" : ""}`}>
              <div className="w-9 h-9 rounded-xl bg-surface-low dark:bg-dark-surface-high flex items-center justify-center flex-shrink-0">
                <Phone size={15} className="text-slate-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-navy dark:text-slate-200 truncate">{h.entity}</p>
                <p className="text-xs text-slate-400 flex items-center gap-1"><Clock size={10}/>{h.date}</p>
              </div>
              <span className={h.result === "risk" ? "chip-risk" : "chip-safe"}>
                {h.result === "risk"
                  ? <AlertTriangle size={12} className="inline mr-1" />
                  : <CheckCircle size={12} className="inline mr-1" />}
                <span className="text-[10px] font-bold">{h.result === "risk" ? "HIGH RISK" : "SAFE"}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );

  if (params.slug === "notifications") return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar title="Notifications" back="/profile" />
      <div className="px-5 pt-4 flex flex-col gap-3">
        {[
          { key:"alerts", label:"Live Scam Alerts",    desc:"Real-time threat feed notifications" },
          { key:"report", label:"Report Updates",       desc:"Status changes on your submitted reports" },
          { key:"news",   label:"Security Tips & News", desc:"Weekly fraud prevention digest" },
        ].map(n => (
          <div key={n.key} className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-navy dark:text-slate-200">{n.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{n.desc}</p>
            </div>
            <button onClick={() => setNotif(prev => ({ ...prev, [n.key]: !prev[n.key as keyof typeof prev] }))}
              className={`relative w-12 h-7 rounded-full transition-colors ${notif[n.key as keyof typeof notif] ? "bg-navy dark:bg-navy-mid" : "bg-slate-200 dark:bg-dark-surface-high"}`}>
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${notif[n.key as keyof typeof notif] ? "translate-x-6" : "translate-x-1"}`} />
            </button>
          </div>
        ))}
        <button onClick={() => alert("Preferences saved.")} className="w-full bg-navy-gradient text-white font-bold py-4 rounded-2xl font-display hover:opacity-90 mt-2">Save Preferences</button>
      </div>
      <BottomNav />
    </div>
  );

  // Support fallback
  return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar title="Support Center" back="/profile" />
      <div className="px-5 pt-4 flex flex-col gap-3">
        {[
          { q:"How do I report a scam?",       a:"Go to Report → fill in the scam type and description → submit." },
          { q:"Is my data private?",           a:"Yes. All data is encrypted and handled under Nigerian Privacy Laws." },
          { q:"How do I get verified?",        a:"Go to Profile → Get Verified Badge → complete the application." },
          { q:"What is the source of reports?",a:"Reports come from users like you, EFCC data partnerships, and our AI monitoring." },
        ].map((faq, i) => (
          <div key={i} className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card p-4">
            <p className="text-sm font-bold text-navy dark:text-slate-200 mb-1">{faq.q}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{faq.a}</p>
          </div>
        ))}
        <button onClick={() => alert("Email: support@scamshield.ng\nWhatsApp: +234 800 SHIELD")} className="w-full bg-navy-gradient text-white font-bold py-4 rounded-2xl font-display hover:opacity-90 mt-2">Contact Support</button>
      </div>
      <BottomNav />
    </div>
  );
}
