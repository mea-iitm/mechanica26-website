
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Cpu, Factory, Globe2, Briefcase } from "lucide-react";

export default function SummitPage() {
  const topics = [
    { icon: Zap, title: "Electric Mobility", desc: "Sustainable engineering for the future" },
    { icon: Cpu, title: "AI-Driven Systems", desc: "Intelligent mechanical automation" },
    { icon: Factory, title: "Industry 5.0", desc: "The next era of human-machine collaboration" },
    { icon: Globe2, title: "Global Innovation", desc: "Solving engineering challenges at scale" },
    { icon: Briefcase, title: "Career Pathways", desc: "Emerging trends in tech careers" }
  ];

  const speakers = [
    { id: 'summit-speaker-1', name: "Dr. Sarah Chen", role: "AI Research Lead, Tesla", topic: "The Future of Autonomy" },
    { id: 'summit-speaker-2', name: "James Wilson", role: "Director of Engineering, SpaceX", topic: "Reusable Aerospace Systems" },
    { id: 'summit-speaker-3', name: "Prof. Rajesh Kumar", role: "Head of Robotics, IITM", topic: "Industry 5.0 in India" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-24">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <Badge variant="outline" className="py-1 px-4 text-primary border-primary">FLAGSHIP EVENT</Badge>
        <h1 className="font-headline font-bold text-4xl md:text-6xl">
          Engineering <span className="text-primary">Innovation</span> Summit
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          The Mechanica Summit brings together industry leaders, alumni, researchers, and students to discuss emerging engineering trends and future technologies.
        </p>
      </section>

      {/* Topics */}
      <section className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
        {topics.map((t, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:bg-primary/5 transition-colors">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
              <t.icon className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-headline font-bold text-sm uppercase">{t.title}</h3>
              <p className="text-xs text-muted-foreground">{t.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Speakers */}
      <section className="space-y-12">
        <h2 className="font-headline font-bold text-3xl text-center">Featured <span className="text-primary">Speakers</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((s, i) => {
            const img = PlaceHolderImages.find(p => p.id === s.id);
            return (
              <Card key={i} className="overflow-hidden glass-card group border-white/5">
                <div className="aspect-[4/5] relative">
                  <Image 
                    src={img?.imageUrl || ''} 
                    alt={s.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    data-ai-hint="portrait of an engineer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>
                <CardContent className="p-6 relative">
                  <h3 className="font-headline font-bold text-xl">{s.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{s.role}</p>
                  <div className="h-px w-8 bg-muted my-3" />
                  <p className="text-xs text-muted-foreground italic">Speaking on: <span className="text-foreground">{s.topic}</span></p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
