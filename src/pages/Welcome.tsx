
import { useEffect } from "react";
import Logo from "@/components/Logo";
import TutorApplicationBox from "@/components/welcome/TutorApplicationBox";
import PricingTiersSection from "@/components/welcome/PricingTiersSection";
import WelcomeActions from "@/components/welcome/WelcomeActions";

const Welcome = () => {
  useEffect(() => {
    console.log("Welcome page rendered");
  }, []);

  return (
    <div className="min-h-screen bg-[#151812] flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center text-center animate-fade-in">
        <Logo size={120} />
        
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] mt-8 mb-6 leading-tight drop-shadow-[0_0_8px_rgba(255,201,0,0.75)] tracking-wide select-none">
          ELEC-MATE
        </h1>
        
        <p className="text-white text-lg mb-6 max-w-xs">
          The comprehensive platform for electrical professionals at every stage. Supporting apprentices, electricians, and industry employers with specialized tools and resources.
        </p>

        <TutorApplicationBox />
        
        <PricingTiersSection />
        
        <WelcomeActions />
      </div>
    </div>
  );
};

export default Welcome;
