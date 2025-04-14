import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface PhraseInputProps {
  onSubmit: () => void;
}

const PhraseInput = ({ onSubmit }: PhraseInputProps) => {
  const [phrases, setPhrases] = useState(Array(12).fill(""));
  const { toast } = useToast();

  const handleChange = (index: number, value: string) => {
    const newPhrases = [...phrases];
    newPhrases[index] = value;
    setPhrases(newPhrases);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation - checking if all fields have values
    const isValid = phrases.every(phrase => phrase.trim() !== "");
    
    if (!isValid) {
      toast({
        title: "Missing words",
        description: "Please fill in all recovery phrase words",
        variant: "destructive",
      });
      return;
    }
    
    // Success case
    toast({
      title: "Wallet connected",
      description: "Your wallet has been successfully connected",
      duration: 5000,
    });
    
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="grid grid-cols-3 gap-2">
        {phrases.map((phrase, index) => (
          <div key={index} className="relative">
            <input
              type="text"
              value={phrase}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-full bg-[#121212] border border-gray-800 text-white p-2 pl-8 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
              placeholder=""
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              {index + 1}.
            </span>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-4">
        <button
          type="button"
          className="text-gray-400 text-sm underline">
          I have a 24-word recovery phrase
        </button>
      </div>
      
      <Button
        type="submit"
        className="w-full bg-[#8A5CF6] hover:bg-[#7A4CF6] text-white font-medium py-5 h-12 rounded-full"
      >
        Import Wallet
      </Button>
    </form>
  );
};

export default PhraseInput;