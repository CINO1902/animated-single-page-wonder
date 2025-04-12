
import { Navbar } from "@/components/Navbar";
import { HomePage } from "@/components/HomePage";
import { ServicesPage } from "@/components/ServicesPage";

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-wallet-lightBlue to-white min-h-screen">
      <Navbar />
      <HomePage />
      <ServicesPage />
    </div>
  );
};

export default Index;
