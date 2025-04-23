
import React from "react";
import { motion } from "framer-motion";

type DashboardRoleCardProps = {
  label: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  onClick?: () => void;
};

const DashboardRoleCard = ({ label, description, icon, onClick }: DashboardRoleCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-[#22251e] rounded-xl p-5 border border-[#FFC900]/20 h-full flex flex-col cursor-pointer shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#FFC900]/40"
      onClick={onClick}
    >
      <div className="bg-[#151812] rounded-lg p-3 w-14 h-14 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-[#FFC900] font-bold text-lg mb-2">{label}</h3>
      <p className="text-[#FFC900]/70 text-sm">{description}</p>
    </motion.div>
  );
};

export default DashboardRoleCard;
