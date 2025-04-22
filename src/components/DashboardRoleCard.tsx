
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type DashboardRoleCardProps = {
  label: string;
  icon: React.ReactNode;
  path: string;
  description: string;
  onClick?: (role: { label: string; path: string }) => void; // Updated type
};

const DashboardRoleCard = ({ label, icon, path, description, onClick }: DashboardRoleCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default to ensure our handler runs
    
    // Call the onClick handler if provided
    if (onClick) {
      onClick({ label, path });
    } else {
      // Default navigation if no handler provided
      navigate(path);
    }
  };
  
  return (
    <div 
      className="bg-[#151812]/80 rounded-2xl border border-[#FFC900]/20 p-6 hover:border-[#FFC900]/40 transition-all duration-300 cursor-pointer"
      onClick={handleClick}
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
