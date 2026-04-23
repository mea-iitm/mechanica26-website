"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Calendar, Users, Cpu, Settings, FileText, Lightbulb, Zap, HelpCircle } from "lucide-react";
import { RegistrationDialog } from "@/components/registration-dialog";

const techEvents = [
  { 
    id: 'event-quiz', 
    title: "Technical Quizzes", 
    date: "May 30, 2026 (9 AM onwards)", 
    participants: "Individual", 
    desc: "Test your mental mettle in Math (9 AM), Mechanical Engineering (10 AM), and General Knowledge (11 AM). Fast-paced and challenging.",
    icon: HelpCircle
  },
  { 
    id: 'event-paper', 
    title: "Paper Presentation", 
    date: "May 30, 2026 (2 PM)", 
    participants: "1-2 members", 
    desc: "A platform to showcase original research and technical innovations. Present your findings to a panel of distinguished experts.",
    icon: FileText
  },
  { 
    id: 'event-casestudy', 
    title: "Case Study", 
    date: "May 30, 2026 (3:30 PM)", 
    participants: "2-3 members", 
    desc: "Analyze and resolve real-world industrial dilemmas. Apply your engineering knowledge to propose viable, efficient solutions.",
    icon: Lightbulb
  },
  { 
    id: 'event-ideathon', 
    title: "Ideathon", 
    date: "May 30, 2026 (7 PM)", 
    participants: "3-5 members", 
    desc: "A high-intensity brainstorming session to solve modern engineering challenges with creative and sustainable ideas.",
    icon: Zap
  },
  { 
    id: 'event-cad', 
    title: "CAD Design Competition", 
    date: "May 31, 2026 (10 AM)", 
    participants: "Individual", 
    desc: "Master the art of digital drafting and 3D modeling to solve complex industrial design challenges using industry-standard tools.",
    icon: Settings
  },
];

const coreWorkshops = [
  { id: 'ws-automation', title: "Automation in Industry 5.0", desc: "Master human-robot collaboration. (9 AM-12 PM & 2 PM-5 PM)" },
  { id: 'ws-ops-mgmt', title: "Operational Management", desc: "Optimization strategies for manufacturing. (9 AM-12 PM & 2 PM-5 PM)" },
  { id: 'ws-ic-engines', title: "IC Engines", desc: "Deep dive into engine mechanics. (9 AM-12 PM & 2 PM-5 PM)" },
  { id: 'ws-drones', title: "Drone Technology", desc: "Design and dynamics of modern UAVs. (9 AM-12 PM & 2 PM-5 PM)" },
  { id: 'ws-nextgen-robotics', title: "Next Gen Robotics", desc: "Advanced kinematics and sensor integration. (9 AM-12 PM & 2 PM-5 PM)" },
  { id: 'ws-autofusion', title: "Auto fusion and Ansys", desc: "High-fidelity simulation and generative design. (9 AM-12 PM & 2 PM-5 PM)" },
  { id: 'ws-ev-battery', title: "Battery, Powertrain in EVs", desc: "Energy storage solutions for electric mobility. (9 AM-12 PM & 2 PM-5 PM)" },
];

const nonCoreWorkshops = [
  { id: 'ws-gen-ai', title: "Gen and Agentic AI", desc: "Harnessing LLMs for engineering. (9 AM-12 PM & 2 PM-5 PM)" },
  { id: 'ws-ros', title: "ROS (Robot Operating System)", desc: "Software frameworks for robot applications. (9 AM-12 PM & 2 PM-5 PM)" },
  { id: 'ws-ai-film', title: "AI in Film Making", desc: "Generative tools for creative media. (9 AM-12 PM & 2 PM-5 PM)" },
  { id: 'ws-cybersecurity', title: "Cyber Security", desc: "Protecting industrial control systems. (9 AM-12 PM & 2 PM-5 PM)" },
  { id: 'ws-iot', title: "IOT (Internet of Things)", desc: "Connecting sensors for real-time monitoring. (9 AM-12 PM & 2 PM-5 PM)" },
];

export default function EventsPage() {
  const renderWorkshopCard = (ws: any, accentColor: string, badgeText: string) => {
    const img = PlaceHolderImages.find(p => p.id === ws.id) || PlaceHolderImages[0];
    return (
      <Card key={ws.id} className={`overflow-hidden glass-card group flex flex-col border-white/5 hover:border-${accentColor}/30 transition-all duration-300 hover:scale-[1.02]`}>
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image 
            src={img.imageUrl} 
            alt={ws.title} 
            fill 
            className="object-cover group-hover:scale-110 transition-all duration-500" 
            data-ai-hint={img.imageHint}
          />
          <Badge className={`absolute top-2 right-2 bg-${accentColor}/80 backdrop-blur-md`}>{badgeText}</Badge>
        </div>
        <CardContent className="p-6 space-y-4 flex-1">
          <h3 className={`font-headline font-bold text-xl transition-colors`}>{ws.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{ws.desc}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <RegistrationDialog>
            <Button className={`w-full rounded-full bg-${accentColor} hover:bg-${accentColor}/90 text-${accentColor}-foreground font-bold uppercase tracking-tighter text-xs`}>
              Register
            </Button>
          </RegistrationDialog>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techEvents.map((event, i) => {
             const img = PlaceHolderImages.find(p => p.id === event.id) || PlaceHolderImages[0];
             const Icon = event.icon;
             return (
              <Card key={i} className="overflow-hidden glass-card group h-full flex flex-col border-white/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                <div className="aspect-video relative overflow-hidden">
                  <Image 
                    src={img.imageUrl} 
                    alt={event.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-all duration-500" 
                    data-ai-hint={img.imageHint}
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Icon className="h-12 w-12 text-white/80" />
                  </div>
                  <Badge className="absolute top-2 right-2 bg-primary/80 backdrop-blur-md font-bold">TECH</Badge>
                </div>
                <CardContent className="p-5 flex-1 space-y-3">
                  <h3 className="font-headline font-bold text-xl transition-colors">{event.title}</h3>
                  <div className="flex flex-col gap-2 text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                    <div className="flex items-center gap-2"><Calendar className="h-3 w-3 text-primary" /> {event.date}</div>
                    <div className="flex items-center gap-2"><Users className="h-3 w-3 text-primary" /> {event.participants}</div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{event.desc}</p>
                </CardContent>
                <CardFooter className="p-5 pt-0">
                  <RegistrationDialog>
                    <Button className="w-full rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 transition-all duration-300 font-bold uppercase tracking-tighter text-xs">Register Now</Button>
                  </RegistrationDialog>
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