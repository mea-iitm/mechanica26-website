
import { PassportCard } from "@/components/passport-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function PassportPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-20">
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <Badge variant="outline" className="py-1 px-4 border-primary text-primary font-bold tracking-widest uppercase">
          Digital ID
        </Badge>
        <h1 className="font-headline font-bold text-5xl md:text-7xl tracking-tighter">
          MECHANICA <span className="text-primary text-glow">PASSPORT</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Your unique digital identity for Mechanica 2026. Access events, track your progress, and unlock exclusive rewards with a single tap.
        </p>
      </section>

      {/* Side-by-Side Layout */}
      <section className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
        {/* Left: Passport Card */}
        <div className="flex justify-center lg:justify-end">
          <PassportCard />
        </div>

        {/* Right: Get Passport Action */}
        <div className="flex flex-col gap-8">
          <div className="glass-card p-10 rounded-3xl w-full space-y-8 border-primary/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors -z-10" />
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h2 className="font-headline font-bold text-2xl uppercase tracking-tight">Ready to Start?</h2>
                <p className="text-sm text-muted-foreground">
                  Secure your spot in the flagship technical festival of IIT Madras. Your digital identity is just a click away.
                </p>
              </div>
            </div>

            <Button size="lg" className="w-full h-16 rounded-full text-xl font-bold bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/40 transition-all hover:scale-[1.02]">
              GET PASSPORT <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex justify-between items-center px-4">
             <p className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase opacity-50">
               Official MEA Digital Asset
             </p>
             <div className="h-px flex-1 bg-border mx-4" />
             <p className="text-[10px] text-primary font-bold tracking-widest uppercase">
               IIT Madras
             </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-20 text-center space-y-4">
        <h3 className="font-headline font-bold text-2xl">How it works</h3>
        <p className="text-muted-foreground">
          Your passport is linked to your registration. Simply present the QR code at any event venue to log your participation and earn activity stamps.
        </p>
      </section>
    </div>
  );
}
