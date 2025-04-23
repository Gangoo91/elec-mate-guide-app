
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Role = {
  label: string;
  icon: React.ReactNode;
  path: string;
  description: string;
};

type DashboardRoleGridProps = {
  roles: Role[];
  filteredRoles: Role[];
  className?: string;
};

const DashboardRoleGrid = ({ roles, filteredRoles, className }: DashboardRoleGridProps) => {
  const navigate = useNavigate();

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16", className)}>
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
          >
            <Card
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC900]/10 cursor-pointer h-full flex flex-col"
              onClick={() => navigate(role.path)}
              role="button"
              tabIndex={0}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  {role.icon}
                  <CardTitle className="text-[#FFC900]">{role.label}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="grow flex flex-col items-start">
                <CardDescription className="text-[#FFC900]/70">{role.description}</CardDescription>
                <span className="mt-5 ml-auto text-[#FFC900] font-medium hover:underline">
                  Go to {role.label} →
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default DashboardRoleGrid;
