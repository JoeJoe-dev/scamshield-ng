import { AppBar } from "@/components/AppBar";
import { BottomNav } from "@/components/BottomNav";
import { ShieldCheck, AlertTriangle } from "lucide-react";
import Link from "next/link";

const CONTENT: Record<string, { title: string; intro: string; tips: string[]; signs: string[] }> = {
  "job-scams": {
    title: "Job Scams",
    intro: "Fake recruitment agencies and pay-to-work schemes are rampant in Nigeria, especially targeting fresh graduates.",
    tips: ["Never pay any fee to get a job — legitimate employers do not charge application fees.", "Verify the company on the CAC portal before attending any interview.", "Official companies use company email domains, not Gmail or Yahoo.", "If asked to meet at a remote location, decline and report."],
    signs: ["Upfront payment required", "No verifiable company address", "Job offer without interview", "Salary too high for the role"],
  },
  "investment-fraud": {
    title: "Investment Fraud",
    intro: "Ponzi schemes, crypto-doubling scams, and fake forex platforms claim thousands of Nigerian victims annually.",
    tips: ["No legitimate investment guarantees fixed high returns.", "Always check if the firm is SEC-registered at sec.gov.ng.", "Be suspicious of WhatsApp-based investment groups.", "Withdraw your initial capital before reinvesting profits."],
    signs: ["Guaranteed 100%+ returns", "Pressure to recruit others", "No verifiable office", "Withdrawal difficulties"],
  },
  "rental-scams": {
    title: "House Agent Scams",
    intro: "Fake landlords and fraudulent agents use listing platforms and social media to collect deposits for non-existent properties.",
    tips: ["Never pay a deposit or commitment fee without seeing the property in person.", "Confirm the agent has a valid REAN or NIESV licence.", "Verify property ownership at the state land registry.", "Use ScamShield to check the agent's phone number first."],
    signs: ["Price far below market rate", "Request for payment before viewing", "Refuses video call of property", "Pressure to pay quickly"],
  },
  "shopping-fraud": {
    title: "Online Shopping Fraud",
    intro: "Fake Instagram and Facebook vendors, phishing checkout pages, and counterfeit goods are major risks.",
    tips: ["Only buy from verified vendors with a long history and real reviews.", "Use payment on delivery where possible.", "Check the website URL carefully — look for https and correct spelling.", "Report suspicious vendors to the FCCPC."],
    signs: ["Prices 70%+ below market", "Instagram page created recently", "No return policy", "Unusual payment methods only"],
  },
};

export default function EducationDetail({ params }: { params: { slug: string } }) {
  const content = CONTENT[params.slug] ?? CONTENT["job-scams"];
  return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar title={content.title} back="/education" showBell />
      <div className="px-5 pt-4">
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{content.intro}</p>
        <div className="bg-navy-gradient rounded-2xl p-5 mb-4">
          <p className="text-white font-bold font-display text-sm mb-3 flex items-center gap-2">
            <ShieldCheck size={16} className="text-green-400" /> Prevention Tips
          </p>
          {content.tips.map((tip, i) => (
            <div key={i} className="flex items-start gap-2.5 mb-2.5 last:mb-0">
              <ShieldCheck size={13} className="text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-white/80 text-xs leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
        <div className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card p-4 mb-5">
          <p className="text-sm font-bold text-navy dark:text-slate-200 font-display flex items-center gap-2 mb-3">
            <AlertTriangle size={15} className="text-amber-600 dark:text-amber-400" /> Warning Signs
          </p>
          <div className="grid grid-cols-2 gap-2">
            {content.signs.map((sign, i) => (
              <div key={i} className="bg-amber-500/8 dark:bg-amber-500/15 rounded-xl p-2.5 text-xs font-semibold text-amber-700 dark:text-amber-400">
                ⚠ {sign}
              </div>
            ))}
          </div>
        </div>
        <Link href="/verify" className="w-full bg-navy-gradient text-white font-bold py-4 rounded-2xl text-center font-display block hover:opacity-90 transition-opacity">
          Verify a Suspicious Contact
        </Link>
      </div>
      <BottomNav />
    </div>
  );
}
