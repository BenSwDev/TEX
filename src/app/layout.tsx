import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TEX – Track Experience",
  description:
    "TEX is the modular trip-planning platform for building continuous, AI-assisted travel flows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col bg-[#02030a]/95 text-white">
          <header className="sticky top-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur-2xl">
            <div className="mx-auto flex h-20 max-w-5xl items-center justify-center px-6 text-lg font-semibold tracking-[0.2em] uppercase text-white">
              TEX – TRACK EXPERIENCE
            </div>
          </header>

          <main className="flex-1">
            <div className="mx-auto w-full max-w-5xl px-6 py-12">{children}</div>
          </main>

          <footer className="sticky bottom-0 border-t border-white/10 bg-black/50 backdrop-blur-2xl">
            <div className="mx-auto flex h-20 max-w-5xl flex-col items-center justify-center gap-1 px-6 text-sm text-white/80 sm:flex-row sm:justify-between">
              <span className="text-base font-semibold tracking-[0.2em] uppercase text-white">
                TEX – TRACK EXPERIENCE
              </span>
              <span>© 2025 All rights reserved</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
