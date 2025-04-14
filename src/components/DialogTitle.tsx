import { WalletStep, WalletOption } from "./WalletTypes";

interface DialogTitleProps {
  step: WalletStep;
  selectedWallet: WalletOption | null;
  serviceName: string;
}

export const DialogTitle: React.FC<DialogTitleProps> = ({ 
  step, 
  selectedWallet, 
  serviceName 
}) => {
  switch(step) {
    case 'selection':
      return (
        <>
          <h3 className="text-lg font-semibold">{serviceName}</h3>
          <p className="text-sm text-gray-500">Select a wallet to continue</p>
        </>
      );
    case 'phrase':
      return selectedWallet?.id === "phantom" ? null : (
        <>
          <h3 className="text-lg font-semibold">Import Wallet</h3>
          <p className="text-sm text-gray-500">Enter your recovery phrase</p>
        </>
      );
    case 'connecting':
    case 'success':
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