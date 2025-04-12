
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4",
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo className="animate-fade-in" />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="animate-fade-in" style={{ animationDelay: "0.1s" }}>Home</Button>
          <Button variant="ghost" className="animate-fade-in" style={{ animationDelay: "0.2s" }}>DappsConnector</Button>
        </div>
      </div>
    </header>
  );
}
