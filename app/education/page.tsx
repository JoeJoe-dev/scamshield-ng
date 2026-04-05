import Link from "next/link";
import { AppBar } from "@/components/AppBar";
import { BottomNav } from "@/components/BottomNav";
import { ShieldCheck, AlertTriangle, CheckCircle, ChevronRight, Briefcase, TrendingUp, Home, ShoppingBag, BookOpen } from "lucide-react";

const FRAUD_TYPES = [
  { icon:<Briefcase size={20}/>,    title:"Job Scams",        body:"Pay-to-work schemes & fake recruitment agencies.",                href:"/education/job-scams",        color:"text-blue-600 dark:text-blue-400",   bg:"bg-blue-500/10 dark:bg-blue-500/20"   },
  { icon:<TrendingUp size={20}/>,   title:"Investment Fraud", body:"Ponzi schemes, crypto doubles, and fake investment portals.",   href:"/education/investment-fraud",  color:"text-amber-600 dark:text-amber-400", bg:"bg-amber-500/10 dark:bg-amber-500/20" },
  { icon:<Home size={20}/>,         title:"House Agent Scams",body:"Don't pay viewing fees or deposits before physical verification.",href:"/education/rental-scams",      color:"text-red-risk dark:text-red-400",    bg:"bg-red-risk/10 dark:bg-red-risk/20"   },
  { icon:<ShoppingBag size={20}/>,  title:"Online Shopping",  body:"Fake Instagram vendors and phishing checkout links.",           href:"/education/shopping-fraud",    color:"text-purple-600 dark:text-purple-400",bg:"bg-purple-500/10 dark:bg-purple-500/20"},
];

const PREVENTION = [
  "Always enable Two-Factor Authentication (2FA) on WhatsApp and banking apps.",
  "Never share your full BVN or OTP with anyone claiming to be from a bank.",
  "Verify any agent or business on ScamShield before making any payment.",
  "Official bank domains end in .com or .ng — never random character strings.",
  "If an offer sounds too good to be true, it almost certainly is a scam.",
];

const WARNING_SIGNS = [
  { label:"Urgent Action",    desc:"Pressure to decide within minutes or hours." },
  { label:"Unusual Payment",  desc:"Requests for Bitcoin, gift cards, or cash." },
  { label:"Grammar Errors",   desc:"Professional organisations do not make spelling mistakes." },
  { label:"Unverified Links", desc:"Always check URLs before clicking any link." },
];

export default function Education() {
  return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar showLogo showBell />

      <div className="px-5 pt-2">
        {/* Hero */}
        <div className="mb-5 animate-fade-up">
          <h1 className="text-2xl font-bold text-navy dark:text-slate-100 font-display leading-tight">Be One Step Ahead.</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
            Knowledge is your first line of defense against digital predators in Nigeria.
          </p>
        </div>

        {/* Live alert banner */}
        <div className="bg-red-risk/8 dark:bg-red-risk/15 rounded-2xl p-4 mb-5 border border-red-risk/15 dark:border-red-risk/25 animate-fade-up" style={{animationDelay:"0.05s"}}>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-risk/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle size={18} className="text-red-risk dark:text-red-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="chip-risk text-[10px] font-bold px-2 py-0.5 rounded-full">Live Alert</span>
              </div>
              <p className="text-sm font-bold text-navy dark:text-slate-200">Fake Job Interview Invitations</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">Circulating in Lagos. Reports show scammers using names of major banks to lure victims to isolated locations.</p>
            </div>
          </div>
          <Link href="/education/job-scams"
            className="mt-3 flex items-center gap-1.5 text-xs font-bold text-red-risk dark:text-red-400 hover:underline">
            Read Safety Guide <ChevronRight size={12} />
          </Link>
        </div>

        {/* Common Fraud Types */}
        <div className="mb-5 animate-fade-up" style={{animationDelay:"0.1s"}}>
          <p className="text-sm font-bold text-navy dark:text-slate-200 font-display mb-3">Common Fraud Types</p>
          <div className="grid grid-cols-2 gap-3">
            {FRAUD_TYPES.map(ft => (
              <Link key={ft.title} href={ft.href}
                className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl p-4 shadow-card dark:shadow-dark-card hover:shadow-card-md transition-shadow group">
                <div className={`w-10 h-10 rounded-xl ${ft.bg} flex items-center justify-center mb-3 ${ft.color} group-hover:scale-105 transition-transform`}>
                  {ft.icon}
                </div>
                <p className="text-sm font-bold text-navy dark:text-slate-200 leading-tight mb-1">{ft.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{ft.body}</p>
                <div className="flex items-center gap-1 mt-2">
                  <ChevronRight size={12} className="text-slate-400" />
                  <span className="text-xs text-slate-400">Learn more</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Guardian Protocol — Prevention Tips */}
        <div className="mb-5 animate-fade-up" style={{animationDelay:"0.15s"}}>
          <div className="bg-navy-gradient rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck size={18} className="text-green-400" />
              <p className="text-white font-bold font-display text-sm">The Guardian Protocol</p>
            </div>
            <p className="text-white/50 text-[10px] uppercase tracking-widest font-medium mb-3">Prevention Tips</p>
            {PREVENTION.map((tip, i) => (
              <div key={i} className="flex items-start gap-2.5 mb-2.5 last:mb-0">
                <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-xs leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Signs */}
        <div className="mb-5 animate-fade-up" style={{animationDelay:"0.2s"}}>
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle size={16} className="text-amber-600 dark:text-amber-400" />
            <p className="text-sm font-bold text-navy dark:text-slate-200 font-display">Warning Signs</p>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">If an offer sounds too good to be true, it almost certainly is. Look out for:</p>
          <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card overflow-hidden">
            {WARNING_SIGNS.map((w, i) => (
              <div key={i} className={`px-4 py-3.5 flex items-start gap-3 ${i < WARNING_SIGNS.length - 1 ? "border-b border-slate-100 dark:border-dark-surface-high" : ""}`}>
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-navy dark:text-slate-200">{w.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link href="/verify"
          className="block w-full bg-navy-gradient text-white font-bold py-4 rounded-2xl text-center font-display hover:opacity-90 transition-opacity mb-4 animate-fade-up"
          style={{animationDelay:"0.25s"}}>
          Verify a Number or Business Now
        </Link>
      </div>

      <BottomNav />
    </div>
  );
}
