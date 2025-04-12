
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "./ServiceIcons";
import { motion } from "framer-motion";

export function HomePage() {
  const [isHovering, setIsHovering] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-wallet-blue to-blue-400">
              DappsConnector
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
            Open protocol to communicate securely between Wallets and Dapps (Web3 Apps). The protocol establishes a remote connection using a Bridge server.
          </p>

          <div className="relative inline-block">
            <Button 
              size="lg"
              className="bg-wallet-blue hover:bg-blue-600 text-white px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 flex items-center gap-2 group"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={scrollToServices}
            >
              Connect
              <motion.div
                animate={{ x: isHovering ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRightIcon />
              </motion.div>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
