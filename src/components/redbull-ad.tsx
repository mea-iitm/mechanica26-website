
"use client";

import { RedBullDialog } from "./redbull-dialog";

/**
 * A floating advertisement component for Red Bull.
 * Features a themed SVG icon and a call-to-action that opens a JotForm dialog.
 * Colors updated to match the website's primary and accent palette.
 */
export function RedBullAd() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] animate-bounce hover:animate-none">
      <RedBullDialog>
        <button className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none">
          {/* Circular Icon Container themed to website colors */}
          <div className="w-16 h-16 bg-card/80 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center p-2 border-2 border-primary/30 overflow-hidden relative group-hover:border-primary group-hover:shadow-primary/20">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
              {/* Sun -> Themed to Accent Color */}
              <circle cx="50" cy="50" r="22" fill="hsl(var(--accent))" />
              {/* Simplified Bulls Silhouette -> Themed to Primary Color */}
              <path 
                fill="hsl(var(--primary))" 
                d="M50,55 L90,35 Q95,30 90,25 L80,25 Q75,25 70,30 L50,50 Z" 
                transform="rotate(-15 50 55)"
              />
              <path 
                fill="hsl(var(--primary))" 
                d="M50,55 L10,35 Q5,30 10,25 L20,25 Q25,25 30,30 L50,50 Z" 
                transform="rotate(15 50 55)"
              />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
          </div>
          
          {/* CTA Badge themed to Primary Color */}
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground bg-primary px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap border border-white/10 group-hover:bg-primary/90 transition-colors">
            Join the Race Today
          </span>
        </button>
      </RedBullDialog>
    </div>
  );
}
