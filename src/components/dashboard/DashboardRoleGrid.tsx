
import React from "react";
import { motion } from "framer-motion";
import DashboardRoleCard from "@/components/DashboardRoleCard";

type Role = {
  label: string;
  icon: React.ReactNode;
  path: string;
  description: string;
};

type DashboardRoleGridProps = {
  roles: Role[];
  filteredRoles: Role[];
  onRoleSelected?: (role: Role) => void;
};

const DashboardRoleGrid = ({ roles, filteredRoles, onRoleSelected }: DashboardRoleGridProps) => {
  const handleRoleClick = (role: Role) => {
    console.log("Grid handling role click:", role.label);
    if (onRoleSelected) {
      onRoleSelected(role);
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4 md:px-8">
      {filteredRoles.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="col-span-full bg-[#151812] p-7 rounded-xl text-[#FFC900] text-center text-lg font-bold border border-[#FFC900]/20"
        >
          No results found.
        </motion.div>
      ) : (
        filteredRoles.map((role, index) => (
          <motion.div
            key={role.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: index * 0.1 }}
            className="flex-1"
          >
            <DashboardRoleCard 
              {...role} 
              onClick={() => handleRoleClick(role)} 
            />
          </motion.div>
        ))
      )}
    </div>
  );
};

export default DashboardRoleGrid;
