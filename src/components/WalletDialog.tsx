import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

import { WalletDialogProps, WalletOption, WalletStep } from "./WalletTypes";
import { walletOptions } from "./WalletOptions";
import { SelectionStep } from "./SelectionSteps";
import { PhraseStep } from "./PhraseSteps";
import { ConnectingStep, SuccessStep, ErrorStep } from "./StatusSteps";
import { DialogTitle } from "./DialogTitle";

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

  const renderContent = () => {
    switch(currentStep) {
      case 'selection':
        return (
          <SelectionStep 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredWallets={filteredWallets}
            onWalletSelect={handleWalletSelect}
          />
        );
      case 'phrase':
        return (
          <PhraseStep 
            selectedWallet={selectedWallet}
            phrase={phrase}
            setPhrase={setPhrase}
            onBack={handleBack}
            onSubmit={handlePhraseSubmit}
            isImporting={isImporting}
          />
        );
      case 'connecting':
        return <ConnectingStep selectedWallet={selectedWallet} />;
      case 'success':
        return (
          <SuccessStep 
            selectedWallet={selectedWallet} 
            serviceName={serviceName}
            onClose={handleCloseDialog}
          />
        );
      case 'error':
        return (
          <ErrorStep 
            onBack={handleBack} 
            onEditPhrase={() => setCurrentStep('phrase')}
          />
        );
      default:
        return (
          <SelectionStep 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredWallets={filteredWallets}
            onWalletSelect={handleWalletSelect}
          />
        );
    }
  };

  const shouldShowTitle = () => {
    return currentStep !== 'connecting' && 
           currentStep !== 'success' && 
           currentStep !== 'error' && 
           !(selectedWallet?.id === "phantom" && currentStep === 'phrase');
  };

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={handleCloseDialog}>
        <SheetContent className="px-4">
          {shouldShowTitle() && (
            <div className="py-4">
              <DialogTitle 
                step={currentStep} 
                selectedWallet={selectedWallet} 
                serviceName={serviceName} 
              />
            </div>
          )}
          {renderContent()}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleCloseDialog}>
      <DialogContent className={`sm:max-w-md ${selectedWallet?.id === "phantom" && currentStep === 'phrase' ? "bg-black text-white" : ""}`}>
        {shouldShowTitle() && (
          <div className="py-4">
            <DialogTitle 
              step={currentStep} 
              selectedWallet={selectedWallet} 
              serviceName={serviceName} 
            />
          </div>
        )}
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
}