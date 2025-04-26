
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FolderGit2, ClipboardList, Clock, PenTool } from "lucide-react";
import type { Project } from "@/hooks/useProjects";

interface DashboardStatsProps {
  projects: Project[] | undefined;
}

export const DashboardStats = ({ projects }: DashboardStatsProps) => {
  const totalProjects = projects?.length || 0;
  const completedProjects = projects?.filter(p => p.status === "completed").length || 0;
  const inProgressProjects = projects?.filter(p => p.status === "in-progress").length || 0;
  const planningProjects = projects?.filter(p => p.status === "planning").length || 0;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <StatCard
        icon={<FolderGit2 className="h-5 w-5 text-[#FFC900]" />}
        label="Total Projects"
        value={totalProjects}
      />
      <StatCard
        icon={<ClipboardList className="h-5 w-5 text-green-500" />}
        label="Completed"
        value={completedProjects}
        bgColor="bg-green-500/10"
      />
      <StatCard
        icon={<Clock className="h-5 w-5 text-amber-500" />}
        label="In Progress"
        value={inProgressProjects}
        bgColor="bg-amber-500/10"
      />
      <StatCard
        icon={<PenTool className="h-5 w-5 text-blue-500" />}
        label="Planning"
        value={planningProjects}
        bgColor="bg-blue-500/10"
      />
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  bgColor?: string;
}

const StatCard = ({ icon, label, value, bgColor = "bg-[#FFC900]/10" }: StatCardProps) => (
  <Card className="bg-[#22251e] border-[#FFC900]/20">
    <CardContent className="p-4 flex flex-col items-center justify-center">
      <div className={`rounded-full ${bgColor} p-3 mb-3`}>
        {icon}
      </div>
      <p className="text-sm text-[#FFC900]/70">{label}</p>
      <h4 className="text-xl font-bold text-[#FFC900]">{value}</h4>
    </CardContent>
  </Card>
);
