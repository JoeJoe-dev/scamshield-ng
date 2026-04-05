import { AppBar } from "@/components/AppBar";
import { BottomNav } from "@/components/BottomNav";
import { AlertTriangle, Share2, ShieldCheck, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AlertDetail({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar title="Alert Details" back="/alerts" showBell />
      <div className="px-5 pt-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="chip-risk text-xs font-bold px-3 py-1 rounded-full">Critical Priority</span>
          <span className="text-xs text-slate-400">2 mins ago</span>
        </div>
        <h1 className="text-xl font-bold text-navy dark:text-slate-100 font-display mb-3 leading-tight">
          Fake Rental Listings: Lekki Phase 1
        </h1>
        <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card p-4 mb-4">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Scammers are posing as property agents for non-existent luxury apartments in Lekki Phase 1, Lagos. They request large &quot;commitment fees&quot; or &quot;caution deposits&quot; before allowing viewings. Victims are then blocked.
          </p>
          <div className="mt-4 border-t border-slate-100 dark:border-dark-surface-high pt-4">
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">How to protect yourself</p>
            {["Never pay any fee before physically viewing a property.","Always meet in a public place and verify agent ID.","Confirm property ownership via Lagos Land Registry.","Use ScamShield to verify agent phone numbers first."].map((tip, i) => (
              <div key={i} className="flex items-start gap-2 mb-2">
                <ShieldCheck size={14} className="text-green-safe dark:text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-slate-600 dark:text-slate-400">{tip}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <Link href="/verify" className="flex-1 bg-navy-gradient text-white font-bold py-3.5 rounded-2xl text-sm text-center font-display hover:opacity-90">
            Verify a Number
          </Link>
          <button onClick={() => navigator.share ? navigator.share({title:"ScamShield Alert", text:"Fake Rental Listings in Lekki!"}) : alert("Share this alert with your contacts.")}
            className="w-12 h-12 bg-surface-lowest dark:bg-dark-surface-card shadow-card dark:shadow-dark-card rounded-2xl flex items-center justify-center text-slate-500 hover:text-navy dark:hover:text-slate-200 transition-colors">
            <Share2 size={18} />
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
