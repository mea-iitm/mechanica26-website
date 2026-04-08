
"use client";

import * as React from "react";
import { generatePersonalizedItinerary, type PersonalizedItineraryOutput } from "@/ai/flows/ai-personalized-itinerary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Sparkles, MapPin, Clock, Calendar as CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MOCK_SCHEDULE = `
Day 1: 
10:00 AM - Opening Ceremony (Main Auditorium)
12:00 PM - Robotics Challenge: Battle of Bots (Tech Center)
02:00 PM - Workshop: AI in Mechanical Systems (Lab 4)
04:00 PM - CAD Design Competition: Formula Student (Design Hall)

Day 2:
09:00 AM - Engineering Innovation Summit (Convention Center)
11:00 AM - Workshop: Electric Vehicle Powertrain (EV Garage)
02:00 PM - Manufacturing Simulation Hackathon (Sim Lab)
05:00 PM - Networking Session with Alumni (Garden Lounge)

Day 3:
10:00 AM - Advanced CAD & Simulation Workshop (Lab 2)
01:00 PM - Innovation Hackathon Finals (Main Hall)
04:00 PM - Awards Ceremony & Closing (Main Auditorium)
`;

export function ItineraryTool() {
  const [interests, setInterests] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [itinerary, setItinerary] = React.useState<PersonalizedItineraryOutput | null>(null);

  const handleGenerate = async () => {
    if (!interests.trim()) return;
    setLoading(true);
    try {
      const result = await generatePersonalizedItinerary({
        userInterests: interests.split(",").map(i => i.trim()),
        fullSchedule: MOCK_SCHEDULE
      });
      setItinerary(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Input 
          placeholder="e.g. Robotics, AI, Electric Vehicles" 
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          className="flex-1 rounded-full h-12 px-6"
        />
        <Button 
          onClick={handleGenerate} 
          disabled={loading}
          className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90"
        >
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Sparkles className="h-5 w-5 mr-2" />}
          Generate
        </Button>
      </div>

      {itinerary && itinerary.itinerary.length > 0 ? (
        <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <h3 className="font-headline font-semibold text-lg px-2">Your Tailored Schedule:</h3>
          {itinerary.itinerary.map((event, idx) => (
            <Card key={idx} className="overflow-hidden border-primary/20 bg-primary/5">
              <CardContent className="p-4 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase text-[10px]">{event.day}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" /> {event.time}
                    </div>
                  </div>
                  <h4 className="font-headline font-bold text-lg">{event.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
                <div className="md:border-l border-primary/10 md:pl-6 space-y-2 min-w-[140px]">
                   <div className="flex items-center text-sm text-primary font-medium">
                    <MapPin className="h-4 w-4 mr-1" /> {event.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-muted-foreground">Match:</span>
                    <div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${event.relevanceScore * 10}%` }} 
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : itinerary ? (
        <p className="text-center py-8 text-muted-foreground">No events matched your interests perfectly. Try adding more general terms!</p>
      ) : null}
    </div>
  );
}
