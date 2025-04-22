
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
      className="flex flex-col items-center justify-center w-full bg-[#151812]/60 backdrop-blur-lg border border-[#FFC900]/15 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300 p-7 focus:outline-none focus:ring-2 focus:ring-[#FFC900]/50"
      onClick={handleClick}
      type="button"
    >
      <div className="flex flex-col items-center mb-5">
        {icon}
      </div>
      <span className="block text-2xl font-extrabold tracking-wide text-[#FFC900]">
        {label}
      </span>
    </button>
  );
};

export default DashboardRoleCard;
