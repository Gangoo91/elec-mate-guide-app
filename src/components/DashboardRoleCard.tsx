
import React from "react";
import { ArrowRight } from "lucide-react";

type DashboardRoleCardProps = {
  label: string;
  icon: React.ReactNode;
  path: string;
  description: string;
  onClick?: (role: { label: string; path: string }) => void;
};

const DashboardRoleCard = ({ label, icon, path, description, onClick }: DashboardRoleCardProps) => {
  const handleClick = () => {
    console.log(`Role card clicked: ${label}`);
    if (onClick) {
      onClick({ label, path });
    }
  };
  
  return (
    <div 
      className="bg-[#151812]/80 rounded-2xl border border-[#FFC900]/20 p-6 hover:border-[#FFC900]/40 transition-all duration-300 cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Select ${label} role`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-[#FFC900]">
          {icon}
        </div>
        <h2 className="text-[#FFC900] text-2xl font-semibold">{label}</h2>
      </div>
      
      <p className="text-[#FFC900]/70 text-lg mb-6">{description}</p>
      
      <div className="flex items-center justify-between w-full text-[#FFC900] hover:text-[#FFC900] transition-colors duration-200 text-lg font-medium group">
        Go to {label}
        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

export default DashboardRoleCard;
