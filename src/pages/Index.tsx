
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HomePage } from "@/components/HomePage";
import { ServicesPage } from "@/components/ServicesPage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "services">("home");
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Listen for URL changes
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === "/services") {
        setCurrentPage("services");
      } else {
        setCurrentPage("home");
      }
    };
    
    handleRouteChange();
    
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);
  
  return (
    <div className="bg-gradient-to-br from-wallet-lightBlue to-white min-h-screen">
      <Navbar />
      
      {currentPage === "home" && <HomePage />}
      {currentPage === "services" && <ServicesPage />}
    </div>
  );
};

export default Index;
