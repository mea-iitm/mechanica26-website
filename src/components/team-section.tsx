
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

const secretaries = [
  { name: "Gowtham Boyilla", role: "Secretary" },
  { name: "Harsha Vardhan", role: "Secretary" },
];

const cores = [
  { dept: "Events", members: ["Rutwik", "Mahesh", "Rohan"] },
  { dept: "Finance", members: ["Chaitanya", "Nandini"] },
  { dept: "Web Operations", members: ["Ram", "Rutwik"] },
  { dept: "Sponsorship", members: ["Manoj Preetham", "Mukesh", "Chandrasekhar Naidu"] },
  { dept: "Media & Design", members: ["Vivek", "Preetham"] },
  { dept: "Facilities & Requirements", members: ["Yaswanth Mani", "Thomas"] },
  { dept: "Student Relations", members: ["Yaswanth", "Poojith", "Gowtham"] },
  { dept: "Alumni Relations & Outreach", members: ["Laxmi Prasana", "Nikhita"] },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary text-primary px-4 py-1 uppercase tracking-widest text-[10px] font-bold">The Leadership</Badge>
          <h2 className="font-headline font-bold text-4xl md:text-5xl">
            MEET THE <span className="text-primary text-glow">TEAM</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The dedicated minds working behind the scenes to make Mechanica 2026 an unforgettable technical extravaganza.
          </p>
        </div>

        {/* Secretaries */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {secretaries.map((sec, i) => (
            <Card key={i} className="glass-card border-white/5 glowing-border overflow-hidden group">
              <CardContent className="p-0">
                <div className="flex items-center gap-6 p-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-headline font-bold text-2xl group-hover:text-primary transition-colors">{sec.name}</h3>
                    <p className="text-primary font-bold text-xs uppercase tracking-tighter">{sec.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cores.map((dept, i) => (
            <Card key={i} className="glass-card border-white/5 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-primary">{dept.dept}</h4>
                  <Badge variant="secondary" className="bg-primary/5 text-primary text-[10px] h-5">CORE</Badge>
                </div>
                <ul className="space-y-2">
                  {dept.members.map((member, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-muted-foreground group">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      {member}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
