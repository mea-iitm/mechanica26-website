
"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/**
 * A specialized component to embed the Red Bull event JotForm.
 */
function RedBullFormEmbed() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://form.jotform.com/jsform/261006405099049";
    script.type = "text/javascript";
    script.async = true;
    
    if (containerRef.current) {
      containerRef.current.innerHTML = ''; 
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full min-h-[500px] overflow-y-auto">
      <div ref={containerRef} />
    </div>
  );
}

interface RedBullDialogProps {
  children: React.ReactNode;
}

export function RedBullDialog({ children }: RedBullDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 overflow-hidden bg-background">
        <DialogHeader className="p-6 border-b bg-card">
          <DialogTitle className="font-headline text-2xl uppercase tracking-tighter">Red Bull: Join the Race</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <RedBullFormEmbed />
        </div>
      </DialogContent>
    </Dialog>
  );
}
