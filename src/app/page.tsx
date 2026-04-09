
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StatsSection } from "@/components/stats-section";
import { SponsorsSection } from "@/components/sponsors-section";
import { TeamSection } from "@/components/team-section";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Rocket, Target, Users, ArrowRight } from "lucide-react";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-mechanical');
  const logoImg = PlaceHolderImages.find(img => img.id === 'mea-logo');

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImg?.imageUrl || ''}
            alt="Robotics engineering background"
            fill
            className="object-cover opacity-30 dark:opacity-40"
            priority
            data-ai-hint="robotics engineering"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        </div>

        <div className="container mx-auto px-4 pt-20 text-center flex flex-col items-center">
          <div className="space-y-8 max-w-4xl">
            {logoImg && (
              <div className="relative w-24 h-24 mx-auto mb-6 bg-white/5 p-2 rounded-2xl animate-fade-in-up">
                <Image src={logoImg.imageUrl} alt="MEA Logo" fill className="object-contain" />
              </div>
            )}
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in-up mx-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              MECHANICA 2026 — Coming Soon
            </div>
            
            <h1 className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none animate-fade-in-up [animation-delay:200ms]">
              MECHANICA <br />
              <span className="text-primary text-glow">2026</span>
            </h1>
            
            <div className="space-y-4 animate-fade-in-up [animation-delay:400ms]">
              <p className="font-headline font-medium text-xl text-muted-foreground uppercase tracking-widest">
                By the Mechanical Engineering Association
              </p>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The flagship annual technical festival of the Mechanical Engineering Association at IIT Madras. 
                Where innovation meets precision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:600ms] justify-center">
              <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90">
                <Link href="/events">Explore Events <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg border-primary text-primary hover:bg-primary/10">
                <Link href="/passport">Get Your Passport</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-card/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="font-headline font-bold text-3xl md:text-4xl">
                  Mechanical Engineering Association <br />
                  <span className="text-primary">IIT Madras</span>
                </h2>
              </div>
              <div className="w-20 h-1 bg-primary" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Mechanical Engineering Association (MEA) is dedicated to fostering a strong community of students within the Department of Mechanical Engineering at IIT Madras.
                </p>
                <p>
                  MEA encourages learning through collaboration and interaction between students, faculty, alumni, and industry professionals.
                </p>
                <p>
                  Every year, MEA organizes <span className="text-foreground font-semibold">MECHANICA</span>, a flagship engineering festival that provides a platform for technology enthusiasts to showcase ideas.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative rounded-2xl overflow-hidden glass-card glowing-border">
                <Image src="https://picsum.photos/seed/mea1/400/400" alt="MEA" fill className="object-cover" data-ai-hint="university campus" />
              </div>
              <div className="aspect-square relative rounded-2xl overflow-hidden glass-card mt-8 glowing-border">
                <Image src="https://picsum.photos/seed/mea2/400/400" alt="MEA" fill className="object-cover" data-ai-hint="lab equipment" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl space-y-4 hover:-translate-y-2 transition-transform duration-300 glowing-border">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-headline font-bold text-2xl">Our Mission</h3>
              <p className="text-muted-foreground">
                To create an engaging environment where every student in the department can collaborate with juniors, seniors, and professors.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl space-y-4 hover:-translate-y-2 transition-transform duration-300 glowing-border border-accent/20">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-headline font-bold text-2xl">Our Vision</h3>
              <p className="text-muted-foreground">
                Encourage deeper exploration of engineering and provide continuous learning opportunities for all students.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl space-y-4 hover:-translate-y-2 transition-transform duration-300 glowing-border">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="font-headline font-bold text-2xl">Impact</h3>
              <p className="text-muted-foreground">
                We understand the challenges students face and help them adapt, grow, and succeed in this dynamic academic environment.
              </p>
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
