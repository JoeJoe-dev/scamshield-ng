"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShieldCheck, AlertTriangle, Bell, User } from "lucide-react";

const NAV = [
  { label:"Home",    href:"/dashboard", icon:Home,         color:"text-blue-600 dark:text-blue-400", hoverColor:"hover:text-blue-700 dark:hover:text-blue-300", activeColor:"text-blue-600 dark:text-blue-400", bgActive:"bg-blue-500/10 dark:bg-blue-500/20" },
  { label:"Verify",  href:"/verify",    icon:ShieldCheck,  color:"text-green-600 dark:text-green-400", hoverColor:"hover:text-green-700 dark:hover:text-green-300", activeColor:"text-green-600 dark:text-green-400", bgActive:"bg-green-500/10 dark:bg-green-500/20" },
  { label:"Report",  href:"/report",    icon:AlertTriangle, color:"text-red-600 dark:text-red-400", hoverColor:"hover:text-red-700 dark:hover:text-red-300", activeColor:"text-red-600 dark:text-red-400", bgActive:"bg-red-500/10 dark:bg-red-500/20" },
  { label:"Alerts",  href:"/alerts",    icon:Bell,          color:"text-amber-600 dark:text-amber-400", hoverColor:"hover:text-amber-700 dark:hover:text-amber-300", activeColor:"text-amber-600 dark:text-amber-400", bgActive:"bg-amber-500/10 dark:bg-amber-500/20" },
  { label:"Profile", href:"/profile",   icon:User,          color:"text-purple-600 dark:text-purple-400", hoverColor:"hover:text-purple-700 dark:hover:text-purple-300", activeColor:"text-purple-600 dark:text-purple-400", bgActive:"bg-purple-500/10 dark:bg-purple-500/20" },
];

export function BottomNav() {
  const path = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-50">
      <div className="bg-surface-lowest dark:bg-dark-surface-card shadow-card dark:shadow-dark-card border-t border-slate-100 dark:border-dark-surface-high px-2 py-2 flex items-center justify-around">
        {NAV.map(({ label, href, icon: Icon, color, hoverColor, activeColor, bgActive }) => {
          const active = path === href || path.startsWith(href + "/");
          return (
            <Link key={href} href={href}
              className={`relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all ${
                active ? `${activeColor} ${bgActive}` : `${color} ${hoverColor}`
              }`}>
              <Icon size={22} strokeWidth={active ? 2.5 : 1.8} />
              <span className="text-[10px] font-semibold">{label}</span>
              {active && <div className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full ${activeColor.replace('text-', 'bg-')}`} />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
