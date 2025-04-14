import { Button } from "@/components/ui/button";
import { AlertCircleIcon } from "lucide-react";
import { WalletOption } from "../WalletTypes";

interface StandardPhraseFormProps {
  selectedWallet: WalletOption;
  phrase: string;
  setPhrase: (phrase: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isImporting: boolean;
}

export const StandardPhraseForm: React.FC<StandardPhraseFormProps> = ({
  selectedWallet,
  phrase,
  setPhrase,
  onSubmit,
  isImporting
}) => {
  return (
    <>
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

      <form onSubmit={onSubmit}>
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
};