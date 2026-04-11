
"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { User, QrCode, ShieldCheck } from "lucide-react";

export function PassportCard() {
  return (
    <div className="relative group w-full max-w-md aspect-[1.6/1] perspective-1000">
      <div className="relative h-full w-full transition-all duration-700 preserve-3d group-hover:[transform:rotateY(10deg)_rotateX(5deg)]">
        {/* Card Front */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/20 shadow-2xl overflow-hidden backface-hidden flex flex-col p-8 text-white">
          <div className="flex justify-between items-start mb-10">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="MEA Logo" 
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-headline font-bold text-2xl tracking-tight leading-none">MECHANICA</h3>
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Official Festival Identity</p>
              </div>
            </div>
            <ShieldCheck className="h-10 w-10 text-primary/80" />
          </div>

          <div className="flex gap-8 items-center">
            <div className="w-28 h-28 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
              <User className="h-20 w-20 text-white/20" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="space-y-0.5">
                <p className="text-[10px] uppercase text-white/40 tracking-wider">Participant Name</p>
                <p className="font-headline font-semibold text-xl uppercase">John Alex</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-white/40 tracking-wider">Passport ID</p>
                <p className="font-mono text-sm font-bold text-primary tracking-widest">MEA-2026-X8B2</p>
              </div>
            </div>
          </div>

          <div className="mt-auto flex justify-between items-end">
            <div className="space-y-1">
              <p className="text-[10px] uppercase text-white/40 tracking-wider">Issued by MEA</p>
              <p className="text-[12px] font-bold text-white/60">IIT MADRAS</p>
            </div>
            <QrCode className="h-14 w-14 text-white/20" />
          </div>

          {/* Decorative lines */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 blur-2xl rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}
