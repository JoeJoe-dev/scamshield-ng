"use client";
import Link from "next/link";
import { ArrowLeft, Bell, Shield } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface AppBarProps {
  title?: string;
  back?: string;
  showLogo?: boolean;
  showBell?: boolean;
  dark?: boolean;
  children?: React.ReactNode;
}

export function AppBar({ title, back, showLogo, showBell, dark, children }: AppBarProps) {
  const text   = dark ? "text-white"                 : "text-navy dark:text-slate-100";
  const hover  = dark ? "hover:bg-white/10"          : "hover:bg-surface-low dark:hover:bg-dark-surface-high";
  const bgBar  = dark ? ""                           : "bg-surface-lowest/90 dark:bg-dark-surface-card/90 backdrop-blur-sm border-b border-slate-100 dark:border-dark-surface-high";

  return (
    <header className={`sticky top-0 z-40 flex items-center gap-2 px-4 h-14 ${bgBar}`}>
      {back && (
        <Link href={back} className={`w-9 h-9 flex items-center justify-center rounded-xl ${hover} ${text} transition-colors`}>
          <ArrowLeft size={20} strokeWidth={2.5} />
        </Link>
      )}
      {showLogo && (
        <Link href="/dashboard" className="flex items-center gap-2 flex-1">
          <div className="w-8 h-8 rounded-lg bg-navy-gradient flex items-center justify-center">
            <Shield size={16} className="text-white" />
          </div>
          <span className={`font-display font-bold text-sm ${text}`}>ScamShield NG</span>
        </Link>
      )}
      {title && !showLogo && <h1 className={`flex-1 text-base font-bold font-display ${text} truncate`}>{title}</h1>}
      {!showLogo && !title && <div className="flex-1" />}
      {children}
      <ThemeToggle light={dark} />
      {showBell && (
        <Link href="/alerts" className={`relative w-9 h-9 flex items-center justify-center rounded-xl ${hover} ${text} transition-colors`}>
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-risk" />
        </Link>
      )}
    </header>
  );
}
