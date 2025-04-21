
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Welcome = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleGetStarted = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate("/signup");
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#151812] flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center text-center animate-fade-in">
        <Logo size={120} />
        
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] mt-8 mb-6 leading-tight drop-shadow-[0_0_8px_rgba(255,201,0,0.75)] tracking-wide select-none">
          ELEC-MATE
        </h1>
        
        <p className="text-white text-lg mb-12 max-w-xs">
          Your ultimate guide to the electrical industry, built for apprentices, electricians, and employers.
        </p>
        
        <div className="space-y-4 w-full max-w-xs">
          <Button
            onClick={handleGetStarted}
            className={`w-full rounded-2xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-6 h-auto shadow transition-all duration-300 ${isAnimating ? 'scale-95 opacity-70' : ''}`}
          >
            GET STARTED
          </Button>
          
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="w-full rounded-2xl bg-transparent border border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900]/10 font-bold text-lg py-6 h-auto"
          >
            I ALREADY HAVE AN ACCOUNT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
