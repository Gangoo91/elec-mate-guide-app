
import React from "react";
import { useNavigate } from "react-router-dom";

type DashboardRoleCardProps = {
  label: string;
  icon: React.ReactNode;
  path: string;
};

const DashboardRoleCard = ({ label, icon, path }: DashboardRoleCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path, { replace: true });
  };

  return (
    <button
      className="bg-[#151812] hover:bg-[#1a1d15] border border-[#FFC900]/20 rounded-xl p-6 transition-all duration-300 hover:scale-105 w-full flex flex-col items-center gap-4 focus:outline-none focus:ring-2 focus:ring-[#FFC900]/50"
      onClick={handleClick}
      type="button"
    >
      <div className="p-4 rounded-lg bg-[#FFC900]/10">
        {icon}
      </div>
      <span className="text-xl font-semibold text-[#FFC900]">
        {label}
      </span>
    </button>
  );
};

export default DashboardRoleCard;
