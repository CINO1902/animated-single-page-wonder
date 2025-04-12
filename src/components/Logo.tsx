
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
}

export function Logo({ className, variant = "full" }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="text-wallet-blue font-bold flex items-center">
        {variant === "icon" ? (
          <span className="text-2xl">🔹</span>
        ) : (
          <>
            <span className="text-2xl mr-1">🔹</span>
            <span className="text-2xl font-bold">WalletConnect</span>
          </>
        )}
      </div>
    </div>
  );
}
