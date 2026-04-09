
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Calendar, Users } from "lucide-react";

const techEvents = [
  { id: 'event-robotics', title: "Robotics Challenge", date: "March 15, 2026", participants: "3-4 members", desc: "Build and battle autonomous robots in a series of navigation and combat challenges." },
  { id: 'event-cad', title: "CAD Design Competition", date: "March 16, 2026", participants: "Individual", desc: "Solve real-world industrial design problems using industry-standard CAD software." },
  { id: 'event-simulation', title: "Manufacturing Simulation", date: "March 15, 2026", participants: "1-2 members", desc: "Optimize production lines in a high-stakes simulation environment." },
  { id: 'event-hackathon', title: "Innovation Hackathon", date: "March 17, 2026", participants: "2-4 members", desc: "Develop hardware solutions for pressing environmental challenges within 24 hours." },
];

const workshops = [
  { id: 'event-ev', title: "EV Powertrain Workshop", date: "March 15, 2026", instructor: "Tesla Engineers", desc: "Hands-on experience with electric vehicle motor control and battery management systems." },
  { id: 'event-ai', title: "AI in Mechanical Systems", date: "March 16, 2026", instructor: "NVIDIA Academy", desc: "Integrating machine learning into dynamic control loops for robotics and industrial machines." },
  { id: 'event-advcad', title: "Advanced CAD & Simulation", date: "March 17, 2026", instructor: "Autodesk Masters", desc: "Mastering generative design and finite element analysis (FEA)." },
];

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-20">
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="font-headline font-bold text-4xl md:text-6xl">
          Events & <span className="text-primary">Workshops</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Compete with the best minds or learn from the experts in our curated sessions.
        </p>
      </section>

      {/* Technical Events */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="font-headline font-bold text-2xl uppercase tracking-tighter text-primary">Technical Events</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techEvents.map((event, i) => {
             const img = PlaceHolderImages.find(p => p.id === event.id) || PlaceHolderImages[0];
             return (
              <Card key={i} className="overflow-hidden glass-card group h-full flex flex-col border-white/5 hover:border-primary/30 transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <Image 
                    src={img.imageUrl} 
                    alt={event.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                    data-ai-hint={img.imageHint}
                  />
                  <Badge className="absolute top-2 right-2 bg-primary/80 backdrop-blur-md">EVENT</Badge>
                </div>
                <CardContent className="p-5 flex-1 space-y-3">
                  <h3 className="font-headline font-bold text-xl group-hover:text-primary transition-colors">{event.title}</h3>
                  <div className="flex flex-col gap-2 text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                    <div className="flex items-center gap-2"><Calendar className="h-3 w-3 text-primary" /> {event.date}</div>
                    <div className="flex items-center gap-2"><Users className="h-3 w-3 text-primary" /> {event.participants}</div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{event.desc}</p>
                </CardContent>
                <CardFooter className="p-5 pt-0">
                  <Button className="w-full rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 transition-all duration-300 font-bold uppercase tracking-tighter text-xs">Register Now</Button>
                </CardFooter>
              </Card>
             )
          })}
        </div>
      </section>

      {/* Workshops */}
       <section className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="font-headline font-bold text-2xl uppercase tracking-tighter text-accent">Workshops</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {workshops.map((ws, i) => {
             const img = PlaceHolderImages.find(p => p.id === ws.id) || PlaceHolderImages[0];
             return (
              <Card key={i} className="overflow-hidden glass-card group flex flex-col border-white/5 hover:border-accent/30 transition-all duration-300">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image 
                    src={img.imageUrl} 
                    alt={ws.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                    data-ai-hint={img.imageHint}
                  />
                  <Badge className="absolute top-2 right-2 bg-accent/80 backdrop-blur-md">WORKSHOP</Badge>
                </div>
                <CardContent className="p-6 space-y-4 flex-1">
                  <div className="space-y-1">
                    <h3 className="font-headline font-bold text-2xl group-hover:text-accent transition-colors">{ws.title}</h3>
                    <p className="text-[10px] text-accent font-bold uppercase tracking-widest">Instructed by {ws.instructor}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-tighter">
                    <Calendar className="h-3 w-3 text-accent" /> {ws.date}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ws.desc}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-tighter">Join Workshop</Button>
                </CardFooter>
              </Card>
             )
          })}
        </div>
      </section>
    </div>
  );
}
