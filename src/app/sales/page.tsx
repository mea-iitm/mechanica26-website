
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShoppingBag, ArrowRight } from "lucide-react";

const merchandise = [
  { 
    id: 'merch-tshirt', 
    title: "Official Mech T-Shirt", 
    price: "₹699", 
    desc: "Premium cotton with glow-in-the-dark Mechanica 2026 logo." 
  },
];

export default function SalesPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-24">
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <Badge variant="outline" className="py-1 px-4 border-primary text-primary font-bold tracking-widest uppercase">Official Store</Badge>
        <h1 className="font-headline font-bold text-5xl md:text-7xl tracking-tighter">
          GEAR <span className="text-primary text-glow">UP</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto font-medium">
          Limited edition festival merchandise. Designed for those who build the future.
        </p>
      </section>

      {/* Merchandise Grid */}
       <section className="space-y-12">
        <div className="flex items-center gap-6">
          <h2 className="font-headline font-bold text-3xl uppercase tracking-tighter shrink-0">Official Merchandise</h2>
          <div className="h-px w-full bg-gradient-to-r from-border to-transparent" />
        </div>
        
        <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto">
          {merchandise.map((item, i) => {
            const img = PlaceHolderImages.find(p => p.id === item.id) || PlaceHolderImages[0];
            return (
              <Card key={i} className="overflow-hidden glass-card group border-white/5 relative scanline">
                <div className="aspect-square relative overflow-hidden">
                  <Image 
                    src={img.imageUrl} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                    data-ai-hint={img.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-bold">PRE-ORDER</Badge>
                </div>
                <CardContent className="p-8 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-headline font-bold text-2xl tracking-tight">{item.title}</h3>
                    <span className="text-primary font-bold text-xl">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 shadow-lg shadow-primary/20">
                    <ShoppingBag className="mr-2 h-4 w-4" /> Add to Toolkit
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Bulk Order Banner */}
      <section className="bg-primary/5 border border-primary/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full" />
        <div className="space-y-2 relative">
          <h3 className="font-headline font-bold text-3xl">Group Bookings?</h3>
          <p className="text-muted-foreground">Contact us for bulk merchandise orders for your department or college.</p>
        </div>
        <Button variant="outline" className="rounded-full h-14 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground group relative">
          Contact Sales Team <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </section>
    </div>
  );
}
