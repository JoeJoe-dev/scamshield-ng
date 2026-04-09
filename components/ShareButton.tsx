'use client';
import { Share2 } from 'lucide-react';

export function ShareButton() {
  return (
    <button
      onClick={() =>
        navigator.share
          ? navigator.share({
              title: 'ScamShield Alert',
              text: 'Fake Rental Listings in Lekki!',
            })
          : alert('Share this alert with your contacts.')
      }
      className="w-12 h-12 bg-surface-lowest dark:bg-dark-surface-card shadow-card dark:shadow-dark-card rounded-2xl flex items-center justify-center text-slate-500 hover:text-navy dark:hover:text-slate-200 transition-colors"
    >
      <Share2 size={18} />
    </button>
  );
}
