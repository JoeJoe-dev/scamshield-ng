'use client';
import { useState } from 'react';
import { ShieldCheck, Phone, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { BottomNav } from '@/components/BottomNav';
import { AppBar } from '@/components/AppBar';

export function EditProfileForm() {
  const [name, setName] = useState('Chinwendu Okafor');
  const [phone, setPhone] = useState('+234 803 000 0000');

  const inputCls = 'w-full bg-surface-low dark:bg-dark-surface-low rounded-2xl px-4 py-3.5 text-sm outline-none';

  return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar title="Personal Information" back="/profile" />
      <div className="px-5 pt-4 flex flex-col gap-4">
        {[
          ['Full Name', name, setName],
          ['Phone Number', phone, setPhone],
          ['Email', 'chinwendu@email.com', () => {}],
          ['Location', 'Lagos, Nigeria', () => {}],
        ].map(([label, val, setter]) => (
          <div key={label as string}>
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
              {label as string}
            </label>
            <input
              value={val as string}
              onChange={(e) => (setter as Function)(e.target.value)}
              className={inputCls}
            />
          </div>
        ))}
        <button
          onClick={() => alert('Profile updated successfully!')}
          className="w-full bg-navy-gradient text-white font-bold py-4 rounded-2xl font-display hover:opacity-90 mt-2"
        >
          Save Changes
        </button>
      </div>
      <BottomNav />
    </div>
  );
}

export function SecurityForm() {
  const [twofa, setTwofa] = useState(true);

  return (
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
              <p className="text-xs text-slate-500 dark:text-slate-400">Enhanced security for your account</p>
            </div>
          </div>
          <button
            onClick={() => setTwofa(!twofa)}
            className={`w-12 h-6 rounded-full transition-colors ${
              twofa ? 'bg-green-safe dark:bg-green-400' : 'bg-slate-300 dark:bg-slate-600'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                twofa ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>
        <button
          onClick={() => alert('Password changed successfully!')}
          className="w-full bg-navy-gradient text-white font-bold py-4 rounded-2xl font-display hover:opacity-90"
        >
          Change Password
        </button>
      </div>
      <BottomNav />
    </div>
  );
}

export function HistoryView() {
  const HISTORY = [
    { entity: '+234 810 002 9912', type: 'Phone', result: 'risk', date: 'Today, 10:32 AM' },
    { entity: 'cbn-grant.xyz', type: 'Website', result: 'risk', date: 'Today, 9:15 AM' },
    { entity: '+234 905 123 4567', type: 'Phone', result: 'safe', date: 'Yesterday' },
    { entity: 'Adeyemi Ventures', type: 'Business', result: 'safe', date: '3 days ago' },
    { entity: '+234 810 002 0000', type: 'Phone', result: 'risk', date: '1 week ago' },
  ];

  return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar title="Verification History" back="/profile" />
      <div className="px-5 pt-4">
        <div className="flex flex-col gap-3">
          {HISTORY.map((log, i) => (
            <div key={i} className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card p-4 flex items-start gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  log.result === 'risk'
                    ? 'bg-red-risk/10 dark:bg-red-risk/20'
                    : 'bg-green-safe/10 dark:bg-green-safe/20'
                }`}
              >
                {log.result === 'risk' ? (
                  <AlertTriangle size={18} className="text-red-risk dark:text-red-400" />
                ) : (
                  <CheckCircle size={18} className="text-green-safe dark:text-green-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-navy dark:text-slate-200 truncate">{log.entity}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {log.type} • {log.result === 'risk' ? '⚠️ Risky' : '✅ Safe'}
                </p>
              </div>
              <div className="flex items-start gap-1.5 flex-shrink-0">
                <Clock size={14} className="text-slate-400 mt-0.5" />
                <p className="text-xs text-slate-400 whitespace-nowrap">{log.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export function NotificationsSettings() {
  const [notif, setNotif] = useState({ alerts: true, report: true, news: false });

  const settings = [
    { key: 'alerts', label: 'Scam Alerts', desc: 'Instant notifications for new threats' },
    { key: 'report', label: 'User Reports', desc: 'When others report a number/link' },
    { key: 'news', label: 'Weekly Newsletter', desc: 'Fraud trends and protection tips' },
  ];

  return (
    <div className="min-h-screen bg-surface dark:bg-dark-surface pb-24">
      <AppBar title="Notification Settings" back="/profile" />
      <div className="px-5 pt-4 flex flex-col gap-3">
        {settings.map((s) => (
          <div key={s.key} className="bg-surface-lowest dark:bg-dark-surface-card rounded-2xl shadow-card dark:shadow-dark-card p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-navy dark:text-slate-200">{s.label}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{s.desc}</p>
            </div>
            <button
              onClick={() =>
                setNotif({
                  ...notif,
                  [s.key]: !notif[s.key as keyof typeof notif],
                })
              }
              className={`w-12 h-6 rounded-full transition-colors ${
                notif[s.key as keyof typeof notif]
                  ? 'bg-green-safe dark:bg-green-400'
                  : 'bg-slate-300 dark:bg-slate-600'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  notif[s.key as keyof typeof notif]
                    ? 'translate-x-6'
                    : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
}
