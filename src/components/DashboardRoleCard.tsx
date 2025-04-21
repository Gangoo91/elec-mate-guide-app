
import React from "react";

type DashboardRoleCardProps = {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
};

const DashboardRoleCard = ({ label, icon, onClick }: DashboardRoleCardProps) => (
  <button
    className="flex flex-col items-center justify-center w-full sm:w-[220px] aspect-square bg-gradient-to-br from-[#FFE066] to-[#FFC900] rounded-3xl shadow-[0_6px_32px_0_rgba(255,201,0,0.17)] hover:scale-105 transition-transform border-2 border-[#151812ec] p-7 focus:outline-none"
    onClick={onClick}
    style={{
      boxShadow: "0 8px 32px 0 rgba(255,215,0,0.225)",
      minHeight: 185,
    }}
    type="button"
  >
    <div className="flex flex-col items-center mb-5">
      {icon}
    </div>
    <span className="block text-2xl font-extrabold tracking-wide text-[#151812] drop-shadow">
      {label}
    </span>
  </button>
);

export default DashboardRoleCard;

