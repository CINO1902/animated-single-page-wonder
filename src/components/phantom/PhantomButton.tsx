import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import PhraseModal from "./PhraseModel";

const PhantomButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        className="bg-[#8A5CF6] hover:bg-[#7A4CF6] text-white font-medium px-6 py-5 rounded-full flex items-center gap-2 transition-all duration-200 hover:shadow-lg"
      >
        <Wallet className="h-5 w-5" />
        Connect Phantom
      </Button>

      <PhraseModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default PhantomButton;
