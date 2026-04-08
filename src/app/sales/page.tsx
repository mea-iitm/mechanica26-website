
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShoppingBag, Ticket, Star } from "lucide-react";

const passes = [
  { title: "General Festival Pass", price: "₹499", desc: "Access to all technical events and exhibition stalls for 3 days.", icon: Ticket },
  { title: "Workshop Access Pass", price: "₹899", desc: "Includes general access + entry to one professional workshop of your choice.", icon: Star },
  { title: "Summit Access Pass", price: "₹1299", desc: "Premium access to the Engineering Summit + networking dinner with speakers.", icon: ShoppingBag },
];

const merchandise = [
  { id: 'merch-tshirt', title: "Official Mech T-Shirt", price: "₹699", desc: "Premium cotton with glow-in-the-dark Mechanica 2026 logo." },
  { id: 'merch-accessories', title: "Engineer's Toolkit Keyring", price: "₹199", desc: "Laser-cut stainless steel with multiple tool functions." },
  { id: 'merch-notebook', title: "Design Sprint Notebook", price: "₹349", desc: "Grid-lined premium paper for your sketches and ideas." },
];

export default function SalesPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-24">
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="font-headline font-bold text-4xl md:text-6xl">
          Mechanica <span className="text-primary">Store</span>
        </h1>
        <p className="text-muted-foreground text-lg">Get your passes and official merchandise early to avoid the rush.</p>
      </section>

      {/* Event Passes */}
      <section className="space-y-12">
        <h2 className="font-headline font-bold text-3xl">Event <span className="text-primary">Passes</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {passes.map((pass, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl relative overflow-hidden group border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                <pass.icon className="h-24 w-24" />
              </div>
              <div className="space-y-6 relative">
                <h3 className="font-headline font-bold text-2xl">{pass.title}</h3>
                <p className="text-muted-foreground text-sm">{pass.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{pass.price}</span>
                  <span className="text-xs text-muted-foreground uppercase">/ Participant</span>
                </div>
                <Button className="w-full rounded-full bg-primary hover:bg-primary/90 h-12 text-lg">Buy Pass</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Merchandise */}
       <section className="space-y-12">
        <h2 className="font-headline font-bold text-3xl">Official <span className="text-primary">Merchandise</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {merchandise.map((item, i) => {
            const img = PlaceHolderImages.find(p => p.id === item.id) || PlaceHolderImages[i % 5];
            return (
              <Card key={i} className="overflow-hidden glass-card group">
                <div className="aspect-square relative">
                  <Image src={img.imageUrl} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <Badge className="absolute top-2 right-2 bg-accent/80 backdrop-blur-md">NEW ARRIVAL</Badge>
                </div>
                <CardContent className="p-6 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline font-bold text-xl">{item.title}</h3>
                    <span className="text-primary font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full rounded-full border-primary/50 text-primary hover:bg-primary hover:text-white">Add to Cart</Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
