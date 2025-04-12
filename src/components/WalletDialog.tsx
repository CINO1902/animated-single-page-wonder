
import { Dialog, DialogContent } from "./ui/dialog";
import { Sheet, SheetContent } from "./ui/sheet";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import Image from "./Image";
import { GlobeIcon } from "lucide-react";

interface WalletOption {
  id: string;
  name: string;
  icon: string | JSX.Element;
}

const walletOptions: WalletOption[] = [
  {
    id: "phantom",
    name: "Phantom Wallet",
    icon: <div className="bg-purple-100 rounded-lg p-1.5 text-purple-600">
      <svg width="20" height="20" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M103.1 67.6c0-8.6-6.3-15.8-14.8-17v34.2c8.5-1.3 14.8-8.4 14.8-17.2z" fill="#8A63D2"></path>
        <path d="M8 41.3v14.1l8.2.9v-24z" fill="#9D82DE"></path>
        <path d="M64 2C29.8 2 2 29.8 2 64c0 4.3.5 8.5 1.2 12.6h37.5c7.8 0 14.1 6.3 14.1 14.1v2.8h18.5v-2.8c0-7.8 6.3-14.1 14.1-14.1h37.4c.9-4.1 1.2-8.3 1.2-12.6 0-34.2-27.8-62-62-62z" fill="#9D82DE"></path>
        <path d="M88.3 50.6H74.5V35c0-2.8-2.3-5-5-5H58.5c-2.8 0-5.1 2.2-5.1 5v15.6H39.6c-2.8 0-5 2.3-5 5v11c0 2.8 2.2 5 5 5h13.8v15.6c0 2.7 2.3 5 5.1 5h11c2.7 0 5-2.3 5-5V66.6h13.8c2.7 0 5-2.2 5-5v-11c0-2.7-2.3-5-5-5z" fill="#8A63D2"></path>
      </svg>
    </div>
  },
  {
    id: "solfare",
    name: "Solfare",
    icon: <div className="bg-orange-100 rounded-lg p-1.5 text-orange-500">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#FE9D0B"></path>
        <path d="M7.04 10.86c.056-.097.167-.158.284-.158h12.354c.175 0 .262.211.139.335L16.29 14.564a.33.33 0 01-.233.097H3.703a.195.195 0 01-.167-.292l3.503-3.509zm.233 6.005h12.354a.297.297 0 00.284-.158l3.503-3.509a.195.195 0 00-.167-.292H10.893a.33.33 0 00-.233.097l-3.527 3.527c-.123.124-.36.335.14.335zM19.817 7.13a.297.297 0 00-.284-.159H7.18a.195.195 0 00-.139.335l3.527 3.527c.056.063.144.097.233.097h12.354c.175 0 .262-.211.14-.335L19.816 7.13z" fill="#fff"></path>
      </svg>
    </div>
  },
  {
    id: "metamask",
    name: "Metamask",
    icon: <div className="bg-orange-100 rounded-lg p-1.5 text-orange-600">
      <svg width="20" height="20" viewBox="0 0 212 189" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M61.4 35.6L105.1 0l43 35.6-25.5 42.6-36.7-42.6z" fill="#E17726"></path>
        <path d="M202.3 139.5l9.7-40.5-33.4-3 5.3 72.4 18.4-28.8z" fill="#E27625"></path>
        <path d="M0 98.9l9.7 40.6 18.5 28.8 5.2-72.4-33.4 3z" fill="#E27625"></path>
        <path d="M56.4 59.8l-8.9 33.4L106 97l-19-42.8-30.7 5.6z" fill="#E27625"></path>
        <path d="M155.6 59.8l-31-6.2L105 97l58.4-3.7-7.9-33.5z" fill="#E27625"></path>
        <path d="M66.6 168.1l41.1-11.2-6.2-21.2-34.9 32.4z" fill="#E27625"></path>
        <path d="M104.3 156.9l41.1 11.2v-32.4l-34.9-21.2-6.2 42.4z" fill="#E27625"></path>
      </svg>
    </div>
  },
  {
    id: "trust",
    name: "Trust Wallet",
    icon: <div className="bg-blue-100 rounded-lg p-1.5 text-blue-600">
      <svg width="20" height="20" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M512 60.4l362.2 155.3v289c0 153.8-94.8 297.3-241.4 353.4L512 909.6 390.7 858C244.7 801.9 149.8 658.4 149.8 504.6v-289L512 60.4zm0 43.4L193.2 241.1v263.5c0 139.6 84 269.5 213.7 322.5L512 866l104-39.3c130.2-53 214.8-182.9 214.8-322.5V241.1L512 103.8z" fill="#0984FE"></path>
        <path d="M511 297.4c71.3 0 129.1 57.8 129.1 129.1 0 51.5-30.1 95.9-73.8 116.6v89.7H455.7v-89.7c-43.6-20.7-73.8-65.1-73.8-116.6 0-71.3 57.8-129.1 129.1-129.1zm75.8 304.6c5.4 0 9.7 4.3 9.7 9.7v80.6c0 5.4-4.3 9.7-9.7 9.7H434.8c-5.4 0-9.7-4.3-9.7-9.7v-80.6c0-5.4 4.3-9.7 9.7-9.7h152z" fill="#0984FE"></path>
      </svg>
    </div>
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    icon: <div className="bg-blue-100 rounded-lg p-1.5 text-blue-600">
      <svg width="20" height="20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 0C114.8 0 0 114.8 0 256s114.8 256 256 256 256-114.8 256-256S397.2 0 256 0z" fill="#0052FF"></path>
        <path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 206.8c-43.7 0-79.2-35.5-79.2-79.2S212.3 176.4 256 176.4s79.2 35.5 79.2 79.2-35.5 79.2-79.2 79.2z" fill="white"></path>
      </svg>
    </div>
  }
];

