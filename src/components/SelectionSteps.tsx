import { Input } from "@/components/ui/input";
import { GlobeIcon } from "lucide-react";
import { WalletOption } from "./WalletTypes";

interface SelectionStepProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredWallets: WalletOption[];
  onWalletSelect: (wallet: WalletOption) => void;
}

export const SelectionStep: React.FC<SelectionStepProps> = ({
  searchQuery,
  setSearchQuery,
  filteredWallets,
  onWalletSelect
}) => {
  return (
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
            onClick={() => onWalletSelect(wallet)}
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
};