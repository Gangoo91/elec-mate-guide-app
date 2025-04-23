
import React from "react";
import { motion } from "framer-motion";

// This component is kept only for compatibility with existing imports
// It won't be used in the new dashboard flow but must exist to prevent build errors
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
      className="hidden"
      onClick={onClick}
    >
      {/* This component is deprecated and shouldn't be visible */}
    </motion.div>
  );
};

export default DashboardRoleCard;
