
"use client";

import { cn } from "@/lib/utils";
import { User, QrCode, Globe, ShieldCheck } from "lucide-react";

export function PassportCard() {
  return (
    <div className="relative group w-full max-w-md aspect-[1.6/1] perspective-1000">
      <div className="relative h-full w-full transition-all duration-700 preserve-3d group-hover:[transform:rotateY(10deg)_rotateX(5deg)]">
        {/* Card Front */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/20 shadow-2xl overflow-hidden backface-hidden flex flex-col p-6 text-white">
          <div className="flex justify-between items-start mb-8">
            <div className="space-y-1">
              <h3 className="font-headline font-bold text-xl tracking-tight">MECHANICA</h3>
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Official Festival Passport</p>
            </div>
            <ShieldCheck className="h-8 w-8 text-primary/80" />
          </div>

          <div className="flex gap-6 items-center">
            <div className="w-24 h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
              <User className="h-16 w-16 text-white/20" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="space-y-0.5">
                <p className="text-[10px] uppercase text-white/40 tracking-wider">Participant Name</p>
                <p className="font-headline font-semibold text-lg">ALEX R. DESIGNER</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] uppercase text-white/40 tracking-wider">Passport ID</p>
                  <p className="font-mono text-xs font-bold text-primary">MEA-2026-X8B2</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-white/40 tracking-wider">Events Attended</p>
                  <p className="font-mono text-xs font-bold">04 / 12</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto flex justify-between items-end">
            <div className="space-y-1">
              <p className="text-[10px] uppercase text-white/40 tracking-wider">Activity Stamps</p>
              <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-[10px] font-bold">
                    {i}
                  </div>
                ))}
                <div className="w-6 h-6 rounded-full border border-white/10 border-dashed" />
              </div>
            </div>
            <QrCode className="h-12 w-12 text-white/20" />
          </div>

          {/* Decorative lines */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 blur-2xl rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}
