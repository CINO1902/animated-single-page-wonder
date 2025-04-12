
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ArrowRightIcon } from "./ServiceIcons";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ServiceCard({ title, description, icon, className, onClick }: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "service-card group cursor-pointer bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
      onClick={onClick}
    >
      <div className="service-icon group-hover:scale-110 transition-transform duration-300 w-12 h-12 mb-4 text-wallet-blue">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      <div className="flex items-center text-wallet-blue text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Connect wallet</span>
        <ArrowRightIcon className="ml-1 w-4 h-4" />
      </div>
    </div>
  );
}
