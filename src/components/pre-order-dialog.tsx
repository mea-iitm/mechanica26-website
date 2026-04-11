
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
 * A specialized component to embed the JotForm for merchandise pre-orders.
 */
function PreOrderFormEmbed() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://form.jotform.com/jsform/261006862064048";
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

interface PreOrderDialogProps {
  children: React.ReactNode;
}

export function PreOrderDialog({ children }: PreOrderDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 overflow-hidden bg-background">
        <DialogHeader className="p-6 border-b bg-card">
          <DialogTitle className="font-headline text-2xl">Pre-order Official Merchandise</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <PreOrderFormEmbed />
        </div>
      </DialogContent>
    </Dialog>
  );
}
