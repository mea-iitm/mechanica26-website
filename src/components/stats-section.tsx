
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Students", value: "2500+" },
  { label: "Teams", value: "10" },
  { label: "Years", value: "20" },
  { label: "Participation", value: "20K+" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-headline font-bold text-3xl md:text-4xl text-center mb-16">
          Impact by <span className="text-primary">Numbers</span>
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="perspective-1000 group">
              <div className="relative h-48 w-full transition-all duration-500 preserve-3d group-hover:[transform:rotateX(10deg)_rotateY(10deg)_translateZ(20px)]">
                <div className="absolute inset-0 glass-card rounded-2xl flex flex-col items-center justify-center p-6 border-white/5 bg-gradient-to-br from-card/80 to-card/40 glowing-border">
                  <span className="font-headline font-bold text-4xl md:text-5xl text-primary mb-2 glowing-text">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground font-medium text-center uppercase tracking-wider text-xs md:text-sm">
                    {stat.label}
                  </span>
                  
                  {/* Subtle glow layer */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg -z-10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
