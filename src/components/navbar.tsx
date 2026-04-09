
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Passport", href: "/passport" },
  { name: "Events", href: "/events" },
  { name: "Schedule", href: "/schedule" },
  { name: "Store", href: "/sales" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const logoImg = PlaceHolderImages.find(img => img.id === 'mea-logo');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/5 transition-all">
      <div className="container mx-auto px-4 h-16 flex items-center">
        {/* Logo Left */}
        <Link href="/" className="flex items-center gap-3 group">
          {logoImg ? (
            <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white/10 p-1">
              <Image 
                src={logoImg.imageUrl} 
                alt="MEA Logo" 
                fill 
                className="object-contain transition-transform group-hover:rotate-12" 
              />
            </div>
          ) : (
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-headline font-bold">M</div>
          )}
          <span className="font-headline font-bold text-xl tracking-tighter hidden sm:inline-block uppercase">
            MECHANICA <span className="text-primary">2026</span>
          </span>
        </Link>

        {/* Right Aligned Navigation Group */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs uppercase tracking-widest font-bold transition-all hover:text-primary relative group",
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full hover:bg-primary/10"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Nav */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col gap-8 pt-20 bg-background/95 backdrop-blur-xl">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-headline font-bold uppercase tracking-tighter transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
