
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

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
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
      {filteredRoles.length === 0 && (
        <div className="col-span-full bg-[#23230a] p-7 rounded-xl text-[#FFC900c0] text-center text-lg font-bold shadow-md border-2 border-[#FFC90022] animate-fade-in">
          No results found.
        </div>
      )}
      {filteredRoles.map((role, index) => (
        <Card
          key={role.label}
          className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC900]/10 cursor-pointer h-full flex flex-col animate-on-load opacity-0"
          onClick={() => navigate(role.path)}
          role="button"
          tabIndex={0}
          style={{ animationDelay: `${index * 100}ms` }}
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
      ))}
    </div>
  );
};

export default DashboardRoleGrid;
