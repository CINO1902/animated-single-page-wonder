
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4",
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo className="animate-fade-in h-8 sm:h-auto" />
        </div>

        {/* Mobile menu button */}
        <div className="sm:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden sm:flex items-center gap-4">
          <Button variant="ghost" className="animate-fade-in" style={{ animationDelay: "0.1s" }}>Home</Button>
          <Button variant="ghost" className="animate-fade-in" style={{ animationDelay: "0.2s" }}>DappsConnector</Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col gap-3 animate-in slide-in-from-top duration-300">
          <Button 
            variant="ghost" 
            className="justify-start w-full text-left"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Button>
          <Button 
            variant="ghost" 
            className="justify-start w-full text-left"
            onClick={() => setMobileMenuOpen(false)}
          >
            DappsConnector
          </Button>
        </div>
      )}
    </header>
  );
}
