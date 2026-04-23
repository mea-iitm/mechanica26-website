import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Calendar as CalendarIcon, ChevronRight } from "lucide-react";

const scheduleData = [
  {
    id: "day0",
    day: "Day 00",
    date: "May 29, 2026",
    events: [
      { time: "03:00 PM", title: "Inauguration", loc: "MSB", type: "Official", desc: "The formal inauguration ceremony of Mechanica 2026 at the Mechanical Sciences Block." },
      { time: "05:00 PM", title: "Campus Tour", loc: "MSB", type: "Social", desc: "A guided exploration of the iconic IIT Madras campus, starting from MSB." },
    ]
  },
  {
    id: "day1",
    day: "Day 01",
    date: "May 30, 2026",
    events: [
      { time: "09:00 AM", title: "Math Quiz", loc: "MSB", type: "Quiz", desc: "Test your mathematical aptitude in this fast-paced competition." },
      { time: "09:00 AM - 12:00 PM", title: "Workshops (Session 1)", loc: "Various Dept Labs", type: "Workshop", desc: "Core and Non-Core workshop sessions for pre-registered participants." },
      { time: "10:00 AM", title: "Mech Quiz", loc: "MSB", type: "Quiz", desc: "Challenge your mechanical engineering core knowledge." },
      { time: "11:00 AM", title: "GK Quiz", loc: "MSB", type: "Quiz", desc: "A general knowledge quiz covering science, tech, and beyond." },
      { time: "02:00 PM", title: "Paper Presentation", loc: "Seminar Hall", type: "Tech", desc: "Presentation of technical research papers by finalists." },
      { time: "02:00 PM - 05:00 PM", title: "Workshops (Session 2)", loc: "Various Dept Labs", type: "Workshop", desc: "Continuation of core and non-core workshop sessions." },
      { time: "03:30 PM", title: "Case Study", loc: "MSB", type: "Tech", desc: "Resolving industrial dilemmas through engineering analysis." },
      { time: "07:00 PM", title: "Ideathon", loc: "Convention Center", type: "Tech", desc: "Overnight brainstorming and pitching of engineering solutions." },
    ]
  },
  {
    id: "day2",
    day: "Day 02",
    date: "May 31, 2026",
    events: [
      { time: "09:00 AM - 12:00 PM", title: "Workshops (Session 3)", loc: "Various Dept Labs", type: "Workshop", desc: "Final morning session for workshops." },
      { time: "10:00 AM", title: "CAD Design Competition", loc: "Design Hall", type: "Tech", desc: "The flagship digital drafting and 3D modeling showdown." },
      { time: "02:00 PM - 05:00 PM", title: "Workshops (Session 4)", loc: "Various Dept Labs", type: "Workshop", desc: "Final practical sessions and project completion for workshops." },
      { time: "05:00 PM", title: "Closing Event", loc: "Garden Stage", type: "Official", desc: "Awards ceremony and cultural night concluding Mechanica 2026." },
    ]
  }
];

export default function SchedulePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <section className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
          <CalendarIcon className="h-3 w-3" />
          Event Roadmap
        </div>
        <h1 className="font-headline font-bold text-4xl md:text-6xl tracking-tight">
          Festival <span className="text-primary">Schedule</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Planning your Mechanica experience is easy. Browse the full itinerary for all three days and stay on track.
        </p>
      </section>

      <Tabs defaultValue="day1" className="space-y-12">
        <div className="flex justify-center">
          <TabsList className="grid w-full max-w-md grid-cols-3 h-14 p-1 glass-card bg-muted/30">
            {scheduleData.map((day) => (
              <TabsTrigger 
                key={day.id} 
                value={day.id}
                className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 font-headline"
              >
                {day.day}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {scheduleData.map((day) => (
          <TabsContent 
            key={day.id} 
            value={day.id} 
            className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <div className="flex items-center justify-between border-b pb-4 mb-8">
              <h2 className="text-2xl font-bold font-headline">{day.date}</h2>
              <Badge variant="outline" className="text-muted-foreground">{day.events.length} Events Scheduled</Badge>
            </div>

            <div className="grid gap-4">
              {day.events.map((event, idx) => (
                <Card key={idx} className="glass-card border-white/5 hover:border-primary/20 transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Time Sidebar */}
                      <div className="md:w-56 bg-muted/50 p-6 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-white/5 group-hover:bg-primary/5 transition-colors">
                        <Clock className="h-5 w-5 text-primary mb-2" />
                        <span className="font-headline font-bold text-sm lg:text-base">{event.time}</span>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 p-6 space-y-4">
                        <div className="flex wrap items-start justify-between gap-4">
                          <div className="space-y-1">
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{event.title}</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-1 text-primary" />
                              {event.loc}
                            </div>
                          </div>
                          <Badge 
                            variant="secondary" 
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white transition-colors"
                          >
                            {event.type}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                          {event.desc}
                        </p>
                      </div>

                      {/* Action Icon (Hidden on mobile, visible on desktop) */}
                      <div className="hidden md:flex items-center px-6 text-muted-foreground/20 group-hover:text-primary transition-colors">
                        <ChevronRight className="h-6 w-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="mt-20 p-8 rounded-3xl border border-dashed border-border text-center">
        <p className="text-sm text-muted-foreground">Make sure to carry your Mechanica Passport for seamless entry to all event venues.</p>
      </div>
    </div>
  );
}