
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Calendar as CalendarIcon, ChevronRight } from "lucide-react";

const scheduleData = [
  {
    id: "day0",
    day: "Day 00",
    date: "April 24, 2026",
    events: [
      { time: "03:00 PM", title: "Inauguration", loc: "MSB", type: "Official", desc: "The formal inauguration ceremony of Mechanica 2026 at the Mechanical Sciences Block." },
      { time: "05:00 PM", title: "Campus Tour", loc: "MSB", type: "Social", desc: "A guided exploration of the iconic IIT Madras campus, starting from MSB." },
    ]
  },
  {
    id: "day1",
    day: "Day 01",
    date: "April 25, 2026",
    events: [
      { time: "10:00 AM", title: "Industry Summit", loc: "Convention Center", type: "Summit", desc: "Leaders from top engineering firms discuss the future of Industry 5.0." },
      { time: "01:30 PM", title: "Robotics Challenges", loc: "Tech Arena", type: "Compete", desc: "The main arena event: robot battles and navigation challenges." },
      { time: "04:00 PM", title: "Networking Sessions", loc: "Lobby Hall", type: "Social", desc: "One-on-one sessions with recruitment teams from sponsoring partners." },
    ]
  },
  {
    id: "day2",
    day: "Day 02",
    date: "April 26, 2026",
    events: [
      { time: "09:30 AM", title: "Final Competitions", loc: "Tech Arena", type: "Compete", desc: "The top teams face off in the grand finale of the technical challenges." },
      { time: "02:00 PM", title: "Awards Ceremony", loc: "Main Auditorium", type: "Official", desc: "Recognizing the winners of Mechanica 2026 competitions." },
      { time: "05:00 PM", title: "Closing Event", loc: "Garden Stage", type: "Official", desc: "The festival concludes with a celebratory cultural night." },
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

      <Tabs defaultValue="day0" className="space-y-12">
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
                      <div className="md:w-48 bg-muted/50 p-6 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-white/5 group-hover:bg-primary/5 transition-colors">
                        <Clock className="h-5 w-5 text-primary mb-2" />
                        <span className="font-headline font-bold text-lg">{event.time}</span>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 p-6 space-y-4">
                        <div className="flex flex-wrap items-start justify-between gap-4">
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
