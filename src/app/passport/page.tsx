
import { PassportCard } from "@/components/passport-card";
import { ItineraryTool } from "@/components/itinerary-tool";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, TrendingUp, Wallet } from "lucide-react";

export default function PassportPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-20">
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="font-headline font-bold text-4xl md:text-6xl">
          Mechanica <span className="text-primary">Passport</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          The Mechanica Passport is your gateway to a rewarding festival experience. 
          Track your participation, earn stamps, and unlock exclusive rewards.
        </p>
      </section>

      {/* Digital Passport Card */}
      <section className="flex justify-center py-10">
        <PassportCard />
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-4 gap-6">
        {[
          { icon: CheckCircle, title: "Tracking", desc: "Real-time event attendance tracking" },
          { icon: Award, title: "Stamps", desc: "Collect unique digital activity stamps" },
          { icon: TrendingUp, title: "Leaderboard", desc: "Compete with other participants" },
          { icon: Wallet, title: "Rewards", desc: "Unlock merchandise discounts" }
        ].map((feat, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl text-center space-y-3">
            <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
              <feat.icon className="h-5 w-5" />
            </div>
            <h3 className="font-headline font-bold">{feat.title}</h3>
            <p className="text-sm text-muted-foreground">{feat.desc}</p>
          </div>
        ))}
      </section>

      {/* AI Tool */}
      <section className="bg-card/30 rounded-3xl p-8 md:p-12 border border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 space-y-4">
              <Badge variant="secondary" className="mb-2">AI POWERED</Badge>
              <h2 className="font-headline font-bold text-3xl">Smart <span className="text-primary">Itinerary</span></h2>
              <p className="text-muted-foreground">
                Let our AI agent help you build the perfect schedule based on your engineering interests.
              </p>
            </div>
            <div className="md:w-2/3 w-full">
              <ItineraryTool />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
