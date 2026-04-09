
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StatsSection } from "@/components/stats-section";
import { SponsorsSection } from "@/components/sponsors-section";
import { TeamSection } from "@/components/team-section";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-mechanical');

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImg?.imageUrl || 'https://picsum.photos/seed/electric-car-future/1200/800'}
            alt="Mechanica 2026 - Machina Sentience"
            fill
            className="object-cover opacity-60 dark:opacity-40"
            priority
            data-ai-hint={heroImg?.imageHint || "electric vehicle"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-4 pt-20 text-center flex flex-col items-center">
          <div className="space-y-10 max-w-4xl">
            {/* Stylized M Logo */}
            <div className="w-24 h-24 mx-auto mb-6 bg-primary rounded-3xl flex items-center justify-center text-primary-foreground font-headline font-bold text-5xl shadow-2xl shadow-primary/40 animate-fade-in-up border border-white/10 backdrop-blur-md">
              M
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase animate-fade-in-up mx-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              MECHANICA 2026 — Machina Sentience
            </div>
            
            <h1 className="font-headline font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none animate-fade-in-up [animation-delay:200ms] text-glow">
              MECHANICA <br />
              <span className="text-primary">2026</span>
            </h1>
            
            <div className="space-y-4 animate-fade-in-up [animation-delay:400ms]">
              <p className="font-headline font-medium text-lg md:text-xl text-muted-foreground uppercase tracking-[0.3em]">
                Mechanical Engineering Association — IIT Madras
              </p>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                The flagship technical festival where precision engineering meets future innovation. 
                Experience the evolution of mechanical systems and Machina Sentience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up [animation-delay:600ms] justify-center pt-6">
              <Button asChild size="lg" className="rounded-full h-16 px-10 text-lg bg-primary hover:bg-primary/90 font-bold uppercase tracking-tighter shadow-2xl shadow-primary/20">
                <Link href="/events">Explore Events <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-16 px-10 text-lg border-primary text-primary hover:bg-primary/10 font-bold uppercase tracking-tighter">
                <Link href="/passport">Get Passport</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="font-headline font-bold text-4xl md:text-5xl tracking-tighter uppercase">
                  Engineered for <br />
                  <span className="text-primary">Excellence</span>
                </h2>
                <div className="w-24 h-1 bg-primary" />
              </div>
              
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  The Mechanical Engineering Association (MEA) is the heart of the Mechanical Engineering Department at <span className="text-foreground font-bold">IIT Madras</span>.
                </p>
                <p>
                  We are a student-led body dedicated to bridging the gap between academic theory and real-world industrial application through collaboration and competition.
                </p>
                <p>
                  <span className="text-foreground font-bold italic">MECHANICA</span> serves as our grand stage, welcoming the brightest minds from across the nation to solve complex engineering challenges.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="aspect-[3/4] relative rounded-3xl overflow-hidden glass-card glowing-border">
                <Image src="https://picsum.photos/seed/factory-mech/600/800" alt="Mechanical Engineering" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" data-ai-hint="industrial machine" />
              </div>
              <div className="aspect-[3/4] relative rounded-3xl overflow-hidden glass-card mt-12 glowing-border border-accent/20">
                <Image src="https://picsum.photos/seed/engine-mech/600/800" alt="Automobile Engine" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" data-ai-hint="car engine" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <StatsSection />

      {/* Sponsors */}
      <SponsorsSection />

      {/* Team Section */}
      <TeamSection />
    </div>
  );
}
