import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { WalletOption } from "./WalletTypes";
import PhraseModal from "./phantom/PhraseModel";
import { PhantomPhraseForm } from "./phantom/PhantomPhraseForm";
import { StandardPhraseForm } from "./Standard/StandardPhraseForm";

interface PhraseStepProps {
  selectedWallet: WalletOption | null;
  phrase: string;
  setPhrase: (phrase: string) => void;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isImporting: boolean;
}

export const PhraseStep: React.FC<PhraseStepProps> = ({
  selectedWallet,
  phrase,
  setPhrase,
  onBack,
  onSubmit,
  isImporting
}) => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <>
    

      {selectedWallet && selectedWallet.id === "phantom" 
        ? (
            <PhraseModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        //     <PhantomPhraseForm
        //     selectedWallet={selectedWallet}
        //     phrase={phrase}
        //     setPhrase={setPhrase}
        //     onSubmit={onSubmit}
        //   />
        ) 
        : selectedWallet && (
            
          <StandardPhraseForm
            selectedWallet={selectedWallet}
            phrase={phrase}
            setPhrase={setPhrase}
            onSubmit={onSubmit}
            isImporting={isImporting}
          />
        )
      }
    </>
  );
};