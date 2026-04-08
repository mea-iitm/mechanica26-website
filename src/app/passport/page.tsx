import { PassportCard } from "@/components/passport-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function PassportPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-20 flex flex-col items-center">
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

      {/* Digital Passport Card */}
      <section className="w-full flex justify-center py-4">
        <PassportCard />
      </section>

      {/* Main Action */}
      <section className="flex flex-col items-center gap-8 w-full max-w-md mx-auto">
        <div className="glass-card p-8 rounded-3xl w-full text-center space-y-6 border-primary/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors -z-10" />
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-2">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h2 className="font-headline font-bold text-2xl uppercase">Ready to Start?</h2>
            <p className="text-sm text-muted-foreground">
              Secure your spot in the flagship technical festival of IIT Madras.
            </p>
          </div>
          <Button size="lg" className="w-full h-16 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 cyber-button shadow-lg shadow-primary/25">
            GET PASSPORT <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground font-medium tracking-widest uppercase opacity-50">
          Powered by Mechanical Engineering Association
        </p>
      </section>
    </div>
  );
}
