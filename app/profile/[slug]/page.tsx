import { EditProfileForm, SecurityForm, HistoryView, NotificationsSettings } from "@/components/ProfileForms";
import { SupportButton } from "@/components/SupportButton";
import { AppBar } from "@/components/AppBar";
import { BottomNav } from "@/components/BottomNav";

export async function generateStaticParams() {
  return [
    { slug: 'edit' },
    { slug: 'security' },
    { slug: 'history' },
    { slug: 'notifications' },
    { slug: 'support' },
  ];
}

export default async function ProfileSub({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === "edit") return <EditProfileForm />;
  if (slug === "security") return <SecurityForm />;
  if (slug === "history") return <HistoryView />;
  if (slug === "notifications") return <NotificationsSettings />;

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
        <div className="mt-2">
          <SupportButton />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}