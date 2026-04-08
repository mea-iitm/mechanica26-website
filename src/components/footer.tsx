
import Link from "next/link";
import { Instagram, Youtube, Facebook, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-headline font-bold text-2xl mb-4">MECHANICA <span className="text-primary">2026</span></h3>
            <p className="text-muted-foreground max-w-sm mb-6">
              The flagship annual technical festival of the Mechanical Engineering Association (MEA) at IIT Madras.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/passport" className="text-muted-foreground hover:text-primary transition-colors">Passport</Link></li>
              <li><Link href="/summit" className="text-muted-foreground hover:text-primary transition-colors">Summit</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events & Workshops</Link></li>
              <li><Link href="/schedule" className="text-muted-foreground hover:text-primary transition-colors">Schedule</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>MSB, IIT Madras, Chennai</span>
              </div>
              <div className="flex gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <Link href="mailto:mea@smail.iitm.ac.in" className="hover:text-primary">mea@smail.iitm.ac.in</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>© 2025 Mechanical Engineering Association, Indian Institute of Technology Madras. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