interface WalletDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceName: string;
}

// Simple Image component since we don't have next/image
function Image({ src, alt, className }: { src?: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={className} />;
}

export function WalletDialog({ open, onOpenChange, serviceName }: WalletDialogProps) {
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredWallets = walletOptions.filter(wallet => 
    wallet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleWalletSelect = (walletId: string) => {
    console.log(`Selected wallet: ${walletId}`);
    // Here you would implement the wallet connection logic
    onOpenChange(false);
  };

  const renderContent = () => (
    <>
      <div className="mb-4 space-y-4">
        <div className="flex space-x-3">
          <button
            className="px-4 py-2 text-sm rounded-full bg-gray-900 text-white"
          >
            reown
          </button>
          <button
            className="px-4 py-2 text-sm rounded-full bg-transparent border border-gray-300"
          >
            Manual Kit
          </button>
        </div>
        
        <div className="relative">
          <Input
            placeholder="Search wallets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 border-gray-200"
          />
        </div>
      </div>
      
      <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
        {filteredWallets.map((wallet) => (
          <div 
            key={wallet.id}
            className="flex items-center p-3 bg-white hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
            onClick={() => handleWalletSelect(wallet.id)}
          >
            {wallet.icon}
            <span className="ml-3">{wallet.name}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex flex-col items-center justify-center">
        <div className="p-4 bg-gray-50 w-full rounded-lg flex flex-col items-center justify-center">
          <div className="w-12 h-12 mb-3 bg-gray-100 rounded-full flex items-center justify-center">
            <GlobeIcon className="text-gray-400" size={24} />
          </div>
          <p className="text-center text-gray-600 text-sm">Connect your wallet to get started</p>
        </div>
      </div>
    </>
  );

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="px-4">
          <div className="py-4">
            <h3 className="text-lg font-semibold">{serviceName}</h3>
            <p className="text-sm text-gray-500">Select a wallet to continue</p>
          </div>
          {renderContent()}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <div className="py-4">
          <h3 className="text-lg font-semibold">{serviceName}</h3>
          <p className="text-sm text-gray-500">Select a wallet to continue</p>
        </div>
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
}
