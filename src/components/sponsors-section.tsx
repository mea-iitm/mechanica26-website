
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const sponsors = [
  { id: 'sponsor-sas', name: 'SAS' },
  { id: 'sponsor-ansys', name: 'Ansys' },
  { id: 'sponsor-unibi', name: 'Unibi' },
  { id: 'sponsor-techobytes', name: 'Techobytes' },
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center max-w-5xl mx-auto">
          {sponsors.map((sponsor) => {
            const img = PlaceHolderImages.find(p => p.id === sponsor.id);
            return (
              <div 
                key={sponsor.id} 
                className="glass-card h-32 rounded-2xl flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 border-white/5 bg-gradient-to-br from-card/40 to-card/20 group relative"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img?.imageUrl || ''}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                    data-ai-hint={`${sponsor.name.toLowerCase()} logo`}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/20 backdrop-blur-[2px] rounded-2xl">
                  <span className="text-xs font-headline font-bold tracking-widest text-primary">{sponsor.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
