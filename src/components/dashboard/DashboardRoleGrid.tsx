
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
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
};

const DashboardRoleGrid = ({ roles, filteredRoles }: DashboardRoleGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      <AnimatePresence>
        {filteredRoles.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="col-span-full bg-[#23230a] p-7 rounded-xl text-[#FFC900c0] text-center text-lg font-bold shadow-md border-2 border-[#FFC90022]"
          >
            No results found.
          </motion.div>
        )}
        {filteredRoles.map((role, index) => (
          <motion.div
            key={role.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: index * 0.1 }}
            className="flex justify-center"
          >
            <DashboardRoleCard 
              label={role.label} 
              icon={role.icon}
              path={role.path}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default DashboardRoleGrid;
