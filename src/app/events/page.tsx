
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Calendar, Users, MapPin } from "lucide-react";

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
          <h2 className="font-headline font-bold text-2xl uppercase tracking-tighter">Technical Events</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techEvents.map((event, i) => {
             const img = PlaceHolderImages.find(p => p.id === event.id) || PlaceHolderImages[i % PlaceHolderImages.length];
             return (
              <Card key={i} className="overflow-hidden glass-card group h-full flex flex-col">
                <div className="aspect-video relative">
                  <Image src={img.imageUrl} alt={event.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <Badge className="absolute top-2 right-2 bg-primary/80 backdrop-blur-md">EVENT</Badge>
                </div>
                <CardContent className="p-5 flex-1 space-y-3">
                  <h3 className="font-headline font-bold text-xl group-hover:text-primary transition-colors">{event.title}</h3>
                  <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2"><Calendar className="h-3 w-3" /> {event.date}</div>
                    <div className="flex items-center gap-2"><Users className="h-3 w-3" /> {event.participants}</div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">{event.desc}</p>
                </CardContent>
                <CardFooter className="p-5 pt-0">
                  <Button className="w-full rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20">Register Now</Button>
                </CardFooter>
              </Card>
             )
          })}
        </div>
      </section>

      {/* Workshops */}
       <section className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="font-headline font-bold text-2xl uppercase tracking-tighter">Workshops</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {workshops.map((ws, i) => {
             const img = PlaceHolderImages.find(p => p.id === ws.id) || PlaceHolderImages[i + 4 % PlaceHolderImages.length];
             return (
              <Card key={i} className="overflow-hidden glass-card group flex flex-col">
                <div className="aspect-[16/9] relative">
                  <Image src={img.imageUrl} alt={ws.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <Badge className="absolute top-2 right-2 bg-accent/80 backdrop-blur-md">WORKSHOP</Badge>
                </div>
                <CardContent className="p-6 space-y-4 flex-1">
                  <div className="space-y-1">
                    <h3 className="font-headline font-bold text-2xl">{ws.title}</h3>
                    <p className="text-xs text-primary font-bold uppercase">Instructed by {ws.instructor}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" /> {ws.date}
                  </div>
                  <p className="text-sm text-muted-foreground">{ws.desc}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white">Join Workshop</Button>
                </CardFooter>
              </Card>
             )
          })}
        </div>
      </section>
    </div>
  );
}
