
"use client";

const sponsors = [
  { name: 'SAS' },
  { name: 'Ansys' },
  { name: 'UNBIC' },
  { name: 'Techo bytes' },
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
          {sponsors.map((sponsor, i) => (
            <div 
              key={i} 
              className="glass-card h-32 rounded-2xl flex items-center justify-center p-6 border-white/5 bg-gradient-to-br from-card/40 to-card/20 group relative overflow-hidden"
            >
              <span className="font-headline font-bold text-2xl md:text-3xl tracking-tighter text-foreground group-hover:text-primary transition-colors duration-300 relative z-10">
                {sponsor.name}
              </span>
              
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
