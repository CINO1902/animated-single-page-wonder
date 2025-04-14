export interface WalletOption {
    id: string;
    name: string;
    icon: JSX.Element;
  }
  
  export type WalletStep = 'selection' | 'phrase' | 'connecting' | 'success' | 'error';
  
  export interface WalletDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    serviceName: string;
  }
  