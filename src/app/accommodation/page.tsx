
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Home, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function AccommodationPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-20">
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <Badge variant="outline" className="py-1 px-4 border-primary text-primary font-bold tracking-widest uppercase">
          Lodging
        </Badge>
        <h1 className="font-headline font-bold text-5xl md:text-7xl tracking-tighter">
          CAMPUS <span className="text-primary text-glow">STAY</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Secure your accommodation within the iconic IIT Madras campus for a seamless festival experience.
        </p>
      </section>

      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-headline font-bold text-3xl uppercase tracking-tight">Accommodation Details</h2>
            <p className="text-muted-foreground">
              We provide comfortable and secure lodging for all outstation participants. Experience the vibrant campus life at IIT Madras while you compete in Mechanica 2026.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Proximity to MSB and main event venues",
              "24/7 campus security and medical services",
              "High-speed internet and study areas",
              "Access to campus dining and amenities"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <Card className="overflow-hidden glass-card border-primary/20 glowing-border group relative">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image 
              src="https://picsum.photos/seed/hostel-pampa/800/600" 
              alt="Pampa Hostel" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              data-ai-hint="hostel building"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-bold">AVAILABLE</Badge>
          </div>
          <CardContent className="p-8 space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-headline font-bold text-3xl tracking-tight">Pampa Hostel</h3>
                <div className="flex items-center text-primary text-xs font-bold uppercase tracking-widest">
                  <MapPin className="h-3 w-3 mr-1" /> IIT Madras Campus
                </div>
              </div>
              <Home className="h-8 w-8 text-primary/40" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Standard shared accommodation for all registered Mechanica 2026 participants. Secure your spot early as rooms are limited.
            </p>
          </CardContent>
          <CardFooter className="p-8 pt-0">
            <Button asChild size="lg" className="w-full h-14 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 group">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfJnHMuX35aA34fAIZx_J5Pu2bA79hBsOvSN-Zr3WxFCpam0g/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">
                APPLY HERE <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="bg-primary/5 border border-primary/20 rounded-3xl p-8 max-w-4xl mx-auto text-center space-y-4">
        <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-bold">Registration Note</p>
        <p className="text-muted-foreground italic">
          Hostel allocation is subject to availability and will be processed on a first-come, first-served basis. Make sure you have your Mechanica Passport ready for verification during check-in.
        </p>
      </section>
    </div>
  );
}
