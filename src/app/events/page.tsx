
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Calendar, Users, Cpu, Settings } from "lucide-react";

const techEvents = [
  { id: 'event-robotics', title: "Robotics Challenge", date: "April 24, 2026", participants: "3-4 members", desc: "Build and battle autonomous robots in a series of navigation and combat challenges." },
  { id: 'event-cad', title: "CAD Design Competition", date: "April 25, 2026", participants: "Individual", desc: "Solve real-world industrial design problems using industry-standard CAD software." },
  { id: 'event-simulation', title: "Manufacturing Simulation", date: "April 24, 2026", participants: "1-2 members", desc: "Optimize production lines in a high-stakes simulation environment." },
  { id: 'event-hackathon', title: "Innovation Hackathon", date: "April 26, 2026", participants: "2-4 members", desc: "Develop hardware solutions for pressing environmental challenges within 24 hours." },
];

const coreWorkshops = [
  { id: 'ws-automation', title: "Automation in Industry 5.0", desc: "Mastering human-robot collaboration in the next industrial revolution." },
  { id: 'ws-ops-mgmt', title: "Operational Management", desc: "Optimization strategies for large-scale manufacturing and logistics." },
  { id: 'ws-ic-engines', title: "IC Engines", desc: "Deep dive into internal combustion mechanics and efficiency improvements." },
  { id: 'ws-drones', title: "Drone Technology", desc: "Design, control systems, and aerial dynamics of modern UAVs." },
  { id: 'ws-nextgen-robotics', title: "Next Gen Robotics", desc: "Advanced kinematics and sensor integration for futuristic robotics." },
  { id: 'ws-autofusion', title: "Auto fusion and Ansys", desc: "High-fidelity simulation and generative design using industry-standard tools." },
  { id: 'ws-ev-battery', title: "Battery, Powertrain in EVs", desc: "Energy storage solutions and motor control for electric mobility." },
];

const nonCoreWorkshops = [
  { id: 'ws-gen-ai', title: "Gen and Agentic AI", desc: "Harnessing LLMs and autonomous agents for engineering problem solving." },
  { id: 'ws-ros', title: "ROS (Robot Operating System)", desc: "Software frameworks for building complex robot applications." },
  { id: 'ws-ai-film', title: "AI in Film Making", desc: "Generative tools and AI-driven post-production for creative media." },
  { id: 'ws-cybersecurity', title: "Cyber Security", desc: "Protecting industrial control systems and IoT networks from threats." },
  { id: 'ws-iot', title: "IOT (Internet of Things)", desc: "Connecting physical sensors to the cloud for real-time monitoring." },
];

export default function EventsPage() {
  const renderWorkshopCard = (ws: any, accentColor: string, badgeText: string) => {
    const img = PlaceHolderImages.find(p => p.id === ws.id) || PlaceHolderImages[0];
    return (
      <Card key={ws.id} className={`overflow-hidden glass-card group flex flex-col border-white/5 hover:border-${accentColor}/30 transition-all duration-300`}>
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image 
            src={img.imageUrl} 
            alt={ws.title} 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
            data-ai-hint={img.imageHint}
          />
          <Badge className={`absolute top-2 right-2 bg-${accentColor}/80 backdrop-blur-md`}>{badgeText}</Badge>
        </div>
        <CardContent className="p-6 space-y-4 flex-1">
          <h3 className={`font-headline font-bold text-xl group-hover:text-${accentColor} transition-colors`}>{ws.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{ws.desc}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button className={`w-full rounded-full bg-${accentColor} hover:bg-${accentColor}/90 text-${accentColor}-foreground font-bold uppercase tracking-tighter text-xs`}>
            Register
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-24">
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

      {/* Core Workshops */}
       <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-accent/10 rounded-lg">
            <Settings className="h-6 w-6 text-accent" />
          </div>
          <h2 className="font-headline font-bold text-3xl uppercase tracking-tighter text-accent">Core Workshops</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreWorkshops.map(ws => renderWorkshopCard(ws, "accent", "CORE"))}
        </div>
      </section>

      {/* Non-Core Workshops */}
       <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Cpu className="h-6 w-6 text-primary" />
          </div>
          <h2 className="font-headline font-bold text-3xl uppercase tracking-tighter text-primary">Non-Core Workshops</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nonCoreWorkshops.map(ws => renderWorkshopCard(ws, "primary", "NON-CORE"))}
        </div>
      </section>
    </div>
  );
}
