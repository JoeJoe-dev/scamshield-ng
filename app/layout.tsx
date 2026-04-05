import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "ScamShield NG — Verify Before You Pay",
  description: "Nigeria's most trusted scam verification and fraud protection platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-surface dark:bg-dark-surface min-h-screen font-body">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-md mx-auto min-h-screen relative">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
