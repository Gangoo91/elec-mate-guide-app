
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

const DashboardHeroSection = ({ hideLogoOverride = false, hideButtons = false }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
      {!hideLogoOverride && (
        <div className="animate-scale-in">
          <Logo size={80} />
        </div>
      )}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] mb-4 mt-6" tabIndex={0}>
        Electrical Industry Hub
      </h1>
      <p className="text-lg text-[#FFC900]/80 mb-6 max-w-xl" tabIndex={0}>
        Your all-in-one platform for apprentices, electricians, and employers to connect, learn, and thrive.
      </p>
      {!hideButtons && (
        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            onClick={() => navigate("/signup")}
            className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] transition-colors focus:ring-2 focus:ring-[#FFC900]/50 focus:outline-none"
          >
            Get Started
          </Button>
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10 transition-colors focus:ring-2 focus:ring-[#FFC900]/50 focus:outline-none"
          >
            Sign In
          </Button>
        </div>
      )}
    </div>
  );
};

export default DashboardHeroSection;
