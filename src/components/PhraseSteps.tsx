
import { useState } from "react";
import { WalletOption } from "./WalletTypes";
import { PhantomPhraseForm } from "./phantom/PhantomPhraseForm";
import { StandardPhraseForm } from "./Standard/StandardPhraseForm";
import PhraseModal from "./phantom/PhraseModel";

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
  
  const handlePhantomClose = () => {
    onBack();
  };

  return (
    <>
      {selectedWallet && selectedWallet.id === "phantom" ? (
        <PhraseModal 
          isOpen={isOpen} 
          onClose={handlePhantomClose} 
        />
      ) : (
        selectedWallet && (
          <StandardPhraseForm
            selectedWallet={selectedWallet}
            phrase={phrase}
            setPhrase={setPhrase}
            onSubmit={onSubmit}
            isImporting={isImporting}
          />
        )
      )}
    </>
  );
};
