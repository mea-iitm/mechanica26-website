"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * A floating promotion component that nudges users towards the merchandise store.
 * Appears with a sliding motion after a delay and automatically hides after 30 seconds.
 */
export function MerchPromo() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session to avoid annoyance
    const dismissed = sessionStorage.getItem("merch-promo-dismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Delay the appearance by 4 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Hide the promo after 30 seconds of being visible (Total 34 seconds from mount)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 34000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Allow animation to finish before removing from DOM
    setTimeout(() => {
      setIsDismissed(true);
      sessionStorage.setItem("merch-promo-dismissed", "true");
    }, 1000);
  };

  if (isDismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-8 left-8 z-[100] transition-all duration-1000 ease-in-out transform",
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0 pointer-events-none"
      )}
    >
      <Card className="w-80 glass-card border-primary/30 shadow-2xl shadow-primary/20 overflow-hidden group relative">
        {/* Animated background glow on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
        
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors -z-10" />
        
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary animate-pulse">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="h-4 w-4 text-accent animate-pulse" />
                </div>
              </div>
              <div className="space-y-0.5">
                <h4 className="font-headline font-bold text-base uppercase tracking-tight leading-none">Official Gear</h4>
                <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mt-1">Limited Stock</p>
              </div>
            </div>
            <button 
              onClick={handleDismiss}
              className="p-1.5 hover:bg-primary/10 rounded-full transition-colors text-muted-foreground hover:text-primary"
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <p className="text-xs text-muted-foreground leading-relaxed">
            The Mechanica 2026 Collection is now live. Get your glow-in-the-dark "Machina Sentience" apparel before it vanishes.
          </p>

          <Button asChild size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 font-bold uppercase tracking-tighter text-xs h-12 group/btn shadow-lg shadow-primary/20">
            <Link href="/sales">
              Visit Store 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
