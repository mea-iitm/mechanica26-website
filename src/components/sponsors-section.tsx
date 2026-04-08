"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const sponsors = [
  { id: 'sponsor-1', name: 'Partner 1' },
  { id: 'sponsor-2', name: 'Partner 2' },
  { id: 'sponsor-3', name: 'Partner 3' },
  { id: 'sponsor-4', name: 'Partner 4' },
  { id: 'sponsor-5', name: 'Partner 5' },
  { id: 'sponsor-6', name: 'Partner 6' },
];

export function SponsorsSection() {
  return (
    <section className="py-20 bg-background/50 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-2">
          <h2 className="font-headline font-bold text-3xl md:text-4xl">
            Our <span className="text-primary">Partners</span>
          </h2>
          <p className="text-muted-foreground">Collaborating with industry leaders to shape the future of engineering.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {sponsors.map((sponsor) => {
            const img = PlaceHolderImages.find(p => p.id === sponsor.id);
            return (
              <div 
                key={sponsor.id} 
                className="glass-card h-24 rounded-2xl flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 border-white/5 bg-gradient-to-br from-card/40 to-card/20 group"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img?.imageUrl || ''}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                    data-ai-hint="company logo branding"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}