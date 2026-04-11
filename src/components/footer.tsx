
import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Facebook, Linkedin, Mail, MapPin } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'mea-logo');

  return (
    <footer className="bg-card/30 border-t border-white/5 mt-20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 bg-white rounded-xl overflow-hidden flex items-center justify-center shadow-lg border border-white/10">
                  <Image 
                    src={logo?.imageUrl || "/logo.png"} 
                    alt="MEA Logo" 
                    fill 
                    className="object-contain p-2"
                    data-ai-hint="engineering logo"
                  />
                </div>
                <h3 className="font-headline font-bold text-3xl tracking-tighter">MECHANICA <span className="text-primary">2026</span></h3>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Innovation meets precision at the flagship technical festival of the Mechanical Engineering Association (MEA) at IIT Madras.
              </p>
            </div>
            <div className="flex gap-4">
              {[Instagram, Youtube, Facebook, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="p-2 bg-secondary/50 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold uppercase tracking-widest text-sm mb-6 text-primary">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/passport" className="text-muted-foreground hover:text-foreground transition-colors">Passport</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">Events & Workshops</Link></li>
              <li><Link href="/schedule" className="text-muted-foreground hover:text-foreground transition-colors">Full Schedule</Link></li>
              <li><Link href="/accommodation" className="text-muted-foreground hover:text-foreground transition-colors">Accommodation</Link></li>
              <li><Link href="/sales" className="text-muted-foreground hover:text-foreground transition-colors">Merchandise</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold uppercase tracking-widest text-sm mb-6 text-primary">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm">MSB, IIT Madras, Chennai</span>
              </div>
              <div className="flex gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <Link href="mailto:mea@smail.iitm.ac.in" className="text-sm hover:text-foreground">mea@smail.iitm.ac.in</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 text-center text-muted-foreground text-xs font-medium tracking-widest uppercase">
          <p>© 2025 Mechanical Engineering Association, IIT Madras. Engineeered for Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
