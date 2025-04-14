import { Button } from "@/components/ui/button";
import { CheckCircle2Icon, AlertCircleIcon } from "lucide-react";
import { WalletOption } from "./WalletTypes";

interface ConnectingStepProps {
  selectedWallet: WalletOption | null;
}

export const ConnectingStep: React.FC<ConnectingStepProps> = ({ selectedWallet }) => (
  <div className="flex flex-col items-center justify-center py-8">
    <div className="w-16 h-16 rounded-full border-4 border-t-wallet-blue border-gray-200 animate-spin mb-6"></div>
    <h3 className="text-lg font-medium mb-2">Connecting to {selectedWallet?.name}</h3>
    <p className="text-gray-500 text-sm">Please wait while we establish the connection...</p>
  </div>
);

interface SuccessStepProps {
  selectedWallet: WalletOption | null;
  serviceName: string;
  onClose: () => void;
}

export const SuccessStep: React.FC<SuccessStepProps> = ({ 
  selectedWallet, 
  serviceName,
  onClose
}) => (
  <div className="flex flex-col items-center justify-center py-8">
    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
      <CheckCircle2Icon className="text-green-500 w-8 h-8" />
    </div>
    <h3 className="text-lg font-medium mb-2">Wallet Connected!</h3>
    <p className="text-gray-500 text-sm text-center mb-6">Your {selectedWallet?.name} has been successfully connected.</p>
    <Button 
      onClick={onClose}
      className="bg-wallet-blue hover:bg-opacity-90 transition-colors"
    >
      Continue to {serviceName}
    </Button>
  </div>
);

interface ErrorStepProps {
  onBack: () => void;
  onEditPhrase: () => void;
}

export const ErrorStep: React.FC<ErrorStepProps> = ({ onBack, onEditPhrase }) => (
  <div className="flex flex-col items-center justify-center py-8">
    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
      <AlertCircleIcon className="text-red-500 w-8 h-8" />
    </div>
    <h3 className="text-lg font-medium mb-2">Connection Failed</h3>
    <p className="text-gray-500 text-sm text-center mb-2">We couldn't connect to your wallet.</p>
    <p className="text-gray-500 text-sm text-center mb-6">Please verify your recovery phrase and try again.</p>
    <div className="flex space-x-4">
      <Button 
        onClick={onBack}
        variant="outline"
        className="border border-gray-300"
      >
        Try Again
      </Button>
      <Button 
        onClick={onEditPhrase}
        className="bg-wallet-blue hover:bg-opacity-90 transition-colors"
      >
        Edit Phrase
      </Button>
    </div>
  </div>
);