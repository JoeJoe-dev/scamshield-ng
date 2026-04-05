"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppBar } from "@/components/AppBar";
import { BottomNav } from "@/components/BottomNav";
// import { ThemeToggle } from "@/components/ThemeToggle";
import { ShieldCheck, User, Lock, History, HelpCircle, ChevronRight, LogOut, Shield, Bell, BadgeCheck } from "lucide-react";

export default function Profile() {
  const router = useRouter();
  const userName = typeof window !== 'undefined' ? localStorage.getItem('userName') || 'User' : 'User';

  const MENU = [
    { group:"Account", items:[
      { icon:<User size={18}/>,    label:"Personal Information",  href:"/profile/edit",    desc:"Update your identity and contact details"  },
      { icon:<Lock size={18}/>,    label:"Security & Privacy",    href:"/profile/security",desc:"Manage passwords and 2FA settings"          },
      { icon:<History size={18}/>, label:"Verification History",  href:"/profile/history", desc:"Review all numbers and links you've checked" },
    ]},
    { group:"More", items:[
      { icon:<BadgeCheck size={18}/>, label:"Get Verified Badge",  href:"/agent-verify",   desc:"Apply to become a verified agent"           },
      { icon:<Bell size={18}/>,       label:"Notification Settings",href:"/profile/notifications",desc:"Control your alert preferences"      },
      { icon:<HelpCircle size={18}/>, label:"Support Center",      href:"/profile/support", desc:"Get help and report app issues"             },
    ]},
  ];

  return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar showLogo showBell />

      <div className="px-5 pt-2">
        {/* Profile hero */}
        <div className="bg-navy-gradient rounded-2xl p-5 mb-5 relative overflow-hidden animate-fade-up">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
          <div className="flex items-start gap-4 relative z-10">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-2xl font-bold text-white">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-safe flex items-center justify-center">
                <ShieldCheck size={12} className="text-white" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-lg font-display leading-tight">{userName}</p>
              <p className="text-white/60 text-sm mt-0.5">Lagos, Nigeria</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <Shield size={12} className="text-green-400" />
                <span className="text-green-400 text-xs font-semibold">Trusted Guardian</span>
              </div>
            </div>
            {/* <ThemeToggle light /> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10 relative z-10">
            <div className="text-center">
              <p className="text-2xl font-bold text-white font-display">24</p>
              <p className="text-white/50 text-xs">Reports Filed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white font-display">12</p>
              <p className="text-white/50 text-xs">Scams Blocked</p>
            </div>
          </div>
        </div>

        {/* Menu groups */}
        {MENU.map((group, gi) => (
          <div key={gi} className="mb-5 animate-fade-up" style={{animationDelay:`${0.05 + gi * 0.05}s`}}>
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 px-1">{group.group}</p>
            <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card overflow-hidden">
              {group.items.map((item, ii) => (
                <Link key={ii} href={item.href}
                  className={`flex items-center gap-3 px-4 py-3.5 hover:bg-surface-low dark:hover:bg-dark-surface-high transition-colors ${
                    ii < group.items.length - 1 ? "border-b border-slate-100 dark:border-dark-surface-high" : ""
                  }`}>
                  <div className="w-9 h-9 rounded-xl bg-surface-low dark:bg-dark-surface-high flex items-center justify-center text-navy dark:text-slate-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-navy dark:text-slate-200">{item.label}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 truncate">{item.desc}</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 dark:text-slate-600 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Logout */}
        <button
          onClick={() => { if (confirm("Are you sure you want to logout?")) router.push("/auth"); }}
          className="w-full flex items-center gap-3 px-4 py-3.5 bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card hover:bg-red-risk/5 transition-colors mb-4 animate-fade-up"
          style={{animationDelay:"0.2s"}}>
          <div className="w-9 h-9 rounded-xl bg-red-risk/10 dark:bg-red-risk/20 flex items-center justify-center flex-shrink-0">
            <LogOut size={18} className="text-red-risk dark:text-red-400" />
          </div>
          <span className="flex-1 text-sm font-semibold text-red-risk dark:text-red-400 text-left">Logout</span>
        </button>

        {/* App version */}
        <p className="text-center text-xs text-slate-300 dark:text-slate-600 mb-4">ScamShield NG v2.0.4 · © 2026</p>
      </div>

      <BottomNav />
    </div>
  );
}
