
import React from "react";

type DashboardRoleCardProps = {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
};

const DashboardRoleCard = ({ label, icon, onClick }: DashboardRoleCardProps) => (
  <button
    className="flex flex-col items-center justify-center w-full sm:w-[220px] aspect-square bg-white rounded-3xl shadow-xl hover:scale-105 transition-transform border border-muted p-6 focus:outline-none"
    onClick={onClick}
    style={{
      boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
      minHeight: 180,
    }}
    type="button"
  >
    <div className="flex flex-col items-center mb-4">
      {icon}
    </div>
    <span className="block text-xl font-bold tracking-wide text-foreground">
      {label}
    </span>
  </button>
);

export default DashboardRoleCard;
