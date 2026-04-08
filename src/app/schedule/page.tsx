
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";

const schedule = [
  {
    day: "Day 01",
    date: "March 15, 2026",
    events: [
      { time: "09:00 AM", title: "Opening Ceremony", loc: "Main Auditorium", type: "Official" },
      { time: "11:30 AM", title: "Technical Workshops", loc: "Mech Department Labs", type: "Learning" },
      { time: "02:00 PM", title: "Design Competitions", loc: "Design Studio", type: "Compete" },
      { time: "05:00 PM", title: "Networking Hi-Tea", loc: "Alumni Lounge", type: "Social" },
    ]
  },
  {
    day: "Day 02",
    date: "March 16, 2026",
    events: [
      { time: "10:00 AM", title: "Industry Summit", loc: "Convention Center", type: "Summit" },
      { time: "01:30 PM", title: "Robotics Challenges", loc: "Tech Arena", type: "Compete" },
      { time: "04:00 PM", title: "Networking Sessions", loc: "Lobby Hall", type: "Social" },
    ]
  },
  {
    day: "Day 03",
    date: "March 17, 2026",
    events: [
      { time: "09:30 AM", title: "Final Competitions", loc: "Tech Arena", type: "Compete" },
      { time: "02:00 PM", title: "Awards Ceremony", loc: "Main Auditorium", type: "Official" },
      { time: "05:00 PM", title: "Closing Event", loc: "Garden Stage", type: "Official" },
    ]
  }
];

export default function SchedulePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-4xl mx-auto text-center mb-20 space-y-4">
        <h1 className="font-headline font-bold text-4xl md:text-6xl">Festival <span className="text-primary">Schedule</span></h1>
        <p className="text-muted-foreground text-lg">Your roadmap to MECHANICA 2026.</p>
      </section>

      <div className="max-w-4xl mx-auto space-y-24">
        {schedule.map((day, dIdx) => (
          <div key={dIdx} className="space-y-12">
            <div className="flex flex-col items-center gap-2">
              <Badge className="px-6 py-1 bg-primary text-white rounded-full font-headline">{day.day}</Badge>
              <h2 className="text-2xl font-bold">{day.date}</h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              <div className="space-y-12 relative">
                {day.events.map((event, eIdx) => (
                  <div key={eIdx} className={`flex items-center gap-8 ${eIdx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Event Card */}
                    <div className="flex-1">
                      <div className={`glass-card p-6 rounded-2xl space-y-3 hover:scale-[1.02] transition-transform duration-300 border-primary/10 ${eIdx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className={`flex items-center gap-2 text-primary font-headline font-bold ${eIdx % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                        <h3 className="text-xl font-bold">{event.title}</h3>
                        <div className={`flex items-center gap-2 text-sm text-muted-foreground ${eIdx % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          <MapPin className="h-4 w-4" />
                          {event.loc}
                        </div>
                        <Badge variant="secondary" className="mt-2">{event.type}</Badge>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="z-10 w-8 h-8 rounded-full border-2 border-primary bg-background flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    </div>

                    {/* Empty Space for layout */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
